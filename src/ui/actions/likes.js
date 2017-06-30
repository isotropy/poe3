import { updateState } from "redux-jetpack";
import * as likesAPI from "../../server/likes";

export async function like(userId, userFullName, postId) {
  const { likes, likeCount, userLikes } = await likesAPI.like(
    userId,
    userFullName,
    postId
  );

  // const likes = await likesAPI.getLikes(postId);
  updateState("posts", state =>
    state.map(p => (p.id === postId ? { ...p, likes, likeCount } : p))
  );

  updateState("user", state => ({
    ...state,
    likes: userLikes ? userLikes.split(",") : []
  }));
}

export async function unLike(userId, userFullName, postId) {
  const { likes, likeCount, userLikes } = await likesAPI.unLike(
    userId,
    userFullName,
    postId
  );

  // const likes = await likesAPI.getLikes(postId);
  updateState("posts", state =>
    state.map(p => (p.id === postId ? { ...p, likes, likeCount } : p))
  );

  updateState("user", state => ({
    ...state,
    likes: userLikes ? userLikes.split(",") : []
  }));
}

export async function toggleLikes(postId) {
  updateState("posts", state =>
    state.map(
      p => (p.id === postId ? { ...p, isLikesOpen: !p.isLikesOpen } : p)
    )
  );
}
