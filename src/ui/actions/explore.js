import * as exploreAPI from "../../server/explore";
import { updateState } from "redux-jetpack";

export async function getLatest(user) {
  const results = await exploreAPI.getLatest(user);
  updateState("explore", state => ({
    ...state,
    latest: results
  }));
}
