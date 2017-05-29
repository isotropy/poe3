import * as followAPI from "../../server/follow";
import { updateState } from "redux-jetpack";

export async function follow() {
  const results = await followAPI.follow(2, 3)
}
