import db from "./db";
import fs from "./fs";

export async function getLatest(user) {
  const feeds = db.homeFeed.filter(feedItem => feedItem.userId === user.id);
  const posts = db.posts.filter(p => feeds.map(f => f.postId).includes(p.id));
  return posts.map(post => ({
    ...post,
    image: fs.find(f => f.filename === post.image)["contents"]
  }));
}
