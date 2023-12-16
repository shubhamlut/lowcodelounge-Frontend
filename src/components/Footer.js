import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerColOne">
        <div className="footerRowOneColOne">Get the app</div>
        <div className="footerRowOneColTwo">About us</div>
      </div>
      <div className="footerColTwo">
        <div className="footerRowTwoColOne">Help and support</div>
        <div className="footerRowTwoColTwo">Terms</div>
      </div>

      <div className="footerColThree">
        <div className="footerRowTwoColOne">Privacy policy</div>
        <div className="footerRowTwoColTwo">Cookie settings</div>
        <div className="footerRowTwoColTwo">Sitemap</div>
        <div className="footerRowTwoColTwo">Accessibility statement</div>
      </div>
    </div>
  );
};

export default Footer;
