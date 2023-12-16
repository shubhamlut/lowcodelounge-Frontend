import React from "react";

import "../styles/Card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="cardPicture">
        <img
          src="https://2829105.fs1.hubspotusercontent-na1.net/hubfs/2829105/Featured%20Image%20Homepage%20Logo%20ONLY.png"
          alt="Description of the image"
        />
      </div>
      <div className="cardDetails">
        <div className="cardDetailsColOne">
          <div className="cardLabel">Unqork Zero to Expert</div>
          <div className="cardDesc">Free Course</div>
          <div className="courseDesc">Unqork is at the forefront of the no-code movement, empowering organizations to accelerate their digital transformation without relying on traditional software development methods. With Unqork, users, including business analysts and other non-developers, can design, build, and deploy sophisticated web applications through a visual interface.</div>
          <div className="cardButton">
            <button>Start Watching</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
