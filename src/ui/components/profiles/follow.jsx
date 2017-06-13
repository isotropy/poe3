import React, { Component } from "react";
import * as followActions from "../../actions/follow";
import { connect } from "redux-jetpack";

export default ({ userId, profileId }) => {
  const handleClick = () => followActions.follow(userId, profileId);
  return <input type="button" value="Click to Follow" onClick={handleClick} />;
};
