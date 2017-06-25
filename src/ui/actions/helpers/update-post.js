//updates singular post for likes and comment changes
import { updateState } from "redux-jetpack";
import * as postsAPI from "../../../server/posts";
import * as groupCommentsHelper from "../../../server/helpers/group-comment";

export async function updatePostComments(postId) {
  const comments = await groupCommentsHelper.getFullComment(postId);
  updateState("posts", state =>
    state.map(p => (p.id === postId ? { ...p, comments } : p))
  );
}
