import * as commentsAPI from "../../server/comments";
import { getState, updateState } from "redux-jetpack";

export async function getLatest(postId) {
  const results = await commentsAPI.getLatest(postId);
  const comments = getState().comments.comments
  const commentsIsOpen = getState().comments.commentsIsOpen
  updateState("comments", state => ({
    ...state,
    comments: results,
    commentsIsOpen: commentsIsOpen.concat(postId)
  }));
}
