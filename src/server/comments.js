// reads comments from db
import db from "./db";
import fs from "./fs";

export async function getLatest(postId) {
  const comments = db.comments.filter(comment => comment.postId === postId);
  return comments.map(comment => ({
    ...comment,
    userPicture: fs.images.find(f => f.filename === comment.userPicture).contents
  }));
}
