import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../styles/Profile.css";
import crudfunctions from "../functions/crud.js";
import profileImageDefault from "../images/profileIcon.webp";
const Profile = () => {
  //hooks

  useEffect(() => {
    getUserDetails();
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);
  const [userDetails, setUserDetails] = useState({
    "name": "",
    "email": "",
  });

  //functions
  let formData = "";
  const handleProfilePicChange = async (e) => {
    formData = new FormData();

    formData.append("uploaded_file", e.target.files[0]);

    if (e.target.files.length > 0) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));

      e.preventDefault();
      const response = await fetch(
        "http://localhost:5000/api/auth/updateProfilePicture",

        {
          method: "PUT",
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
          body: formData,
        }
      );
      const json = await response.json();
    }
  };

  //fn 2

  const getUserDetails = async () => {
    const response = await crudfunctions.get(
      "http://localhost:5000/api/auth/getuser"
    );
    const mimeType = response[0].mimeType;
    const base64Data = response[0].profilePicture;
    const image = `data:${mimeType};base64,${base64Data}`;
    setSelectedImage(image);
    let user = {
      name: response[0].name,
      email: response[0].email,
    };
    setUserDetails(user);
  };

  return (
    <div>
      <Navbar />
      <div className="profilePage">
        <div className="profileContainer">
        
          <div className="profilePic">
            <form enctype="multipart/form-data">
              <label for="fileInput" id="uploadLabel">
                {selectedImage ? (
                  <img
                    className="addedProficPic"
                    src={selectedImage}
                    id="profilePic"
                  />
                ) : (
                  <img
                    className="addedProficPic"
                    src={profileImageDefault}
                    id="profilePic"
                  />
                )}
              </label>
              <input
                type="file"
                id="fileInput"
                onChange={handleProfilePicChange}
                accept="image/*"
              />
            </form>
          </div>
          <div className="profileDetails">
           
           
          
            <div className="profileActionsBtns">
            <h2>{userDetails.name}</h2>
            <h4>{userDetails.email}</h4>
              <button>Update Password</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
