import React, { useState } from "react";
import FiltersPanel from "../components/FiltersPanel";
import UniversityList from "../components/UniversityList";
import "./RecommendationsPage.css";

function RecommendationsPage() {
  const [filteredData, setFilteredData] = useState(null);

  return (
    <div className="recommendations-page">
      <div className="recommendations-header">
        <h1>Your University Recommendations</h1>
        <p>Personalized matches based on your profile and preferences</p>
      </div>

      <div className="recommendations-container">
        <aside className="filters-sidebar">
          <FiltersPanel onFiltered={setFilteredData} />
        </aside>

        <main className="recommendations-main">
          <UniversityList universities={filteredData} />
        </main>
      </div>
    </div>
  );
}

export default RecommendationsPage;
