import React from "react";

import "./product-hero-section.css";
import { useNavigate } from "react-router-dom";
const ProductHeroSection = () => {
  const navigate = useNavigate();

  const goToBuyNow = () => navigate("/products");
  return (
    <section className="product-hero-section">
      <div className="product-hero-overlay"></div>
      <div className="container">
        <div className="row align-items-center justify-content-center min-vh-100">
          <div className="col-12 text-center product-hero-content">
            <h2 className="product-hero-title">
              Nourish the Body. Soothe the Mind. Taste the Purity.
            </h2>
            <p className="product-hero-subtitle">
              Begin your GAUSWARN GHEE Wellness Journey Today!
            </p>
            <button aria-label="Buy now" className="btn-cta" onClick={goToBuyNow}>
              Buy now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHeroSection;
