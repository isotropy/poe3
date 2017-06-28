import { updateState } from "redux-jetpack";
import * as commentsAPI from "../../server/comments";
import * as groupCommentsHelper from "../../server/helpers/group-comment";

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
