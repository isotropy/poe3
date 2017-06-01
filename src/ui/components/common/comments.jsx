import React, { Component } from "react";
import { connect } from "redux-jetpack";
import * as commentsActions from "../../actions/comments";
import Comment from './comment'
import ramda from 'ramda'
import lodash from 'lodash'

class Comments extends Component {
  getComments() {
    commentsActions.getLatest(this.props.postId)
    const comments = (ramda.groupBy(comment =>
      comment.hasOwnProperty('parentCommentId')))(this.props.comments)
    const groupedChildComments = lodash.groupBy(comments.true, 'parentCommentId')
  }

  render() {
    return (
      <div>
        <input type = 'button' onClick = { this.getComments.bind(this) } value = 'Comments' />
        {this.props.commentsIsOpen === this.props.postId &&
        <ul className = 'comments'>
          {this.props.comments.map(comment => (comment.postId === this.props.postId) &&
            <Comment comment = {comment} />)}
        </ul>}
      </div>
    )
  }
}

export default connect(Comments, state => state.comments)
