import React, { useEffect, useState, useContext } from "react";
import { useTweet } from "./TweetContext";
import styled from "styled-components";
import PostTweet from "./PostTweet";
import Tweet from "./Tweet";

export const HomeFeed = () => {
  const { tweets } = useTweet();

  return (
    <Wrapper>
      <div>
        <h2>Home</h2>
        <PostTweet />
        {tweets.map((tweet) => {
          return (
            <Tweet
              key={tweet?.id}
              avatar={tweet?.author?.avatarSrc}
              displayName={tweet?.author?.displayName}
              userName={tweet?.author?.handle}
              timestamp={tweet?.timestamp}
              status={tweet?.status}
              media={tweet?.media}
              tweetId={tweet?.id}
              isLiked={tweet?.isLiked}
              numLikes={tweet?.numLikes}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
