import React, { Component } from "react";
import { updateState } from "redux-jetpack";
import { connect } from "redux-jetpack";

class ImageSelect extends Component {
  image = "";

  imageParse = () => {
    const reader = new FileReader();
    reader.onload = img =>
      updateState("write", state => ({ ...state, image: img.target.result }));
    reader.readAsDataURL(this.image.files[0]);
  };

  // componentWillMount() {
  //   this.setState({ image: "" });
  // }

  render() {
    return (
      <div>
        <ul className="posts">
          <li
            className="post"
            style={{
              backgroundImage: `url(${this.props.image})` || "none",
              backgroundSize: "cover"
            }}>
            <ul className="lines">
              {this.props.haiku.lines.map(i => <li>{i}</li>)}
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
        <input
          type="button"
          value="Back"
          onClick={() => this.props.toggleActive("edit")}
        />
      </div>
    );
  }
}

export default connect(ImageSelect, state => state.write);
