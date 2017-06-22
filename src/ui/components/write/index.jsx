import React, { Component } from "react";
import { connect } from "redux-jetpack";
import * as postsActions from "../../actions/posts";
import ColorSelect from "./color-select";
import ImageSelect from "./image-select";

class Write extends Component {
  constructor(props) {
    super(props);
    this.selectBackgroundColor = this.selectBackgroundColor.bind(this);
    this.saveHaiku = this.saveHaiku.bind(this);
  }

  selectBackgroundColor(color) {
    this.setState({ backgroundColor: color });
  }

  options() {}

  saveHaiku() {
    postsActions
      .create({
        userFullName: this.props.user.name,
        userId: this.props.user.id,
        type: "haiku",
        lines: this.lines.innerText.trim().split("\n"),
        timestamp: new Date().toLocaleString()
      })
      .then(() => {
        this.props.history.push("/profile");
      });
  }

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${this.props.write.image})` || "none",
          backgroundColor: post.color || "aliceblue",
          backgroundSize: "cover"
        }}>
        <div
          contentEditable="true"
          className="write"
          ref={input => (this.lines = input)}
        />
        <ul>
          <li>
            <a href="#" onClick={this.options.bind(this)}>Options</a>
          </li>
          <li>
            <a href="#" onClick={this.saveHaiku}>Post Haiku</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(Write, state => ({
  user: state.user,
  write: state.write
}));
