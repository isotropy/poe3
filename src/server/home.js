import db from "./db";

export async function getLatest(user) {
  const follows = db.users.reduce((acc, user) => user.id === user.id ? user.follows : acc , '')
  return db.posts.filter(post => follows.includes(post.authorId) ? 1 : 0)
}
