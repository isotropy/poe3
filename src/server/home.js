import db from "./db";
import fs from "./fs";

export async function getLatest(user) {
  const feeds = db.homeFeed
    .filter(feedItem => feedItem.userId === user.id)
    .map(f => f.postId);
  return db.posts.filter(p => feeds.includes(p.id));
}
