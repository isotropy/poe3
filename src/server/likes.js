import db from "./db";

export async function getLikes(postId) {
  return db.likes.filter(like => like.postId === postId);
}

export async function like(userId, userFullName, postId) {
  const likes = db.likes.filter(like => like.postId === postId);
  const user = db.users.find(user => user.id === userId);
  let likeCount = 0;
  if (likes.length > 0) {
    db.posts = db.posts.map(post => {
      if (post.id === postId) {
        likeCount = post.likeCount - 1;
        return { ...post, likeCount };
      }
      return post;
    });
    const userLikes = user.likes.split(",");
    userLikes.splice(userLikes.indexOf(postId), 1);
    db.users = db.users.map(
      user =>
        user.id === userId ? { ...user, likes: userLikes.toString() } : user
    );
    db.likes = db.likes.filter(like => like.postId !== postId)
  } else {
    db.posts = db.posts.map(post => {
      if (post.id === postId) {
        likeCount = post.likeCount + 1;
        return { ...post, likeCount: post.likeCount + 1 };
      }
      return post;
    });
    db.users = db.users.map(
      user =>
        user.id === userId
          ? { ...user, likes: user.likes + "," + postId }
          : user
    );
    db.likes = db.likes.concat({ postId, userId, userFullName });
  }
  return likeCount;
}
