import db from "./db";

export async function getLatest(postId) {
  return db.comments.filter(comment => comment.postId === postId);
}
