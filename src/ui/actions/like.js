import * as likeAPI from "../../server/like";
import { updateState } from "redux-jetpack";

export async function like(userId, postId) {
  const results = await likeAPI.like(userId, postId);
}
