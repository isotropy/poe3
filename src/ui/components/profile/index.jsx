import React, { Component } from "react";
import { connect } from "redux-jetpack";
import * as profileActions from "../../actions/profile";
import Posts from "../common/posts";

class Profile extends Component {
  componentWillMount() {
    profileActions.getPosts(this.props.user.id);
  }

  render() {
    return (
      <div>
        <img src={this.props.user.image} />
        {this.props.user.name}
        <div>Notifications</div>
        {this.props.myPosts.posts.length > 0 &&
          <Posts posts={this.props.myPosts.posts} user={this.props.user} />}
      </div>
    );
  }
}

export default connect(Profile, state => state);
