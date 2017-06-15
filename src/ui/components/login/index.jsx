import React, { Component } from "react";
import { connect } from "redux-jetpack";
import * as loginActions from "../../actions/login";
import * as registrationActions from "../../actions/registration";

class Login extends Component {
  userName = "";
  name = "";

  constructor(props) {
    super(props);
    this.handleService = this.handleService.bind(this);
    this.handleLoginSuccess = this.handleLoginSuccess.bind(this);
    this.login = this.login.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);
    this.register = this.register.bind(this);
    this.closeRegisterModal = this.closeRegisterModal.bind(this);
  }

  componentWillMount() {
    if (this.props.loggedIn) this.props.history.push("/");
    this.setState({
      serviceProvider: "default",
      openLoginModal: false,
      openRegistrationModal: false,
      loginSuccess: false
    });
  }

  componentDidUpdate() {
    if (this.props.loggedIn) this.props.history.push("/");
    if (this.props.requiresRegistration)
      this.setState({
        openRegistrationModal: true,
        openLoginModal: false
      });
  }

  handleService(e) {
    this.setState({
      serviceProvider: e.target.value,
      openLoginModal: true
    });
  }

  handleLoginSuccess(e) {
    this.setState({
      loginSuccess: e.target.value
    });
  }

  login() {
    this.setState({ userName: this.userName.value })
    loginActions.login(
      this.state.loginSuccess,
      this.state.serviceProvider,
      this.userName.value
    );
  }

  closeLoginModal() {
    this.setState({
      openLoginModal: false
    });
  }

  closeRegisterModal() {
    this.setState({
      openRegisterModal: false
    });
  }

  register() {
    registrationActions.register(
      this.state.serviceProvider,
      this.state.userName.value,
      this.name.value
    );
  }

  render() {
    return (
      <div>

        <h3>Login</h3>
        <div>
          Login service provider:
          <select
            value={this.state.serviceProvider}
            onChange={this.handleService}>
            <option value="default" disabled>Choose Provider</option>
            <option value="facebook">Facebook</option>
            <option value="google">Google</option>
            <option value="twitter">Twitter</option>
          </select>
        </div>

        {this.state.openLoginModal &&
          <div>
            <div>
              Username:
              <input type="text" ref={input => (this.userName = input)} />
            </div>
            <div>
              Tell us how your login went:
              <select
                value={this.state.loginSuccess}
                onChange={this.handleLoginSuccess}>
                <option value="true">Success</option>
                <option value="false">Failure</option>
              </select>
            </div>
            <div>
              <input
                type="button"
                value="Login"
                onClick={this.login}
              />
              <input
                type="button"
                value="Cancel"
                onClick={this.closeLoginModal}
              />
            </div>
          </div>}

        {this.state.openRegistrationModal &&
          <div>
            <h3>Registration</h3>
            <div>
              State your name:
              <input type="text" ref={input => (this.name = input)} />
            </div>
            <div>
              <input
                type="button"
                value="Register"
                onClick={this.register}
              />
              <input
                type="button"
                value="Cancel"
                onClick={this.closeRegisterModal}
              />
            </div>
          </div>}

      </div>
    );
  }
}

export default connect(Login, state => state.auth);
