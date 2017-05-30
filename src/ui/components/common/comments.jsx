import React, { Component } from "react";
import { connect } from "redux-jetpack";
import * as commentsActions from "../../actions/comments";
import Comment from './comment'

class Comments extends Component {
  getComments() {
    commentsActions.getLatest(this.props.postId)
  }

  render() {
    if (false)
      return
        <div>
          <input type = 'button' onClick = { this.getComments.bind(this) } value = 'Comments' />
          <ul className = 'comments'>
            {this.props.comments.map(comment => <Comment comment = {comment} />)}
          </ul>
        </div>
    return <input type = 'button' onClick = { this.getComments.bind(this) } value = 'Comments' />
  }
}

export default connect(Comments, state => state.comments)
