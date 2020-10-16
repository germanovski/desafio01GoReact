import React from "react";
import PropTypes from "prop-types";
import PostHeader from "./PostHeader";
import "./../scss/Post.scss";

const Post = ({ avatar, author, time, text }) => (
  <div className="post">
    <PostHeader avatar={avatar} author={author} time={time} />
    <hr />
    <p className="postText">{text}</p>
  </div>
);

Post.propTypes = {
  avatar: PropTypes.string,
  author: PropTypes.string,
  time: PropTypes.string,
  text: PropTypes.string,
};

export default Post;
