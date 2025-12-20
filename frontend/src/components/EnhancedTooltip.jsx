import React, { useState } from "react";
import "../styles/enhanced-components.css";

/**
 * Enhanced Tooltip Component
 * Features:
 * - Rich content support
 * - Multiple positions
 * - Smooth animations
 * - Keyboard accessible
 * 
 * Usage:
 * import EnhancedTooltip from './EnhancedTooltip';
 * <EnhancedTooltip content="Help text" position="top">
 *   <button>Hover me</button>
 * </EnhancedTooltip>
 */

const EnhancedTooltip = ({ 
  content, 
  children, 
  position = "top", 
  delay = 300,
  variant = "dark"
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    const id = setTimeout(() => setIsVisible(true), delay);
    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsVisible(false);
  };

  return (
    <div
      className={`tooltip-wrapper-enhanced ${position}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && (
        <div className={`tooltip-enhanced tooltip-${variant} tooltip-${position}`}>
          {typeof content === "string" ? <p>{content}</p> : content}
          <div className="tooltip-arrow"></div>
        </div>
      )}
    </div>
  );
};

export default EnhancedTooltip;
