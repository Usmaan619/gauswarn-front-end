import React, { useState } from "react";
import "./seo-content.css";

/**
 * SeoContent – Renders keyword-rich, crawlable text for SEO/AEO.
 * Visually integrated into the page with a premium, expandable layout.
 * Removes aria-hidden so search engine crawlers and assistive technologies can fully index it.
 * 
 * @param {Object} props
 * @param {string} props.heading - Main H2 heading
 * @param {Array<{title?: string, text: string}>} props.sections - Content blocks
 */
const SeoContent = ({ heading, sections = [] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!sections.length) return null;

  return (
    <section className="seo-section-wrapper" aria-labelledby="seo-section-heading">
      <div className="seo-container">
        <div className="seo-header">
          <h2 id="seo-section-heading" className="seo-main-heading">{heading}</h2>
          <div className="seo-divider"></div>
        </div>

        <div className={`seo-grid-content ${isExpanded ? "expanded" : "collapsed"}`}>
          {sections.map((section, idx) => (
            <div className="seo-content-card" key={idx}>
              {section.title && <h3 className="seo-card-title">{section.title}</h3>}
              <p className="seo-card-text">{section.text}</p>
            </div>
          ))}
          {!isExpanded && <div className="seo-fade-overlay" />}
        </div>

        <div className="seo-expand-btn-wrapper">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="seo-expand-btn"
            aria-expanded={isExpanded}
            aria-label={isExpanded ? "Collapse guide" : "Expand full ghee guide"}
          >
            {isExpanded ? "Show Less" : "Read Full Guide"}
            <svg
              className={`seo-arrow-icon ${isExpanded ? "rotated" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SeoContent;
