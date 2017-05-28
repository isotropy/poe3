import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./components/home";
import Explore from "./components/explore";
import Write from "./components/write";
import Profile from "./components/profile";
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
            <Route path="/home" component={Home} />
            <Route path="/explore" component={Explore} />
            <Route exact path="/" component={Explore} />
            <Route exact path="/tags" component={Tags} />
          </Switch>
          <Menu />
        </div>
      </Router>
    </div>
  </Provider>
);
