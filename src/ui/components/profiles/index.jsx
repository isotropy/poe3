import React, { Component } from "react";
import { connect } from "redux-jetpack";
import * as usersActions from "../../actions/users";
import * as postsActions from "../../actions/posts";
import Posts from "../posts/posts";
import Follow from "./follow";

class Profiles extends Component {
  componentWillMount() {
    usersActions.getProfile(this.props.match.params.userId);
    postsActions.getPostsByUser(this.props.match.params.userId);
  }

  render() {
    if (!Object.keys(this.props.viewProfile).length)
      return <div>Loading...</div>;
    return (
      <div>
        <img src={this.props.viewProfile.image} />
        {this.props.viewProfile.userFullName}
        <Follow
          userId={this.props.user.id}
          profileId={this.props.viewProfile.id}
        />
        {this.props.posts &&
          <Posts posts={this.props.posts} user={this.props.user} />}
      </div>
    );
  }
}

export default connect(Profiles, state => state);
