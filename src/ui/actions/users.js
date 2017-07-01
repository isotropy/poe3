import * as usersAPI from "../../server/users";
import * as imagesAPI from "../../server/images";
import * as postsAPI from "../../server/posts";
import { updateState } from "redux-jetpack";

export async function getProfile(userId) {
  const results = await usersAPI.getProfile(userId);
  updateState("viewProfile", state => results);
}

export async function loadUser(userId) {
  const user = await usersAPI.getProfile(userId);
  updateState("user", state => ({
    ...user,
    follows: user.follows ? user.follows.split(",") : [],
    likes: user.likes ? user.likes.split(",") : []
  }));
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
  const { error, sessionId, user } = await usersAPI.login(
    service,
    serviceId,
    success
  );

  if (error) {
    updateState("error", state => error);
    return;
  }

  if (user) loadUser(user.id);

  updateState("auth", state => ({ sessionId }));
}

export async function register(service, serviceId, name, id) {
  id = id.replace(/,/g, "").trim();
  const { error, sessionId, user } = await usersAPI.register(
    service,
    serviceId,
    name,
    id
  );

  if (error) {
    updateState("error", state => error);
    return;
  }

  loadUser(user.id);
  updateState("auth", state => ({ sessionId }));
}

export async function follow(userId, toFollow) {
  const results = await usersAPI.follow(userId, toFollow);
}

export async function updateLoginLocalState(values) {
  updateState("login", state => ({ ...state, ...values }));
}
