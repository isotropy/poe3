import React, { Component } from "react";
import { connect } from "redux-jetpack";
import * as myProfileActions from "../../actions/my-profile";
import Posts from "../posts/posts";

class Notifications extends Component {
  componentWillMount() {
    myProfileActions.getProfile(this.props.user.userId);
  }

  render() {
    return (
      <div>
        <img src={this.props.image} />
        {this.props.name}
        <ul>
          {this.props.activity &&
            this.props.activity.map(a =>
              <li>You {a.type}ed on {a.userId}'s post' on {a.timestamp}</li>
            )}
        </ul>
      </div>
    );
  }
}

export default connect(Notifications, state => state.user);
