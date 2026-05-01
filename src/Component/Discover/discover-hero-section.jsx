import StatsCard from "./discover-stats-card";
import ChecklistItem from "./discover-checklist-item";
import image1 from "../../asset/new-img/onwer/onwer.webp";
import image2 from "../../asset/new-img/contact-back-arrow/contact-back-arow.webp";

import "./discover-hero-section.css";
import { useNavigate } from "react-router-dom";

export default function DiscoverHeroSection() {
  const navigate = useNavigate();

  const ContactUs = () => navigate("/contact");

  return (
    <section className="discover-hero-section">
      <div className="discover-hero-container">
        {/* Left Section - Image */}
        <div className="discover-hero-left">
          <div className="discover-image-wrapper">
            <img
              src={image1}
              alt="Founder and ghee artisan at Gauswarn India Gaushala"
              className="discover-hero-image"
              width="450"
              height="450"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="discover-hero-right">
          {/* Heading */}
          <h2 className="discover-hero-heading">What is A2 Gir Cow Ghee?</h2>

          {/* Subheading */}
          <p className="discover-hero-subheading">
            Gauswarn pure A2 Gir cow ghee is prepared using the traditional
            bilona method, which ensures its absolute purity and maintains its
            high nutritional value. At Gauswarn, ghee isn’t just a product —
            it’s a living legacy of Indian heritage and rural craftsmanship.
            From carefully preparing artisanal Bilona butter to the slow-cooking
            process that produces our rich, golden-grained ghee, every step in
            our journey blends Vedic wisdom with modern hygiene standards.
          </p>

          {/* Divider */}
          <div className="discover-hero-divider"></div>

          {/* Stats Section */}
          <div className="discover-stats-grid">
            <StatsCard
              number="35,000+"
              label="Kilograms of Gir Cow Ghee Produced"
            />
            <StatsCard
              number="22,000+"
              label="Happy Families Served Across India"
            />
            <StatsCard
              number="99%"
              label="Reusable & Eco-Friendly Packaging Used"
            />
          </div>

          {/* Divider */}
          <div className="discover-hero-divider"></div>

          {/* Checklist Section */}
          <div className="discover-checklist-grid">
            <ChecklistItem
              text="Traditional Taste, Modern Efficiency

Although the process is machine-assisted, we follow traditional guidelines to preserve authentic gir cow ghee flavour and nutrition."
            />
            <ChecklistItem
              text="Packed Fresh, Straight From Our Gaushala.
Farm-fresh ghee crafted from grass-fed, healthy Gir cows."
            />
            <ChecklistItem
              text=" Slow-Cooked for the Perfect Aroma & Texture.
Low-flame traditional heating preserves natural flavor and aroma.
"
            />
            <ChecklistItem
              text="0% Preservatives. 100% Love.
No chemicals, no additives — only pure, trustworthy Desi ghee."
            />
          </div>

          {/* CTA Button */}
          <button
            aria-label="Contact Us"
            className="discover-contact-button"
            onClick={ContactUs}
          >
            Contact Us
            <img
              src={image2}
              className="discover-button-icon"
              alt="Contact arrow icon"
              width="21"
              height="21"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
