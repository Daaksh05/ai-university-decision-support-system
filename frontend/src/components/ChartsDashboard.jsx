import React, { useState } from "react";
import "../styles/ChartsDashboard.css";

const ChartsDashboard = ({ universities, studentProfile }) => {
  const [activeChart, setActiveChart] = useState("cost-vs-ranking");

  // Mock chart data - replace with actual data in production
  const generateCostVsRankingData = () => {
    return universities.slice(0, 10).map((uni) => ({
      name: uni.name.substring(0, 15),
      cost: uni.tuition_fee || Math.random() * 50000,
      ranking: uni.ranking || Math.floor(Math.random() * 500),
      matchPercentage: Math.random() * 100,
    }));
  };

  const generateAcceptanceProbabilityData = () => {
    return universities.slice(0, 8).map((uni) => ({
      name: uni.name.substring(0, 15),
      probability: Math.random() * 100,
      chance: Math.random() > 0.5 ? "High" : "Medium",
    }));
  };

  const generateRoiData = () => {
    return universities.slice(0, 8).map((uni) => ({
      name: uni.name.substring(0, 15),
      roi: Math.random() * 300,
      timeToBreakeven: Math.floor(Math.random() * 10) + 2,
    }));
  };

  const costVsRankingData = generateCostVsRankingData();
  const acceptanceProbabilityData = generateAcceptanceProbabilityData();
  const roiData = generateRoiData();

  // Simple bar chart component
  const BarChart = ({ data, valueKey, maxValue = 100 }) => (
    <div className="bar-chart">
      {data.map((item, idx) => (
        <div key={idx} className="bar-item">
          <div className="bar-label">{item.name}</div>
          <div className="bar-container">
            <div
              className="bar-fill"
              style={{
                width: `${(item[valueKey] / maxValue) * 100}%`,
              }}
            >
              <span className="bar-value">{Math.round(item[valueKey])}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // Simple scatter-like chart for cost vs ranking
  const ScatterChart = ({ data }) => (
    <div className="scatter-chart">
      <div className="chart-axes">
        <div className="y-axis-label">Cost (€)</div>
        <div className="x-axis-label">Ranking</div>
      </div>
      <div className="scatter-points">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="scatter-point"
            style={{
              left: `${(item.ranking / 500) * 90}%`,
              bottom: `${(item.cost / 50000) * 90}%`,
              backgroundColor: `hsl(${item.matchPercentage * 3.6}, 70%, 50%)`,
            }}
            title={`${item.name}: Rank ${item.ranking}, Cost €${item.cost.toFixed(0)}, Match ${item.matchPercentage.toFixed(0)}%`}
          >
            <div className="point-label">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="charts-dashboard">
      <div className="dashboard-header">
        <h2>Analytics & Insights</h2>
        <p>Data-driven visualization of your university options</p>
      </div>

      {/* Chart Selector Tabs */}
      <div className="chart-tabs">
        <button
          className={`tab ${activeChart === "cost-vs-ranking" ? "active" : ""}`}
          onClick={() => setActiveChart("cost-vs-ranking")}
        >
          💰 Cost vs Ranking
        </button>
        <button
          className={`tab ${activeChart === "acceptance" ? "active" : ""}`}
          onClick={() => setActiveChart("acceptance")}
        >
          📊 Acceptance Probability
        </button>
        <button
          className={`tab ${activeChart === "roi" ? "active" : ""}`}
          onClick={() => setActiveChart("roi")}
        >
          📈 ROI Analysis
        </button>
      </div>

      {/* Chart Content */}
      <div className="chart-container">
        {activeChart === "cost-vs-ranking" && (
          <div className="chart-view">
            <h3>Cost vs University Ranking</h3>
            <p className="chart-description">
              Compare tuition costs against university rankings. Each point represents a university.
              Hover to see details.
            </p>
            <ScatterChart data={costVsRankingData} />
          </div>
        )}

        {activeChart === "acceptance" && (
          <div className="chart-view">
            <h3>Your Acceptance Probability</h3>
            <p className="chart-description">
              Estimated likelihood of admission to each university based on your profile.
            </p>
            <BarChart
              data={acceptanceProbabilityData}
              valueKey="probability"
              maxValue={100}
            />
          </div>
        )}

        {activeChart === "roi" && (
          <div className="chart-view">
            <h3>Return on Investment (ROI)</h3>
            <p className="chart-description">
              Projected ROI percentage based on average graduate salaries and program costs.
            </p>
            <BarChart data={roiData} valueKey="roi" maxValue={300} />
            <div className="roi-legend">
              <p>💡 ROI = (Avg Salary - Total Cost) / Total Cost × 100</p>
            </div>
          </div>
        )}
      </div>

      {/* Key Insights */}
      <div className="insights-section">
        <h4>📌 Key Insights</h4>
        <div className="insights-grid">
          <div className="insight-card">
            <span className="insight-icon">🎯</span>
            <p>Most Affordable: {costVsRankingData[0]?.name} (€{Math.min(...costVsRankingData.map(d => d.cost)).toFixed(0)})</p>
          </div>
          <div className="insight-card">
            <span className="insight-icon">🏆</span>
            <p>Highest Ranked: University #{Math.min(...costVsRankingData.map(d => d.ranking))}</p>
          </div>
          <div className="insight-card">
            <span className="insight-icon">💹</span>
            <p>Best ROI: {roiData[0]?.name} ({roiData[0]?.roi.toFixed(0)}%)</p>
          </div>
        </div>
      </div>

      {/* Download Report Button */}
      <div className="dashboard-actions">
        <button className="btn btn-secondary">
          📥 Download Full Report (PDF)
        </button>
      </div>
    </div>
  );
};

export default ChartsDashboard;
