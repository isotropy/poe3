import React, { Component } from "react";
import * as usersActions from "../../actions/users";
import { connect } from "redux-jetpack";

export default ({ sessionId, profileId }) => {
  const handleClick = () => usersActions.follow(sessionId, profileId);
  return <input type="button" value="Click to Follow" onClick={handleClick} />;
};
