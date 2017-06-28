import * as imageAPI from "../image";
import * as likesAPI from "../likes";
import * as groupCommentsHelper from "./group-comment";
import * as likedHelper from "./is-liked";

export async function getFullPost(post, userId) {
  const comments = await groupCommentsHelper.getFullComment(post.id);

  const likes = await likesAPI.getLikes(post.id);
  const isPostLiked = await likedHelper.isPostLiked(post.id, userId);

  const imageData = await imageAPI.getImage(post.image);

  return imageData
    ? {
        ...post,
        comments,
        likes,
        imageData,
        isPostLiked
      }
    : {
        ...post,
        comments,
        likes,
        isPostLiked
      };
}
