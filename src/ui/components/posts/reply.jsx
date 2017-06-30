import React, { Component } from "react";
import * as commentsActions from "../../actions/comments";

export default ({ postId, user, parentCommentId }) => {
  let comment = "";

  const postComment = () => {
    parentComment
      ? commentsActions.write({
          postId,
          userId: user.id,
          userName: user.name,
          userPicture: user.image,
          message: comment.value,
          timestamp: new Date().toLocaleString()
        })
      : commentsActions.write({
          postId,
          parentCommentId,
          userId: user.id,
          userName: user.name,
          userPicture: user.image,
          message: comment.value,
          timestamp: new Date().toLocaleString()
        });
  };

  return (
    <div>
      <input type="text" ref={input => (comment = input)} />
      <input type="button" value="Submit Comment" onClick={postComment} />
    </div>
  );
};
