import React, { Component } from "react";
import { connect } from "redux-jetpack";
import * as profileActions from "../../actions/profile";
import Posts from "../common/posts";

class Profile extends Component {
  componentWillMount() {
    profileActions.getProfile(this.props.user.id);
    profileActions.getPosts(this.props.user.id);
  }

  render() {
    return (
      <div>
        <img src={this.props.user.image} />
        {this.props.user.name}
        <div>Notifications</div>
        {this.props.myPosts.posts &&
          <Posts posts={this.props.myPosts.posts} user={this.props.user} />}
        {this.props.user.notifications &&
          this.props.user.notifications.map(n => <li>{n.userID} {n.type}ed you on {n.timeStamp}</li>)}
        {this.props.user.activity &&
          this.props.user.activity.map(a => <li>You {a.type}ed on {a.userId}'s post' on {a.timeStamp}</li>)}
      </div>
    );
  }
}

export default connect(Profile, state => state);
