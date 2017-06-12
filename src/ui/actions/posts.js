import * as postsAPI from "../../server/posts";
import { updateState } from "redux-jetpack";

export async function getPost(postId) {
  const results = await postsAPI.getPost(postId);

  updateState("resources", state => ({
    ...state,
    posts: [results]
  }));
}
