import * as followAPI from "../../server/follow";
import { updateState } from "redux-jetpack";

export async function follow(userId, toFollow) {
  const results = await followAPI.follow(userId, toFollow)
}
