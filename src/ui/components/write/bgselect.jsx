import React, { Component } from "react";
import * as writeActions from "../../actions/write";
import { CirclePicker } from "react-color";

class BGSelect extends Component {
  showColors = () => {
    this.setState({ showPalette: !this.state.showPalette });
  };

  colorChange = ({ hex }) => {
    this.setState({ color: hex });
  };

  componentWillMount() {
    this.setState({ color: "purple", showPalette: false });
  }

  render() {
    return (
      <div>
        <div style={{ backgroundColor: this.state.color }}>
          {this.props.haiku.lines}
        </div>
        <input type="button" value="Select Color" onClick={this.showColors} />
        <div style={{ display: this.state.showPalette ? "block" : "none" }}>
          <CirclePicker onChangeComplete={color => this.colorChange(color)} />
        </div>
      </div>
    );
  }
}

export default BGSelect;
