import db from "./db";

export async function like(userId, postId) {
  db.users = db.users
  .map(user => user.id === userId && !user.likes.includes(postId)
    ? { ...user, likes: user.likes.concat(postId) }
    : user)
}
