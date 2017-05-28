import db from "./db";

export async function getLatest(user) {
  const follows = db.users.reduce((acc, dbUser) => dbUser.id === user.id ? dbUser.follows : acc , '')
  return db.posts.filter(post => follows.includes(post.authorId) ? 1 : 0)
}
