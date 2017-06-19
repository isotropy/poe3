import * as exploreAPI from "../../server/explore";
import * as imageAPI from "../../server/image";
import * as likesAction from "./likes";
import { updateState } from "redux-jetpack";

export async function getLatest(userId) {
  const results = await exploreAPI.getLatest(userId);
  const tempResults = results.map(result => ({ ...result, likes: {} }));

  updateState("explore", state => ({
    ...state,
    posts: tempResults
  }));

  const posts = await likesAction.getLikes(results, userId);

  posts.forEach(post => {
    if (post.image) {
      imageAPI.getImage(post.image).then(imageData => {
        updateState("explore", state => ({
          ...state,
          posts: state.posts.map(
            p => (p.id === post.id ? { ...p, imageData, likes: post.likes } : p)
          )
        }));
      });
    } else {
      updateState("explore", state => ({
        ...state,
        posts: state.posts.map(
          p => (p.id === post.id ? { ...p, likes: post.likes } : p)
        )
      }));
    }
  });
}
