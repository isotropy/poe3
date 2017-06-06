import * as commentsAPI from "../../server/comments";
import * as profileActions from "./profile";
import { getState, updateState } from "redux-jetpack";
import ramda from "ramda";
import lodash from "lodash";

export async function getLatest(postId) {
  let ungroupedComments = await commentsAPI.getLatest(postId);

  const comments = ramda.groupBy(c => c.parentCommentId || "root")(
    ungroupedComments
  );

  const groupedComments = comments.root.reduce(
    (acc, comment) =>
      acc.concat({ ...comment, children: comments[comment.id] }),
    []
  );

  console.log(groupedComments);
  const parentComments = comments.false;
  const childComments = lodash.groupBy(comments.true, "parentCommentId");

  if (getState().comments.commentsIsOpen === postId) postId = null;

  updateState("comments", state => ({
    ...state,
    comments: {
      parentComments,
      childComments
    },
    commentsIsOpen: postId
  }));
}
