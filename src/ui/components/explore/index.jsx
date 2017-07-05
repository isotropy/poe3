import React, { Component } from "react";
import * as postsActions from "../../actions/posts";
import { connect } from "redux-jetpack";
import Posts from "../posts/posts";

class Explore extends Component {
  componentWillMount() {
    postsActions.getInterestingPosts(this.props.user.id);
  }

  render() {
    return this.props.posts.length > 0
      ? <Posts
          posts={this.props.posts}
          user={this.props.user}
          sessionId={this.props.auth.sessionId}
        />
      : <div>Thing is loading.</div>;
  }
}

export default connect(Explore, state => ({
  user: state.user,
  posts: state.posts,
  auth: state.auth
}));
