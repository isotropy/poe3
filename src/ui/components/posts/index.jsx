import React, { Component } from "react";
import * as postsActions from "../../actions/posts";
import { connect } from "redux-jetpack";
import Posts from "./posts";

class Post extends Component {
  componentWillMount() {
    postsActions.getPost(parseInt(this.props.match.params.postId));
  }

  render() {
    if (this.props.posts.length)
      return (
        <Posts posts={this.props.posts} user={this.props.user} />
      );
    return (
      <div>
        Loading
      </div>
    );
  }
}

export default connect(Post, state => state);
