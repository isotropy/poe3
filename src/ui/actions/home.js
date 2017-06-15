import * as homeAPI from "../../server/home";
import * as imageLoader from "./image-loader";
import { updateState } from "redux-jetpack";

export async function getLatest(userId) {
  const results = await homeAPI.getLatest(userId);

  updateState("home", state => ({
    ...state,
    posts: results
  }));

  imageLoader.getImage(results, "home");
}
