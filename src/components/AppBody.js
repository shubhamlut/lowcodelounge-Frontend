import React, { useEffect, useLayoutEffect, useState } from "react";
import VideoSection from "./VideoSection";
import "../styles/AppBody.css";
import { useLocation } from "react-router-dom";
const crudFunctions = require("../functions/crud");
const AppBody = () => {


  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const courseId = queryParams.get("courseId");
  //Hooks

  const [videosData, setVideosData] = useState([]);

  useEffect(() => {
    fetchAllCourseVideos();
  }, []);

  //Functions

  const fetchAllCourseVideos = async () => {
    const courseVideos = await crudFunctions.get(
      `http://localhost:5000/api/video/getCourseVideos/${courseId}`
    );
    setVideosData(courseVideos);
  };
  //API sample response
  // const videosData1 = [
  //   {
  //     videoName: "Unqork Zero to Expert | Introduction #1",
  //     videoThumbnail:
  //       "https://i.ytimg.com/vi/fszTmNhNtRQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA98Z8OE_07nVtnx8ATm8cNs2qStg",
  //     videoDescription:
  //       "Unqork is a no-code platform that allows users to build complex and scalable enterprise applications without writing a single line of code.",
  //     videoDuration: "15 mins",
  //     videoId: "fszTmNhNtRQ",
  //   },
  //   {
  //     videoName: "Unqork Zero to Expert | Introduction #1",
  //     videoThumbnail:
  //       "https://i.ytimg.com/vi/fszTmNhNtRQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA98Z8OE_07nVtnx8ATm8cNs2qStg",
  //     videoDescription:
  //       "Unqork is a no-code platform that allows users to build complex and scalable enterprise applications without writing a single line of code.",
  //     videoDuration: "15 mins",
  //     videoId: "xNRJwmlRBNU",
  //   },
  // ];
  //This useState and function is used to change the arror direction which is further used to open and close the menu
  const [arrowDirection, setArrowDirection] = useState("left");
  const toggleArrowDirection = (e) => {
    if (Array.from(e.target.classList).includes("fa-caret-left")) {
      setArrowDirection("right");
    } else {
      setArrowDirection("left");
    }
  };

  return (
    <div className="AppBody">
      <div className="actionArrow">
        <i
          className={`fa-solid fa-caret-${arrowDirection} fa-xl`}
          onClick={toggleArrowDirection}
        ></i>
      </div>
      {arrowDirection === "left" && <div className="menu">Menu Options</div>}

      <div className="content">
        {/* using map function to create multiple video sections based on API response */}
        {videosData.map((videoData) => {
          return (
            <VideoSection
              videoThumbnail={videoData.thumbnail}
              videoName={videoData.name}
              videoDesc={videoData.description}
              videoDuration={videoData.duration}
              videoId={videoData.videoId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AppBody;
