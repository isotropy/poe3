import React, { Component } from "react";
import * as exploreActions from "../../actions/explore";
import { connect } from "redux-jetpack";
import Follow from "../follow";

const Explore = ({ latest }) => {
  return (
    <ul>
      {latest.map(item => <li><ul>{item.lines.map(i => <li>{i}</li>)}</ul><Follow /></li>)}
    </ul>
  );
};

export default connect(Explore, state => state.explore);
