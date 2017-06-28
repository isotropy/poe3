import { updateState } from "redux-jetpack";
import * as likesAPI from "../../server/likes";

export async function like(userId, userFullName, postId) {
  const { likes, likeCount } = await likesAPI.like(
    userId,
    userFullName,
    postId
  );

  // const likes = await likesAPI.getLikes(postId);
  updateState("posts", state =>
    state.map(
      p => (p.id === postId ? { ...p, likes, likeCount, isPostLiked: true } : p)
    )
  );
}

export async function unLike(userId, userFullName, postId) {
  const { likes, likeCount } = await likesAPI.unLike(
    userId,
    userFullName,
    postId
  );

  // const likes = await likesAPI.getLikes(postId);
  updateState("posts", state =>
    state.map(
      p =>
        p.id === postId ? { ...p, likes, likeCount, isPostLiked: false } : p
    )
  );
}

export async function toggleLikeList(postId) {
  updateState("posts", state =>
    state.map(
      p => (p.id === postId ? { ...p, isLikesOpen: !p.isLikesOpen } : p)
    )
  );
}
