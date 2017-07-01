import React, { Component } from "react";
import { connect } from "redux-jetpack";
import Posts from "../posts/posts";

class MyPosts extends Component {
  render() {
    return !this.props.posts
      ? <div>Loading</div>
      : <Posts posts={this.props.posts} user={this.props.user} />;
  }
}

export default connect(MyPosts, state => ({
  user: state.user,
  posts: state.posts
}));
