import React, { Component } from "react";
import * as postsActions from "../../actions/posts";
import { connect } from "redux-jetpack";
import Posts from "../posts/posts";

class Explore extends Component {
  componentWillMount() {
    postsActions.getInterestingPosts(this.props.auth.sessionId);
  }

  render() {
    return this.props.posts.length > 0
      ? <Posts posts={this.props.posts} user={this.props.user} />
      : <div>Thing is loading.</div>;
  }
}

export default connect(Explore, state => state);
