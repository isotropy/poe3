import db from "./db";
import fs from "./fs";
import idGenerator from "./helpers/id-generator";
import * as APIAuth from "./helpers/api-auth";

export async function getUser(sessionId) {
  return await APIAuth.validate(sessionId, getUser);

  function getUser(userId) {
    return db.users.find(user => user.id === userId);
  }
}

export async function getMyProfile(sessionId) {
  return await APIAuth.validate(sessionId, getMyProfile);

  function getMyProfile(userId) {
    const user = db.users.find(u => u.id === userId);
    const notifications = db.notifications.filter(i => i.userId === userId);
    const activities = db.activity.filter(i => i.userId === userId);
    return {
      user,
      notifications,
      activities
    };
  }
}

export async function getProfile(sessionId, userIdForProfiles) {
  return await APIAuth.validate(sessionId, getProfile, userIdForProfiles);

  function getProfile(userId, userIdForProfiles) {
    return db.users.find(u => u.id === userIdForProfiles);
  }
}

export async function follow(sessionId, toFollow) {
  return await APIAuth.validate(sessionId, follow, toFollow);

  function follow(userId, toFollow) {
    const user = db.users.find(u => u.id === userId);
    const follows = user.follows.length === 0 ? [] : user.follows.split(",");
    if (!follows.includes(toFollow)) {
      const updatedFollows = follows.concat(toFollow).join(",");
      db.users = db.users.map(
        u => (u.id === userId ? { ...u, follows: updatedFollows } : u)
      );
    }
  }
}

export async function login(service, serviceId, success) {
  if (!success)
    return {
      error: {
        code: 401,
        message:
          "Incorrect Credentials. Please try again or register an account."
      }
    };

  const providerIdentity =
    db.identities.find(
      i => i.service === service && i.serviceId === serviceId
    ) || [];

  const user = db.users.find(u => u.id === providerIdentity.id);

  return user
    ? {
        sessionId: idGenerator("s"),
        user
      }
    : {
        error: {
          code: 403,
          message: "Register to continue."
        }
      };
}

export async function register(service, serviceId, name, id) {
  const idExists = db.users.find(user => user.id === id);
  if (idExists)
    return {
      error: {
        code: 412,
        message: "UserID already exists. Please chose an unique-er ID."
      }
    };

  const user = {
    id,
    name,
    image: "",
    follows: "",
    likes: ""
  };
  db.users = db.users.concat(user);
  db.identities = db.identities.concat({ service, serviceId, id });
  return {
    error: null,
    sessionId: idGenerator("s"),
    user
  };
}
