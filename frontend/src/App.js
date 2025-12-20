import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import LandingPageNew from "./pages/LandingPage_New";
import ProfilePage from "./pages/ProfilePage";
import RecommendationsPage from "./pages/RecommendationsPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import ScholarshipsPage from "./pages/ScholarshipsPage";
import AskAIPage from "./pages/AskAIPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPageNew />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/recommendations" element={<RecommendationsPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/scholarships" element={<ScholarshipsPage />} />
        <Route path="/ask-ai" element={<AskAIPage />} />
      </Routes>
    </Router>
  );
}

export default App;
