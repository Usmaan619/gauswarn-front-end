import React, { useState } from "react";
import "./filter-newsletter-card.css";

const FilterNewsletterCard = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="me-5 mt-4">
      <div className="filter-card">
        <div className="filter-card-header">
          <span className="filter-icon">
            {/* SVG or Emoji icon */}{" "}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 6L9 18"
                stroke="#222"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M6 9H18"
                stroke="#222"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M9 18H15"
                stroke="#222"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="filter-card-title">Filter by</span>
        </div>
        <div className="filter-section">
          <label className="filter-label">Market Tags</label>
          <select className="filter-select">
            <option>All Market</option>
            {/* more options as needed */}
          </select>
        </div>
        <div className="filter-section">
          <label className="filter-label">Submarket Tags</label>
          <select className="filter-select">
            <option>All Submarket</option>
            {/* more options as needed */}
          </select>
        </div>
        <div className="filter-section">
          <label className="filter-label">Date Range</label>
          <div className="row">
            <input
              type="text"
              className="date-input"
              placeholder="mm/dd/yyyy"
            />
            <span className="date-separator">to</span>
            <input
              type="text"
              className="date-input"
              placeholder="mm/dd/yyyy"
            />
            <span className="calendar-icon">
              {/* SVG calendar icon */}{" "}
              <svg height="22" width="22" viewBox="0 0 24 24">
                <rect
                  x="4"
                  y="7"
                  width="16"
                  height="13"
                  rx="3"
                  fill="none"
                  stroke="#666"
                  strokeWidth="2"
                />
                <path
                  d="M16 3v4M8 3v4M4 11h16"
                  stroke="#666"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>
        </div>
        <button className="main-btn">Apply Filters</button>
      </div>
      <div className="newsletter-card my-5">
        <div className="newsletter-header">
          <span className="newsletter-icon">
            {/* SVG or Emoji */}{" "}
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <rect
                x="3"
                y="7"
                width="18"
                height="10"
                rx="2"
                fill="none"
                stroke="#7B490B"
                strokeWidth="2"
              />
              <path d="M21 7l-9 6-9-6" stroke="#7B490B" strokeWidth="2" />
            </svg>
          </span>
          <span className="newsletter-title">Newsletter Signup</span>
        </div>
        <div className="newsletter-desc">
          Get the latest carbon market updates delivered to your inbox
        </div>
        <input
          type="email"
          className="newsletter-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email (e.g example@example.com)"
        />
        <button className="main-btn">Subscribe Now</button>
      </div>
    </div>
  );
};

export default FilterNewsletterCard;
