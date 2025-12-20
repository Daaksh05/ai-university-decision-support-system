import React, { useState, useEffect } from "react";
import "../styles/enhanced-components.css";

/**
 * Enhanced Landing Page Component
 * Features:
 * - Hero section with animated gradient
 * - Feature showcase with icons
 * - Stats section
 * - Call-to-action sections
 * - Responsive design
 * 
 * Usage:
 * import LandingPageEnhanced from './LandingPage_Enhanced';
 * <LandingPageEnhanced onGetStarted={handleGetStarted} />
 */

const LandingPageEnhanced = ({ onGetStarted, onLearnMore }) => {
  const [scrollY, setScrollY] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: "🎯",
      title: "Smart Matching",
      description: "AI analyzes your profile to recommend universities perfectly aligned with your goals",
      color: "#667eea"
    },
    {
      icon: "💰",
      title: "Cost Analysis",
      description: "Transparent cost breakdown with scholarship opportunities and ROI calculations",
      color: "#764ba2"
    },
    {
      icon: "📊",
      title: "Admission Prediction",
      description: "Real-time eligibility assessment with success probability predictions",
      color: "#f093fb"
    },
    {
      icon: "🌍",
      title: "Global Network",
      description: "Access 10,000+ universities with comprehensive data and rankings",
      color: "#4facfe"
    },
  ];

  const stats = [
    { label: "Universities", value: "10,000+" },
    { label: "Students Helped", value: "50K+" },
    { label: "Accuracy Rate", value: "95%" },
    { label: "Avg. Savings", value: "$12K" },
  ];

  return (
    <div className="landing-page-enhanced">
      {/* Hero Section */}
      <section className="hero-enhanced" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>

        <div className="hero-content-enhanced">
          <h1 className="hero-title-enhanced">Find Your Perfect University</h1>
          <p className="hero-subtitle-enhanced">
            AI-powered university recommendations tailored to your academic profile, budget, and career goals.
            Discover your ideal match in minutes, not weeks.
          </p>

          <div className="hero-buttons-enhanced">
            <button className="btn-primary-enhanced" onClick={onGetStarted}>
              Get Started Free →
            </button>
            <button className="btn-secondary-enhanced" onClick={onLearnMore}>
              Learn More
            </button>
          </div>

          <div className="hero-stats-enhanced">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-box-enhanced">
                <div className="stat-value-enhanced">{stat.value}</div>
                <div className="stat-label-enhanced">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-enhanced">
        <h2>Why Choose Us?</h2>
        <p className="section-subtitle">Everything you need for smarter university decisions</p>

        <div className="features-grid-enhanced">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`feature-card-enhanced ${activeFeature === idx ? "active" : ""}`}
              onMouseEnter={() => setActiveFeature(idx)}
              style={{ "--feature-color": feature.color }}
            >
              <div className="feature-icon-enhanced">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-enhanced">
        <h2>Ready to Find Your Perfect Match?</h2>
        <p>Join thousands of students making smarter university decisions with AI.</p>
        <button className="btn-cta-enhanced" onClick={onGetStarted}>
          Start Your Journey Today
        </button>
      </section>
    </div>
  );
};

export default LandingPageEnhanced;
