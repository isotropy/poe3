import React, { Component } from "react";
import { connect } from "redux-jetpack";
import * as myProfileActions from "../../actions/my-profile";
import Posts from "../posts/posts";

class Notifications extends Component {
  // componentWillMount() {
  //   myProfileActions.getProfile(this.props.user.id);
  // }

  render() {
    return (
      <div>
        <img src={this.props.user.imageData} />
        {this.props.user.name}
        <ul>
          {this.props.user.notifcations && console.log('notifs', this.props.user.notifcations)}
          {this.props.user.notifcations &&
            this.props.user.notifications.map(n =>
              <li>{n.userId} {n.type}ed your post on {n.timestamp}</li>
            )}
        </ul>
      </div>
    );
  }
}

export default connect(Notifications, state => state.user);
