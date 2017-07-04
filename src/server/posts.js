import db from "./db";
import fs from "./fs";
import idGenerator from "./helpers/id-generator";
import * as likes from "./likes";
import * as APIAuth from "./helpers/api-auth";
import exception from "./exception";

export async function getInterestingPosts(sessionId) {
  return await APIAuth.validate(sessionId, getInterestingPosts);

  function getInterestingPosts(userId = "basho") {
    const feeds = db.exploreFeed.filter(feedItem => feedItem.userId === userId);
    const posts = db.posts.filter(p => feeds.map(f => f.postId).includes(p.id));
    return { posts, userId };
  }
}

export async function getFeed(sessionId) {
  return await APIAuth.validate(sessionId, getFeed);

  function getFeed(userId) {
    const feeds = db.homeFeed
      .filter(feedItem => feedItem.userId === userId)
      .map(f => f.postId);
    const posts = db.posts.filter(p => feeds.includes(p.id));
    return { posts, userId };
  }
}

export async function create(sessionId, haiku) {
  return await APIAuth.validate(sessionId, create, haiku)

  function create(userId, haiku) {
    const lines = haiku.lines.join("\n");
    const id = idGenerator("p");

    if (haiku.imageData) {
      const lowerCaseFilename = haiku.imageFilename.toLowerCase();
      const filenameWithoutExtension = getFilenameWithoutExtension(
        lowerCaseFilename
      );
      const extension = getFileExtension(lowerCaseFilename);

      return ["jpg", "jpeg", "png"].includes(extension)
        ? () => {
            //See if the filename already exists
            const exists = fs.images.some(
              file =>
                file.dir === userId && file.filename === lowerCaseFilename
            );

            const filename = exists
              ? `${filenameWithoutExtension}-${idGenerator("i", 8, {
                  lowerCase: true,
                  numeric: true
                })}.${extension}`
              : lowerCaseFilename;

            const fullFilePath = `${userId}/${filename}`;

            db.posts = db.posts.concat({
              ...haiku,
              lines,
              id,
              image: fullFilePath,
              likeCount: 0
            });

            fs.images = fs.images.concat({
              dir: userId,
              filename: filename,
              contents: haiku.imageData
            });
          }
        : exception("Invalid filename.");
    } else {
      db.posts = db.posts.concat({
        ...haiku,
        id,
        lines,
        likeCount: 0
      });
    }
  }
}

export async function getPost(sessionId, postId) {
  return await APIAuth.validate(sessionId, getPost, postId)

  function getPost(userId, postId) {
    return db.posts.find(p => p.id === postId);
  }
}

export async function getPostsByUser(sessionId, userIdForPosts) {
  return await APIAuth.validate(sessionId, getPostsByUser, userIdForPosts)

  function getPostsByUser(userId, userIdForPosts) {
    return db.posts.filter(post => post.userId === userIdForPosts);
  }
}

function getFileExtension(filename) {
  return filename.substring(filename.lastIndexOf("."));
}

function getFilenameWithoutExtension(filename) {
  return filename.substring(0, filename.lastIndexOf("."));
}
