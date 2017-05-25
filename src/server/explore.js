import db from "./db";

export function getPopular(user) {
  return db.posts.filter(post => post.likeCount > 10);
}
