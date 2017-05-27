import React, { Component } from "react";
import * as exploreActions from "../../actions/explore";
import { connect } from "redux-jetpack";

const Explore = ({ latest }) => {
  return (
    <ul>
      {latest.map(item => <li><ul>{item.lines.map(i => <li>{i}</li>)}</ul></li>)}
    </ul>
  );
};

export default connect(Explore, state => state.explore);
