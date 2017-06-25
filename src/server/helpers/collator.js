import * as imageAPI from "../image";
import * as likesAPI from "../likes";
import * as groupCommentsHelper from "./group-comment";

export async function getFullPost(post) {
  const comments = await groupCommentsHelper.getFullComment(post.id);

  const likes = await likesAPI.getLikes(post.id);

  const imageData = await imageAPI.getImage(post.image);

  return imageData
    ? {
        ...post,
        comments,
        likes,
        imageData
      }
    : {
        ...post,
        comments,
        likes
      };
}
