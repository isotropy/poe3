import React, { Component } from "react";
import * as likeActions from "../../actions/like";
import { connect } from "redux-jetpack";

class Like extends Component {
  handleClick = () => {
    likeActions.like(this.props.user.userId, this.props.user.userFullName, this.props.postId);
    if (this.state.liked === "unliked")
      this.setState({
        liked: "liked",
        icon: "♥"
      });
    else
      this.setState({
        liked: "unliked",
        icon: "♡"
      });
  };

  componentWillMount() {
    this.setState({
      liked: "unliked",
      icon: "♡"
    });
  }

  componentWillReceiveProps() {

  }

  render() {
    return (
      <div>
        {this.props.likes &&
          <div>
            <input
              type="button"
              value={this.state.icon}
              onClick={this.handleClick}
              className={this.state.liked}
            />
            {this.props.likes.map(like => <span>{like.userFullName} </span>)}
          </div>}
        <span>like this post</span>
      </div>
    );
  }
}

export default connect(Like, state => state.likes);
