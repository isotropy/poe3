import db from "./db";
import fs from "./fs";

export async function getPost(postId) {
  const post = db.posts.filter(p => p.id == postId)[0];
  return post.color
    ? post
    : {
        ...post,
        image: fs.images.find(f => f.filename === post.image).contents
      };
}
