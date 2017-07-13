import React, { Component } from "react";
import * as postsActions from "../../actions/posts";
import { connect } from "redux-jetpack";
import Posts from "../posts/posts";

class Tags extends Component {
  componentWillMount() {
    postsActions.getPostsByTag(this.props.match.params.tag);
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

export default connect(Tags, state => state);
