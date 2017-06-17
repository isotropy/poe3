import db from "./db";

export async function getLikes(posts, userId) {
  return posts.map(post => ({
    ...post,
    likes: {
      likes: db.likes.filter(like => post.id === like.postId),
      isLiked: db.likes.find(
        like => post.id === like.postId && like.userId === userId
      )
        ? true
        : false
    }
  }));
}
