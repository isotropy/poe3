import { updateState } from "redux-jetpack";
import * as likesAPI from "../../server/likes";

export async function like(sessionId, postId) {
  const { error, likes, likeCount, userLikes } = await likesAPI.like(
    sessionId,
    postId
  );

  if (error) {
    updateState("error", state => error)
    return
  }

  updateState("posts", state =>
    state.map(p => (p.id === postId ? { ...p, likes, likeCount } : p))
  );

  updateState("user", state => ({
    ...state,
    likes: userLikes ? userLikes.split(",") : []
  }));
}

export async function unlike(sessionId, postId) {
  const { error, likes, likeCount, userLikes } = await likesAPI.unlike(
    sessionId,
    postId
  );

  if (error) {
    updateState("error", state => error)
    return
  }

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
