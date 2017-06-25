import React, { Component } from "react";
import { connect } from "redux-jetpack";
import * as commentsActions from "../../actions/comments";
import * as componentStateActions from "../../actions/component-state";
import Comment from "./comment";
import Reply from "./reply";

class Comments extends Component {
  toggleComments() {
    componentStateActions.comments_isCommentsOpen(this.props.post.id);
  }

  render() {
    return (
      <div>
        <input
          type="button"
          value="Comments"
          onClick={this.toggleComments.bind(this)}
        />
        {this.props.post.isCommentsOpen &&
          <ul className="comments">
            {this.props.post.comments.map(
              c =>
                c.postId === this.props.post.id
                  ? c["children"]
                    ? <ul className="comments">
                        <Comment
                          comment={c}
                          key={`post_${this.props.post.id}_comment_${c.id}`}
                        />
                        {c.children.map(cc =>
                          <Comment
                            comment={cc}
                            key={`post_${this.props.post.id}_comment_${cc.id}`}
                          />
                        )}
                      </ul>
                    : <Comment
                        comment={c}
                        key={`post_${this.props.post.id}_comment_${c.id}`}
                      />
                  : ""
            )}
            <Reply postId={this.props.post.id} user={this.props.user} />
          </ul>}
      </div>
    );
  }
}

export default Comments;
