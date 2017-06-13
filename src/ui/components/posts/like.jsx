import React, { Component } from "react";
import * as likeActions from "../../actions/like";
import { connect } from "redux-jetpack";

export default ({ postId, userId }) => {
  const handleClick = () => likeActions.like(userId, postId)
  return (
    <input type = 'button' value = '❤' onClick = {handleClick} />
  );
};
