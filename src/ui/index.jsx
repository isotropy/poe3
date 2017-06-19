import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { createStore } from "redux-jetpack";
import initialState from "./initial-state";
import * as exploreActions from "./actions/explore";
import App from "./app";

const rootEl = document.getElementById("container");

const store = createStore(initialState);

//WTF!
delete AppContainer.prototype.unstable_handleError;

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl
  );

render(App(store));
// exploreActions.getLatest();

if (module.hot) module.hot.accept("./app", () => render(App(store)));
