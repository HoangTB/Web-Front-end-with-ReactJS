import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import "./Suggested.css";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { sampleSize } from "lodash";

const Suggested = () => {
  const users = useSelector((state) => state.users);
  const listUsers = useSelector((state) => state.listUsers);
  const randomElements = sampleSize(listUsers, 5);
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
          <button className="follow-button">Switch</button>
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
              <button className="follow-button">Follow</button>
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
