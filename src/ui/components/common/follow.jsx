import React, { Component } from "react";
import * as followActions from "../../../actions/follow";
import { connect } from "redux-jetpack";

const Follow = () => {
  const handleClick = () => followActions.follow()
  return (
    <input type = 'button' value = 'Click to Follow' onClick = {handleClick} />
  );
};

export default Follow
