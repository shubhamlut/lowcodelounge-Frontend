import React, { useEffect, useState } from "react";
import Grid from "./Grid";

import crudFuctions from "../functions/crud";

import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  //hooks

  useEffect(() => {
    fetchAllVideos();
  }, []);

  const [videoList, setVideoList] = useState([]);

  //   function to fetch all the videos
  const fetchAllVideos = async () => {
    const videos = await crudFuctions.get(
      "http://localhost:5000/api/video/getVideos"
    );

    // This is used to format the retrieved videoList from DB
    const formattedVideos = videos.map((video) => {
      return {
        VideoIndex: video.index,
        Name: video.name,
        Description: video.description,
        Duration: video.duration,
        VideoId: video.videoId,
        ThumbnailURL: video.thumbnail,
        CourseId: video.courseId,
        Action: "action",
      };
    });

    setVideoList(formattedVideos);
  };

  //function to fetch all the courses

  const fetchAllCourses = () => {};

  return (
    <div className="admindashboard">
      <h2>Admin Dashboard</h2>
      <div className="adminActionButtons">
        <button className="adminDashboardButton">Add Video</button>
      </div>
      <Grid data={videoList} />
    </div>
  );
};

export default AdminDashboard;
