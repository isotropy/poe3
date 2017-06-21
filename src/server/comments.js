// reads comments from db
import db from "./db";
import idGenerator from "./helpers/id-generator";

export async function writeComment(comment) {
  db.comments = db.comments.concat({ ...comment, id: idGenerator("c") });
}


export async function getLatest(postId) {
  return db.comments.filter(comment => comment.postId === postId);
  // const comments = db.comments.filter(comment => comment.postId === postId);
  //
  // return comments.map(comment => ({
  //   ...comment,
  //   userPicture: fs.images.find(f => f.filename === comment.userPicture).contents
  // }));
}
