import { updateState } from "redux-jetpack";
import * as likesAPI from "../../server/likes";

export async function like(userId, userFullName, postId) {
  const results = await likesAPI.toggleLike(userId, userFullName, postId);

  const likes = await likesAPI.getLikes(postId);
  updateState("posts", state =>
    state.map(p => (p.id === postId ? { ...p, likes } : p))
  );
}

export async function toggleLikeList(postId) {
  updateState("posts", state =>
    state.map(
      p => (p.id === postId ? { ...p, isLikesOpen: !p.isLikesOpen } : p)
    )
  );
}
