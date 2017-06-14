import * as myProfileAPI from "../../server/my-profile";
import { updateState } from "redux-jetpack";

export async function getProfile(userId) {
  const results = await myProfileAPI.getProfile(userId);
  updateState("user", state => ({ ...results }));
}

export async function getPosts(userId) {
  const results = await myProfileAPI.getPosts(userId);
  updateState("myPosts", state => ({
    ...state,
    posts: results
  }));
}
