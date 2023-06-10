import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import "./Suggested.css";
import Footer from "../footer/Footer";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sampleSize } from "lodash";
import Follows from "../../api/Follows";
import { CallFollows } from "../../redux/reducer/Follows";

const Suggested = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const listUsers = useSelector((state) => state.listUsers);
  const randomElements = sampleSize(listUsers, 5);
  const listFollows = useSelector((state) => state.follows);
  const followMain = listFollows?.filter((follow) => Number(follow.userId) === Number(users.id));


  const handleFollow = (id) => {
    const indexUser = followMain[0]?.followId?.find((item) => Number(item) === Number(id));

    if (!indexUser) {
      const followForm = {
        userId: users.id,
        followId: [...followMain[0]?.followId, Number(id) ],
      };
      Follows.addFollow(followForm).then(() => {
        dispatch(CallFollows()).unwrap();

      });
    } else {
      const newArray = followMain[0]?.followId?.filter((item) => item !== indexUser);
      const followForm = {
        userId: users.id,
        followId: [...newArray],
      };
      Follows.addFollow(followForm).then(() => {
        dispatch(CallFollows()).unwrap();

      });
    }
  }
  const idFollowCheck = followMain[0]?.followId?.map((item) => item);

  return (
    <div className="suggestions">
      <div className="suggestions-usernames">
        <div className="suggestions-username">
          <Link className="username-left" to={`/profile/${users.id}`}>
            <span className="avatar">
              <Avatar className="icon-profile">
                {users.user.toUpperCase()}
              </Avatar>
            </span>
            <div className="username-info">
              <span className="username">{users.user}</span>
              <span className="relation">{users.fullname}</span>
            </div>
          </Link>
        
        </div>
        <div className="suggestions-title">Suggestions for you</div>
        {randomElements && randomElements.map((user, index) => {
        
          return (
            <div className="suggestions-username" key={index}>
              <Link className="username-left" to = {`/profile/${user.id}`}>
                <span className="avatar">
                  <Avatar className="avatar-users">{user.user}</Avatar>
                </span>
                <div className="username-info">
                  <span className="username">{user.user}</span>
                  <span className="relation">{user.fullname}</span>
                </div>
              </Link>
              <button className="follow-button" onClick={()=> handleFollow(user.id)}>{idFollowCheck?.includes(Number(user?.id)) ? "Following" : "Follow"}</button>
            </div>
          )
        })}




        <div className="content-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Suggested;
