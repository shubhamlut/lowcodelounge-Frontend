import React, { useState } from "react";
import VideoSection from "./VideoSection";
import "../styles/AppBody.css";

const AppBody = () => {
  //API sample response
  const videosData = [
    {
      videoName: "Unqork Zero to Expert | Introduction #1",
      videoThumbnail:
        "https://i.ytimg.com/vi/fszTmNhNtRQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA98Z8OE_07nVtnx8ATm8cNs2qStg",
      videoDescription:
        "Unqork is a no-code platform that allows users to build complex and scalable enterprise applications without writing a single line of code.",
      videoDuration: "15 mins",
      videoId: "fszTmNhNtRQ",
    },
    {
      videoName: "Unqork Zero to Expert | Introduction #1",
      videoThumbnail:
        "https://i.ytimg.com/vi/fszTmNhNtRQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA98Z8OE_07nVtnx8ATm8cNs2qStg",
      videoDescription:
        "Unqork is a no-code platform that allows users to build complex and scalable enterprise applications without writing a single line of code.",
      videoDuration: "15 mins",
      videoId: "xNRJwmlRBNU",
    },
  ];
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
              videoThumbnail={videoData.videoThumbnail}
              videoName={videoData.videoName}
              videoDesc={videoData.videoDescription}
              videoDuration={videoData.videoDuration}
              videoId={videoData.videoId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AppBody;
