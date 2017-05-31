import React, { Component } from "react";

export default ({ comment }) => {
  return (
    <li className = 'comment'>
      <img src = {comment.userPicture} />
      <span>{comment.userName}</span>
      <span>{comment.timeStamp}</span>
      <div>{comment.message}</div>
    </li>
  )
}
