import React, { useState } from "react";
import "../styles/HoverWrapper.css"; // Import your component-specific CSS file
import HoverContent from "./HoverContentProfile";

const HoverWrapper = ({ label,HoverContent,toolTipWrapperWidth }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <div
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {label}
      {isTooltipVisible && (
        <div className="tooltip" style={{width:{toolTipWrapperWidth}}}>
         
          {/* <div className="tooltipHeader">Tool tip header</div> */}
          <div className="tooltipContent">
            <HoverContent />
          </div>
        </div>
      )}
    </div>
  );
};

export default HoverWrapper;
