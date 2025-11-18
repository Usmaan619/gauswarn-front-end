import { useState } from "react";
import { Heart, Star, ChevronLeft, ChevronRight } from "lucide-react";
import "./product-page.css";

import secure1 from "../../asset/new-img/product-page-logo/fast.png";
import secure2 from "../../asset/new-img/product-page-logo/secure.png";
import secure3 from "../../asset/new-img/product-page-logo/quality.png";
import secure4 from "../../asset/new-img/product-page-logo/natural.png";

import paymentLogo1 from "../../asset/new-img/product-page-logo/Visa.png";
import paymentLogo2 from "../../asset/new-img/product-page-logo/rupay.png";
import paymentLogo3 from "../../asset/new-img/product-page-logo/master-card.png";
import paymentLogo4 from "../../asset/new-img/product-page-logo/Bhim.png";
import paymentLogo5 from "../../asset/new-img/product-page-logo/razor-pay.png";

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("500ML");
  const [isFavorite, setIsFavorite] = useState(false);

  const images = [
    "/pure-desi-cow-ghee-jar-main-product-image.jpg",
    "/pure-desi-cow-ghee-product-closeup.jpg",
    "/cow-ghee-in-spoon-drizzling.jpg",
    "/pure-desi-cow-ghee-cooking.jpg",
    "/pure-desi-cow-ghee-jar-detailed.jpg",
  ];

  const sizes = ["500ML", "1000ML", "5KG", "10KG"];

  const benefits = [
    "Boosts Immunity & Digestion",
    "Promotes Glowing Skin & Hair",
    "Enhances Focus & Memory",
    "Helps Improve Sleep Quality",
    "Strengthens Joints & Bones",
    "Supports Hormonal Balance",
  ];

  const paymentMethods = [
    { name: "VISA", icon: paymentLogo1 },
    { name: "RuPay", icon: paymentLogo2 },
    { name: "MasterCard", icon: paymentLogo3 },
    { name: "BHIM", icon: paymentLogo4 },
    { name: "Cash on Delivery", icon: paymentLogo5 },
  ];

  const trustIndicators = [
    { icon: secure1, title: "Fast Shipping", desc: "Quick delivery" },
    { icon: secure2, title: "Secure Payment", desc: "Protected checkout" },
    { icon: secure3, title: "Quality Guarantee", desc: "Premium product" },
    { icon: secure4, title: "Natural Ingredients", desc: "100% pure" },
  ];

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="product-page">
      {/* Header Navigation */}

      {/* Main Product Section */}
      <div className="product-container">
        {/* Left Side - Image Gallery */}
        <div className="image-section">
          {/* Main Image */}
          <div className="main-image-wrapper">
            <div className="main-image">
              <img
                src={images[selectedImage] || "/placeholder.svg"}
                alt="Product"
              />
              <button
                className="favorite-btn"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart
                  size={24}
                  fill={isFavorite ? "#e74c3c" : "none"}
                  color={isFavorite ? "#e74c3c" : "#bdc3c7"}
                  stroke={2}
                />
              </button>
            </div>

            {/* Image Navigation Arrows */}
            <button className="arrow-btn prev-btn" onClick={handlePrevImage}>
              <ChevronLeft size={20} />
            </button>
            <button className="arrow-btn next-btn" onClick={handleNextImage}>
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Thumbnail Gallery */}
          <div className="thumbnail-gallery">
            {images.map((img, idx) => (
              <div
                key={idx}
                className={`thumbnail ${selectedImage === idx ? "active" : ""}`}
                onClick={() => setSelectedImage(idx)}
              >
                <img
                  src={img || "/placeholder.svg"}
                  alt={`Thumbnail ${idx + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="details-section">
          {/* Product Title */}
          <h1 className="product-title">
            Pure Desi Cow Ghee – Handcrafted from A2 Milk
          </h1>

          {/* Description */}
          <p className="product-description">
            Traditionally made. Naturally pure. Rich in aroma & nutrition.
          </p>

          {/* Rating */}
          <div className="rating-section">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="#ffc107" color="#ffc107" />
              ))}
            </div>
            <span className="rating-value">4.5</span>
            <span className="reviews">from 392 Reviews</span>
          </div>

          {/* Badges */}
          <div className="badges-section">
            <p className="certifications-text mb-0">
              100% Natural | Chemical-Free | Lactose-Free | Gluten-Free |
              Traditionally Churned
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="benefits-grid">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="benefit-item">
                <span className="checkmark">✓</span>
                <span className="benefit-text">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Size Selector */}
          <div className="size-section">
            <h3 className="section-title">Size</h3>
            <div className="size-options">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`size-btn ${
                    selectedSize === size ? "selected" : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="availability-section">
            <span className="availability-label">Availability:</span>
            <span className="availability-status">In Stock</span>
          </div>

          {/* Pricing */}
          <div className="pricing-section">
            <div className="price">
              <span className="current-price">₹699</span>
              <span className="original-price">₹1400</span>
            </div>
            <div className="discount-badge">Save 50%</div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="btn-add-cart">Add to Cart</button>
            <button className="btn-buy-now">Buy it now</button>
          </div>

          {/* Payment Methods */}
          <div className="payment-section">
            <h4 className="payment-title">Guaranteed Safe Checkout</h4>
            <div className="payment-methods">
              {paymentMethods.map((method, idx) => (
                <div key={idx} className="payment-method">
                  <img
                    src={method?.icon}
                    alt={method?.name}
                    className="payment-logo"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="trust-section">
        {trustIndicators.map((indicator, idx) => (
          <div key={idx} className="trust-item">
            <img src={indicator.icon} alt="" srcset="" className="trust-icon" />
            <h4 className="trust-title">{indicator.title}</h4>
            {/* <p className="trust-desc">{indicator.desc}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
