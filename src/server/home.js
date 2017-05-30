import db from "./db";

export async function getLatest(user) {
  return db.posts.filter(post => user.follows.includes(post.authorId))
  // return db.posts.filter(post => user.follows.find(followedUserId => followedUserId === post.authorId))
}
