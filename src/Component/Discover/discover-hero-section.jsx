import StatsCard from "./discover-stats-card";
import ChecklistItem from "./discover-checklist-item";
import image1 from "../../asset/new-img/onwer/onwer.png";
import image2 from "../../asset/new-img/contact-back-arrow/contact-back-arow.png";

import "./discover-hero-section.css";

export default function DiscoverHeroSection() {
  return (
    <section className="discover-hero-section">
      <div className="discover-hero-container">
        {/* Left Section - Image */}
        <div className="discover-hero-left">
          <div className="discover-image-wrapper">
            <img
              src={image1}
              alt="Gauswarn Ghee Master"
              className="discover-hero-image"
            />
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="discover-hero-right">
          {/* Heading */}
          <h1 className="discover-hero-heading">
            Discover the purity behind every drop of Gauswarn Ghee
          </h1>

          {/* Subheading */}
          <p className="discover-hero-subheading">
            Our ghee isn't just food — it's a legacy of Indian tradition. From
            hand-churned Bilona butter to golden aromatic ghee, every step
            reflects love, patience, and purity.
          </p>

          {/* Divider */}
          <div className="discover-hero-divider"></div>

          {/* Stats Section */}
          <div className="discover-stats-grid">
            <StatsCard number="100k+" label="Kilogram Gir Ghee" />
            <StatsCard number="50k+" label="Happy Families Served" />
            <StatsCard number="99%" label="Reusable Packaging" />
          </div>

          {/* Divider */}
          <div className="discover-hero-divider"></div>

          {/* Checklist Section */}
          <div className="discover-checklist-grid">
            <ChecklistItem text="Hand-Churned. Never Machine-Made." />
            <ChecklistItem text="Packed Fresh, Straight from Gaushala." />
            <ChecklistItem text="Slow-Cooked for Perfect Aroma." />
            <ChecklistItem text="0% Preservatives. 100% Love." />
          </div>

          {/* CTA Button */}
          <button className="discover-contact-button">
            Contact Us
            <img
              src={image2}
              className="discover-button-icon"
              alt=""
              srcset=""
            />
          </button>
        </div>
      </div>
    </section>
  );
}
