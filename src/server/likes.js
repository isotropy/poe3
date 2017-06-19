import db from "./db";

export async function getLikes(postId) {
  return db.likes.filter(like => like.postId === postId)
}
