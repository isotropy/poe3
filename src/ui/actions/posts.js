import * as postsAPI from "../../server/posts";
import * as imageAPI from "../../server/image";
import * as likesAction from "./likes";
import * as commentsAction from "./comments";
import { updateState } from "redux-jetpack";

export async function getFeed(userId) {
  const results = await postsAPI.getFeed(userId);
  const tempResults = results.map(result => ({
    ...result,
    likes: {},
    comments: []
  }));

  updateState("home", state => ({
    ...state,
    posts: tempResults
  }));

  const postsWithLikes = await likesAction.getLikes(results, userId);
  const posts = await commentsAction.getComments(postsWithLikes);

  posts.forEach(post => {
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
                    comments: post.comments
                  }
                : p
          )
        }));
      });
    } else {
      updateState("home", state => ({
        ...state,
        posts: state.posts.map(
          p =>
            p.id === post.id
              ? { ...p, likes: post.likes, comments: post.comments }
              : p
        )
      }));
    }
  });
}


export async function getInterestingPosts(userId) {
  const results = await postsAPI.getInterestingPosts(userId);
  const tempResults = results.map(result => ({ ...result, likes: {}, comments: [] }));

  updateState("explore", state => ({
    ...state,
    posts: tempResults
  }));

  const postsWithLikes = await likesAction.getLikes(results, userId);
  const posts = await commentsAction.getComments(postsWithLikes);

  posts.forEach(post => {
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
                    likes: post.likes,
                    comments: post.comments
                  }
                : p
          )
        }));
      });
    } else {
      updateState("explore", state => ({
        ...state,
        posts: state.posts.map(
          p =>
            p.id === post.id
              ? { ...p, likes: post.likes, comments: post.comments }
              : p
        )
      }));
    }
  });
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
