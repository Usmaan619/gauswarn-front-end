import React, { useState } from "react";
import "./filter-newsletter-card.css";

const FilterNewsletterCard = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="me-5 mt-4">
      {/* FILTER CARD */}
      <div className="filter-card">
        <div className="filter-card-header">
          <span className="filter-icon">
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

        {/* NEW ➜ Sort Filter */}
        <div className="filter-section">
          <label className="filter-label">Sort by</label>
          <select className="sort-select">
            <option value="new">Newest </option>
            <option value="old">Oldest </option>
          </select>
        </div>

        <button className="main-btn">Apply Filters</button>
      </div>

      {/* NEWSLETTER CARD */}
      <div className="newsletter-card my-5">
        <div className="newsletter-header">
          <span className="newsletter-icon">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <rect
                x="3"
                y="7"
                width="18"
                height="10"
                rx="2"
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
