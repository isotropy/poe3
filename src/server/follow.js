import db from "./db";

export async function follow(user, toFollow) {
  db.users = db.users
  .map(user => user.id === user.id && !user.follows.includes(toFollow)
    ? { ...user, follows: user.follows.concat(toFollow) }
    : user)
}
