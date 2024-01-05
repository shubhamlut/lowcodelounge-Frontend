import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/Modal.css";
import { useRef } from "react";
import { useEffect } from "react";
const Modal = ({
  title,
  description,
  cancleBtn,
  actionBtn,
  openModalBoolean,
  handleAction,
}) => {
  const [openModal, setOpenModal] = useState(openModalBoolean);

  const TriggerOnBtnRightClick = () => {
    // props.triggerOnClick()
    setOpenModal(false);
    handleAction();
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  if (!openModal) return null;
  return ReactDOM.createPortal(
    <>
      <div className="modalwrapper">
        <div className="modalcontainer">
          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
            <button className="modal-close-button" onClick={closeModal}>
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <p>{description}</p>
          <div className="modal-footer">
            {/* <div className="left-corner">
            </div> */}
            <button className="btn-left" onClick={closeModal}>
              {cancleBtn}
            </button>
            <button className="btn-right" onClick={TriggerOnBtnRightClick}>
              {actionBtn}
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
