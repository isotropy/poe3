import React, { Component } from "react";
import * as postsActions from "../../actions/posts";
import { connect } from "redux-jetpack";
import Posts from "../common/posts";

class PermaPost extends Component {
  componentWillMount() {
    postsActions.getPost(this.props.match.params.postId);
  }

  render() {
    if (this.props.resources.posts.length)
      return <Posts posts={this.props.resources.posts} user={this.props.user} />;
    return (
      <div>
        Loading
      </div>
    );
  }
}

export default connect(PermaPost, state => state);
