import React, { Component } from "react";
import { updateState } from "redux-jetpack";
import { connect } from "redux-jetpack";
import { CirclePicker } from "react-color";

class ColorSelect extends Component {
  showColors = () => {
    this.updateState("write", state => ({
      ...state,
      showPalette: !state.showPalette
    }));
  };

  colorChange = ({ hex }) => {
    this.updateState("write", state => ({ ...state, backgroundColor: hex }));
  };

  componentWillMount() {
    this.updateState("write", state => ({
      ...state,
      backgroundColor: this.props.backgroundColor
    }));
  }

  render() {
    return (
      <div>
        <ul className="posts">
          <li
            className="post"
            style={{
              backgroundColor: this.props.backgroundColor || "none",
              backgroundSize: "cover"
            }}>
            <ul className="lines">
              {this.props.haiku.lines.map(i => <li>{i}</li>)}
            </ul>
          </li>
        </ul>
        <input type="button" value="Select Color" onClick={this.showColors} />
        <input
          type="button"
          value="Select Image"
          onClick={this.props.toggleActive}
        />
        <div style={{ display: this.props.showPalette ? "block" : "none" }}>
          <CirclePicker onChangeComplete={color => this.colorChange(color)} />
        </div>
        <input
          type="button"
          value="Send Haiku Home"
          onClick={() => this.props.writeHaiku()}
        />
        <input
          type="button"
          value="Back"
          onClick={() => this.props.toggleActive("edit")}
        />
      </div>
    );
  }
}

export default connect(ColorSelect, state => state.write);
