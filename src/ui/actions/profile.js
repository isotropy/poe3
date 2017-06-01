import * as profileAPI from "../../server/profile";
import { getState, updateState } from "redux-jetpack";

export async function getProfile(userId) {
  const results = await profileAPI.getProfile(userId);
  updateState("user", state => ({
    ...state,
    user: results
  }));
}
