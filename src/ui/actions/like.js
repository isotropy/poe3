import * as likeAPI from "../../server/like";
import { updateState } from "redux-jetpack";

export async function like(user, post) {
  const results = await likeAPI.like( 2, 3)
}
