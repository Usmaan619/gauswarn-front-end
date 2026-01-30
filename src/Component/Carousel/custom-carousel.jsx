import React, { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CarouselCard from "./CarouselCard";
import "./custom-carousel.css";

const CustomCarousel = ({ products = [], slidesToShow = 3 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(slidesToShow);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(slidesToShow);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [slidesToShow]);

  const maxIndex = useMemo(() => {
    return Math.max(products.length - itemsToShow, 0);
  }, [products.length, itemsToShow]);

  const prev = () => setCurrentIndex((i) => (i <= 0 ? maxIndex : i - 1));

  const next = () => setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));

  if (!products.length) return null;

  return (
    <div className="custom-carousel-container">
      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
          }}
        >
          {products.map((item, index) => (
            <div
              key={item.id || index}
              className="carousel-item"
              style={{ flex: `0 0 ${100 / itemsToShow}%` }}
            >
              <CarouselCard reelId={item.reelId} />
            </div>
          ))}
        </div>
      </div>

      {products.length > itemsToShow && (
        <div className="carousel-controls">
          <button aria-label="Previous slide" onClick={prev}>
            <ChevronLeft size={28} />
          </button>
          <button aria-label="Next slide" onClick={next}>
            <ChevronRight size={28} />
          </button>
        </div>
      )}

      <div className="carousel-dots">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            aria-label={`Go to slide ${i + 1}`}
            key={i}
            className={`dot ${i === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
