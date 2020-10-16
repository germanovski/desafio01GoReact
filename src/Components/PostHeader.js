import React from "react";
import PropTypes from "prop-types";
import "./../scss/PostHeader.scss";

const PostHeader = ({ avatar, author, time }) => (
  <div className="postHeader">
    <div className="authorAvatar">
      <img src={avatar} width="64px"></img>
    </div>

    <div className="authorPost">
      <p className="author">{author}</p>
      <p className="postTime">{time}</p>
    </div>
  </div>
);

PostHeader.propTypes = {
  avatar: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default PostHeader;
