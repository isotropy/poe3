import React, { Component } from "react";
import * as writeActions from "../../actions/write";
import { CirclePicker } from "react-color";

class ColorSelect extends Component {
  showColors = () => {
    this.setState({ showPalette: !this.state.showPalette });
  };

  colorChange = ({ hex }) => {
    this.setState({ backgroundColor: hex });
  };

  componentWillMount() {
    this.setState({
      backgroundColor: this.props.backgroundColor,
      showPalette: false
    });
  }

  render() {
    return (
      <div>
        <ul className="posts">
          <li
            className="post"
            style={{
              backgroundColor: this.state.backgroundColor || "none",
              backgroundSize: "cover"
            }}
          >
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
        <div style={{ display: this.state.showPalette ? "block" : "none" }}>
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

export default ColorSelect;
