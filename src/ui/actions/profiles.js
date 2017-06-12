import * as profilesAPI from "../../server/profiles";
import { updateState } from "redux-jetpack";

export async function getProfile(userId) {
  const results = await profilesAPI.getProfile(userId);
  updateState("resources", state => ({ ...state, profile: results }));
}

export async function getPosts(userId) {
  const results = await profilesAPI.getPosts(userId);
  updateState("resources", state => ({
    ...state,
    posts: results
  }));
}
