import * as commentsAPI from "../../server/comments";
import * as updatePostHelper from "./helpers/update-post";

export async function write(comment) {
  const results = await commentsAPI.writeComment(comment);
  updatePostHelper.updatePostComments(comment.postId);
}
