import React, { Component } from "react";
import { connect } from "redux-jetpack";
import * as commentsActions from "../../actions/comments";
import Comment from "./comment";

class Comments extends Component {
  getComments() {
    commentsActions.getLatest(this.props.postId);
  }

  render() {
    return (
      <div>
        <input
          type="button"
          onClick={this.getComments.bind(this)}
          value="Comments"
        />
        {this.props.commentsIsOpen === this.props.postId &&
          <ul className="comments">
            {this.props.comments.parentComments.map(
              comment =>
                comment.postId === this.props.postId
                  ? this.props.comments.childComments.hasOwnProperty(comment.id)
                      ? <ul className="comments">
                          <Comment comment={comment} />
                          {this.props.comments.childComments[
                            comment.id
                          ].map(cComment => <Comment comment={cComment} />)}
                        </ul>
                      : <Comment comment={comment} />
                  : ""
            )}
          </ul>}
      </div>
    );
  }
}

export default connect(Comments, state => state.comments);
