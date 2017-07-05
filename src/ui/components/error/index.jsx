import React, { Component } from "react";
import { connect } from "redux-jetpack";
import * as errorActions from "../../actions/error";

class Error extends Component {
  retractError() {
    errorActions.ackError();
  }

  render() {
    return this.props.code > 0
      ? <div className="error">
          {this.props.message}
          <input type="button" value="Ok" onClick={this.retractError} />
        </div>
      : null;
  }
}

export default connect(Error, state => state.error);
