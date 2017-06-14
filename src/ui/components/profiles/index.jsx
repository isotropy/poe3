import React, { Component } from "react";
import { connect } from "redux-jetpack";
import * as profilesActions from "../../actions/profiles";
import Posts from "../posts/posts";
import Follow from "./follow";

class Profiles extends Component {
  componentWillMount() {
    profilesActions.getProfile(this.props.match.params.profile);
    profilesActions.getPosts(this.props.match.params.profile);
  }

  render() {
    if (!Object.keys(this.props.resources.profile).length) return <div>Loading...</div>;
    return (
      <div>
        <img src={this.props.resources.profile.image} />
        {this.props.resources.profile.name}
        <Follow userId={this.props.user.id} profileId={this.props.resources.profile.id} />
        {this.props.resources.posts &&
          <Posts posts={this.props.resources.posts} user={this.props.user} />}
      </div>
    );
  }
}

export default connect(Profiles, state => state);
