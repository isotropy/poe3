import React, { Component } from "react";
import * as usersActions from "../../actions/users";
import { connect } from "redux-jetpack";

export default ({ userId, profileId }) => {
  const handleClick = () => usersActions.follow(userId, profileId);
  return <input type="button" value="Click to Follow" onClick={handleClick} />;
};
