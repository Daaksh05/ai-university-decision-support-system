import React from "react";
import StudentProfileForm from "../components/StudentProfileForm";
import UniversityList from "../components/UniversityList";

function Dashboard() {
  return (
    <div className="container">
      <h2>University Recommendations Dashboard</h2>
      <p style={{ textAlign: "center", color: "#555" }}>
        View your personalized university recommendations and application status
      </p>

      <StudentProfileForm />
    </div>
  );
}

export default Dashboard;
