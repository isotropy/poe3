import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "redux-jetpack";

const isAuthenticated = () => true;

const AuthRoute = ({ loggedIn, component: Component, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      loggedIn || props.location.pathname === "/login"
        ? <Component {...props} />
        : <Redirect to={{ pathname: "/login", state: { from: props.location } }} />}
  />;

export default connect(AuthRoute, state => state.auth);
