import * as postsAPI from "../../server/posts";
import * as userAPI from "../../server/user";
import * as updatePostsHelper from "./helpers/update-posts";
import { updateState } from "redux-jetpack";

export async function getFeed(userId) {
  const results = await postsAPI.getFeed(userId);
  updatePostsHelper.updatePosts(results);
}

export async function getInterestingPosts(userId) {
  const results = await postsAPI.getInterestingPosts(userId);
  updatePostsHelper.updatePosts(results);

}

export async function getPost(postId) {
  const results = await postsAPI.getPost(postId);

  updateState("posts", state => ({
    ...state,
    results
  }));
}

export async function create(haiku) {
  const results = await postsAPI.create(haiku);
}
