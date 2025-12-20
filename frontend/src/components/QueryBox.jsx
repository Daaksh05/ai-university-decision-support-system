import React, { useState } from "react";
import api from "../services/api";

function QueryBox() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const askQuery = async () => {
    if (!query.trim()) {
      setError("Please enter a question");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await api.post("/query", { query });
      if (res.data.status === "success") {
        setAnswer(res.data.answer);
      } else {
        setError("Failed to get answer");
      }
    } catch (err) {
      setError("Error: Could not reach the backend. Make sure it's running.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !loading) {
      askQuery();
    }
  };

  const clearQuery = () => {
    setQuery("");
    setAnswer("");
    setError("");
  };

  return (
    <div>
      <h3>❓ Ask a Question</h3>
      {error && (
        <div style={{ 
          padding: "12px", 
          background: "linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(220, 38, 38, 0.1) 100%)",
          color: "#dc2626", 
          borderRadius: "10px", 
          marginBottom: "12px",
          border: "1px solid rgba(239, 68, 68, 0.3)",
          fontSize: "14px",
          fontWeight: "500"
        }}>
          ⚠️ {error}
        </div>
      )}
      
      <input
        placeholder="e.g., Scholarships for studying in France"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setError("");
        }}
        onKeyPress={handleKeyPress}
        disabled={loading}
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(102, 126, 234, 0.03) 0%, rgba(240, 147, 251, 0.03) 100%)"
        }}
      />
      <div style={{ display: "flex", gap: "12px", marginTop: "15px" }}>
        <button 
          onClick={askQuery} 
          disabled={loading}
          style={{ 
            flex: 1, 
            background: loading ? "linear-gradient(135deg, #999, #777)" : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
          }}
        >
          {loading ? "⏳ Loading..." : "🔍 Ask"}
        </button>
        <button 
          onClick={clearQuery}
          style={{ 
            flex: 1, 
            background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
          }}
        >
          🔄 Clear
        </button>
      </div>

      {answer && (
        <div className="result-box" style={{ marginTop: "20px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
            <span style={{ fontSize: "24px", marginTop: "4px" }}>💭</span>
            <div style={{ flex: 1 }}>
              <strong style={{ 
                display: "block",
                marginBottom: "8px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontSize: "15px"
              }}>
                Answer
              </strong>
              <p style={{ margin: "0", color: "#333", lineHeight: "1.6", fontSize: "14px" }}>
                {answer}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default QueryBox;
