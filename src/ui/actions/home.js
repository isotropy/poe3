import * as homeAPI from "../../server/home";
import * as imageAPI from "../../server/image";
import { updateState } from "redux-jetpack";

export async function getLatest(userId) {
  const results = await homeAPI.getLatest(userId);

  updateState("home", state => ({
    ...state,
    posts: results
  }));

  const imagePosts = results.filter(p => p.image);
  for (const imagePost of imagePosts) {
    imageAPI.getImage(imagePost.image).then(imageData => {
      updateState("home", state => ({
        ...state,
        posts: state.posts.map(p => (p === imagePost ? { ...p, imageData } : p))
      }));
    });
  }
}
