"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image from "../../asset/img/Gallery/gal-food2.png";

const CustomCarousel = ({ products, slidesToShow = 3 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(slidesToShow);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(slidesToShow);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [slidesToShow]);

  const maxIndex = products?.length - itemsToShow;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === maxIndex ? 0 : prevIndex + 1
    );
  };

  const goToDot = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="custom-carousel-container">
      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="carousel-item"
              style={{
                flex: `0 0 ${100 / itemsToShow}%`,
              }}
            >
              <div className="carousel-card">
                <img
                  src={image}
                  alt={product?.title}
                  className="carousel-image"
                />
                <div className="carousel-overlay">
                  <h3 className="carousel-title">{product.title}</h3>
                  <p className="carousel-subtitle">{product.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="carousel-controls">
        <button
          className="carousel-arrow prev-arrow"
          onClick={goToPrevious}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          className="carousel-arrow next-arrow"
          onClick={goToNext}
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="carousel-dots">
        {products.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToDot(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
