import React, { useState } from "react";
import "../styles/HoverWrapper.css"; // Import your component-specific CSS file
import HoverContent from "./HoverContentProfile";

const HoverWrapper = ({ label, HoverContent, toolTipWrapperWidth, action }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  const handleActionClick = () => {
    action("/my-learning");
  };

  return (
    <div
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        onClick={() => {
          handleActionClick();
        }}
      >
        {label}
      </div>
      {isTooltipVisible && (
        <div
          className="tooltip"
          style={{ width: parseInt(toolTipWrapperWidth, 10) }}
        >
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
