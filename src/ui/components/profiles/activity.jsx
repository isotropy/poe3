import React, { Component } from "react";
import { connect } from "redux-jetpack";

class Activity extends Component {
  formatActivity(activity) {
    const data = JSON.parse(activity.data);
    return activity.type === "like"
      ? <li>
          `You liked ${data.title} by ${data.userFullName}.`
        </li>
      : <li>"You did something. Nothing important though."</li>;
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.activity &&
            this.props.activity.map(a => formatActivity(a))}
        </ul>
      </div>
    );
  }
}

export default connect(Activity, state => state.user);
