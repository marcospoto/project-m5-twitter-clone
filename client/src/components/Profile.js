import React, { useEffect, useState, useContext } from "react";
import { useCurrentUser } from "./CurrentUserContext";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { FiCalendar } from "react-icons/fi";
import moment from "moment";
import { COLORS } from "../constants";

export const Profile = () => {
  const [userProfile, setUserProfile] = useState({});
  const { currentUser } = useCurrentUser();
  const { profileId } = useParams();

  console.log(currentUser);

  return (
    <Wrapper>
      <Banner src={currentUser.bannerSrc} />
      <Header>
        <Avatar src={currentUser.avatarSrc} />
      </Header>
      <div>
        <DisplayName>{currentUser.displayName}</DisplayName>
        <Username>@{currentUser.handle}</Username>
        <Bio>{currentUser.bio}</Bio>

        <LocationJoined>
          <Text>
            <GrLocation />
            <p>{currentUser.location}</p>
          </Text>{" "}
          <Text>
            <FiCalendar />
            <p>
              Joined {moment(new Date(currentUser.joined)).format("MMMM YYYY")}
            </p>
          </Text>
        </LocationJoined>

        <FollowContainer>
          <Following>
            <span>{currentUser.numFollowing} </span>Following
          </Following>
          <Followers>
            <span>{currentUser.numFollowers}</span> Followers
          </Followers>
        </FollowContainer>
      </div>
      <TabContainer>
        <TabBox className="selected" tabIndex="0">
          <p>Tweets</p>
        </TabBox>
        <TabBox tabIndex="0">
          <p>Media</p>
        </TabBox>
        <TabBox tabIndex="0">
          <p>Likes</p>
        </TabBox>
      </TabContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Banner = styled.img`
  width: 100%;
  min-height: 100px;
`;
const Header = styled.div`
  height: 75px;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Avatar = styled.img`
  border-radius: 50%;
  position: absolute;
  height: 150px;
  width: 150px;
  top: -75px;
  left: 15px;
  border: 3px solid #fff;
`;

const DisplayName = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Username = styled.div`
  padding: 5px 0 22px 0;
  color: #666;
  font-size: 14px;
`;

const Bio = styled.div`
  font-weight: bold;
`;

const LocationJoined = styled.div`
  display: flex;
  padding: 15px 0;
`;

const Text = styled.div`
  display: flex;
  color: #666;
  padding-right: 15px;
  p {
    padding: 0 7px;
  }
`;

const FollowContainer = styled.div`
  display: flex;
`;

const Following = styled.div`
  span {
    font-weight: bold;
  }
`;

const Followers = styled.div`
  margin-left: 20px;
  span {
    font-weight: bold;
  }
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .selected {
    border-bottom: 2px solid ${COLORS.primary};
    color: ${COLORS.primary};
  }
`;

const TabBox = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 700;
  padding: 20px 0;
  cursor: pointer;
  &:focus {
    outline-color: ${COLORS.focused};
  }
`;
