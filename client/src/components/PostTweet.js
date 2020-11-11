import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
import { useTweet } from "./TweetContext";

const PostTweet = () => {
  const { postTweet } = useTweet();

  const [count, setCount] = React.useState(280);
  const [post, setPost] = useState("");

  const handleChange = (value) => {
    setPost(value);
    setCount(280 - value.length);
  };

  return (
    <Wrapper>
      <PostForm
        type="text"
        placeholder="what's happening?"
        value={post}
        onChange={(e) => handleChange(e.target.value)}
      />
      <Footer>
        <Counter length={count}>{count}</Counter>
        <Button onClick={() => postTweet(post)}>Meow</Button>
      </Footer>
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
