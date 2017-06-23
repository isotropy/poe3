import React, { Component } from "react";
import { connect } from "redux-jetpack";
import * as myProfileActions from "../../actions/my-profile";
import Posts from "../posts/posts";

class Notifications extends Component {
  componentWillMount() {
    myProfileActions.getProfile(this.props.userId);
    console.log('here')
  }

  render() {
    return (
      <div>
        <img src={this.props.image} />
        {this.props.name}
        <ul>
          {this.props.notifcations && console.log(this.props.notifcations)}
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
