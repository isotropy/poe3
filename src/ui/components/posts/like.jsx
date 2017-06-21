import React, { Component } from "react";
import { connect } from "redux-jetpack";
import { getState, updateState } from "redux-jetpack";
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

  toggleLikes() {
    updateState("componentState", state => ({
      ...state,
      likes: state.likes.includes(this.props.post.id)
        ? state.likes.filter(like => like !== this.props.post.id)
        : state.likes.concat(this.props.post.id)
    }));
  }

  render() {
    return (
      <div>
        {this.props.post.likes &&
          <div>
            <input
              type="button"
              value={this.props.user.likes.includes(this.props.post.id) ? "♥" : "♡"}
              onClick={this.handleClick}
            />
            <div onClick={this.toggleLikes.bind(this)}>
              {this.props.post.likeCount} people like this post.
            </div>
            {this.props.likes.includes(this.props.post.id) &&
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

export default connect(Like, state => state.componentState);
