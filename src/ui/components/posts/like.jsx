import React, { Component } from "react";
import * as likesActions from "../../actions/likes";
import * as postsActions from "../../actions/posts";

class Like extends Component {
  handleClick = () => {
    likesActions.like(
      this.props.user.userId,
      this.props.user.userFullName,
      this.props.post
    );
    postsActions.getInterestingPosts(this.props.user.userId);
    postsActions.getFeed(this.props.user.userId);
  };

  componentWillMount() {
    this.setState({ liked: "liked", openLikes: false });
  }

  componentWillReceiveProps() {
    if (this.props.post.likes)
      if (this.props.post.likes.isLiked) this.setState({ liked: "liked" });
      else this.setState({ liked: "unliked" });
  }

  toggleLikes() {
    this.setState({ openLikes: !this.state.openLikes });
  }

  render() {
    return (
      <div>
        {this.props.post.likes &&
          <div>
            <input
              type="button"
              value={this.state.liked === "liked" ? "♥" : "♡"}
              onClick={this.handleClick}
              className={this.state.liked}
            />
          <div onClick={this.toggleLikes.bind(this)}>
              {this.props.post.likeCount} people like this post.
            </div>
            {this.state.openLikes &&
              this.props.post.likes.likes.map(like =>
                <div>
                  <a href={`/profile/${like.userId}`}>{like.userFullName}</a>
                </div>
              )}
          </div>}
      </div>
    );
  }
}

export default Like;
