import React, { useEffect, useState } from "react";
import "./Timeline.css";
import Post from "../post/Post";
import Suggested from "../suggested/Suggested";
import Story from "../story/Story";
import { useSelector } from "react-redux";
import { sampleSize } from "lodash";

function Timeline() {
  const users = useSelector((state) => state.listUsers);
  const posts = useSelector((state) => state.listPosts);
  const [mainData, setMainData] = useState([]);
  useEffect(() => {
    function mergeArraysByUserId(array1, array2) {
      return array1.reduce((result, user) => {
        const matchingUser = array2.find((u) => u.id === user.userId);
        if (matchingUser) {
          result.push({ ...user, ...matchingUser });
        }
        return result;
      }, []);
    }
    setMainData(mergeArraysByUserId(posts, users));
  }, [posts, users]);
  
  const randomData = sampleSize(mainData, 20)
  return (
    <div className="timeline">
      <div className="timeline-left">
        <Story />
        <div className="timeline-posts">
          {randomData &&
            randomData.map((data, index) => {
              return <Post data={data} key={index} />;
            })}
        </div>
      </div>
      <div className="timeline-right">
        <Suggested />
      </div>
    </div>
  );
}

export default Timeline;
