import db from "./db";

export async function getUser(userId) {
  return db.users.find(user => user.id === userId);
}
