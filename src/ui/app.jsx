import React from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Route from "./components/auth-route";
import { Provider } from "react-redux";
import Login from "./components/login";
import Home from "./components/home";
import Explore from "./components/explore";
import Post from "./components/posts";
import Profiles from "./components/profiles";
import Write from "./components/write";
import MyProfile from "./components/my-profile";
import Tags from "./components/tags";
import Menu from "./components/menu";

export default store => () =>
  <Provider store={store}>
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Explore} />
            <Route path="/login" component={Login} />
            <Route path="/write" component={Write} />
            <Route path="/home" component={Home} />
            <Route path="/explore" component={Explore} />
            <Route path="/posts/:postId" component={Post} />
            <Route path="/profile/:profile" component={Profiles} />
            <Route path="/profile" component={MyProfile} />
            <Route exact path="/tags" component={Tags} />
          </Switch>
          <Menu />
        </div>
      </Router>
    </div>
  </Provider>;
