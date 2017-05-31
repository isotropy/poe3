import * as commentsAPI from "../../server/comments";
import * as profileActions from "./profile";
import { getState, updateState } from "redux-jetpack";

export async function getLatest(postId) {
  let results = await commentsAPI.getLatest(postId);

  results = results.map(async result => {
    let userDetails = await profileActions.getUsers(result.userId)
    return {
      ...result,
      userName: userDetails[0].name,
      userPicture: userDetails[0].image
    }
  })

  if (getState().comments.commentsIsOpen === postId) postId = null

  Promise.all(results).then(result => {
    updateState("comments", state => ({
      ...state,
      comments: result,
      commentsIsOpen: postId
    }))
  })

}
