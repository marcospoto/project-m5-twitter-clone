import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./Sidebar";
import { HomeFeed } from "./HomeFeed";
import { Profile } from "./Profile";
import { SingleTweet } from "./SingleTweet";

const App = () => {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <HomeFeed />
        </Route>
        <Route exact path="/notifications"></Route>
        <Route exact path="/bookmarks"></Route>
        <Route exact path="/tweet/:tweetId">
          <SingleTweet />
        </Route>
        <Route exact path="/:profileId">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
