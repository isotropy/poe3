import React, { Component } from "react";
import { connect } from "redux-jetpack";
import * as myProfileActions from "../../actions/myProfile";
import Posts from "../posts/posts";

class MyProfile extends Component {
  componentWillMount() {
    myProfileActions.getProfile(this.props.user.id);
    myProfileActions.getPosts(this.props.user.id);
    this.setState({
      open: "posts"
    });
  }

  handleClick(action) {
    this.setState({
      open: action
    });
  }

  render() {
    return (
      <div>
        <img src={this.props.user.image} />
        {this.props.user.name}
        <div>
          <span onClick={() => this.handleClick("posts")}>My Posts</span>
          <span onClick={() => this.handleClick("notifs")}>Notifications</span>
          <span onClick={() => this.handleClick("activity")}>Activity</span>
        </div>
        {this.props.myPosts.posts &&
          this.state.open === "posts" &&
          <Posts posts={this.props.myPosts.posts} user={this.props.user} />}
        {this.props.user.notifications &&
          this.state.open === "notifs" &&
          this.props.user.notifications.map(n =>
            <li>{n.userId} {n.type}ed your post on {n.timeStamp}</li>
          )}
        {this.props.user.activity &&
          this.state.open === "activity" &&
          this.props.user.activity.map(a =>
            <li>You {a.type}ed on {a.userId}'s post' on {a.timeStamp}</li>
          )}
      </div>
    );
  }
}

export default connect(MyProfile, state => state);
