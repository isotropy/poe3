import React, { Component } from "react";
import { connect } from "redux-jetpack";
import { getState, updateState } from "redux-jetpack";
import * as likesActions from "../../actions/likes";
import Follow from "../profiles/follow";

class Like extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.toggleLikes = this.toggleLikes.bind(this);
  }

  handleClick = () => {
    this.props.user.likes.includes(this.props.post.id)
      ? likesActions.unlike(this.props.sessionId, this.props.post.id)
      : likesActions.like(this.props.sessionId, this.props.post.id);
  };

  toggleLikes() {
    likesActions.toggleLikes(this.props.post.id);
  }

  render() {
    return (
      <div>
        <input
          type="button"
          value={this.props.user.likes.includes(this.props.post.id) ? "♥" : "♡"}
          onClick={this.handleClick}
        />
        {Object.keys(this.props.post.likes).length !== 0 &&
          <div>
            <div onClick={this.toggleLikes}>
              {this.props.post.likeCount} people like this post.
            </div>
            {this.props.post.isLikesOpen &&
              <ul>
                {this.props.post.likes.map(like =>
                  <li key={`likes_${like.postId}${like.userId}`}>
                    <a href={`/profile/${like.userId}`}>
                      {like.userFullName}{" "}
                      <Follow
                        sessionId={this.props.sessionId}
                        profileId={like.userId}
                      />
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
