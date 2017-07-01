import db from "./db";
import fs from "./fs";
import idGenerator from "./helpers/id-generator";

export async function getUser(userId) {
  return db.users.find(user => user.id === userId);
}

export async function register(service, serviceId, name, id) {
  const idExists = db.users.find(user => user.id === id);
  if (idExists)
    return {
      loggedIn: false,
      requiresRegistration: true,
      userIdUnAvailable: true
    };

  db.users = db.users.concat({
    id,
    name,
    image: "",
    follows: "",
    likes: ""
  });
  db.identities = db.identities.concat({ service, serviceId, id });
  return {
    loggedIn: true,
    requiresRegistration: false,
    userIdUnAvailable: false
  };
}

export async function login(service, serviceId) {
  const providerIdentity = db.identities.filter(
    i => i.service === service && i.serviceId === serviceId
  );

  const user = db.users.find(user => user.id === providerIdentity.id);

  return user > 0
    ? {
        sessionId: 0,
        user
      }
    : {
        error: {}
      };
}

export async function getMyProfile(userId) {
  const user = db.users.find(u => u.id === userId);
  const notifications = db.notifications.filter(i => i.userId === userId);
  const activities = db.activity.filter(i => i.userId === userId);
  return {
    user,
    notifications,
    activities
  };
}

export async function getProfile(userId) {
  return db.users.find(u => u.userId === userId);
}

export async function follow(userId, toFollow) {
  const user = db.users.find(u => u.id === userId);
  const follows = user.follows.length === 0 ? [] : user.follows.split(",");
  if (!follows.includes(toFollow)) {
    const updatedFollows = follows.concat(toFollow).join(",");
    db.users = db.users.map(
      u => (u.id === userId ? { ...u, follows: updatedFollows } : u)
    );
  }
}
