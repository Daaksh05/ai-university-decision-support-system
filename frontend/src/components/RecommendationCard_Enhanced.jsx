import React, { useState } from "react";
import "../styles/enhanced-components.css";

/**
 * Enhanced Recommendation Card Component
 * Features:
 * - Premium glassmorphism design
 * - Animated hover effects
 * - Comparison selection
 * - Detailed metrics display
 * - Mobile responsive
 * 
 * Usage:
 * import RecommendationCardEnhanced from './RecommendationCard_Enhanced';
 * <RecommendationCardEnhanced 
 *   university={universityData}
 *   onCompare={handleCompare}
 *   showComparison={true}
 * />
 */

const RecommendationCardEnhanced = ({
  university,
  score,
  matchPercentage,
  onSaveClick,
  onViewClick,
  onCompare,
  showComparison = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isComparing, setIsComparing] = useState(false);

  const handleSave = (e) => {
    e.stopPropagation();
    setIsSaved(!isSaved);
    if (onSaveClick) onSaveClick(university.id, !isSaved);
  };

  const handleCompare = (e) => {
    e.stopPropagation();
    setIsComparing(!isComparing);
    if (onCompare) onCompare(university.id, !isComparing);
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
      className={`recommendation-card-enhanced ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onViewClick && onViewClick(university.id)}
    >
      <div className="card-header-enhanced">
        <div className="university-info-enhanced">
          <h3 className="university-name-enhanced">{university.name}</h3>
          <p className="university-location-enhanced">
            📍 {university.country}, {university.city}
          </p>
        </div>

        <div className="card-actions-enhanced">
          <button
            className={`save-button-enhanced ${isSaved ? "saved" : ""}`}
            title={isSaved ? "Remove from saved" : "Save university"}
            onClick={handleSave}
          >
            {isSaved ? "💾" : "🔖"}
          </button>
          {showComparison && (
            <button
              className={`compare-button-enhanced ${isComparing ? "selected" : ""}`}
              title={isComparing ? "Remove from comparison" : "Add to comparison"}
              onClick={handleCompare}
            >
              ⚖️
            </button>
          )}
        </div>
      </div>

      <div className="match-badge-enhanced" style={{ backgroundColor: badge.color }}>
        <span className="match-percentage-enhanced">{Math.round(matchPercentage)}%</span>
        <span className="match-label-enhanced">{badge.label}</span>
      </div>

      <div className="metrics-grid-enhanced">
        <div className="metric-enhanced">
          <span className="metric-label-enhanced">Admission Chance</span>
          <span className="metric-value-enhanced">{score?.admission_chance || "N/A"}%</span>
        </div>
        <div className="metric-enhanced">
          <span className="metric-label-enhanced">Tuition/Year</span>
          <span className="metric-value-enhanced">€{university.tuition_fee?.toLocaleString() || "N/A"}</span>
        </div>
        <div className="metric-enhanced">
          <span className="metric-label-enhanced">Ranking</span>
          <span className="metric-value-enhanced">#{university.ranking || "N/A"}</span>
        </div>
        <div className="metric-enhanced">
          <span className="metric-label-enhanced">Programs</span>
          <span className="metric-value-enhanced">{university.programs_count || "N/A"}+</span>
        </div>
      </div>

      {university.top_programs && university.top_programs.length > 0 && (
        <div className="programs-preview-enhanced">
          <p className="programs-label-enhanced">Top Programs:</p>
          <div className="program-tags-enhanced">
            {university.top_programs.slice(0, 3).map((program, idx) => (
              <span key={idx} className="program-tag-enhanced">
                {program}
              </span>
            ))}
            {university.top_programs.length > 3 && (
              <span className="program-tag-enhanced more">+{university.top_programs.length - 3}</span>
            )}
          </div>
        </div>
      )}

      {university.scholarship_available && (
        <div className="scholarship-badge-enhanced">💰 Scholarships Available</div>
      )}

      <button className="card-action-btn-enhanced" onClick={(e) => {
        e.stopPropagation();
        onViewClick && onViewClick(university.id);
      }}>
        View Details & Analysis <span className="arrow-enhanced">→</span>
      </button>

      {isHovered && (
        <div className="card-overlay-enhanced">
          <p>Click for detailed analysis</p>
        </div>
      )}
    </div>
  );
};

export default RecommendationCardEnhanced;
