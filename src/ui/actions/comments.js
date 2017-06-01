import * as commentsAPI from "../../server/comments";
import * as profileActions from "./profile";
import { getState, updateState } from "redux-jetpack";

export async function getLatest(postId) {
  let results = await commentsAPI.getLatest(postId);

  if (getState().comments.commentsIsOpen === postId) postId = null

  updateState("comments", state => ({
    ...state,
    comments: results,
    commentsIsOpen: postId
  }))
}
