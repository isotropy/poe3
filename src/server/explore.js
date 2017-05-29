import db from "./db";

export async function getLatest() {
  return db.posts.filter(post => post.likeCount > 10);
}
