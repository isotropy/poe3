import * as postsAPI from "../../server/posts";
import * as userAPI from "../../server/user";
import * as updatePostsHelper from "./helpers/update-posts";
import { updateState } from "redux-jetpack";

export async function getFeed(userId) {
  const posts = await postsAPI.getFeed(userId);
  updatePostsHelper.updatePosts(posts);
}

export async function getInterestingPosts(userId) {
  const posts = await postsAPI.getInterestingPosts(userId);
  updatePostsHelper.updatePosts(posts);
}

export async function getPost(postId) {
  const post = await postsAPI.getPost(postId);
  updatePostsHelper.updatePosts([post]);
}
