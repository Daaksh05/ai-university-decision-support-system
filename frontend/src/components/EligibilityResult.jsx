import React from "react";

function EligibilityResult({ result }) {
  const getColor = () => {
    if (result === "High") return "#10b981";
    if (result === "Medium") return "#f59e0b";
    return "#ef4444";
  };

  const getGradient = () => {
    if (result === "High") return "linear-gradient(135deg, #10b981 0%, #059669 100%)";
    if (result === "Medium") return "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)";
    return "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)";
  };

  const getEmoji = () => {
    if (result === "High") return "🎉";
    if (result === "Medium") return "📚";
    return "💡";
  };

  const getDescription = () => {
    if (result === "High") return "Excellent! You have strong chances of admission to most universities!";
    if (result === "Medium") return "Good! You may be eligible for selective universities. Focus on improving IELTS or GPA.";
    return "Keep improving! Consider enhancing your academic score and IELTS to increase admission chances.";
  };

  return (
    <div 
      className="result-box" 
      style={{ 
        background: `${getGradient()}, rgba(255,255,255,0.9)`,
        backgroundBlend: "overlay",
        marginTop: "25px",
        padding: "25px",
        borderLeft: `6px solid ${getColor()}`,
        borderRadius: "16px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "12px" }}>
        <span style={{ fontSize: "36px" }}>{getEmoji()}</span>
        <div>
          <div style={{ fontSize: "12px", color: "#666", fontWeight: "500", textTransform: "uppercase", letterSpacing: "1px" }}>
            Admission Chance
          </div>
          <strong style={{ 
            fontSize: "28px", 
            background: getGradient(),
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            {result}
          </strong>
        </div>
      </div>
      <p style={{ margin: "12px 0", color: "#333", fontSize: "15px", fontWeight: "500", lineHeight: "1.6" }}>
        {getDescription()}
      </p>
    </div>
  );
}

export default EligibilityResult;
