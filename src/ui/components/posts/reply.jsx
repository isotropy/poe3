import React, { Component } from "react";
import * as commentsActions from "../../actions/comments";

export default ({ postId, user, parentComment }) => {
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
  };

  return (
    <div>
      <input type="text" ref={input => (comment = input)} />
      <input type="button" value="Submit Comment" onClick={postComment} />
    </div>
  );
};
