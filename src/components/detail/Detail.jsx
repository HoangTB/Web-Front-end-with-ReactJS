import React, { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { Avatar } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Detail.css";
import { useSelector } from "react-redux";

const Detail = (props) => {
  const comments = useSelector((state) => state.comments);
  const users = useSelector((state) => state.users);
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };
  const dataDetail = props.dataDetail;

  console.log(props);
  const [commentText, setCommentText] = useState("");
  const handleCommentChange = () => {

   }
   const handlePost = () => {

    }
  return (
    <div className="modal-detail">
      <div className="form-detail">
        <AiFillCloseCircle
          className="icon-close"
          onClick={() => props.handelClose()}
        />
        <div className="detail-form">
          <div className="detail-form-left">
            <img src={dataDetail.image} className="detail-img" />
          </div>
          <div className="detail-form-right">
            <div className="detail-form-user">
              <Avatar className="detail-from-user">{dataDetail.user}</Avatar>
              <div className="detail-name-content">
                <p className="detail-form-name">{dataDetail.user}:</p>
                <p className="detail-content">{dataDetail.content}</p>
              </div>
            </div>
            <div className="comment">
              <div className="comment-user">
                <Avatar className="detail-from-user">aaa</Avatar>
                <span className="detail-form-name">aa</span>
                <span className="">this is comment...</span>
                {isFavorite ? (
                  <FavoriteIcon
                    className="comment-heart active"
                    onClick={handleFavoriteClick}
                  />
                ) : (
                  <FavoriteBorderIcon
                    className="comment-heart"
                    onClick={handleFavoriteClick}
                  />
                )}
              </div>
            </div>
            <div className="comment-footer">
              <div className="detail-footer">
                <div className="detail-footerIcons">
                  <div className="detail-iconsMain">
                    {props.isFavorite2 ? (
                      <FavoriteIcon
                        className="detailIcon active"
                        onClick={() => props.handleFavoriteClick2()}
                      />
                    ) : (
                      <FavoriteBorderIcon
                        className="detailIcon"
                        onClick={() => props.handleFavoriteClick2()}
                      />
                    )}

                    <ChatBubbleOutlineIcon className="detailIcon" />
                    <TelegramIcon className="detailIcon" />
                  </div>
                  <div className="detail-iconSave">
                    <BookmarkBorderIcon className="detailIcon" />
                  </div>
                </div>
                <div className="like">{dataDetail.like} likes</div>
              </div>
              <textarea
                placeholder="Add a comment..."
                className="detail-textarea"
                onChange={handleCommentChange}
                value={commentText}
              ></textarea>
              <button className="detail-post" onClick={handlePost}>Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
