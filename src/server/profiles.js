import db from "./db";
import fs from "./fs";

export async function getProfile(profile) {
  return db.users.find(u => u.profile == profile)[0];
  return {
    ...user,
    image: fs.images.find(f => f.filename === user.image).contents
  };
}

export async function getPosts(profile) {
  const userId = db.users.filter(u => u.profile == profile)[0].id;
  const posts = db.posts.filter(post => post.authorId == userId);
  return posts.map(
    post =>
      post.color
        ? post
        : {
            ...post,
            image: fs.images.find(f => f.filename === post.image).contents
          }
  );
}
