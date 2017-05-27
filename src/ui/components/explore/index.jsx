import React, { Component } from "react";
import * as exploreActions from "../../actions/explore";
import { connect } from "redux-jetpack";
import Post from "../common/post";

const Explore = ({ latest }) => {
  return (
    <ul>
      {latest.map(item => <Post post={item} />)}
    </ul>
  );
};

export default connect(Explore, state => state.explore);
