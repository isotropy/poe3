import db from "./db";
import fs from "./fs";

export async function getLatest(user = { id: 1 }) {
  const feeds = db.exploreFeed.filter(feedItem => feedItem.userId === user.id);
  const posts = db.posts.filter(p => feeds.map(f => f.postId).includes(p.id));
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
