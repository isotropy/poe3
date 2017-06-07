import db from "./db";

export async function getLatest(user) {
  const feeds = db.homeFeed.filter(feedItem => feedItem.userId === user.id);
  return db.posts.filter(p => feeds.map(f => f.postId).includes(p.id));
}
