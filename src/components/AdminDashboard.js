import React, { useEffect, useState } from "react";
import Grid from "./Grid";

import crudFuctions from "../functions/crud";
import VideoUploadDetailForm from "./VideoUploadDetailForm";
import "../styles/AdminDashboard.css";
import EditModal from "./EditModal";

const AdminDashboard = () => {
  //hooks

  useEffect(() => {
    fetchAllVideos();
  }, []);

  const [videoList, setVideoList] = useState([]);
  const [addVideoModal, setAddVideoModal] = useState(false);

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
        _id: video._id,
      };
    });

    setVideoList(formattedVideos);
  };

  //function to fetch all the courses

  const fetchAllCourses = () => {};

  const addVideo = () => {
    setAddVideoModal(true);
  };

  const closeAddModal = () => {
    console.log("Close Upload")
    setAddVideoModal(false);
  };

  return (
    <div className="admindashboard">
      <h2>Admin Dashboard</h2>
      <div className="adminActionButtons">
        <button onClick={addVideo} className="adminDashboardButton">
          Add Video
        </button>
      </div>
      <Grid data={videoList} />

      {addVideoModal && (
        <EditModal
          VideoDetailForm={VideoUploadDetailForm}
          type="upload"
          closeAddVideoModal={closeAddModal}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
