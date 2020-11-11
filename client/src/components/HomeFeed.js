import Tweet from "./Tweet";
import React, { useEffect, useState, useContext } from "react";
import { useTweet } from "./TweetContext";
import moment from "moment";
import styled from "styled-components";
import PostTweet from "./PostTweet";

export const HomeFeed = () => {
  const { tweets } = useTweet();
  const date = moment().format("h:mm a - MMM Do, YYYY");

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
              date={tweet?.timestamp}
              status={tweet?.status}
              media={tweet?.media}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
