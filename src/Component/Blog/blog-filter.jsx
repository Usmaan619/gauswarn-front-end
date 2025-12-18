import React from "react";
import "./filter-newsletter-card.css";

const FilterNewsletterCard = ({ sortOrder, onSortChange }) => {
  return (
    <div className="filter-newsletter-wrapper">
      <div className="filter-card">
        <div className="filter-card-header">
          <span className="filter-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M15 6L9 18" stroke="#222" strokeWidth="2" />
              <path d="M6 9H18" stroke="#222" strokeWidth="2" />
              <path d="M9 18H15" stroke="#222" strokeWidth="2" />
            </svg>
          </span>
          <span className="filter-card-title">Filter by</span>
        </div>

        <div className="filter-section">
          <label className="filter-label">Sort by</label>

          <select
            className="sort-select"
            value={sortOrder}
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="new">Newest</option>
            <option value="old">Oldest</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterNewsletterCard;
