import db from "./db";

export async function getProfile(userId) {
  return db.users.filter(user => user.id === userId);
}

export async function getProfiles(userIds) {
  return db.users.filter(user => userIds.find(userId => userId === user.id))
}
