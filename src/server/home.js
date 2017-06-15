import db from "./db";
import fs from "./fs";

export async function getLatest(userId) {
  const feeds = db.homeFeed
    .filter(feedItem => feedItem.userId === userId)
    .map(f => f.postId);
  return db.posts.filter(p => feeds.includes(p.id));
}
