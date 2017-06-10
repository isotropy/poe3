import db from "./db";
import fs from "./fs";

export async function getProfile(userId) {
  const user = db.users.filter(user => user.id === userId);
  return {
    ...user,
    image: fs.find(f => f.filename === user.image)["contents"]
  };
}

export async function getPosts(userId) {
  return db.posts.filter(post => post.authorId === userId);
}
