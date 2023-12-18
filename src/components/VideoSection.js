import React from "react";

import "../styles/VideoSection.css";
import { useNavigate } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";


const VideoSection = ({
  videoThumbnail,
  videoName,
  videoDesc,
  videoDuration,
  videoId,
}) => {
  const navigate = useNavigate();
  const handleActionClick = (videoId) => {
    console.log(videoId);
    navigate(`/videoPlayer?url=${videoId}`);
  };
  return (
    <div
      className="VideoSection"
      onClick={() => {
        handleActionClick(videoId);
      }}
    >
      <div className="vdoSectionColOne">
        <img src={videoThumbnail} alt="Image" />
      </div>
      <div className="vdosectionColtwo">
        <div className="videoName">{videoName}</div>
        <div className="videoDesc">{videoDesc}</div>
        <div className="videoMetadata">
          <div className="authorName">{videoDuration}</div>
          {/* <div className="ratings">4.9 (193,555)</div>
            <div className="otherDetails">68.5 total hours | 320 Lectures | All Levels</div> */}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
