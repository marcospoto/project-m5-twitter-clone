import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Sidebar from "./Sidebar";
import { HomeFeed } from "./HomeFeed";

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
        <Route exact path="/:profileId"></Route>
      </Switch>
    </Router>
  );
};

export default App;
