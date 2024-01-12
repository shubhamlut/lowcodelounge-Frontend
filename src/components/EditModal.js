import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/EditModal.css";
// import VideoDetailForm from "./VideoDetailForm";

const EditModal = ({
  editModalState,
  selectedVideo,
  videoData,
  VideoDetailForm,
  type,
  closeAddVideoModal
}) => {
  const [openModal, setOpenModal] = useState(true);

  const closeModal = () => {
    setOpenModal(false);
  };
  if (!openModal) return null;

  if ((type = "edit")) {
    return ReactDOM.createPortal(
      <VideoDetailForm videoData={videoData} closeModal={closeModal} />,
      document.getElementById("editModal")
    );
  }

  if ((type = "upload")) {
    return ReactDOM.createPortal(
      <VideoDetailForm closeAddVideoModal={closeModal} />,
      document.getElementById("editModal")
    );
  }
};

export default EditModal;
