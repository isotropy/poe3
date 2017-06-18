import db from "./db";

export async function like(userId, userFullName, postId) {
  if (!likes.includes(postId)) {
    db.posts = db.posts.map(
      post =>
        post.id === postId ? { ...post, likeCount: post.likeCount + 1 } : post
    );
    db.likes = db.likes.concat({ postId, userId, userFullName });
  } else {
    db.posts = db.posts.map(
      post =>
        post.id === postId ? { ...post, likeCount: post.likeCount - 1 } : post
    );
    db.likes.splice(db.likes.findIndex(like => like.postId === postId), 1);
  }
}
