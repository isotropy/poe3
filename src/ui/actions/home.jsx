import * as homeAPI from "../../server/home";
import { updateState } from "redux-jetpack";

export async function getLatest(user) {
  const results = await homeAPI.getLatest({ id: 2 });

  updateState("home", state => ({
    ...state,
    posts: results
  }));
}
