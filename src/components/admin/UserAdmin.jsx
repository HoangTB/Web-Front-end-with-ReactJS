import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import "./UserAdmin.css";
import SlideBar from "./SliceBar";
import { useDispatch, useSelector } from "react-redux";
import ListUsers from "../../api/ListUsers";
import { CallListUsers } from "../../redux/reducer/ListUsersSlice";
const UserAdmin = () => {
  const listUsers = useSelector((state) => state.listUsers);
  const UserAdmin = JSON.parse(localStorage.getItem("users"));
  const [idActive, setIdActive] = useState("");
  const [isActive, setIsActive] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();

  const handleIsActive = (id) => {
    const active = listUsers.find((user) => user.id === id);
    setIdActive(active);
    if (Number(active.active) === 2) {
      setIsActive(1);
    } else {
      setIsActive(2);
    }
    setIsUpdate(!isUpdate);
  };

  useEffect(() => {
    if (idActive) {
      const dataApi = {
        idActive,
        isActive,
      };
      ListUsers.updateUsers(dataApi).then(() => {
        dispatch(CallListUsers()).unwrap();
        setIdActive("");
        setIsActive("");
      });
    }
  }, [isUpdate]);

  return (
    <div className="content-user">
      <SlideBar />
      <div className="table-content">
        <div className="wrapper-title">
          <i class="fa-solid fa-arrow-right"></i>
          <h1 className="title-page">ADMIN PAGES</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID User</th>
              <th>UserName</th>
              <th>FullName</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {listUsers.map((users, index) => {
              return (
                <tr key={index}>
                  <td>{users.id}</td>
                  <td>{users.user}</td>
                  <td>{users.fullname}</td>
                  <td>{users.email}</td>
                  <td>
                    {users.admin === 2 ? (
                      users.active === 2 ? (
                        <button
                          className="rule-status"
                          onClick={() => handleIsActive(users.id, users)}
                        >
                          Active
                        </button>
                      ) : (
                        <button
                          className="rule-status block"
                          onClick={() => handleIsActive(users.id, users)}
                        >
                          Block
                        </button>
                      )
                    ) : (
                      <button className="rule-status admin">Amin</button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserAdmin;
