// writes comments to db
import db from "./db";

export async function writeComment(comment) {
  db.comments = db.comments.concat({ ...comment, id: ++db.comments.length });
}
