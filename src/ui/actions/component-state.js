import { updateState } from "redux-jetpack";

export async function likes_isLikesOpen(postId) {
  updateState("posts", state =>
    state.map(
      p => (p.id === postId ? { ...p, isLikesOpen: !p.isLikesOpen } : p)
    )
  );
}

export async function comments_isCommentsOpen(postId) {
  updateState("posts", state =>
    state.map(
      p => (p.id === postId ? { ...p, isCommentsOpen: !p.isCommentsOpen } : p)
    )
  );
}

export async function write_backgroundColor(backgroundColor) {
  updateState("write", state => state.map({ ...state, backgroundColor }));
}

export async function write_showPalette() {
  updateState("write", state => ({
    ...state,
    showPalette: true,
    showImageUpload: false
  }));
}

export async function write_showImageUpload() {
  updateState("write", state => ({
    ...state,
    showPalette: false,
    showImageUpload: true
  }));
}

export async function write_hideOptions() {
  updateState("write", state => ({
    ...state,
    showPalette: false,
    showImageUpload: false
  }));
}

export async function write_haiku(haiku) {
  updateState("write", state => ({ ...state, haiku }));
}

export async function write_image(image) {
  updateState("write", state => ({ ...state, image }));
}

export async function write_clearState(image) {
  updateState("write", state => ({}));
}
