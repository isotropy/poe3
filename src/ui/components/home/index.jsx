import React, { Component } from "react";
import * as homeActions from "../../actions/home";
import { connect } from "redux-jetpack";
import Posts from "../common/posts";

class Home extends Component {
  componentWillMount() {
      homeActions.getLatest()
  }

  render() {
    return <Posts posts={this.props.posts} />;
  }
};

export default connect(Home, state => state.home);
