import { updateState } from "redux-jetpack";

export async function updateComponentState(postId, updateProp) {
  updateState("posts", state =>
    state.map(
      p => (p.id === postId ? { ...p, [updateProp]: !p[updateProp] } : p)
    )
  );
}
