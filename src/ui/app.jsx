import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import Profile from "./components/profile";
import Write from "./components/write";
import Explore from "./components/explore";
import Tags from "./components/tags";
import Menu from "./components/common/menu";

export default store => () => (
  <Provider store={store}>
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/write" component={Write} />
            <Route exact path="/" component={Explore} />
            <Route exact path="/tags" component={Tags} />
          </Switch>
          <Menu />
        </div>
      </Router>
    </div>
  </Provider>
);
