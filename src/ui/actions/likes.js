import { updateState } from "redux-jetpack";
import * as likesAPI from "../../server/likes";

export async function like(userId, userFullName, postId) {
  const results = await likesAPI.like(userId, userFullName, postId);
}

export async function isLikesOpen(postId) {
  updateState("posts", state =>
    state.map(
      p => (p.id === postId ? { ...p, isLikesOpen: !p.isLikesOpen } : p)
    )
  );
}
