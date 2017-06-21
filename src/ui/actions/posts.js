import * as postsAPI from "../../server/posts";
import * as imageAPI from "../../server/image";
import * as likesAction from "./likes";
import * as commentsAction from "./comments";
import * as userAPI from "../../server/user";
import { updateState } from "redux-jetpack";

export async function getFeed(userId) {
  const results = await postsAPI.getFeed(userId);
  const posts = results.map(result => ({
    ...result,
    likes: {},
    comments: []
  }));

  updateState("home", state => ({
    ...state,
    posts
  }));

  posts.forEach(async post => {
    const comments = await commentsAction.getComments(post.id);
    const likes = await likesAction.getLikes(post.id);
    if (post.image) {
      imageAPI.getImage(post.image).then(imageData => {
        updateState("home", state => ({
          ...state,
          posts: state.posts.map(
            p =>
              p.id === post.id
                ? {
                    ...p,
                    imageData,
                    likes: post.likes,
                    comments
                  }
                : p
          )
        }));
      });
    } else {
      updateState("home", state => ({
        ...state,
        posts: state.posts.map(
          p => (p.id === post.id ? { ...p, likes, comments } : p)
        )
      }));
    }
  });

  const user = await userAPI.getUser(userId);
  updateState("user", state => ({
    ...state,
    user
  }));
}

export async function getInterestingPosts(userId) {
  const results = await postsAPI.getInterestingPosts(userId);
  const posts = results.map(result => ({
    ...result,
    likes: {},
    comments: []
  }));

  updateState("explore", state => ({
    ...state,
    posts
  }));

  posts.forEach(async post => {
    const comments = await commentsAction.getComments(post.id);
    const likes = await likesAction.getLikes(post.id);
    if (post.image) {
      imageAPI.getImage(post.image).then(imageData => {
        updateState("explore", state => ({
          ...state,
          posts: state.posts.map(
            p =>
              p.id === post.id
                ? {
                    ...p,
                    imageData,
                    likes,
                    comments
                  }
                : p
          )
        }));
      });
    } else {
      updateState("explore", state => ({
        ...state,
        posts: state.posts.map(
          p => (p.id === post.id ? { ...p, likes, comments } : p)
        )
      }));
    }
  });

  const user = await userAPI.getUser(userId);
  updateState("user", state => ({
    ...state,
    user
  }));
}

export async function getPost(postId) {
  const results = await postsAPI.getPost(postId);

  updateState("resources", state => ({
    ...state,
    posts: [results]
  }));
}

export async function create(haiku) {
  const results = await postsAPI.create(haiku);
}
