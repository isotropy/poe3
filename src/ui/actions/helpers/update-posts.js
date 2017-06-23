import { updateState } from "redux-jetpack";
import * as collatorHelper from "../../../server/helpers/collator";

export async function updatePosts(results) {
  const posts = results.map(result => ({
    ...result,
    likes: {},
    comments: []
  }));

  updateState("posts", state => posts);

  posts.forEach(async barePost => {
    const post = await collatorHelper.getFullPost(barePost);
    updateState("posts", state => state.map(p => (p.id === post.id ? post : p))
    );
  });
}
