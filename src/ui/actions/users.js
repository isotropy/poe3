import * as profilesAPI from "../../server/profiles";
import * as imageAPI from "../../server/image";
import * as postsActions from "./posts";
import * as loginAPI from "../../server/login";
import * as registrationAPI from "../../server/registration";
import * as followAPI from "../../server/follow";

import { updateState } from "redux-jetpack";

export async function getProfile(profile) {
  const results = await profilesAPI.getProfile(profile);
  updateState("resources", state => ({ ...state, profile: results }));
}

export async function getPosts(userId) {
  const results = await profilesAPI.getPosts(userId);
  updateState("resources", state => ({
    ...state,
    posts: results
  }));
}

export async function getMyProfile(userId) {
  const profile = await profileAPI.getMyProfile(userId);
  updateState("user", state => ({ ...profile }));

  const profileWithImage = {
    ...profile,
    user: {
      ...profile.user,
      imageData: await imageAPI.getProfileImage(userId)
    }
  };
  updateState("user", state => ({ ...profileWithImage }));

  postsActions.getPostsByUserId(userId);
}

export async function login(success, service, serviceId) {
  if (!success) return
  const { loggedIn, requiresRegistration, user } = await loginAPI.login(service, serviceId)

  if (user) getProfile(user.id)

  updateState("auth", state => ({
    loggedIn,
    requiresRegistration
  }));
}

export async function register(service, serviceId, name, id) {
  id = id.replace(/,/g, "").trim();
  const result = await registrationAPI.register(service, serviceId, name, id);
  updateState("auth", state => result);
}

export async function follow(userId, toFollow) {
  const results = await followAPI.follow(userId, toFollow);
}
