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
        updateHomeFeed();
        setStatus("idle");
      });
  };

  const handleToggleLike = async (tweetId) => {
    const currentFeedWithLike = tweets.map((tweet) => {
      if (tweet.id === tweetId) {
        const isLikedToggled = !tweet.isLiked;
        const incOrDec = isLikedToggled ? 1 : -1;
        return {
          ...tweet,
          numLikes: tweet.numLikes + incOrDec,
          isLiked: !tweet.isLiked,
        };
      }
      return tweet;
    });

    setTweets(currentFeedWithLike);

    const raw = await fetch(`api/tweet/${tweetId}/like`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        like: currentFeedWithLike.find((tweet) => tweet.id === tweetId).isLiked,
      }),
    });
  };

  return (
    <TweetContext.Provider
      value={{
        tweets,
        setTweets,
        postTweet,
        handleToggleLike,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
