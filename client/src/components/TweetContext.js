import React, { useEffect, useState, createContext, useContext } from "react";

export const TweetContext = createContext(null);

export const useTweet = () => {
  return useContext(TweetContext);
};

export const TweetProvider = ({ children }) => {
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

  const updateHomeFeed = (newPost) => {
    setTweets([newPost, ...tweets]);
  };

  const postTweet = (post) => {
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
      .then((data) => {
        updateHomeFeed(data.tweet);
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
