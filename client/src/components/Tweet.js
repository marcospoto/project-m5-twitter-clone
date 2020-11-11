import React from "react";
import styled from "styled-components";
import { FiUpload } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";

const Tweet = ({ avatar, displayName, userName, date, status, media }) => {
  const ref = React.useRef(null);
  return (
    <Wrapper>
      <br></br>
      <Avatar src={avatar} />
      <Body>
        <Header>
          <Name>
            <DisplayName>{displayName}</DisplayName>
            <Username>@{userName}</Username>
            <Date>{date}</Date>
          </Name>
        </Header>
        <TweetContents>
          {status}
          <br></br>
          <Photo src={media[0]?.url} />
        </TweetContents>

        <Footer>
          <Stats>
            <FaRegComment />
            <AiOutlineRetweet />
            <BiHeart />
            <FiUpload />
            {/* <StatCount>{numOfRetweets}</StatCount> */}
            {/* <StatType>Retweets</StatType> */}
            {/* <StatCount>{numOfLikes}</StatCount> */}
            {/* <StatType>Likes</StatType> */}
          </Stats>
          {/* <ActionBar /> */}
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

const Date = styled.div`
  color: rgb(101, 119, 134);
  font-size: 16px;
  padding-bottom: 16px;
  margin-left: 10px;
`;

const TweetContents = styled.div`
  font-size: 18px;
  padding: 16px 0;
`;
const Photo = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const Footer = styled.footer``;

const Stats = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 48px;
`;

const StatCount = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

const StatType = styled.span`
  color: rgb(101, 119, 134);
  margin-right: 30px;
`;

export default Tweet;
