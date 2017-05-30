import * as commentsAPI from "../../server/comments";
import { getState, updateState } from "redux-jetpack";

export async function getLatest(postId) {
  const results = await commentsAPI.getLatest(postId);

  updateState("comments", state => ({
    ...state,
    comments: results,
  }));
}
