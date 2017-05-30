import React, { Component } from "react";
import { connect } from "redux-jetpack";
import * as commentsActions from "../../actions/comments";
import Comment from './comment'

class Comments extends Component {
  comments = []

  getComments() {
    commentsActions.getLatest(this.props.postId)
  }

  render() {
    return this.props.commentsIsOpen.includes(this.props.postId)
    ? <div>
        <input type = 'button' onClick = { this.getComments.bind(this) } value = 'Comments' />
        <ul className = 'comments'>
          {this.props.comments.map(comment => {if (comment.postId === this.props.postId)
            return <Comment comment = {comment} /> })}
        </ul>
      </div>
    : <div>
        <input type = 'button' onClick = { this.getComments.bind(this) } value = 'Comments' />
      </div>
  }
}

export default connect(Comments, state => state.comments)
