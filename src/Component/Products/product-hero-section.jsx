import React from "react";

import "./product-hero-section.css";
import { useNavigate } from "react-router-dom";
const ProductHeroSection = ({
  title = "Nourish the Body. Soothe the Mind. Taste the Purity.",
  isH1 = false,
}) => {
  const navigate = useNavigate();
  const HeadingTag = isH1 ? "h1" : "h2";

  const goToBuyNow = () => navigate("/products");
  return (
    <section className="product-hero-section">
      <div className="product-hero-overlay"></div>
      <div className="container">
        <div className="row align-items-center justify-content-center min-vh-100">
          <div className="col-12 text-center product-hero-content">
            <HeadingTag className="product-hero-title">{title}</HeadingTag>
            <p className="product-hero-subtitle">
              Begin your GAUSWARN GHEE Wellness Journey Today!
            </p>
            <button
              aria-label="Buy now"
              className="btn-cta"
              onClick={goToBuyNow}
            >
              Buy now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHeroSection;
