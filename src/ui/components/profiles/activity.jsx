import React, { Component } from "react";
import { connect } from "redux-jetpack";
import * as myProfileActions from "../../actions/my-profile";
import Posts from "../posts/posts";

class Activity extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.activity &&
            this.props.activity.map(a =>
              <a href={`/posts/${a.postId}`}>
                <li>You {a.action} {a.userId}'s post on {a.timestamp}</li>
              </a>
            )}
        </ul>
      </div>
    );
  }
}

export default connect(Activity, state => state.user);
