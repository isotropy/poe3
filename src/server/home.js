import db from "./db";
import fs from "./fs";

export async function getLatest(user) {
  const feeds = db.homeFeed.filter(feedItem => feedItem.userId === user.id).map(f => f.postId);
  const posts = db.posts.filter(p => feeds.includes(p.id));
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
