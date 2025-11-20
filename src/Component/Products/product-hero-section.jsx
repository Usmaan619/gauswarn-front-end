import React from "react";

import "./product-hero-section.css";
const ProductHeroSection = () => {
  return (
    <section className="product-hero-section">
      <div className="product-hero-overlay"></div>
      <div className="container">
        <div className="row align-items-center justify-content-center min-vh-100">
          <div className="col-12 text-center product-hero-content">
            <h1 className="product-hero-title">
              Nourish the Body. Soothe the Mind. Taste the Purity.
            </h1>
            <p className="product-hero-subtitle">
              Begin your GAUSWARN GHEE Wellness Journey Today!
            </p>
            <button className="btn-cta">Buy now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHeroSection;
