import db from "./db";
import fs from "./fs";
import * as likes from "./likes";

export async function getLatest(userId = 'dfault') {
  const feeds = db.exploreFeed.filter(feedItem => feedItem.userId === userId);
  const posts = db.posts.filter(p => feeds.map(f => f.postId).includes(p.id));
  return likes.getLikes(posts, userId);
}
