import db from "./db";
import fs from "./fs";

export async function getProfile(profile) {
  return db.users.find(u => u.profile == profile)[0];
}

export async function getPosts(profile) {
  const userId = db.users.filter(u => u.profile == profile)[0].id;
  return db.posts.filter(post => post.userId == userId);
}
