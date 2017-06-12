import db from "./db";
import fs from "./fs";

export async function getProfile(userId) {
  const user = db.users.filter(u => u.id == userId)[0];
  return {
    ...user,
    image: fs.images.find(f => f.filename === user.image)["contents"]
  };
}

export async function getPosts(userId) {
  const posts = db.posts.filter(post => post.authorId == userId);
  return posts.map(
    post =>
      post["color"]
        ? post
        : {
            ...post,
            image: fs.images.find(f => f.filename === post.image)["contents"]
          }
  );
}
