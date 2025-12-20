import React from "react";
import ScholarshipsMatcher from "../components/ScholarshipsMatcher";
import "./ScholarshipsPage.css";

function ScholarshipsPage() {
  return (
    <div className="scholarships-page">
      <div className="scholarships-header">
        <h1>Find Scholarships</h1>
        <p>Discover funding opportunities and financial aid for your dream universities</p>
      </div>

      <div className="scholarships-container">
        <ScholarshipsMatcher />

        <aside className="scholarships-info">
          <div className="info-card">
            <h3>📋 Scholarship Types</h3>
            <ul>
              <li>Merit-based scholarships</li>
              <li>Need-based financial aid</li>
              <li>Country-specific grants</li>
              <li>University scholarships</li>
              <li>Government grants</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>💡 Pro Tips</h3>
            <ul>
              <li>Apply early for better chances</li>
              <li>Check eligibility criteria carefully</li>
              <li>Prepare strong personal statements</li>
              <li>Keep track of deadlines</li>
              <li>Apply to multiple scholarships</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default ScholarshipsPage;
