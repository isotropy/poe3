// writes comments to db
import db from "./db";
import idGenerator from "./helpers/id-generator";

export async function writeComment(comment) {
  db.comments = db.comments.concat({ ...comment, id: idGenerator("c") });
}
