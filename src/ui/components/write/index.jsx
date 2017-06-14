import React, { Component } from "react";
import { connect } from "redux-jetpack";
import * as writeActions from "../../actions/write";
import ColorSelect from "./color-select";
import ImageSelect from "./image-select";

class Write extends Component {
  selectBackgroundColor(color) {
    this.setState({ backgroundColor: color });
  }

  options() {}

  saveHaiku() {
    console.log(this.props.user);
    writeActions
      .write({
        author: this.props.user.name,
        authorId: this.props.user.id,
        type: "haiku",
        lines: this.lines.innerText.trim().split("\n"),
        timeStamp: new Date().toLocaleString()
      })
      .then(() => {
        this.props.history.push("/profile");
      });
  }

  render() {
    return (
      <div
        style={{ backgroundColor: this.props.backgroundColor || "aliceblue" }}
      >
        <div
          contentEditable="true"
          className="write"
          ref={input => (this.lines = input)}
        />
        <ul>
          <li><a href="#" onClick={this.options.bind(this)}>Options</a></li>
          <li>
            <a href="#" onClick={this.saveHaiku.bind(this)}>Post Haiku</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(Write, state => ({ user: state.user }));
