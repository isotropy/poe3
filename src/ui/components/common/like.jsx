import React, { Component } from "react";
import * as likeActions from "../../actions/like";
import { connect } from "redux-jetpack";

const Like = () => {
  const handleClick = () => likeActions.like()
  return (
    <input type = 'button' value = '❤' onClick = {handleClick} />
  );
};

export default Like
