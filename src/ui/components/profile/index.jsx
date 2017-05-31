import React, { Component } from "react";
import { connect } from "redux-jetpack";

class Profile extends Component {
  render() {
    return (
      <div>
        <img src = {this.props.image} />
        {this.props.name}
        <div>Notifications</div>
      </div>
    )
  }
}

export default connect(Profile, state => state.user)
