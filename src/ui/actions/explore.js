import * as exploreAPI from "../../server/explore";
import * as imageLoader from "./image-loader";
import { updateState } from "redux-jetpack";

export async function getLatest(userId) {
  const results = await exploreAPI.getLatest(userId);

  updateState("explore", state => ({
    ...state,
    posts: results
  }));

  imageLoader.getImage(results, 'explore')
}
