import db from "./db";

export async function getProfile(userId) {
  return db.users.filter(user => user.id === userId);
}

export async function getPosts(userId) {
  return db.posts.filter(post => post.authorId === userId)
}
