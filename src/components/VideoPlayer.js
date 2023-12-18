import React from "react";
import "../styles/VideoPlayer.css";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Notes from "./Notes";
import Comments from "./Comments";
import Footer from "./Footer";

const VideoPlayer = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const videoId = queryParams.get("url");

  console.log(videoId);

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
                src={`https://www.youtube.com/embed/${videoId}`}
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
            <div className="videoNotes">
              <Notes />
            </div>
          </div>
          <div className="videoComments"></div>
        </div>
      </div>
      <Comments />
    </>
  );
};

export default VideoPlayer;
