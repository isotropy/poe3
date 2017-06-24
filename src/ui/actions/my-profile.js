import * as myProfileAPI from "../../server/my-profile";
import * as updatePostsHelper from "./helpers/update-posts";
import { updateState } from "redux-jetpack";

export async function getProfile(userId) {
  const { profile, posts } = await myProfileAPI.getProfile(userId);
  updateState("user", state => ({ ...profile }));
  updatePostsHelper.updatePosts(posts);
}
