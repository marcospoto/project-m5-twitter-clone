import { ReactComponent as Logo } from "../assets/logo.svg";
import React, { useContext } from "react";

import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FiHome, FiUser, FiBookmark } from "react-icons/fi";
import { COLORS } from "../constants";
import { BsBell } from "react-icons/bs";
import { useCurrentUser } from "./CurrentUserContext";

const Sidebar = () => {
  const { currentUser } = useCurrentUser();

  return (
    <Wrapper>
      <StyledLogo src={Logo} />
      <Div>
        <FiHome />
        <NavigationLink exact to="/">
          Home
        </NavigationLink>
      </Div>
      <Div>
        <FiUser />
        <NavigationLink to={`/${currentUser.handle}`}>Profile</NavigationLink>
      </Div>
      <Div>
        <BsBell />
        <NavigationLink to="/notifications">Notifications</NavigationLink>
      </Div>
      <Div>
        <FiBookmark />
        <NavigationLink to="/bookmarks">Bookmarks</NavigationLink>
      </Div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  width: 580px;
  padding: 50px;
  display: flex;
  flex-direction: column;
`;

const StyledLogo = styled(Logo)`
  max-width: 50px;
`;
const Div = styled.span`
  display: inline;

  text-decoration: none;
  padding: 10px;
  :hover {
    color: purple;
    background: rgb(76, 0, 255, 0.2);
    border-radius: 20px;
  }
  &.active {
    color: ${COLORS.primary};
  }
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  margin-left: 13px;
`;

export default Sidebar;
