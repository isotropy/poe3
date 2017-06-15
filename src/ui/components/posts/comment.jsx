import React, { Component } from "react";

export default ({ comment }) => {
  const classSelector = comment.hasOwnProperty("parentCommentId")
    ? "childComment"
    : "comment";
  return (
    <li className={classSelector}>
      <img src={comment.userPicture} />
      <span>{comment.userName}</span>
      <span>{comment.timestamp}</span>
      <div>{comment.message}</div>
    </li>
  );
};
