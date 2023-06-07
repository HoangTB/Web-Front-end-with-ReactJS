import React from "react";
import "./Story.css";
import { useSelector } from "react-redux";
import { sampleSize } from "lodash";
import {Avatar} from '@mui/material';

const Story = () => {
  const listUsers = useSelector((state) => state.listUsers);
  const randomElements = sampleSize(listUsers, 10);
  return (
    <div className="story-wrapper">
      {listUsers &&
        randomElements.map((users, index) => {
          return (
            <div className="story-item" key={index}>
              <Avatar className="story-name">{users.user.charAt(0).toUpperCase()}</Avatar>
              <span className="story-item-name">{users.user}</span>
            </div>
          );
        })}
    </div>
  );
};

export default Story;
