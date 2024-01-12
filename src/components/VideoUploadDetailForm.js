import React, { useState } from "react";
import crudFunctions from "../functions/crud";

const VideoUploadDetailForm = ({ closeAddVideoModal }) => {
  //Hooks

  const [videoObject, setVideoObject] = useState({
    name: "",
    description: "",
    duration: "",
    videoId: "",
    thumbnail: "",
    courseId: "",
    index: "",
  });

  const uploadVideo = (id) => {
    let requestPayload = {
      name: videoObject.name,
      description: videoObject.description,
      duration: videoObject.duration,
      videoId: videoObject.videoId,
      thumbnail: videoObject.thumbnail,
      courseId: videoObject.courseId,
      index: videoObject.index,
    };

    crudFunctions.create(
      `http://localhost:5000/api/video/addVideo`,
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

      console.log(updatedVideoData);
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
                <h3>Video with below details will get uploaded</h3>
              </div>
              <button className="modal-close-button">
                <i onClick={closeAddVideoModal} class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="vdoNameContainer">
              <label htmlFor="">Video Name</label>
              <div className="videoNameInputBox">
                <input
                  className="inputText"
                  name="name"
                  value={videoObject.name}
                  type="text"
                  onChange={OnChangeVideoData}
                />
              </div>
            </div>

            <div className="vdoDescContainer">
              <label htmlFor="">Description</label>
              <div className="videoDescInputBox">
                <textarea
                  name="description"
                  value={videoObject.description}
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
                  name="duration"
                  value={videoObject.duration}
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
                  name="thumbnail"
                  value={videoObject.thumbnail}
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
                  name="courseId"
                  value={videoObject.courseId}
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
                  name="videoId"
                  value={videoObject.videoId}
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
                  name="index"
                  value={videoObject.index}
                  className="inputText"
                  type="text"
                  onChange={OnChangeVideoData}
                />
              </div>
            </div>

            <div className="editModalFooterButtons">
              <button onClick={closeAddVideoModal}>Cancel</button>
              <button
                onClick={() => {
                  uploadVideo();
                }}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoUploadDetailForm;
