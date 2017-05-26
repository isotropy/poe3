import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { createStore } from "./store";
import App from "./app";

const rootEl = document.getElementById("container");

const store = createStore();

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl
  );

render(App(store));

if (module.hot) module.hot.accept("./app", () => render(App(store)));
