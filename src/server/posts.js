import db from "./db";
import fs from "./fs";
import idGenerator from "./helpers/id-generator";
import * as likes from "./likes";

export async function getInterestingPosts(userId = "dfault") {
  const feeds = db.exploreFeed.filter(feedItem => feedItem.userId === userId);
  return db.posts.filter(p => feeds.map(f => f.postId).includes(p.id));
}

export async function getFeed(userId) {
  const feeds = db.homeFeed
    .filter(feedItem => feedItem.userId === userId)
    .map(f => f.postId);
  return db.posts.filter(p => feeds.includes(p.id));
}

export async function create(haiku) {
  console.log(haiku.lines)
  const lines = haiku.lines.join("\n");
  const id = idGenerator("p");

  if (haiku.image) {
    db.posts = db.posts.concat({
      ...haiku,
      lines,
      id,
      image: id,
      likeCount: 0
    });

    fs.images = fs.images.concat({
      dir: haiku.userId,
      filename: id,
      contents: haiku.image
    });
  } else {
    db.posts = db.posts.concat({
      ...haiku,
      id,
      lines,
      likeCount: 0
    });
  }
}

export async function get(postId) {
  return db.posts.find(p => p.id === postId);
}

export async function getPostsByUserId(userId) {
  return db.posts.filter(post => post.userId === userId);
}
