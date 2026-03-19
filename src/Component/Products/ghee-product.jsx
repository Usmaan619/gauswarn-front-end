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
      "Made using the ancient Bilona method to preserve the purity and rich aroma of A2 Gir Cow Ghee.",
    alt: "Traditional Bilona Method Churning Ghee",
  },
  {
    icon: gheeFeture2,
    title: "100% Natural Goodness",
    description:
      "Pure Desi Cow Ghee free from preservatives or additives — just natural goodness in every drop.",
    featured: true,
    alt: "100% Natural Pure Desi Cow Ghee",
  },
  {
    icon: gheeFeture3,
    title: "From Happy Gir Cows",
    description:
      "Ethically sourced from grass-fed indigenous Gir cows nurtured with love in our gaushala.",
    alt: "Indigenous Gir Cows for A2 Milk",
  },
  {
    icon: gheeFeture4,
    title: "Health in Every Spoon",
    description:
      "Boosts digestion and immunity — a perfect Ayurvedic wellness essential for your family.",
    alt: "Ayurvedic Health Benefits of A2 Ghee",
  },
  {
    icon: gheeFeture5,
    title: "Taste of Purity",
    description:
      "Rich golden texture and authentic flavor that brings the warmth of pure ghee to every meal.",
    alt: "Golden Texture of Pure A2 Ghee",
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
                  alt={feature.alt}
                  loading="lazy"
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
