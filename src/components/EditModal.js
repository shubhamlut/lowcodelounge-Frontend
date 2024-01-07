import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/EditModal.css";
import VideoDetailForm from "./VideoDetailForm";

const EditModal = ({ editModalState,selectedVideo,videoData }) => {
  const [openModal, setOpenModal] = useState(true);

  const closeModal = () => {
    setOpenModal(false);
  };
  if (!openModal) return null;
  return ReactDOM.createPortal(
    <VideoDetailForm videoData={videoData} closeModal={closeModal} />,
    document.getElementById("editModal")
  );
};

export default EditModal;
