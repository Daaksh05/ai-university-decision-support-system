import React, { useState } from "react";
import "../styles/Tooltip.css";

const Tooltip = ({ text, children, position = "top" }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="tooltip-container">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="tooltip-trigger"
      >
        {children}
      </div>
      {isVisible && (
        <div className={`tooltip-content tooltip-${position}`}>
          {text}
          <div className="tooltip-arrow"></div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
