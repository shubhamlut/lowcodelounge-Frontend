import React from "react";
import "../styles/Help.css";
import Navbar from "./Navbar";
const Help = () => {
  return (
    <>
      <Navbar />
      <div className="help">
        <h3>
          Please reachout to us on:{" "}
          <span className="pointOfContact">beastthatcodes@gmail.com</span>{" "}
        </h3>
        <h3>
          or DM on instagram handle:{" "}
          <span className="pointOfContact">@beastThatCodes</span>{" "}
        </h3>
      </div>
    </>
  );
};

export default Help;
