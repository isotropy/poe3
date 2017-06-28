import db from "../db";

export async function isPostLiked(postId, userId) {
  const user = db.users.find(user => user.id === userId);
  return user.likes.length > 0
    ? user.likes.split(",").includes(postId) ? true : false
    : false;
}
