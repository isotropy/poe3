import * as exploreAPI from "../../server/explore";
import { updateState } from "redux-jetpack";

export async function getLatest() {
  const results = await exploreAPI.getLatest();

  updateState("explore", state => ({
    ...state,
    posts: results
  }));
}
