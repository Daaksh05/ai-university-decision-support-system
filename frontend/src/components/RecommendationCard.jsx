import React, { useState } from "react";
import "../styles/RecommendationCard.css";

const RecommendationCard = ({ university, score, matchPercentage, onSaveClick, onViewClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e) => {
    e.stopPropagation();
    setIsSaved(!isSaved);
    if (onSaveClick) onSaveClick(university.id, !isSaved);
  };

  const getRankBadge = () => {
    if (matchPercentage >= 90) return { label: "Perfect Match", color: "#10B981" };
    if (matchPercentage >= 75) return { label: "Strong Match", color: "#3B82F6" };
    if (matchPercentage >= 60) return { label: "Good Match", color: "#F59E0B" };
    return { label: "Possible Match", color: "#8B5CF6" };
  };

  const badge = getRankBadge();

  return (
    <div
      className={`recommendation-card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onViewClick && onViewClick(university.id)}
    >
      {/* Header with University Info */}
      <div className="card-header">
        <div className="university-info">
          <h3 className="university-name">{university.name}</h3>
          <p className="university-location">
            📍 {university.country}, {university.city}
          </p>
        </div>
        <button
          className={`save-button ${isSaved ? "saved" : ""}`}
          title={isSaved ? "Remove from saved" : "Save university"}
          onClick={handleSave}
        >
          {isSaved ? "💾" : "🔖"}
        </button>
      </div>

      {/* Match Badge */}
      <div className="match-badge" style={{ backgroundColor: badge.color }}>
        <span className="match-percentage">{Math.round(matchPercentage)}%</span>
        <span className="match-label">{badge.label}</span>
      </div>

      {/* Key Metrics */}
      <div className="metrics-grid">
        <div className="metric">
          <span className="metric-label">Admission Chance</span>
          <span className="metric-value">{score?.admission_chance || "N/A"}%</span>
        </div>
        <div className="metric">
          <span className="metric-label">Tuition/Year</span>
          <span className="metric-value">€{university.tuition_fee?.toLocaleString() || "N/A"}</span>
        </div>
        <div className="metric">
          <span className="metric-label">Ranking</span>
          <span className="metric-value">#{university.ranking || "N/A"}</span>
        </div>
        <div className="metric">
          <span className="metric-label">Programs</span>
          <span className="metric-value">{university.programs_count || "N/A"}+</span>
        </div>
      </div>

      {/* Programs Preview */}
      {university.top_programs && university.top_programs.length > 0 && (
        <div className="programs-preview">
          <p className="programs-label">Top Programs:</p>
          <div className="program-tags">
            {university.top_programs.slice(0, 3).map((program, idx) => (
              <span key={idx} className="program-tag">
                {program}
              </span>
            ))}
            {university.top_programs.length > 3 && (
              <span className="program-tag more">+{university.top_programs.length - 3}</span>
            )}
          </div>
        </div>
      )}

      {/* Scholarship Info */}
      {university.scholarship_available && (
        <div className="scholarship-badge">
          💰 Scholarships Available
        </div>
      )}

      {/* Action Button */}
      <button
        className="card-action-btn"
        onClick={(e) => {
          e.stopPropagation();
          onViewClick && onViewClick(university.id);
        }}
      >
        View Details & Analysis
        <span className="arrow">→</span>
      </button>

      {/* Loading Indicator (Optional) */}
      {isHovered && (
        <div className="card-overlay">
          <p>Click for detailed analysis</p>
        </div>
      )}
    </div>
  );
};

export default RecommendationCard;
