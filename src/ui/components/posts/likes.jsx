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
    postsActions.getPost(this.props.user.userId);
  };

  componentWillReceiveProps() {
  }

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
        {this.props.likes &&
          <div>
            <input
              type="button"
              value={this.props.user.likes.includes(this.props.postId) ? "♥" : "♡"}
              onClick={this.handleClick}
            />
            <div onClick={this.toggleLikes.bind(this)}>
              {this.props.likeCount} people like this post.
            </div>
            {/*this.props.likes.includes(this.props.post.id) &&
              this.props.post.likes.likes.map(like =>
                <div>
                  <a href={`/profile/${like.userId}`}>{like.userFullName}</a>
                </div>
              )*/}
          </div>}
      </div>
    );
  }
}

export default Like;
