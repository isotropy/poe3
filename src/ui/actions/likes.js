import * as likesAPI from "../../server/likes";
import { updateState } from "redux-jetpack";

export async function like(userId, userFullName, post) {
  const results = await likesAPI.like(userId, userFullName, post.id);
}

export async function getLikes(posts, userId) {
  const results = [];
  posts.forEach(async post => {
    const likes = await likesAPI.getLikes(post.id);
    const result = {
      ...post,
      likes: {
        likes,
        isLiked: likes.find(
          like => post.id === like.postId && like.userId === userId
        )
          ? true
          : false
      }
    };
    results.push(result);
  });
  return results;
}
