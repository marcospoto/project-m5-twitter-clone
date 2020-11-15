import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import moment from "moment";
import styled from "styled-components";
import ActionBar from "./ActionBar";

export const SingleTweet = ({ userName, numLikes, isLiked }) => {
  const { tweetId } = useParams();
  const [tweetDetails, setTweetDetails] = useState(null);
  let history = useHistory();

  const handleClickProfile = (e) => {
    history.push(`/${userName}`);
  };

  useEffect(() => {
    fetch(`/api/tweet/${tweetId}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json.tweet.media.url);
        setTweetDetails(json.tweet);
      });
  }, [tweetId]);

  return (
    <Wrapper>
      <Body>
        <Header>
          <Avatar src={tweetDetails?.author?.avatarSrc} />
          <Name onClick={handleClickProfile}>
            <DisplayName>{tweetDetails?.author?.displayName}</DisplayName>
            <Username>@{tweetDetails?.author?.handle}</Username>
          </Name>
        </Header>
        <TweetContents>{tweetDetails?.status}</TweetContents>
        {tweetDetails?.media?.map((media, index) => {
          if (media.type === "img")
            return (
              <Photo
                src={media?.url}
                alt={`Image for ${tweetDetails?.status}`}
                key={`img-order-${index}`}
              />
            );
        })}
        <Timestamp>
          {moment(new Date(tweetDetails?.timestamp)).format("LT · ll")}
        </Timestamp>
        <ActionBar numLikes={numLikes} isLiked={isLiked} tweetId={tweetId} />
      </Body>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background: white;
  width: 580px;
  padding: 16px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", sans-serif;
  display: flex;
`;

const Header = styled.header`
  display: flex;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;
const Name = styled.div`
  margin-left: 15px;
  flex: 1;
  cursor: pointer;
`;
const Body = styled.div`
  flex: 1;
  margin-left: 14px;
`;

const DisplayName = styled.div`
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
`;

const Username = styled.div`
  font-size: 15px;
  line-height: 20px;
  color: rgb(101, 119, 134);
`;

const Timestamp = styled.div`
  color: rgb(101, 119, 134);
  font-size: 16px;
  padding-bottom: 16px;
  margin-left: 10px;
`;

const TweetContents = styled.div`
  font-size: 18px;
  padding: 5px;
  cursor: pointer;
`;
const Photo = styled.img`
  width: 100%;
  margin-top: 10px;
  border-radius: 5%;
`;
