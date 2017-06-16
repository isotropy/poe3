import React, { Component } from "react";
import { connect } from "redux-jetpack";
import * as myProfileActions from "../../actions/my-profile";
import Posts from "../posts/posts";

class MyProfile extends Component {
  componentWillMount() {
    myProfileActions.getProfile(this.props.userId);
  }

  render() {
    return (
      <div>
        <img src={this.props.image} />
        {this.props.name}
        <ul>
          <li>
            <a href="posts">My Posts</a>
          </li>
          <li>
            <a href="/my-profile/notifications">
              Notifications
            </a>
          </li>
          <li>
            <a href="/my-profile/activity">
              Activity
            </a>
          </li>
        </ul>
        {this.props.posts && <Posts posts={this.props.posts} user={this.props} />}
      </div>
    );
  }
}

export default connect(MyProfile, state => state.user);
