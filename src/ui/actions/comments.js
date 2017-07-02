import ramda from "ramda";
import { updateState } from "redux-jetpack";
import * as commentsAPI from "../../server/comments";
import * as imageAPI from "../../server/images";

export async function write(comment) {
  const results = await commentsAPI.write(comment);

  const comments = await getFullComment(comment.postId);
  updateState("posts", state =>
    state.map(p => (p.id === comment.postId ? { ...p, comments } : p))
  );
}

export async function toggleComments(postId) {
  updateState("posts", state =>
    state.map(
      p => (p.id === postId ? { ...p, isCommentsOpen: !p.isCommentsOpen } : p)
    )
  );
}

export async function getCommentByPost(postId) {
  const comments = await getFullComment(postId);
  updateState("posts", state =>
    state.map(p => (p.id === postId ? { ...p, comments } : p))
  );
}

export async function getFullComment(postId) {
  const ungroupedComments = await commentsAPI.getByPost(postId);
  const imagedUngroupedComments = await Promise.all(
    ungroupedComments.map(async ungroupedComment => ({
      ...ungroupedComment,
      userImageData: await imageAPI.getImage(ungroupedComment.userImage)
    }))
  );
  const groupedComments = ramda.groupBy(c => c.parentCommentId || "root")(
    imagedUngroupedComments
  );
  return groupedComments.root
    ? groupedComments.root.reduce(
        (acc, comment) =>
          acc.concat({ ...comment, children: groupedComments[comment.id] }),
        []
      )
    : [];
}
