import db from "./db";
import fs from "./fs";

export async function getLatest(user = { id: 1 }) {
  const feeds = db.exploreFeed.filter(feedItem => feedItem.userId === user.id);
  return db.posts.filter(p => feeds.map(f => f.postId).includes(p.id));
}
