import db from "./db";

export async function getPost(postId) {
  return db.posts.find(p => p.id == postId);
}
