import * as homeAPI from "../../server/home";
import { updateState } from "redux-jetpack";

export async function getLatest(user) {
  const results = await homeAPI.getLatest(user);

  updateState("home", state => ({
    ...state,
    posts: results
  }));
}
