import React, { useEffect, useState } from "react";
import "./Profile.css";
import { AiOutlineAppstoreAdd, AiOutlineUserAdd } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import Detail from "../detail/Detail";

const Profile = (props) => {
  const params = useParams();
  const users = useSelector((state) => state.users);
  const listUsers = useSelector((state) => state.listUsers);
  const listPosts = useSelector((state) => state.listPosts);
  const [isShow, setIsShow] = useState(false);
  const [data, setData] = useState(null);
  const userMain = listUsers.find(
    (user) => Number(user.id) === Number(params.id)
  );

  const handelClose = () => {
    setIsShow(false);
  };
  return (
    <div className="profile">
      {isShow && <Detail dataDetail={data} handelClose={handelClose} />}
      <header className="profile-header">
        <div className="profile-header-img">
          <Avatar className="profile-icon">
            {userMain?.user?.toUpperCase()}
          </Avatar>
        </div>
        <section className="profile-header-content">
          <div className="profile-header-title">
            <a>{userMain?.user}</a>
            {users?.id !== userMain?.id ? (
              <div className="profile-button">
                <button>Following</button>
                <button>Message</button>
                <button className="icon-add">
                  <AiOutlineUserAdd />
                </button>
              </div>
            ) : (
              <div className="profile-button">
                <Link to="/login" className="profile-logout">
                  Logout
                </Link>
              </div>
            )}
          </div>
          <ul className="profile-follow">
            <li>
              <b>20,431</b> post
            </li>
            <li>
              <b>1M</b> follower
            </li>
            <li>
              <b>10M</b> following
            </li>
          </ul>
          <div className="profile-header-footer">
            <h3>{userMain?.fullname}</h3>
            <p className="profile-title-chill">
              Get your Official Membership for 2023/24 now!
            </p>
            <p className="profile-title-chill">Followed by ...</p>
          </div>
        </section>
      </header>
      <div className="profile-story">
        <div className="profile-story-wrapper">
          <div className="profile-story-item">
            <img
              className="profile-story-item-img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="profile-navigation">
        <a href="#">
          <AiOutlineAppstoreAdd /> POST
        </a>
        <a href="#">REELS</a>
        <a href="#">GUIDES</a>
        <a href="#">TAGGED</a>
      </div>
      <div className="profile-content">
        {listPosts &&
          listPosts.map((post, index) => {
            if (userMain?.id === post.userId) {
              return (
                <div className="profile-profile">
                  <img src={post.image} className="profile-image-contents" onClick={() => {
                    setIsShow(true)
                    setData(post)
                  }} />
          
                </div>

              );
            }
          })}
      </div>
    </div>
  );
};

export default Profile;
