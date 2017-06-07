import React, { Component } from "react";
import { connect } from "redux-jetpack";
import BGSelect from "./bgselect";

class Write extends Component {
  lines = "";
  haiku = {};

  componentWillMount() {
    this.setState({
      hidden: false
    });
  }

  writeHaiku = () => {
    this.haiku = {
      author: this.props.name,
      authorId: this.props.id,
      type: "haiku",
      lines: this.lines.innerText.trim().split("\n"),
      timeStamp: new Date().toLocaleString()
    };
    this.setState({
      hidden: !this.state.hidden
    });
  };

  render() {
    return (
      <div>
        {!this.state.hidden &&
          <div>
            <div
              contentEditable="true"
              className="write"
              style={{ backgroundColor: "purple" }}
              ref={input => {
                this.lines = input;
              }}
            />
            <input
              type="button"
              value="Choose Colors"
              onClick={this.writeHaiku}
            />
          </div>}
        {this.state.hidden && <BGSelect haiku={this.haiku} />}
      </div>
    );
  }
}

export default connect(Write, state => state.user);
