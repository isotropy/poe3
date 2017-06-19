import * as likeAPI from "../../server/like";
import { updateState } from "redux-jetpack";

export async function like(userId, userFullName, post) {
  const results = await likeAPI.like(userId, userFullName, post.id);
}
