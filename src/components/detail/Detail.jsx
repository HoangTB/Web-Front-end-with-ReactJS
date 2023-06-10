import React, { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { Avatar } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { MdModeEditOutline } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import "./Detail.css";
import { useDispatch, useSelector } from "react-redux";
import ListPosts from "../../api/ListPosts";
import { CallListPosts } from "../../redux/reducer/ListPostSlice";
import ConfirmNull from "../modal-confirm/ConfirmNull";
import Comments from "../../api/Comments";
import { CallComments } from "../../redux/reducer/CommentSlice";

const Detail = (props) => {
  const dataDetail = props.dataDetail;
  const comments = useSelector((state) => state.comments);
  const users = useSelector((state) => state.users);
  const listUsers = useSelector((state) => state.listUsers);
  const userDetail = listUsers.find((user) => user.id === dataDetail.userId);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isCheckIcon, setCheckIcon] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [textEdit, setTextEdit] = useState(dataDetail.content);
  const [editable, setEditable] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isShowFormNull, setIsShowFormNull] = useState(false);
  const dispatch = useDispatch();
  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };
  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };
  const handlePost = () => {
    const commentForm = {
      commentId: dataDetail.id,
      userId: dataDetail.userId,
      content: commentText,
      user: users.user
    };
    Comments.addComments(commentForm).then(() => {
      dispatch(CallComments()).unwrap();

    });
    setCommentText('');
  };
  const handleChangeEditPost = (e) => {
    setTextEdit(e.target.value);
  };

  const handleEdit = () => {
    setEditable(true);
  };

  const handleUpdate = () => {
    const contentUpdate = {
      content: textEdit,
    };
    if (textEdit !== "" && textEdit !== null) {
      ListPosts.updatePost(dataDetail.id, contentUpdate).then(() => {
        setIsUpdate(!isUpdate);
      });
    } else {
      setIsShowFormNull(!isShowFormNull);
    }
  };

  const handleCloseForm = () => {
    setIsShowFormNull(!isShowFormNull);
  };

  useEffect(() => {
    const handleUpdatePost = async () => {
      await dispatch(CallListPosts()).unwrap();
    };
    handleUpdatePost();
  }, [isUpdate]);
  return (
    <div className="modal-detail">
      {isShowFormNull && <ConfirmNull handleCloseForm={handleCloseForm} />}
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
              <Avatar className="detail-from-user">
                {dataDetail.user || userDetail.user}
              </Avatar>
              <div className="detail-name-content">
                <p className="detail-form-name">
                  {dataDetail.user || userDetail.user}:
                </p>
                <input
                  className="detail-content"
                  value={textEdit}
                  style={{ width: "280px" }}
                  onChange={handleChangeEditPost}
                  readOnly={!editable}
                />

                {!isCheckIcon
                  ? users.id === userDetail.id && (
                    <MdModeEditOutline
                      className="detail-edit"
                      onClick={() => {
                        setCheckIcon(!isCheckIcon);
                        handleEdit();
                      }}
                    />
                  )
                  : users.id === userDetail.id && (
                    <AiOutlineCheck
                      className="detail-edit"
                      onClick={() => {
                        setCheckIcon(!isCheckIcon);
                        handleUpdate();
                      }}
                    />
                  )}
              </div>
            </div>
            <div className="comment">
              {comments && comments.map((item, index) => {
                if (item.commentId === dataDetail.id) {
                   
                  return (
                    <div className="comment-user">
                      <Avatar className="detail-from-user2">{item.user.charAt(0).toUpperCase()}</Avatar>
                      <span className="detail-form-name2">{item.user}</span>
                      <span className="detail-form-content">{item.content}</span>
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
                  )

                }
              })}

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
              </div>
              <textarea
                placeholder="Add a comment..."
                className="detail-textarea"
                onChange={handleCommentChange}
                value={commentText}
              ></textarea>
              <button className="detail-post" onClick={handlePost}>
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
