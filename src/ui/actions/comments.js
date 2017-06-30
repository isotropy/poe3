import ramda from "ramda";
import { updateState } from "redux-jetpack";
import * as commentsAPI from "../../server/comments";
import * as imageAPI from "../../serverimage";

export async function write(comment) {
  const results = await commentsAPI.writeComment(comment);

  const comments = await groupCommentsHelper.getFullComment(comment.postId);
  updateState("posts", state =>
    state.map(p => (p.id === comment.postId ? { ...p, comments } : p))
  );
}

export async function isCommentsOpen(postId) {
  updateState("posts", state =>
    state.map(
      p => (p.id === postId ? { ...p, isCommentsOpen: !p.isCommentsOpen } : p)
    )
  );
}

export async function getFullComment(postId) {
  const ungroupedComments = await commentsAPI.getLatest(postId);
  const imagedUngroupedComments = await Promise.all(
    ungroupedComments.map(async ungroupedComment => ({
      ...ungroupedComment,
      userPictureData: await imageAPI.getImage(ungroupedComment.userPicture)
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
