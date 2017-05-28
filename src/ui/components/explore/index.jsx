import React, { Component } from "react";
import * as exploreActions from "../../actions/explore";
import { connect } from "redux-jetpack";
import Posts from "../common/posts";

const Explore = ({ posts }) => {
  return <Posts posts={posts} />;
};

export default connect(Explore, state => state.explore);
