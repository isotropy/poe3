import React, { Component } from "react";
import { connect } from "redux-jetpack";
import * as postsActions from "../../actions/posts";
import * as componentStateActions from "../../actions/component-state";
import Options from "./options";

class Write extends Component {
  constructor(props) {
    super(props);
    this.saveHaiku = this.saveHaiku.bind(this);
    this.storeHaiku = this.storeHaiku.bind(this);
    this.toggleOptions = this.toggleOptions.bind(this);
  }

  toggleOptions() {
    componentStateActions.write_showPalette();
  }

  storeHaiku(e) {
    componentStateActions.write_haiku(e.target.innerText);
  }

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
        componentStateActions.write_showPalette();
        this.props.history.push("/profile");
      });
  }

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${this.props.write.image})` || "none",
          backgroundColor: this.props.write.backgroundColor || "aliceblue",
          backgroundSize: "cover"
        }}>
        <div
          contentEditable="true"
          className="write"
          onInput={this.storeHaiku}
        />
        {!this.props.write.showPalette && !this.props.write.showImageUpload
          ? <ul>
              <li>
                <a href="#" onClick={this.toggleOptions}>Options</a>
              </li>
              <li>
                <a href="#" onClick={this.saveHaiku}>Post Haiku</a>
              </li>
            </ul>
          : <Options />}
      </div>
    );
  }
}

export default connect(Write, state => ({
  user: state.user,
  write: state.write
}));
