import * as usersAPI from "../../server/users";
import * as imagesAPI from "../../server/images";
import * as postsActions from "./posts";
import { updateState } from "redux-jetpack";

export async function getProfile(userId) {
  const results = await postsAPI.getProfile(userId);
  updateState("viewProfile", state => results);
}

export async function getMyProfile(userId) {
  const { user, notifications, activities } = await usersAPI.getMyProfile(
    userId
  );
  updateState("user", state => ({
    notifications,
    activities,
    ...user,
    follows: user.follows ? user.follows.split(",") : [],
    likes: user.likes ? user.likes.split(",") : []
  }));

  const imageData = await imagesAPI.getProfileImage(userId);
  updateState("user", state => ({ ...state, imageData }));
}

export async function login(success, service, serviceId) {
  if (!success) return;
  const { loggedIn, requiresRegistration, user } = await usersAPI.login(
    service,
    serviceId
  );

  if (user) getProfile(user.id);

  updateState("auth", state => ({
    loggedIn,
    requiresRegistration
  }));
}

export async function register(service, serviceId, name, id) {
  id = id.replace(/,/g, "").trim();
  const result = await usersAPI.register(service, serviceId, name, id);
  updateState("auth", state => result);
}

export async function follow(userId, toFollow) {
  const results = await usersAPI.follow(userId, toFollow);
}
