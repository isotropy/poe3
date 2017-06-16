import React, { Component } from "react";
import { connect } from "redux-jetpack";
import * as myProfileActions from "../../actions/my-profile";
import Posts from "../posts/posts";

class Notifications extends Component {
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
        <ul>
          {this.props.notifcations &&
            this.props.notifications.map(n =>
              <li>{n.userId} {n.type}ed your post on {n.timestamp}</li>
            )}
        </ul>
      </div>
    );
  }
}

export default connect(Notifications, state => state.user);
