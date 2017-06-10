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
          value="Comments"
          onClick={this.getComments.bind(this)}
        />
        {this.props.commentsIsOpen === this.props.postId &&
          <ul className="comments">
            {this.props.comments.map(
              c =>
                c.postId === this.props.postId
                  ? c["children"]
                    ? <ul className="comments">
                        <Comment comment={c} />
                        {c.children.map(cc => <Comment comment={cc} />)}
                        <input
                          ref={input => (this.image = input)}
                          type="text"
                          value="Child Comments"
                        />
                        <input type="button" onClick="submitCComment" />
                      </ul>
                    : <Comment comment={c} />
                  : ""
            )}
            <input
              ref={input => (this.comment = input)}
              type="text"
              value="Comments"
            />
          </ul>}
      </div>
    );
  }
}

export default connect(Comments, state => state.comments);
