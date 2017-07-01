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

function getFileExtension(filename) {
  return filename.substring(filename.lastIndexOf("."));
}

function getFilenameWithoutExtension(filename) {
  return filename.substring(0, filename.lastIndexOf("."));
}

export async function create(haiku) {
  const lines = haiku.lines.join("\n");
  const id = idGenerator("p");

  if (haiku.imageData) {
    const lowerCaseFilename = haiku.imageFilename.toLowerCase();
    //See if the filename already exists
    const exists = fs.images.some(
      file => file.dir === haiku.userId && file.filename === lowerCaseFilename
    );

    const filename = exists
      ? () => {
          const filenameWithoutExtension = getFilenameWithoutExtension(
            lowerCaseFilename
          );
          const extension = getFileExtension(lowerCaseFilename);
          return `${filenameWithoutExtension}-${idGenerator("i", 8, {
            lowerCase: true,
            numeric: true
          })}-${extension}`;
        }
      : lowerCaseFilename;

    const fullFilePath = `${haiku.userId}/${filename}`;

    db.posts = db.posts.concat({
      ...haiku,
      lines,
      id,
      image: fullFilePath,
      likeCount: 0
    });

    fs.images = fs.images.concat({
      dir: haiku.userId,
      filename: filename,
      contents: haiku.imageData
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

export async function getPost(postId) {
  return db.posts.find(p => p.id === postId);
}

export async function getPostsByUser(userId) {
  return db.posts.filter(post => post.userId === userId);
}
