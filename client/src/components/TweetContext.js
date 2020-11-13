import React, { useEffect, useState, createContext, useContext } from "react";
import { useCurrentUser } from "./CurrentUserContext";

export const TweetContext = createContext(null);

export const useTweet = () => {
  return useContext(TweetContext);
};

export const TweetProvider = ({ children }) => {
  const { setStatus } = useCurrentUser();
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetch(`api/me/home-feed`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setTweets(Object.values(data.tweetsById));
      });
  }, []);

  const updateHomeFeed = () => {
    fetch(`api/me/home-feed`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setTweets(Object.values(data.tweetsById));
      });
  };

  const postTweet = (post) => {
    setStatus("loading");
    fetch(`api/tweet`, {
      method: "POST",
      body: JSON.stringify({
        status: post,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        const { tweet } = json;
        console.log("hg", tweet);
        updateHomeFeed();
        setStatus("idle");
      });
  };

  return (
    <TweetContext.Provider
      value={{
        tweets,
        postTweet,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
