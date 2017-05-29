import React, { Component } from "react";

export default ({ comments }) => {
  const toggleComments = () => {
    //open/close comments
  }
  return (
    <div>
      <div onClick = { toggleComments }>Comment Icon:</div>
      <ul style = {{ 'fontColor': 'black' }}>
        {comments.map(
          comment =>
            comment.constructor !== Array
              ? <li>
                  { comment.user } => { comment.msg }
                </li>
              : <ul>
                  {comment.map(
                    c =>
                      <li>
                        { c.user } => { c.msg }
                      </li>
                    )}
                </ul>
        )}
      </ul>
    </div>
  )
}
