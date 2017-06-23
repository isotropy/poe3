import React, { Component } from "react";
import { connect } from "redux-jetpack";
import { Switch } from "react-router-dom";
import Route from "../../route";
import * as myProfileActions from "../../actions/my-profile";
import Posts from "../posts/posts";
import Notifications from "./notifications";
import Activity from "./activity";

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
        {this.props.posts &&
          <Posts posts={this.props.posts} user={this.props} />}
        <Switch>
          <Route path="/my-profile/notifications" component={Notifications} />
          <Route path="/my-profile/activity" component={Activity} />
        </Switch>
      </div>
    );
  }
}

export default connect(MyProfile, state => state.user);
