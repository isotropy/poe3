import * as homeAPI from "../../server/home";
import { updateState } from "redux-jetpack";

export async function getLatest(user) {
  const results = await homeAPI.getLatest(user);

  updateState("home", state => ({
    ...state,
    posts: results
  }));

  //Posts containing images
  //We do not use await here since we want image loading to happen in parallel.
  const imagePosts = results.filter(p => p.image);
  for (const post of imagePosts) {
    someAPI.getImage("image-url-goes-here").then(image => {
      updateState("home", state => ({
        ...state,
        posts: state.posts.map(p => (p === post ? { ...p, image } : p))
      }));
    });
  }
}
