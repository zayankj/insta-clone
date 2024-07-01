import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
function post({ user, postImg, likes, caption, timestamp }) {
  return (
    <div className="post">
      <div className="post-header">
        <div className="post-header-author">
          <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
          {user} • <span>{timestamp}</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post-image">
        <img src={postImg} alt="" />
      </div>
      <div className="post-footer">
        <div className="post-footer-icons">
          <div className="post-foote-mainIcon">
            <FavoriteBorderIcon className="postIcon" />
            <ChatBubbleOutlineIcon className="postIcon" />
            <TelegramIcon className="postIcon" />
          </div>
          <div className="post-IconSave">
            <BookmarkBorderIcon className="postIcon" />
          </div>
        </div>
        Liked by {likes} peoples
      </div>
    </div>
  );
}

export default post;

// import React from "react";
// import "./Post.css";
// function Post() {
//   return <div ></div>;
// }

// export default Post;
