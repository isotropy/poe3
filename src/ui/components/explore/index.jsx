import React, { Component } from "react";
import * as exploreActions from "../../actions/explore";
import { connect } from "redux-jetpack";
import Posts from "../common/posts";

class Explore extends Component {
  componentWillMount() {
      exploreActions.getLatest()
  }

  render() {
    return <Posts posts={this.props.posts} />;
  }
};

export default connect(Explore, state => state.explore);
