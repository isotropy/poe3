import React, { Component } from "react";
import { connect } from "redux-jetpack";
import * as profilesActions from "../../actions/profiles";
import Posts from "../common/posts";

class Profiles extends Component {
  componentWillMount() {
    profilesActions.getProfile(this.props.match.params.profileId);
    profilesActions.getPosts(this.props.match.params.profileId);
  }

  render() {
    if (!Object.keys(this.props.resources.profile).length)
      return <div>Loading...</div>;
    return (
      <div>
        <img src={this.props.resources.profile.image} />
        {this.props.resources.profile.name}
        {this.props.resources.posts &&
          <Posts posts={this.props.resources.posts} user={this.props.user} />}
      </div>
    );
  }
}

export default connect(Profiles, state => state);
