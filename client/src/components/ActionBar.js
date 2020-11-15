import { useTweet } from "./TweetContext";
import styled from "styled-components";
import { BiHeart } from "react-icons/bi";
import { FiUpload } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";

const ActionBar = ({ tweetId, isLiked, numLikes }) => {
  const { handleToggleLike } = useTweet();

  return (
    <Wrapper>
      <IconAndNum>
        <ReplyButton>
          <FaRegComment />
        </ReplyButton>
      </IconAndNum>
      <IconAndNum>
        <RetweetButton>
          <AiOutlineRetweet />
        </RetweetButton>
      </IconAndNum>
      <IconAndNum>
        {numLikes}
        <LikeButton
          onClick={() => {
            handleToggleLike(tweetId);
          }}
          color="red"
          size={40}
        >
          <BiHeart />
        </LikeButton>
      </IconAndNum>
      <IconAndNum>
        <ShareButton>
          <FiUpload />
        </ShareButton>
      </IconAndNum>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 100;
  padding: 10px 0;
`;

const IconButton = styled.button`
  border: none;
  color: #666;
  font-size: 21px;
  padding: 9px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  transition: all 0.15s ease-in-out;
  &:focus {
    outline: none;
  }
`;

const ReplyButton = styled(IconButton)`
  &:hover {
    color: rgb(27, 149, 224);
    background: rgba(27, 148, 224, 0.05);
  }
  &:focus {
    background: rgba(27, 148, 224, 0.05);
    color: rgb(27, 149, 224);
  }
`;
const RetweetButton = styled(IconButton)`
  color: ${(props) => (props.isRetweeted ? "rgb(23, 191, 99)" : "#666")};
  &:hover {
    color: rgb(23, 191, 99);
    background: rgba(23, 191, 99, 0.05);
  }
  &:focus {
    background: rgba(23, 191, 99, 0.05);
    color: rgb(23, 191, 99);
  }
`;
const LikeButton = styled(IconButton)`
  color: ${(props) => (props.isLiked ? "rgb(224, 36, 94)" : "#666")};
  &:hover {
    color: rgb(224, 36, 94);
    background: rgba(224, 36, 94, 0.05);
  }
  &:focus {
    background: rgba(224, 36, 94, 0.05);
    color: rgb(224, 36, 94);
  }
`;
const ShareButton = styled(IconButton)`
  &:hover {
    color: rgb(27, 149, 224);
    background: rgba(27, 149, 224, 0.05);
  }
  &:focus {
    color: rgb(27, 149, 224);
    background: rgba(27, 149, 224, 0.05);
  }
`;

const IconAndNum = styled.div`
  display: flex;
  align-items: center;
  width: 75px;
  span {
    font-weight: 700;
  }
`;

export default ActionBar;
