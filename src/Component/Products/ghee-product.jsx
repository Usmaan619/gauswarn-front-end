import React from "react";
import gheeFeture1 from "../../asset/new-img/product-hero-section-img/Mask-1.webp";
import gheeFeture2 from "../../asset/new-img/product-hero-section-img/Mask-2.webp";
import gheeFeture3 from "../../asset/new-img/product-hero-section-img/Mask-3.webp";
import gheeFeture4 from "../../asset/new-img/product-hero-section-img/Mask-4.webp";
import gheeFeture5 from "../../asset/new-img/product-hero-section-img/Mask-5.webp";

import "./ghee-product.css";
const features = [
  {
    icon: gheeFeture1,
    title: "Crafted with Tradition",
    description:
      "Made using the ancient Bilona method to preserve purity, aroma, and nutrition.",
  },
  {
    icon: gheeFeture2,
    title: "100% Natural Goodness",
    description:
      "Free from preservatives, colors, or additives — just pure ghee as nature intended.",
    featured: true,
  },
  {
    icon: gheeFeture3,
    title: "From Happy Gir Cows",
    description:
      "Sourced ethically from grass-fed Gir cows nurtured with love and care.",
  },
  {
    icon: gheeFeture4,
    title: "Health in Every Spoon",
    description:
      "Boosts digestion, energy, and immunity — a perfect daily wellness essential.",
  },
  {
    icon: gheeFeture5,
    title: "Taste of Purity",
    description:
      "Rich golden texture and traditional flavor that brings warmth to every meal.",
  },
];
const GheeFeatureProductPage = () => {
  return (
    <div className="ghee-features-container">
      <div className="container-fluid px-3 px-md-4">
        <div className="row g-3 g-md-4 justify-content-center align-items-stretch">
          {features.map((feature, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-4 col-xl d-flex">
              <div
                className={`ghee-feature-card ${
                  feature.featured ? "ghee-featured" : ""
                }`}
              >
                <img
                  src={feature.icon}
                  className="ghee-feature-icon"
                  alt="ghee-feature-icon"
                />
                <h3 className="ghee-feature-title">{feature.title}</h3>
                <p className="ghee-feature-description">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GheeFeatureProductPage;
