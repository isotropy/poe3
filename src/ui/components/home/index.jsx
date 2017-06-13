import React, { Component } from "react";
import * as homeActions from "../../actions/home";
import { connect } from "redux-jetpack";
import Posts from "../posts/posts";

class Home extends Component {
  componentWillMount() {
    homeActions.getLatest(this.props.user);
  }

  render() {
    if (this.props.home.posts.length > 0)
      return <Posts posts={this.props.home.posts} user={this.props.user} />;
    return (
      <div>
        Head over to Explore and follow someone. We will fill up this page with
        haikus you'd love.
      </div>
    );
  }
}

export default connect(Home, state => state);
