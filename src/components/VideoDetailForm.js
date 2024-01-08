import React, { useState } from "react";
import crudFunctions from "../functions/crud";

const VideoDetailForm = ({ videoData, closeModal }) => {
  //Hooks

  const [videoObject, setVideoObject] = useState(videoData);

  const updateVideo = (id) => {
    let requestPayload = {
      name: videoObject.Name,
      description: videoObject.Description,
      duration: videoObject.Duration,
      videoId: videoObject.VideoId,
      thumbnail: videoObject.ThumbnailURL,
      courseId: videoObject.CourseId,
      index: videoObject.VideoIndex,
    };

    crudFunctions.update(
      `http://localhost:5000/api/video/updateVideo/${id}`,
      requestPayload,
      localStorage.getItem("token")
    );
  };
  const OnChangeVideoData = (e) => {
    setVideoObject((prevVideoDetail) => {
      const updatedVideoData = {
        ...prevVideoDetail,
        [e.target.name]: e.target.value,
      };

      return updatedVideoData;
    });
  };
  return (
    <div>
      <div className="editModalWrapper">
        <div className="editModalContainer">
          <div className="videoDetailsContainer">
            <div className="editModalHeader">
              <div className="editModalVdoName">
                <h3>{videoData.Name}</h3>
              </div>
              <button className="modal-close-button">
                <i onClick={closeModal} class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="vdoNameContainer">
              <label htmlFor="">Video Name</label>
              <div className="videoNameInputBox">
                <input
                  className="inputText"
                  name="Name"
                  value={videoObject.Name}
                  type="text"
                  onChange={OnChangeVideoData}
                />
              </div>
            </div>

            <div className="vdoDescContainer">
              <label htmlFor="">Description</label>
              <div className="videoDescInputBox">
                <textarea
                  name="Description"
                  value={videoObject.Description}
                  id=""
                  cols="65"
                  rows="10"
                  onChange={OnChangeVideoData}
                ></textarea>
              </div>
            </div>

            <div className="vdoDuraContainer">
              <label htmlFor="">Duration</label>
              <div className="videoDurationInputBox">
                <input
                  name="Duration"
                  value={videoObject.Duration}
                  className="inputText"
                  type="text"
                  onChange={OnChangeVideoData}
                />
              </div>
            </div>
            <div className="vdoThumContainer">
              <label htmlFor="">ThumbnailURL</label>
              <div className="videoThumbnailInputBox">
                <input
                  name="ThumbnailURL"
                  value={videoObject.ThumbnailURL}
                  className="inputText"
                  type="text"
                  onChange={OnChangeVideoData}
                />
              </div>
            </div>

            <div className="vdoCourseContainer">
              <label htmlFor="">CourseId</label>
              <div className="videoCourseInputBox">
                <input
                  name="CourseId"
                  value={videoObject.CourseId}
                  className="inputText"
                  type="text"
                  onChange={OnChangeVideoData}
                />
              </div>
            </div>
            <div className="vdoIdContainer">
              <label htmlFor="">Video Id</label>
              <div className="videoIdInputBox">
                <input
                  name="VideoId"
                  value={videoObject.VideoId}
                  className="inputText"
                  type="text"
                  onChange={OnChangeVideoData}
                />
              </div>
            </div>

            <div className="vdoSeqContainer">
              <label htmlFor="">Video Sequence</label>
              <div className="videoSequenceInputBox">
                <input
                  name="VideoIndex"
                  value={videoObject.VideoIndex}
                  className="inputText"
                  type="text"
                  onChange={OnChangeVideoData}
                />
              </div>
            </div>

            <div className="editModalFooterButtons">
              <button onClick={closeModal}>Cancel</button>
              <button
                onClick={() => {
                  updateVideo(videoObject._id);
                }}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetailForm;
