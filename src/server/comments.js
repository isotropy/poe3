// reads comments from db
import db from "./db";
import idGenerator from "./helpers/id-generator";

export async function write(comment) {
  db.comments = db.comments.concat({ ...comment, id: idGenerator("c") });
}

export async function getByPost(postId) {
  return db.comments.filter(comment => comment.postId === postId);
}
