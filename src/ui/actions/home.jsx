import * as homeAPI from "../../server/home";
import { updateState, getState } from "redux-jetpack";

export async function getLatest() {
  const results = await homeAPI.getLatest(getState().user);

  updateState("home", state => ({
    ...state,
    posts: results
  }));
}
