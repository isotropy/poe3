import * as profileAPI from "../../server/profile";
import { getState, updateState } from "redux-jetpack";

export async function getProfile(userId) {
  const results = await profileAPI.getProfile(userId);
  updateState("user", state => ({
    ...state,
    user: results
  }));
}

export async function getUsers(userId) {
  return await profileAPI.getProfile(userId)
}
