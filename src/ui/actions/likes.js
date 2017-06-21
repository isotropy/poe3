import * as likesAPI from "../../server/likes";

export async function like(userId, userFullName, post) {
  const results = await likesAPI.like(userId, userFullName, post.id);
}

export async function getLikes(postId) {
  const likes = await likesAPI.getLikes(postId);
  return likes;
}
