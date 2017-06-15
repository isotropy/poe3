import { updateState } from "redux-jetpack";
import * as imageAPI from "../../server/image";

export function getImage(posts, stateToBeUpdated) {
  const imagePosts = posts.filter(p => p.image);
  for (const imagePost of imagePosts) {
    imageAPI.getImage(imagePost.image).then(imageData => {
      updateState(stateToBeUpdated, state => ({
        ...state,
        posts: state.posts.map(p => (p === imagePost ? { ...p, imageData } : p))
      }));
    });
  }
}
