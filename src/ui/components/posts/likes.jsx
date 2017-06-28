import React, { Component } from "react";
import { connect } from "redux-jetpack";
import { getState, updateState } from "redux-jetpack";
import * as likesActions from "../../actions/likes";
import Follow from "../profiles/follow";

class Like extends Component {
  handleClick = () => {
    likesActions.like(
      this.props.user.id,
      this.props.user.userFullName,
      this.props.post.id
    );
  };

  toggleLikes() {
    likesActions.toggleLikeList(this.props.post.id);
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
              <ul>
                {this.props.post.likes.map(like =>
                <li key={`likes_${like.postId}${like.userId}`}>
                  <a href={`/profile/${like.userId}`}>
                    {like.userFullName} <Follow />
                  </a>
                </li>
                )}
              </ul>}
          </div>}
      </div>
    );
  }
}

export default Like;
