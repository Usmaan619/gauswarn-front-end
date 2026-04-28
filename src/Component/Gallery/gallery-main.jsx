import React from "react";
import "./gallery-main.css";
import ProductHeroSection from "../Products/product-hero-section";
import gallery1 from "../../asset/new-img/gallery/gallery1.webp";

import gallery2 from "../../asset/new-img/gallery/gallery2.webp";
import gallery3 from "../../asset/new-img/gallery/gallery3.webp";
import gallery4 from "../../asset/new-img/gallery/gallery4.webp";
import gallery5 from "../../asset/new-img/gallery/gallery5.webp";

import gallery6 from "../../asset/new-img/gallery/gallery6.webp";
import gallery7 from "../../asset/new-img/gallery/gallery7.webp";
import gallery8 from "../../asset/new-img/gallery/gallery8.webp";

import gallery9 from "../../asset/new-img/gallery/gallery9.webp";

import gallery10 from "../../asset/new-img/gallery/gallery10.webp";
import gallery11 from "../../asset/new-img/gallery/gallery11.webp";
import Seo from "../SEO/Seo";

const GheeShowcase = () => {
  const images = [
    {
      id: 1,
      src: gallery1,
      alt: "Gir cow farmer caring for cows at Gauswarn India gaushala",
      size: "large",
    },
    {
      id: 2,
      src: gallery2,
      alt: "Traditional Gir cow farming at Gauswarn India gaushala",
      size: "medium",
    },
    {
      id: 3,
      src: gallery3,
      alt: "Pure A2 Cow Ghee jar placed on a wooden surface",
      size: "small",
    },
    {
      id: 4,
      src: gallery4,
      alt: "A2 Cow Ghee product jar by Gauswarn India",
      size: "small",
    },
    {
      id: 5,
      src: gallery5,
      alt: "Customer holding pure A2 Cow Ghee jar",
      size: "medium",
    },
    {
      id: 6,
      src: gallery8,
      alt: "Traditional Indian cooking using A2 Cow Ghee",
      size: "large",
    },
    {
      id: 7,
      src: gallery6,
      alt: "Healthy Gir cows at Gauswarn India gaushala",
      size: "small",
    },
    {
      id: 8,
      src: gallery7,
      alt: "Rustic presentation of pure A2 Cow Ghee jar",
      size: "small",
    },
    {
      id: 9,
      src: gallery9,
      alt: "Home cooking with pure A2 Cow Ghee in Indian kitchen",
      size: "medium",
    },
    {
      id: 10,
      src: gallery10,
      alt: "Rural gaushala environment with Gir cows at Gauswarn India",
      size: "large",
    },
    {
      id: 11,
      src: gallery11,
      alt: "Using A2 Cow Ghee for healthy everyday cooking",
      size: "medium",
    },
  ];

  return (
    <>
      <Seo
        title="Gallery | Gauswarn India – A2 Cow Ghee Journey"
        description="Explore Gauswarn India's gallery showcasing our Gaushala, Gir cows, traditional bilona ghee making process, and farm-to-home purity."
        url="https://gauswarn.com/gallery"
      />

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
