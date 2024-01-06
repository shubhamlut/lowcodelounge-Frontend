import React, { useState } from "react";
import "../styles/HoverContent.css";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
const HoverContentProfile = () => {
  //Hooks
  const [modelOpen, setModalOpen] = useState(false);
  //Functions
  const navigate = useNavigate();
  const handleActionClick = (action) => {
    if (action === "logout") {
      localStorage.removeItem("token");
      setModalOpen(true);
    }
  };
  return (
    <div className="hovercontent">
      <div className="hoverRowOne optionhover">
        <div className="profileIcon">
          <i class="fa-regular fa-user fa-2xl"></i>
        </div>
        <div className="profileName">Shubham Lutade</div>
      </div>
      <div className="options">
        <div className="hoverRowTwo optionhover">My Learning</div>
        <div className="hoverRowThree optionhover">Account Settings</div>
        <div className="hoverRowFour optionhover">Help</div>
        <div
          onClick={() => {
            handleActionClick("logout");
          }}
          className="hoverRowFive optionhover"
        >
          Logout
        </div>
        {modelOpen &&
          <Modal
            openModalBoolean={modelOpen}
            description="Are you sure you want to logout?"
            title="Please confirm"
            cancleBtn="Cancel"
            actionBtn="Yes"
            handleAction = {()=>{
              navigate('/login')
            }}
          />
        }
      </div>
    </div>
  );
};

export default HoverContentProfile;
