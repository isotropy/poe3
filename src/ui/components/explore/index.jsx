import React, { Component } from "react";
import * as postsActions from "../../actions/posts";
import { connect } from "redux-jetpack";
import Posts from "../posts/posts";

class Explore extends Component {
  componentWillMount() {
    postsActions.getInterestingPosts(this.props.user.userId);
  }

  render() {
    return <Posts posts={this.props.explore.posts} user={this.props.user} />;
  }
}

export default connect(Explore, state => state);
