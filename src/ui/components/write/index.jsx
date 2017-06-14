import React, { Component } from "react";
import { connect } from "redux-jetpack";
import * as writeActions from "../../actions/write";
import ColorSelect from "./color-select";
import ImageSelect from "./image-select";

class Write extends Component {
  lines = "";
  haiku = {};

  componentWillMount() {
    this.setState({
      editable: false,
      colors: true
    });
  }

  saveHaiku = () => {
    this.haiku = {
      author: this.props.name,
      authorId: this.props.id,
      type: "haiku",
      lines: this.lines.innerText.trim().split("\n"),
      timeStamp: new Date().toLocaleString()
    };
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

  writeHaiku = haiku => {
    writeActions.write({ ...haiku, lines: haiku.lines.join("\n") });
    this.props.history.push('/profile')
  };

  render() {
    return (
      <div>
        {!this.state.editable &&
          <div>
            <div
              contentEditable="true"
              className="write"
              style={{ backgroundColor: "purple" }}
              ref={input => (this.lines = input)}>
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
            {this.state.colors &&
              <ColorSelect
                haiku={this.haiku}
                writeHaiku={this.writeHaiku}
                toggleActive={this.toggleActive}
              />}
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
