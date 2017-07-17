import React, { Component } from "react";
import * as postsActions from "../../actions/posts";
import { connect } from "redux-jetpack";
import Posts from "../posts/posts";

class Home extends Component {
  componentWillMount() {
    postsActions.getFeed(this.props.auth.sessionId);
  }

  render() {
    return this.props.posts.length > 0
      ? <Posts
          posts={this.props.posts}
          user={this.props.user}
          sessionId={this.props.auth.sessionId}
        />
      : <div>
          Head over to Explore and follow someone. We will fill up this page
          with
          haikus you'd love.
        </div>;
  }
}

export default connect(Home, state => ({
  user: state.user,
  posts: state.posts,
  auth: state.auth
}));
