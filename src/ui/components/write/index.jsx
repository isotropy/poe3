import React, { Component } from 'react'
import * as writeActions from '../../actions/write'
import { connect } from 'redux-jetpack'
import { CirclePicker } from 'react-color'

class Write extends Component {
  haiku = {  }

  showColors = () => this.setState({ showPalette: !this.state.showPalette })

  colorChange = ({ hex }) => {
    this.haiku.color = hex
    this.setState({ color: hex })
  }

  componentWillMount() { this.setState({ color: 'gray', showPalette: false }) }

  render() {
    return (
      <div>
        <label>Your haiku here: </label>
        <div
          contentEditable = 'true' className = 'write'
          style = {{ backgroundColor: this.state.color }}
          ref = { input => { this.haiku.lines = input } }>
        </div>
        <input type = 'button' value = 'Select Color' onClick = {this.showColors} />
        <div style={{display: this.state.showPalette ? 'block' : 'none' }}>
          <CirclePicker onChangeComplete = { color => this.colorChange(color) }/>
        </div>
        <input type = 'button' value = 'Send it away' onClick = {() => writeActions.write({ ...this.haiku, lines: this.haiku.lines.innerText.trim().split('\n') })} />
      </div>
    )
  }
}

export default Write
