import React from "react";
import ReactDOM from "react-dom";
import "../styles/EditModal.css";

const EditModal = () => {
  return ReactDOM.createPortal(
    <div className="editModalWrapper">
      <div className="editModalContainer">
        <div className="videoDetailsContainer">
          <div className="editModalVdoName">This is video name</div>
          <label htmlFor="">Video Name</label>
          <div className="videoNameInputBox">
            <input type="text" />
          </div>

          <label htmlFor="">Video Description</label>
          <div className="videoDescInputBox">
           <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>

          <label htmlFor="">Video Duration</label>
          <div className="videoDurationInputBox">
            <input type="text" />
          </div>

          <label htmlFor="">Video Thumbnail URL</label>
          <div className="videoThumbnailInputBox">
            <input type="text" />
          </div>

          <label htmlFor="">Course Id</label>
          <div className="videoCourseInputBox">
            <input type="text" />
          </div>
          <label htmlFor="">Video Sequence</label>
          <div className="videoSequenceInputBox">
            <input type="text" />
          </div>

          
          <div className="editModalFooterButtons">
            <button>Cancel</button>
            <button>Update</button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("editModal")
  );
};

export default EditModal;
