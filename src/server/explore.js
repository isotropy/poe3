import db from "./db";

export function getLatest(user) {
  return db.posts.filter(post => post.likeCount > 10);
}
