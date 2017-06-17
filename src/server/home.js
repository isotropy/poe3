import db from "./db";
import fs from "./fs";
import * as likes from "./likes";

export async function getLatest(userId) {
  const feeds = db.homeFeed
    .filter(feedItem => feedItem.userId === userId)
    .map(f => f.postId);
  const posts =  db.posts.filter(p => feeds.includes(p.id));
  return likes.getLikes(posts, userId);
}
