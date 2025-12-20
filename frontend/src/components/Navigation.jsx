import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          {/* Logo */}
          <Link to="/" className="nav-logo">
            🎓 UniDecide
          </Link>

          {/* Mobile Menu Toggle */}
          <button className="menu-toggle" onClick={toggleMenu}>
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* Navigation Links */}
          <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link" onClick={() => setMenuOpen(false)}>
                Find Universities
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/recommendations" className="nav-link" onClick={() => setMenuOpen(false)}>
                Recommendations
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/analytics" className="nav-link" onClick={() => setMenuOpen(false)}>
                Analytics
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/scholarships" className="nav-link" onClick={() => setMenuOpen(false)}>
                Scholarships
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/ask-ai" className="nav-link" onClick={() => setMenuOpen(false)}>
                Ask AI
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Product</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/#features">Features</a></li>
              <li><a href="/#how-it-works">How It Works</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#docs">Documentation</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li><a href="#twitter">Twitter</a></li>
              <li><a href="#linkedin">LinkedIn</a></li>
              <li><a href="#github">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 UniDecide. All rights reserved. | AI-Powered University Selection</p>
        </div>
      </footer>
    </>
  );
}

export default Navigation;
