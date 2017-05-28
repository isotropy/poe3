import React, { Component } from "react";
import * as homeActions from "../../actions/home";
import { connect } from "redux-jetpack";
import Posts from "../common/posts";

class Home extends Component {
  componentWillMount() {
      homeActions.getLatest()
  }

  render() {
    if (this.props.posts.length > 0) return <Posts posts={this.props.posts} />;
    return <div>Head over to Explore and follow someone. We will fill up this page with haikus you'd love.</div>
  }
};

export default connect(Home, state => state.home);</div>
