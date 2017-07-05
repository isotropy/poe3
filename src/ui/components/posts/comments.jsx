import React, { Component } from "react";
import { connect } from "redux-jetpack";
import * as commentsActions from "../../actions/comments";
import Comment from "./comment";
import Reply from "./reply";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.toggleComments = this.toggleComments.bind(this);
  }

  toggleComments() {
    commentsActions.getCommentByPost(this.props.post.id);
    commentsActions.toggleComments(this.props.post.id);
  }

  render() {
    return (
      <div>
        <input type="button" value="Comments" onClick={this.toggleComments} />
        {this.props.post.isCommentsOpen &&
          <ul className="comments">
            {this.props.post.comments.map(
              c =>
                c.postId === this.props.post.id
                  ? c["children"]
                    ? <span>
                        <ul className="comments">
                          <Comment
                            comment={c}
                            key={`${this.props.post.id}${c.id}`}
                          />
                          {c.children.map(cc =>
                            <Comment
                              comment={cc}
                              key={`${this.props.post.id}_${cc.id}`}
                            />
                          )}
                        </ul>
                        <Reply
                          postId={this.props.post.id}
                          user={this.props.user}
                          parentCommentId={c.id}
                        />
                      </span>
                    : <Comment
                        comment={c}
                        key={`${this.props.post.id}_${c.id}`}
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
