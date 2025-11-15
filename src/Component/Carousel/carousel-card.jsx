import React from "react";

const CarouselCard = ({ product }) => {
  console.log("product: ", product);
  return (
    <div className="carousel-card-wrapper">
      <div className="carousel-card">
        <img
          src={product?.image || "/placeholder.svg"}
          alt={product.title}
          className="carousel-image"
        />
        <div className="carousel-overlay">
          <h3 className="carousel-title">{product.title}</h3>
          <p className="carousel-subtitle">{product.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
