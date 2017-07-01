import React, { Component } from "react";
import { updateState } from "redux-jetpack";
import { connect } from "redux-jetpack";
import { CirclePicker } from "react-color";
import * as postsActions from "../../actions/posts";

class Options extends Component {
  image = "";

  showPalette() {
    postsActions.showPalette();
  }

  showImageUpload() {
    postsActions.showImageUpload();
  }

  colorChange({ hex }) {
    postsActions.storeBackgroundColor(hex);
  }

  hideOptions() {
    postsActions.hideOptions();
  }

  getFileExtension(filename) {
    const matches = /.*\.(.*)$/.exec(filename);
    return matches.length > 2 ? matches[1] : undefined;
  }

  imageParse() {
    const file = this.image.files[0];
    const extension = getFileExtension(file).toLowerCase();

    if ([`jpg`, `png`].includes(extension)) {
      const reader = new FileReader();
      reader.onload = img =>
        postsActions.storeImage(img.target.result, file.name);
      reader.readAsBinaryString(file);
    } else {
      alert(`Upload a jpg or png file.`);
    }
  }

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
            }}
          >
            <ul className="lines">
              {this.props.haiku.map(i =>
                <li>
                  {i}
                </li>
              )}
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
              onClick={e =>
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
              onClick={e => this.showImageUpload(e)}
            />
            <div>
              <CirclePicker
                onChangeComplete={color => this.colorChange(color)}
              />
            </div>
            <input
              type="button"
              value="Send Haiku Home"
              onClick={e =>
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
