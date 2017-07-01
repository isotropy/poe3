import React, { Component } from "react";
import { connect } from "redux-jetpack";
import * as usersActions from "../../actions/users";

class Login extends Component {
  name = "";
  id = "";

  constructor(props) {
    super(props);
    this.handleService = this.handleService.bind(this);
    this.handleLoginSuccess = this.handleLoginSuccess.bind(this);
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }

  componentWillMount() {
    if (this.props.auth.sessionId) this.props.history.push("/");
  }

  componentDidUpdate() {
    if (this.props.auth.sessionId) this.props.history.push("/");
  }

  handleService(e) {
    usersActions.updateLoginLocalState({
      serviceProvider: e.target.value
    });
  }

  handleUsername(e) {
    usersActions.updateLoginLocalState({ providerId: e.target.value });
  }

  handleLoginSuccess(e) {
    usersActions.updateLoginLocalState({
      loginSuccess: e.target.value
    });
  }

  login() {
    usersActions.login(
      this.props.login.loginSuccess,
      this.props.login.serviceProvider,
      this.props.login.providerId
    );
  }

  register() {
    usersActions.updateLoginLocalState({
      name: this.name.value,
      id: this.id.value
    });
    usersActions.register(
      this.props.login.serviceProvider,
      this.props.login.providerId,
      this.name.value,
      this.id.value
    );
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <div>
          Login service provider:
          <select
            value={this.props.login.serviceProvider}
            onChange={this.handleService}>
            <option value="default" disabled>Choose Provider</option>
            <option value="facebook">Facebook</option>
            <option value="google">Google</option>
            <option value="twitter">Twitter</option>
          </select>
          <div>
            Username:
            <input
              type="text"
              onInput={this.handleUsername}
              value={this.props.login.providerId}
            />
          </div>
          <div>
            Tell us how your login went:
            <select
              value={this.props.login.loginSuccess}
              onChange={this.handleLoginSuccess}>
              <option value="true">Success</option>
              <option value="false">Failure</option>
            </select>
          </div>
          <div>
            <input type="button" value="Login" onClick={this.login} />
          </div>
        </div>

        {(this.props.error.code === 403 || this.props.error.code === 412) &&
          <div>
            <h3>Registration</h3>
            <div>
              State your name:
              <input type="text" ref={input => (this.name = input)} />
            </div>
            <div>
              Also, a fancy display/user name:
              <input type="text" ref={input => (this.id = input)} />
            </div>
            <div>
              <input type="button" value="Register" onClick={this.register} />
              {this.props.error.code === 412 &&
                <div>{this.props.error.message}</div>}
            </div>
          </div>}

      </div>
    );
  }
}

export default connect(Login, state => ({
  auth: state.auth,
  login: state.login,
  user: state.user,
  error: state.error
}));
