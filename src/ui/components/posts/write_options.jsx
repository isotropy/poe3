import React, { Component } from "react";
import { updateState } from "redux-jetpack";
import { connect } from "redux-jetpack";
import { CirclePicker } from "react-color";
import * as writeActions from "../../actions/write";

class Options extends Component {
  image = "";

  showPalette = () => {
    writeActions.showPalette();
  };

  showImageUpload = () => {
    writeActions.showImageUpload();
  };

  colorChange = ({ hex }) => {
    writeActions.backgroundColor(hex);
  };

  hideOptions = () => {
    writeActions.hideOptions();
  };

  imageParse = () => {
    const reader = new FileReader();
    reader.onload = img => writeActions.image(img.target.result);
    reader.readAsDataURL(this.image.files[0]);
  };

  render() {
    return (
      <div>
        <ul className="posts">
          <li
            className="post"
            style={{
              backgroundImage: `url(${this.props.image})` || "none",
              backgroundColor: this.props.backgroundColor || "aliceblue",
              backgroundSize: "cover"
            }}>
            <ul className="lines">
              {this.props.haiku.map(i => <li>{i}</li>)}
            </ul>
          </li>
        </ul>

        {this.props.showImageUpload &&
          <div>
            <input
              ref={input => (this.image = input)}
              type="file"
              onChange={e => this.imageParse(e)}
            />
            <input
              type="button"
              value="Select Color"
              onClick={this.showPalette}
            />
            <input
              type="button"
              value="Send Haiku Home"
              onClick={() =>
                this.props.createPost({
                  image: this.props.image
                })}
            />
          </div>}

        {this.props.showPalette &&
          <div>
            <input
              type="button"
              value="Select Image"
              onClick={this.showImageUpload}
            />
            <div>
              <CirclePicker
                onChangeComplete={color => this.colorChange(color)}
              />
            </div>
            <input
              type="button"
              value="Send Haiku Home"
              onClick={() =>
                this.props.createPost({
                  color: this.props.backgroundColor
                })}
            />
          </div>}

        <input type="button" value="Back" onClick={() => this.hideOptions()} />
      </div>
    );
  }
}

export default connect(Options, state => state.write);
