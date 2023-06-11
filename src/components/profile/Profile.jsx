import React, { useEffect, useRef, useState } from "react";
import "./Profile.css";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import Detail from "../detail/Detail";
import ListPosts from "../../api/ListPosts";
import { CallListPosts } from "../../redux/reducer/ListPostSlice";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import ConfirmDelete from "../modal-confirm/ConfirmDelete";
import Follows from "../../api/Follows";
import { CallFollows } from "../../redux/reducer/Follows";
import { ToastContainer, toast } from "react-toastify";

const Profile = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const listUsers = useSelector((state) => state.listUsers);
  const listPosts = useSelector((state) => state.listPosts);
  const listFollows = useSelector((state) => state.follows);
  const [isShow, setIsShow] = useState(false);
  const [isShowDel, setIsShowDel] = useState(false);
  const [data, setData] = useState({});
  const [isFavorite2, setIsFavorite2] = useState(data);
  const [dataDetail, setDataDetail] = useState([]);
  const [newData, setNewData] = useState({});
  const [isUpdate, setIsUpdate] = useState(false);
  const [follow, setFollow] = useState();
  const idDelete = useRef();
  const userMain = listUsers.find(
    (user) => Number(user.id) === Number(params.id));

  const userSub = listFollows?.filter(
    (follow) => Number(follow.userId) === Number(params.id)
  );

  const postMain = listPosts.filter(
    (post) => Number(post.userId) === Number(params.id)
  );

  const followMain = listFollows?.filter(
    (follow) => Number(follow.userId) === Number(users.id)
  );

  const handelClose = () => {
    setIsShow(false);
  };
  const handelCloseDel = () => {
    setIsShowDel(false);
  };
  useEffect(() => {
    setIsFavorite2(data.favorite);
  }, [data.favorite]);

  const handleFavoriteClick2 = () => {
    const newFavorite = !isFavorite2;
    setIsFavorite2(newFavorite);
    const favoriteUpdate = {
      favorite: newFavorite,
    };
    ListPosts.updateFavorite(data.id, favoriteUpdate).then();
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    setTimeout(() => {
      navigate("/login");
    }, 1000);
    toast.success("Logged out successfully!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  useEffect(() => {
    const handleUpdate = async () => {
      await dispatch(CallListPosts()).unwrap();
    };

    handleUpdate();
  }, [isFavorite2, isUpdate]);

  const handleDeletePost = (id) => {
    idDelete.current = id;
    setIsShowDel(true);
  };


  const handleFollow = () => {
    const indexUser = followMain[0]?.followId?.find(
      (item) => Number(item) === Number(userMain.id)
    );
    if (!indexUser) {

      const followForm = {
        userId: users?.id,
        followId: followMain.length === 0 ? [userMain?.id] : [...followMain[0]?.followId, userMain?.id],
      };

      Follows.addFollow(followForm).then(() => {
        dispatch(CallFollows()).unwrap();
      });
    } else {
      const newArray = followMain[0]?.followId?.filter(
        (item) => item !== indexUser
      );

      const followForm = {
        userId: users.id,
        followId: [...newArray],
      };
      Follows.addFollow(followForm).then(() => {
        dispatch(CallFollows()).unwrap();
      });
    }
  };
  const idFollowCheck = followMain[0]?.followId?.map((item) => item);


  return (
    <div className="profile">
      <ToastContainer />
      {isShow && (
        <Detail
          dataDetail={data}
          handelClose={handelClose}
          handleFavoriteClick2={handleFavoriteClick2}
          isFavorite2={isFavorite2}
        />
      )}
      {isShowDel && (
        <ConfirmDelete
          handelCloseDel={handelCloseDel}
          handleUpdate={() => setIsUpdate(!isUpdate)}
          idDelete={idDelete.current}
        />
      )}
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
                <button onClick={handleFollow}>
                  {idFollowCheck?.includes(Number(userMain?.id))
                    ? "Following"
                    : "Follow"}
                </button>
                <button className="disableds">Message</button>
                <button className="icon-add disableds">
                  <AiOutlineUserAdd />
                </button>
              </div>
            ) : (
              <div className="profile-button">
                <Link onClick={handleLogout} className="profile-logout">
                  Logout
                </Link>
              </div>
            )}
          </div>
          <ul className="profile-follow">
            <li>{postMain ? <b>{postMain.length}</b> : <b>0</b>} post</li>
            <li><b>{userSub[0]?.followId.length}</b> following</li>
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
      {/* <div className="profile-story">
        <div className="profile-story-wrapper">
          <div className="profile-story-item">
            <img
              className="profile-story-item-img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png"
              alt=""
            />
            <p className="profile-story-name">story name</p>
          </div>
        </div>
      </div> */}
      <div className="profile-navigation"></div>
      <div className="profile-content">
        {listPosts &&
          listPosts.map((post, index) => {
            if (userMain?.id === post.userId) {
              return (
                <div className="profile-profile" key={index}>
                  <img
                    src={post.image}
                    className="profile-image-contents"
                    onClick={() => {
                      setIsShow(true);
                      setData(post);
                    }}
                  />
                  {users.id === userMain.id && (
                    <RemoveCircleIcon
                      className="profile-icon-delete"
                      onClick={() => handleDeletePost(post.id)}
                    />
                  )}
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default Profile;
