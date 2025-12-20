import React from "react";
import ChartsDashboard from "../components/ChartsDashboard";
import CostAnalytics from "../components/CostAnalytics";
import "./AnalyticsPage.css";

function AnalyticsPage() {
  return (
    <div className="analytics-page">
      <div className="analytics-header">
        <h1>Analytics & Insights</h1>
        <p>Comprehensive analysis of universities, costs, and rankings</p>
      </div>

      <div className="analytics-container">
        <section className="analytics-section charts-section">
          <div className="section-title">
            <h2>University Metrics</h2>
            <p>Acceptance rates, rankings, and program diversity</p>
          </div>
          <ChartsDashboard />
        </section>

        <section className="analytics-section cost-section">
          <div className="section-title">
            <h2>Cost Analysis</h2>
            <p>Budget planning and ROI insights</p>
          </div>
          <CostAnalytics />
        </section>
      </div>
    </div>
  );
}

export default AnalyticsPage;
