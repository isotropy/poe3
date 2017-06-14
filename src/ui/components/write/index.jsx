import React, { Component } from "react";
import { connect } from "redux-jetpack";
import * as writeActions from "../../actions/write";
import ColorSelect from "./color-select";
import ImageSelect from "./image-select";

class Write extends Component {
  lines = "";
  haiku = {
    styles: { bgColor: "purple" }
  };

  componentWillMount() {
    this.setState({
      editable: false,
      colors: true
    });
  }

  set haikuBGColor(color) {
    this.haiku.styles.bgColor = color;
  }

  get haikuBGColor() {
    return this.haiku.styles.bgColor;
  }

  saveHaiku = () => {
    Object.assign(this.haiku, {
      author: this.props.name,
      authorId: this.props.id,
      type: "haiku",
      lines: this.lines.innerText.trim().split("\n"),
      timeStamp: new Date().toLocaleString()
    });
    this.toggleActive("edit");
  };

  toggleActive = edit => {
    edit === "edit"
      ? this.setState({
          editable: !this.state.editable
        })
      : this.setState({
          colors: !this.state.colors
        });
  };

  writeHaiku = () => {
    writeActions.write({ ...this.haiku, lines: this.haiku.lines.join("\n") });
    this.props.history.push("/profile");
  };

  render() {
    return (
      <div>
        {!this.state.editable &&
          <div>
            <div
              contentEditable="true"
              className="write"
              style={{ backgroundColor: this.haiku.styles.bgColor }}
              ref={input => (this.lines = input)}
            >
              {this.lines}
            </div>
            <input
              type="button"
              value="Choose Colors"
              onClick={this.saveHaiku}
            />
          </div>}
        {this.state.editable &&
          <div>
            {this.state.colors && <ColorSelect onSelect={this.selectBackgroundColor} />}
            {!this.state.colors &&
              <ImageSelect
                haiku={this.haiku}
                writeHaiku={this.writeHaiku}
                toggleActive={this.toggleActive}
              />}
          </div>}
      </div>
    );
  }
}

export default connect(Write, state => state.user);
