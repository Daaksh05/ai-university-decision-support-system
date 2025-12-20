import React, { useState } from "react";
import "../styles/enhanced-components.css";

/**
 * Animated Loader Component
 * Features:
 * - Smooth animations
 * - Loading skeleton
 * - Progress indicator
 * - Multiple variants
 * 
 * Usage:
 * import AnimatedLoader from './AnimatedLoader';
 * <AnimatedLoader isLoading={true} type="spinner" />
 */

const AnimatedLoader = ({ isLoading = true, type = "spinner", message = "Loading..." }) => {
  if (!isLoading) return null;

  return (
    <div className="animated-loader-container">
      {type === "spinner" && (
        <div className="spinner-enhanced">
          <div className="spinner-dot"></div>
          <div className="spinner-dot"></div>
          <div className="spinner-dot"></div>
        </div>
      )}

      {type === "skeleton" && (
        <div className="skeleton-enhanced">
          <div className="skeleton-line"></div>
          <div className="skeleton-line short"></div>
          <div className="skeleton-line short"></div>
        </div>
      )}

      {type === "progress" && (
        <div className="progress-enhanced">
          <div className="progress-bar"></div>
        </div>
      )}

      <p className="loader-message">{message}</p>
    </div>
  );
};

export default AnimatedLoader;
