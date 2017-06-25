import React, { Component } from "react";
import { updateState } from "redux-jetpack";
import { connect } from "redux-jetpack";
import { CirclePicker } from "react-color";
import * as componentStateActions from "../../actions/component-state";

class Options extends Component {
  image = "";

  showPalette = () => {
    componentStateActions.write_showPalette();
  };

  colorChange = ({ hex }) => {
    componentStateActions.write_backgroundColor(hex);
  };

  hideOptions = () => {
    componentStateActions.write_hideOptions();
  };

  imageParse = () => {
    const reader = new FileReader();
    reader.onload = img => componentStateActions.write_image(img.target.result);
    reader.readAsDataURL(this.image.files[0]);
  };

  render() {
    return (
      <div>
        <ul className="posts">
          <li
            className="post"
            style={{
              backgroundImage:
                `url(${this.props.image})` ||
                  this.props.backgroundColor ||
                  "aliceblue",
              backgroundSize: "cover"
            }}>
            <ul className="lines">
              {this.props.haiku}
              {/*this.props.haiku.lines.map(i => <li>{i}</li>)*/}
            </ul>
          </li>
        </ul>
        <input
          ref={input => (this.image = input)}
          type="file"
          onChange={e => this.imageParse(e)}
        />
        <input
          type="button"
          value="Select Color"
          onClick={this.props.toggleActive}
        />
        <input
          type="button"
          value="Send Haiku Home"
          onClick={() =>
            this.props.writeHaiku({
              ...this.props.haiku,
              image: this.state.image
            })}
        />
        <input type="button" value="Back" onClick={() => this.hideOptions()} />

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

      </div>
    );
  }
}

export default connect(Options, state => state.write);
