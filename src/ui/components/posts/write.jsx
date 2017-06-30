import React, { Component } from "react";
import { connect } from "redux-jetpack";
import * as writeActions from "../../actions/write";
import Options from "./options";

class Write extends Component {
  constructor(props) {
    super(props);
    this.createPost = this.createPost.bind(this);
    this.storeHaiku = this.storeHaiku.bind(this);
    this.toggleOptions = this.toggleOptions.bind(this);
  }

  toggleOptions() {
    writeActions.showPalette();
  }

  storeHaiku(e) {
    const haikuText = e.target.innerText.replace(/^\s+|\s+$/g, "").split("\n");
    writeActions.haiku(haikuText);
  }

  createPost(visualOptions) {
    writeActions
      .createPost({
        ...visualOptions,
        userFullName: this.props.user.user.userFullName,
        userId: this.props.user.user.id,
        type: "haiku",
        lines: this.props.write.haiku,
        timestamp: new Date().toLocaleString()
      })
      .then(() => {
        writeActions.clearState();
        this.props.history.push("/my-profile");
      });
  }

  render() {
    return !this.props.write.showPalette && !this.props.write.showImageUpload
      ? <div
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
          <ul>
            <li>
              <a href="#" onClick={this.toggleOptions}>Options</a>
            </li>
            <li>
              <a href="#" onClick={this.saveHaiku}>Post Haiku</a>
            </li>
          </ul>
        </div>
      : <Options createPost={this.createPost} />;
  }
}

export default connect(Write, state => ({
  user: state.user,
  write: state.write
}));
