import * as commentsAPI from "../../server/comments";
import * as profileActions from "./profile";
import { getState, updateState } from "redux-jetpack";
import ramda from 'ramda'
import lodash from 'lodash'

export async function getLatest(postId) {
  let results = await commentsAPI.getLatest(postId)

  const comments = (ramda.groupBy(comment =>
    comment.hasOwnProperty('parentCommentId')))(results)
  const parentComments = comments.false
  const childComments = lodash.groupBy(comments.true, 'parentCommentId')

  if (getState().comments.commentsIsOpen === postId) postId = null

  updateState("comments", state => ({
    ...state,
    comments: {
      parentComments,
      childComments
    },
    commentsIsOpen: postId
  }))
}
