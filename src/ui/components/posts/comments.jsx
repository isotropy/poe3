import React, { Component } from "react";
import { connect } from "redux-jetpack";
import * as commentsActions from "../../actions/comments";
import Comment from "./comment";
import Reply from "./reply";

class Comments extends Component {
  componentWillMount() {
    this.setState({ openComments: false });
  }

  componentWillReceiveProps() {
    // console.log(this.props);
  }

  toggleComments() {
    updateState("componentState", state => ({
      ...state,
      comments: state.comments.includes(this.props.post.id)
        ? state.comments.filter(comment => comment !== this.props.post.id)
        : state.comments.concat(this.props.post.id)
    }));
  }

  render() {
    return (
      <div>
        <input
          type="button"
          value="Comments"
          onClick={this.toggleComments.bind(this)}
        />
        {this.props.comments.includes(this.props.post.id) &&
          <ul className="comments">
            {this.props.comments.map(
              c =>
                c.postId === this.props.postId
                  ? c["children"]
                    ? <ul className="comments">
                        <Comment comment={c} key={`post_${this.props.post.id}_comment_${c.id}`} />
                        {c.children.map(cc => <Comment comment={cc} key={`post_${this.props.post.id}_comment_${cc.id}`} />)}
                      </ul>
                    : <Comment comment={c} key={`post_${this.props.post.id}_comment_${c.id}`} />
                  : ""
            )}
            <Reply
              updateCB={this.getComments}
              postId={this.props.postId}
              user={this.props.user}
            />
          </ul>}
      </div>
    );
  }
}

export default Comments;
