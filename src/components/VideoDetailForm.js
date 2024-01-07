import React from 'react'

const VideoDetailForm = ({videoData,closeModal}) => {
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
                name="videoName"
                value={videoData.Name}
                type="text"
              />
            </div>
          </div>

          <div className="vdoDescContainer">
            <label htmlFor="">Description</label>
            <div className="videoDescInputBox">
              <textarea
                name="videoDescription"
                
                value={videoData.Description}
                id=""
                cols="65"
                rows="10"
              ></textarea>
            </div>
          </div>

          <div className="vdoDuraContainer">
            <label htmlFor="">Duration</label>
            <div className="videoDurationInputBox">
              <input
                name="videoDuration"
                value={videoData.Duration}
                className="inputText"
                type="text"
              />
            </div>
          </div>
          <div className="vdoThumContainer">
            <label htmlFor="">ThumbnailURL</label>
            <div className="videoThumbnailInputBox">
              <input
                name="videoThumbnail"
                value={videoData.ThumbnailURL}
                className="inputText"
                type="text"
              />
            </div>
          </div>

          <div className="vdoCourseContainer">
            <label htmlFor="">CourseId</label>
            <div className="videoCourseInputBox">
              <input
                name="videoCourseId"
                value={videoData.CourseId}
                className="inputText"
                type="text"
              />
            </div>
          </div>
          <div className="vdoIdContainer">
            <label htmlFor="">Video Id</label>
            <div className="videoIdInputBox">
              <input
                name="videoId"
                value={videoData.VideoId}
                className="inputText"
                type="text"
              />
            </div>
          </div>

          <div className="vdoSeqContainer">
            <label htmlFor="">Video Sequence</label>
            <div className="videoSequenceInputBox">
              <input
                name="videoSequence"
                value={videoData.VideoIndex}
                className="inputText"
                type="text"
              />
            </div>
          </div>

          <div className="editModalFooterButtons">
            <button onClick={closeModal}>Cancel</button>
            <button>Update</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default VideoDetailForm
