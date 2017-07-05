import db from "./db";
import idGenerator from "./helpers/id-generator";
import * as APIAuth from "./helpers/api-auth";

export async function write(sessionId, comment) {
  return await APIAuth.validate(sessionId, write, comment);

  function write(userId, comment) {
    db.comments = db.comments.concat({
      userId,
      ...comment,
      id: idGenerator("c")
    });
  }
}

export async function getByPost(postId) {
  return db.comments.filter(comment => comment.postId === postId);
}
