import { updateState } from "redux-jetpack";
import * as collatorHelper from "../../../server/helpers/collator";

export async function updatePosts(results, userId) {
  const posts = results.map(result => ({
    ...result,
    likes: {},
    comments: [],
    isPostLiked: false,
    isLikesOpen: false,
    isCommentsOpen: false
  }));

  updateState("posts", state => posts);

  posts.forEach(async barePost => {
    const post = await collatorHelper.getFullPost(barePost, userId);
    updateState("posts", state => state.map(p => (p.id === post.id ? post : p))
    );
  });
}
