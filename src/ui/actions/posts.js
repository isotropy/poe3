import { updateState } from "redux-jetpack";
import * as postsAPI from "../../server/posts";
import * as updatePostsHelper from "./helpers/update-posts";

export async function getFeed(userId) {
  const posts = await postsAPI.getFeed(userId);
  updatePostsHelper.updatePosts(posts, userId);
}

export async function getInterestingPosts(userId) {
  const posts = await postsAPI.getInterestingPosts(userId);
  updatePostsHelper.updatePosts(posts, userId);
}

export async function getPost(postId) {
  const post = await postsAPI.getPost(postId);
  updatePostsHelper.updatePosts([post]);
}
