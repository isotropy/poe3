import * as commentsAPI from "../../server/comments";
import * as profileActions from "./profile";
import { getState, updateState } from "redux-jetpack";
import ramda from "ramda";

export async function getLatest(postId) {
  let ungroupedComments = await commentsAPI.getLatest(postId);

  const comments = ramda.groupBy(c => c.parentCommentId || "root")(ungroupedComments);

  const groupedComments = comments.root
    ? comments.root.reduce(
        (acc, comment) => acc.concat({ ...comment, children: comments[comment.id] }),
        []
      )
    : [];

  if (getState().comments.commentsIsOpen === postId) postId = null;

  console.log('read', groupedComments)

  updateState("comments", state => ({
    ...state,
    comments: groupedComments,
    commentsIsOpen: postId
  }));
}
