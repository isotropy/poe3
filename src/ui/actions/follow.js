import * as followAPI from "../../server/follow";
import { updateState } from "redux-jetpack";

export async function follow(user) {
  const results = await followAPI.follow({ id: 2 }, 3)
}
