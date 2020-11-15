import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";
import ActionBar from "./ActionBar";

const Tweet = ({
  avatar,
  displayName,
  userName,
  timestamp,
  status,
  media,
  tweetId,
  isLiked,
  numLikes,
}) => {
  let history = useHistory();

  const handleClickProfile = (e) => {
    history.push(`/${userName}`);
  };

  const handleClickToTweet = (e) => {
    history.push(`/tweet/${tweetId}`);
  };

  return (
    <Wrapper>
      <Avatar src={avatar} />
      <Body>
        <Header>
          <Name onClick={handleClickProfile}>
            <DisplayName>{displayName}</DisplayName>
            <Username>@{userName}</Username>
            <Timestamp>
              {moment(new Date(timestamp)).format("· MMM Do")}
            </Timestamp>
          </Name>
        </Header>
        <TweetContents onClick={handleClickToTweet}>{status}</TweetContents>
        {media?.map((media, index) => {
          if (media.type === "img")
            return (
              <Photo
                src={media.url}
                alt={`Image for ${status}`}
                key={`img-order-${index}`}
              />
            );
        })}
        <Footer>
          <ActionBar numLikes={numLikes} isLiked={isLiked} tweetId={tweetId} />
        </Footer>
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  width: 580px;
  padding: 16px;
  text-align: left;
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
  flex: 1;
  display: flex;
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
  margin-left: 10px;
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

const Footer = styled.footer``;

export default Tweet;
