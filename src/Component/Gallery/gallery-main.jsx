import React from "react";
import "./gallery-main.css";
import ProductHeroSection from "../Products/product-hero-section";
const GheeShowcase = () => {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80",
      alt: "Farmer with cow",
      size: "large",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80",
      alt: "Farmer with cattle",
      size: "medium",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1587334207818-869b8cf6f971?w=800&q=80",
      alt: "Ghee jar on wooden surface",
      size: "small",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1614963366795-e9a12e05c0f0?w=800&q=80",
      alt: "Ghee product jar",
      size: "small",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80",
      alt: "Person holding ghee jar",
      size: "medium",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1587334207818-869b8cf6f971?w=800&q=80",
      alt: "Cooking with ghee",
      size: "large",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1581781870027-04212b3a0a43?w=800&q=80",
      alt: "Farmer with cattle",
      size: "small",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1587334207818-869b8cf6f971?w=800&q=80",
      alt: "Ghee jar rustic",
      size: "small",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
      alt: "Woman cooking with ghee",
      size: "medium",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80",
      alt: "Rural cattle scene",
      size: "large",
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&q=80",
      alt: "Man using ghee in cooking",
      size: "medium",
    },
  ];

  return (
    <>
      <ProductHeroSection />
      <div className="gallery-showcase-container">
        <div className="gallery-grid-container">
          {images.map((image) => (
            <div key={image.id} className={`gallery-grid-item ${image.size}`}>
              <div className="gallery-image-wrapper">
                <img src={image.src} alt={image.alt} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GheeShowcase;
