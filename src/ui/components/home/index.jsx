import React, { Component } from "react";
import * as postsActions from "../../actions/posts";
import { connect } from "redux-jetpack";
import Posts from "../posts/posts";

class Home extends Component {
  componentWillMount() {
    postsActions.getFeed(this.props.user.userId);
  }

  render() {
    return this.props.home.posts.length > 0
      ? <Posts posts={this.props.home.posts} user={this.props.user} />
      : <div>
          Head over to Explore and follow someone. We will fill up this page
          with
          haikus you'd love.
        </div>;
  }
}

export default connect(Home, state => state);
