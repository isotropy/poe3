import { updateState } from "redux-jetpack";
import * as postsAPI from "../../server/posts";
import * as imageAPI from "../../server/images";
import * as likesAPI from "../../server/likes";
import * as commentsActions from "./comments";

export async function getFeed(userId) {
  const posts = await postsAPI.getFeed(userId);
  updatePosts(posts, userId);
}

export async function getInterestingPosts(userId) {
  const posts = await postsAPI.getInterestingPosts(userId);
  updatePosts(posts, userId);
}

export async function getPost(postId) {
  const post = await postsAPI.getPost(postId);
  updatePosts([post]);
}

export async function getPostsByUser(sessionId, userId) {
  const posts = await postsAPI.getPostsByUser(sessionId, userId);
  updatePosts(posts);
}

export async function getPostsByTag(tag) {
  const posts = await postsAPI.getPostsByTag(tag);
  updatePosts(posts);
}

export async function createPost(sessionId, haiku) {
  const results = await postsAPI.create(sessionId, haiku);
}

export async function storeBackgroundColor(backgroundColor) {
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

export async function storeHaiku(haiku) {
  updateState("write", state => ({ ...state, haiku }));
}

export async function storeImage(imageData, imageFilename) {
  updateState("write", state => ({
    ...state,
    imageData,
    imageFilename
  }));
}

export async function clearState(image) {
  updateState("write", state => ({}));
}

async function updatePosts(results, userId) {
  const posts = results.map(result => ({
    ...result,
    likes: {},
    comments: [],
    isPostLiked: false,
    isLikesOpen: false,
    isCommentsOpen: false
  }));

  updateState("posts", state => posts);

  posts.forEach(async barePost => {
    const likes = await likesAPI.getLikes(barePost.id);

    const post = {
      ...barePost,
      likes
    };

    updateState("posts", state =>
      state.map(p => (p.id === post.id ? post : p))
    );
  });
};
