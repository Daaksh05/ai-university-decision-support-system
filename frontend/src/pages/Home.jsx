import React from "react";
import StudentProfileForm from "../components/StudentProfileForm";
import QueryBox from "../components/QueryBox";

function Home() {
  return (
    <div className="container">
      <h2>AI University Decision Support System</h2>
      <p style={{ textAlign: "center", color: "#555" }}>
        Personalized guidance for international university selection
      </p>

      <StudentProfileForm />

      <hr style={{ margin: "30px 0" }} />

      <QueryBox />
    </div>
  );
}

export default Home;
