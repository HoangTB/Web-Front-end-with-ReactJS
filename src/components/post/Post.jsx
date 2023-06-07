import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import "./Post.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Detail from "../detail/Detail";
import { Link } from "react-router-dom";

const Post = (props) => {
  const [isShow, setIsShow] = useState(false);
  const [isFavorite2, setIsFavorite2] = useState(false);
  const handelClose = () => {
    setIsShow(false);
  };
  const handleFavoriteClick2 = () => {
    setIsFavorite2(!isFavorite2);
  };
  return (
    <div className="post">
      {isShow && (
        <Detail
          dataDetail={props.data}
          handelClose={handelClose}
          handleFavoriteClick2={handleFavoriteClick2}
          isFavorite2={isFavorite2}
        />
      )}
      <Link className="post-header" to={`/profile/${props.data.id}`}>
        <div className="post-headerAuthor">
          <Avatar style={{ marginRight: "10px" }} className="post-img-name">
            {props.data.user.charAt(0).toUpperCase()}
          </Avatar>{" "}
          {props.data.user} • <span>1d</span>
        </div>
        <MoreHorizIcon />
      </Link>
      <div className="post-image">
        <img src={props.data.image} alt="Post Image" />
      </div>
      <div className="post-footer">
        <div className="post-footerIcons">
          <div className="post-iconsMain">
            {isFavorite2 ? (
              <FavoriteIcon
                className="postIcon active"
                onClick={handleFavoriteClick2}
              />
            ) : (
              <FavoriteBorderIcon
                className="postIcon"
                onClick={handleFavoriteClick2}
              />
            )}
            <ChatBubbleOutlineIcon
              className="postIcon"
              onClick={() => setIsShow(true)}
            />
            <TelegramIcon className="postIcon" />
          </div>
          <div className="post-iconSave">
            <BookmarkBorderIcon className="postIcon" />
          </div>
        </div>
        <div className="like">{props.data.like} likes</div>
        <div className="post-userContent">
          <b>{props.data.user}:</b> {props.data.content}
        </div>
      </div>
    </div>
  );
};

export default Post;
