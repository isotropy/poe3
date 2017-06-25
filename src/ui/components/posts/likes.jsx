import React, { Component } from "react";
import { connect } from "redux-jetpack";
import { getState, updateState } from "redux-jetpack";
import * as likesActions from "../../actions/likes";
import * as postsActions from "../../actions/posts";
import * as componentStateActions from "../../actions/component-state";

class Like extends Component {
  handleClick = () => {
    likesActions.like(
      this.props.user.userId,
      this.props.user.userFullName,
      this.props.post.id
    );
    postsActions.getPost(this.props.user.userId);
  };

  toggleLikes() {
    componentStateActions.likes_isLikesOpen(this.props.post.id);
  }

  render() {
    return (
      <div>
        {Object.keys(this.props.post.likes).length !== 0 &&
          <div>
            <input
              type="button"
              value={this.props.post.isPostLiked ? "♥" : "♡"}
              onClick={this.handleClick}
            />
            <div onClick={this.toggleLikes.bind(this)}>
              {this.props.post.likeCount} people like this post.
            </div>
            {this.props.post.isLikesOpen &&
              this.props.post.likes.map(like =>
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
