import React from "react";
import "../styles/Logo.css";
const Logo = () => {

    const codeStyle = {
        fontFamily: "font-family: 'Nanum Gothic Coding', monospace;",
       
        // You can add other styles like fontSize, fontWeight, etc., if needed
      };
      const codeContent = "{Code}";
  return (
    <div className="logo">
      <div className="dots">
        <span className="dot1"></span>
        <span className="dot2"></span>
        <span className="dot3"></span>
      </div>

      <div className="brandText">
    
          <b> Low<code style={codeStyle}>{codeContent}</code>Lounge</b>
      
      </div>
    </div>
  );
};

export default Logo;
