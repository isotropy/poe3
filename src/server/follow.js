import db from "./db";

export async function follow(userId, toFollow) {
  db.users = db.users
  .map(user => user.id === userId && !user.follows.includes(toFollow)
    ? { ...user, follows: user.follows.concat(toFollow) }
    : user)
}
