import * as profileAPI from "../../server/profile";
import { getState, updateState } from "redux-jetpack";

export async function getProfile(userId) {
  const results = await profileAPI.getProfile(userId);
  updateState("user", state => ({
    ...state,
    user: results
  }));
}

export async function getPosts(userId) {
  const results = await profileAPI.getPosts(userId)
  console.log('action', results)
  updateState("myPosts", state => ({
    ...state,
    posts: results
  }));
}
