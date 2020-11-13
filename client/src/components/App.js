import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Sidebar from "./Sidebar";
import { HomeFeed } from "./HomeFeed";
import { Profile } from "./Profile";

const App = () => {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <HomeFeed exact path="/">
          Home
        </HomeFeed>
        <Route exact path="/notifications"></Route>
        <Route exact path="/bookmarks"></Route>
        <Route exact path="/tweet/:tweetId"></Route>
        <Profile exact path="/:profileId"></Profile>
      </Switch>
    </Router>
  );
};

export default App;
