import * as myProfileAPI from "../../server/my-profile";
import * as imageAPI from "../../server/image";
import * as updatePostsHelper from "./helpers/update-posts";
import { updateState } from "redux-jetpack";

export async function getProfile(userId) {
  const { profile, posts } = await myProfileAPI.getProfile(userId);
  updateState("user", state => ({ ...profile }));

  const profileWithImage = {
    ...profile,
    user: {
      ...profile.user,
      imageData: await imageAPI.getProfileImage(userId)
    }
  };
  updateState("user", state => ({ ...profileWithImage }));

  updatePostsHelper.updatePosts(posts);
}
