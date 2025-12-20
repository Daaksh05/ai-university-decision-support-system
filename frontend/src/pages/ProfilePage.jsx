import React from "react";
import StudentProfileForm from "../components/StudentProfileForm";
import "./ProfilePage.css";

function ProfilePage() {
  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <h1>Build Your Profile</h1>
          <p>Tell us about yourself and your academic goals. We'll use this information to find your perfect universities.</p>
        </div>
        
        <div className="profile-form-wrapper">
          <StudentProfileForm />
        </div>

        <div className="profile-tips">
          <h3>Tips for the Best Results</h3>
          <ul>
            <li>Be honest about your IELTS and academic scores</li>
            <li>Set a realistic budget based on your financial situation</li>
            <li>Select multiple program types to get diverse recommendations</li>
            <li>Specify your target countries to narrow down options</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
