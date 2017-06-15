import db from "./db";
import fs from "./fs";

export async function getPost(postId) {
  return db.posts.find(p => p.id == postId);
}
