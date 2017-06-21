import db from "./db";

export async function getLikes(postId) {
  return db.likes.filter(like => like.postId === postId)
}

export async function like(userId, userFullName, postId) {
  const likes = db.likes.filter(like => like.postId === postId);
  let likeCount = 0;
  if (likes.length > 0) {
    db.posts = db.posts.map(post => {
      if (post.id === postId) {
        likeCount = post.likeCount - 1;
        return { ...post, likeCount };
      }
      return post;
    });
    db.likes.splice(db.likes.findIndex(like => like.postId === postId), 1);
  } else {
    db.posts = db.posts.map(post => {
      if (post.id === postId) {
        likeCount = post.likeCount + 1;
        return { ...post, likeCount: post.likeCount + 1 };
      }
      return post;
    });
    db.likes = db.likes.concat({ postId, userId, userFullName });
  }

  return likeCount;
}
