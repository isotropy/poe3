import db from "./db";
import fs from "./fs";

export async function getLatest(userId = 'dfault') {
  const feeds = db.exploreFeed.filter(feedItem => feedItem.userId === userId);
  return db.posts.filter(p => feeds.map(f => f.postId).includes(p.id));
}
