import React, { useState } from "react";
import "./FormCreate.css";
import { Avatar } from "@mui/material";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import ListPosts from "../../api/ListPosts";
import { CallListPosts } from "../../redux/reducer/ListPostSlice";
import ConfirmNull from "../modal-confirm/ConfirmNull";
const FormCreate = (props) => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users);
  const [img, setImg] = useState("");
  const [text, setText] = useState("");
  const [isShowFormNull, setIsShowFormNull] = useState(false);

  const handleChangePost = (e) =>{
    setText(e.target.value);
  }

  const handleShare = (e) => {
    const contentPost = {
      userId:  users.id,
      content: text,
      image: img,
      favorite:false,
    }
    if(text !== '' && text !== null && img !== "" && img !== null){
      ListPosts.addPosts(contentPost).then();
      dispatch(CallListPosts()).unwrap();
        props.handelClose();
    } else{
      setIsShowFormNull(!isShowFormNull);
    }
  
  }

  const handleCloseForm = () => {
    setIsShowFormNull(!isShowFormNull);
  };


  return (
    <div className="modal-create">
      {isShowFormNull && <ConfirmNull handleCloseForm={handleCloseForm} />}
      <div className="form-create">
        <AiFillCloseCircle
          className="icon-close"
          onClick={() => props.handelClose()}
        />
        <div className="create-title">
          <h3>Create new post</h3>
        </div>
        <div className="create-form">
          <div className="create-form-left">
            <input
              style={{ display: "none" }}
              id="img"
              onChange={(e) => {
                setImg("/" + String(e.target.value).slice(12));
              }}
              type="file"
             
            />
            <label style={{ width: '100%', height: '100%' }} htmlFor="img">
              <img
                style={{ height: "400px", width: "100%", objectFit: "cover", objectPosition: 'center', cursor:'pointer',  borderRadius:"5px"}}
                src={
                  img !== ""
                    ? img
                    : "https://blog.nscsports.org/wp-content/uploads/2014/10/default-img.gif"
                }
                alt=""
              />
            </label>
          </div>
          <div className="create-form-right">
            <div className="create-form-user">
              <Avatar className="create-from-user">{users.user}</Avatar>
              <span className="create-form-name">{users.user}</span>
            </div>
            <textarea placeholder="Write a caption..." className="create-textarea" onChange={handleChangePost} name="content"></textarea>
            <button className="create-from-share" onClick={handleShare}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCreate;
