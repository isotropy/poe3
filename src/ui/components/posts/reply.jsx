import React, { Component } from "react";
import * as commentsActions from "../../actions/comments";

export default ({ updateCB, postId, user, parentComment }) => {
  let comment = "";

  const postComment = () => {
    commentsActions.write({
      postId,
      userId: user.id,
      userName: user.name,
      userPicture: user.image,
      message: comment.value,
      timestamp: new Date().toLocaleString()
    });
    updateCB(postId);
  };

  return (
    <div>
      <input type="text" ref={input => (comment = input)} />
      <input type="button" onClick={postComment} />
    </div>
  );
};
