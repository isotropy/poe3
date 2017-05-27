import db from "./db";

export async function getLatest(user) {
  return db.posts.filter(post => post.likeCount > 10);
}
