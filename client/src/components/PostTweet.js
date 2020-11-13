import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
import { useTweet } from "./TweetContext";
import { useCurrentUser } from "./CurrentUserContext";

const PostTweet = () => {
  const { postTweet } = useTweet();
  const { status } = useCurrentUser();

  const [count, setCount] = React.useState(280);
  const [post, setPost] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = (value) => {
    setPost(value);
    setCount(280 - value.length);
  };

  useEffect(() => {
    if (count < 280) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [count]);

  return (
    <Wrapper>
      {status == "loading" ? (
        <div>loading...</div>
      ) : (
        <>
          <PostForm
            type="text"
            placeholder="what's happening?"
            value={post}
            onChange={(e) => handleChange(e.target.value)}
          />
          <Footer>
            <Counter length={count}>{count}</Counter>
            <Button disabled={isDisabled} onClick={() => postTweet(post)}>
              Meow
            </Button>
          </Footer>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 150px;
  border: 3px solid;
  border-radius: 5px;
  margin: auto;
  padding: 5px;
`;

const PostForm = styled.input`
  border: none;
  color: #464a5c;
  font-size: 16px;
  font-weight: 300;
  width: 100%;
  outline: none;
`;

const Footer = styled.div`
  display: flex;
  position: absolute;
  bottom: 8px;
  right: 16px;
`;

const Counter = styled.div`
  margin-right: 15px;
  color: ${({ length }) => {
    return length >= 55 ? "grey" : length < 0 ? "red" : "#cccc00";
  }};
`;

const Button = styled.button`
  border-radius: 18px;
  border-color: transparent;
  color: white;
  background-color: ${COLORS.primary};
  cursor: pointer;

  font-size: 10px;
  height: 25px;
  width: 70px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const Input = styled.div``;

const CharCountInput = styled.div``;

export default PostTweet;
