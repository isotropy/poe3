import React, { Component } from "react";
import * as likeActions from "../../actions/like";
import { connect } from "redux-jetpack";

class Like extends Component {
  handleClick = () => {
    likeActions.like(
      this.props.user.userId,
      this.props.user.userFullName,
      this.props.postId
    );
    if (this.state.liked === "unliked")
      this.setState({
        liked: "liked"
      });
    else
      this.setState({
        liked: "unliked"
      });
  };

  componentWillMount() {
    this.setState({
      liked: "liked",
      openLikes: false
    });
  }

  componentWillReceiveProps() {
    console.log(this.props);
    if (this.props.likes.isLiked) {
      this.setState({
        liked: "liked"
      });
    } else {
      this.setState({
        liked: "unliked"
      });
    }
  }

  showLikes() {
    this.setState({
      openLikes: !this.state.openLikes
    });
  }

  render() {
    return (
      <div>
        {this.props.likes &&
          <div>
            <input
              type="button"
              value={this.state.liked === "liked" ? "♥" : "♡"}
              onClick={this.handleClick}
              className={this.state.liked}
            />
            <div onClick={this.showLikes.bind(this)}>
              {this.props.likeCount} people like this post.
            </div>
            {this.state.openLikes &&
              this.props.likes.likes.map(like =>
                <a href={`/profile/${like.userId}`}>{like.userFullName}</a>
              )}
          </div>}
      </div>
    );
  }
}

export default connect(Like, state => state);
