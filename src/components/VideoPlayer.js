import React, { useEffect, useState } from "react";
import "../styles/VideoPlayer.css";
import { useLocation, useNavigate } from "react-router-dom";

import Navbar from "./Navbar";
import Notes from "./Notes";
import Comments from "./Comments";
import Footer from "./Footer";

import crudFuctions from "../functions/crud.js";

const VideoPlayer = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const courseId = queryParams.get("courseId");
  const videoIndex = queryParams.get("video");
  const totalVideos = queryParams.get("total");
  const navigate = useNavigate();
  //Hooks
  useEffect(() => {
    fetchVideo();
    console.log("useEffect");
  }, [videoIndex]);

  const [videoData, setVideoData] = useState("");

  //functions
  const fetchVideo = async () => {
    const videoData = await crudFuctions.get(
      `http://localhost:5000/api/video/getCourseVideos/${courseId}/${videoIndex}`
    );
    setVideoData(videoData[0]);
  };
  const handleVideoPlayerActionButtons = (e) => {
    let videoNumber = videoIndex;
    if (e.target.getAttribute("data-key") === "next") {
      videoNumber = parseInt(videoNumber) + 1;
      navigate(
        `/videoPlayer?courseId=${courseId}&total=${totalVideos}&video=${videoNumber}`
      );
    }
    if (e.target.getAttribute("data-key") === "previous") {
      videoNumber = parseInt(videoNumber) - 1;
      navigate(
        `/videoPlayer?courseId=${courseId}&total=${totalVideos}&video=${videoNumber}`
      );
    }
  };

  // Need to add some loading spinner
  if (!videoData) {
    return <div>Loading...</div>; // or some loading indicator
  }

  return (
    <>
      <Navbar />
      <div className="videoPlayerContainer">
        <div className="videoPlayer">
          <div className="videoContainer">
            <div className="videoFrame">
              <iframe
                width="1200"
                height="600"
                src={`https://www.youtube.com/embed/${videoData.videoId}`}
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
            <div className="videoNotes">
              <Notes videoId={videoData.videoId} key={videoData.videoId} />
            </div>
          </div>
            <div className="videoTitle">
              <h2>{videoData.name}</h2>
            </div>
          <div className="videoComments"></div>
        </div>
      </div>
      <div className="videoPlayerNavigationButtons">
        <div>
          <button
            data-key="previous"
            onClick={handleVideoPlayerActionButtons}
            className={`previousButton ${
                videoIndex==='1' ? "btnDisabledNav" : ""
            }`}
          >
            
            {`<< Previous`}
          </button>
        </div>
        <div>
          <button
            data-key="next"
            onClick={handleVideoPlayerActionButtons}
            className={`nextButton ${
              totalVideos===videoIndex ? "btnDisabledNav" : ""
            }`}
          >
            {`Next >>`}
          </button>
        </div>
      </div>
      <Comments videoId={videoData.videoId} key={videoData.videoId} />
    </>
  );
};

export default VideoPlayer;
