import { updateState } from "redux-jetpack";
import * as commentsAPI from "../../server/comments";
import * as updatePostHelper from "./helpers/update-post";

export async function write(comment) {
  const results = await commentsAPI.writeComment(comment);
  updatePostHelper.updatePostComments(comment.postId);
}

export async function isCommentsOpen(postId) {
  updateState("posts", state =>
    state.map(
      p => (p.id === postId ? { ...p, isCommentsOpen: !p.isCommentsOpen } : p)
    )
  );
}
