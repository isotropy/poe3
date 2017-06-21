import db from "./db";
import fs from "./fs";
import idGenerator from "./helpers/id-generator";
import * as likes from "./likes";

export async function getInterestingPosts(userId = 'dfault') {
  const feeds = db.exploreFeed.filter(feedItem => feedItem.userId === userId);
  return db.posts.filter(p => feeds.map(f => f.postId).includes(p.id));
}

export async function create(haiku) {
  const contents = haiku.image;
  const filename = ++db.meta.imageId;

  db.posts = db.posts.concat({
    ...haiku,
    id: idGenerator("p"),
    image: filename,
    likeCount: 0
  });

  fs.images = fs.images.concat({
    dir: haiku.userId,
    filename,
    contents
  });
}

export async function getFeed(userId) {
  const feeds = db.homeFeed
    .filter(feedItem => feedItem.userId === userId)
    .map(f => f.postId);
  return db.posts.filter(p => feeds.includes(p.id));
}


export async function getPost(postId) {
  return db.posts.find(p => p.id == postId);
}
