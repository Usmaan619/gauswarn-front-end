import React from "react";
import "./gallery-main.css";
import ProductHeroSection from "../Products/product-hero-section";
import gallery1 from "../../asset/new-img/gallery/gallery1.png";

import gallery2 from "../../asset/new-img/gallery/gallery2.png";
import gallery3 from "../../asset/new-img/gallery/gallery3.png";
import gallery4 from "../../asset/new-img/gallery/gallery4.png";
import gallery5 from "../../asset/new-img/gallery/gallery5.png";

import gallery6 from "../../asset/new-img/gallery/gallery6.png";
import gallery7 from "../../asset/new-img/gallery/gallery7.png";
import gallery8 from "../../asset/new-img/gallery/gallery8.png";

import gallery9 from "../../asset/new-img/gallery/gallery9.png";

import gallery10 from "../../asset/new-img/gallery/gallery10.png";
import gallery11 from "../../asset/new-img/gallery/gallery11.png";

const GheeShowcase = () => {
  const images = [
    {
      id: 1,
      src: gallery1,
      alt: "Farmer with cow",
      size: "large",
    },
    {
      id: 2,
      src: gallery2,
      alt: "Farmer with cattle",
      size: "medium",
    },

    {
      id: 3,
      src: gallery3,
      alt: "Ghee jar on wooden surface",
      size: "small",
    },

    {
      id: 4,
      src: gallery4,
      alt: "Ghee product jar",
      size: "small",
    },
    {
      id: 5,
      src: gallery5,
      alt: "Person holding ghee jar",
      size: "medium",
    },
    {
      id: 6,
      src: gallery8,
      alt: "Cooking with ghee",
      size: "large",
    },
    {
      id: 7,
      src: gallery6,
      alt: "Farmer with cattle",
      size: "small",
    },
    {
      id: 8,
      src: gallery7,
      alt: "Ghee jar rustic",
      size: "small",
    },
    {
      id: 9,
      src: gallery9,
      alt: "Woman cooking with ghee",
      size: "medium",
    },
    {
      id: 10,
      src: gallery10,
      alt: "Rural cattle scene",
      size: "large",
    },
    {
      id: 11,
      src: gallery11,
      alt: "Man using ghee in cooking",
      size: "medium",
    },
  ];

  return (
    <>
      <ProductHeroSection />
      <div className="gallery-showcase-container">
        <div className="gallery-grid-container">
          {images?.map((image) => (
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
