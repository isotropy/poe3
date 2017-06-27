import { updateState } from "redux-jetpack";
import * as postsAPI from "../../server/posts";

export async function createPost(haiku) {
  const results = await postsAPI.create(haiku);
}

export async function backgroundColor(backgroundColor) {
  updateState("write", state => ({ ...state, backgroundColor }));
}

export async function showPalette() {
  updateState("write", state => ({
    ...state,
    showPalette: true,
    showImageUpload: false
  }));
}

export async function showImageUpload() {
  updateState("write", state => ({
    ...state,
    showPalette: false,
    showImageUpload: true
  }));
}

export async function hideOptions() {
  updateState("write", state => ({
    ...state,
    showPalette: false,
    showImageUpload: false
  }));
}

export async function haiku(haiku) {
  updateState("write", state => ({ ...state, haiku }));
}

export async function image(image) {
  updateState("write", state => ({ ...state, image }));
}

export async function clearState(image) {
  updateState("write", state => ({}));
}
