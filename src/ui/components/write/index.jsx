import React, { Component } from 'react'
import * as writeActions from '../../actions/write'
import { connect } from 'redux-jetpack'

const Explore = () => {
  let haiku = ''
  return (
    <div>
      <label>Your haiku here: </label>
      <textarea ref = { input => { haiku = input } }></textarea>
      <input type = 'button' value = 'Send it away' onClick = { () => writeActions.write(haiku.value) } />
    </div>
  )
}

export default connect(Explore, state => state.explore)
