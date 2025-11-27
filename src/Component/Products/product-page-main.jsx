import React, { useState } from "react";
import {
  Heart,
  Star,
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  Send,
  Sparkles,
} from "lucide-react";
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

import ProfileSection from "./profileSection";
import ProductHeroSection from "./product-hero-section";
import ProductShowcase from "../Carousel/product-showcase";
import GheeFeatureProductPage from "./ghee-product";
import PromotionalCards from "../PromotionalBanner/promotional-cards";

import productImg from "../../asset/new-img/product-imgs/product1.png";

const ProductPageMain = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("500ML");
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      title: "Best Quality Ghee!",
      text: "Absolutely amazing quality. The aroma is incredible and it's pure as claimed. Will definitely order again!",
      date: "2 weeks ago",
      verified: true,
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      rating: 4,
      title: "Good Product",
      text: "Very satisfied with the purchase. Fresh and authentic ghee. Highly recommended.",
      date: "1 month ago",
      verified: true,
    },
    {
      id: 3,
      name: "Anjali Patel",
      rating: 5,
      title: "Perfect for Cooking",
      text: "Using this for all my cooking now. The taste is superior to store-bought ghee. Worth every penny!",
      date: "3 weeks ago",
      verified: true,
    },
  ]);
  const [reviewName, setReviewName] = useState("");
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const images = [productImg, productImg, productImg, productImg, productImg];

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

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value) || 1;
    setQuantity(value > 0 ? value : 1);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();

    if (!reviewName || !reviewTitle || !reviewText) {
      alert("Please fill in all fields");
      return;
    }

    const newReview = {
      id: reviews.length + 1,
      name: reviewName,
      rating: reviewRating,
      title: reviewTitle,
      text: reviewText,
      date: "Just now",
      verified: false,
    };

    setReviews([newReview, ...reviews]);

    setReviewName("");
    setReviewRating(5);
    setReviewTitle("");
    setReviewText("");
    setSubmitSuccess(true);

    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  return (
    <>
      <div className="product-page">
        {/* Header Navigation */}

        {/* Main Product Section */}
        <div className="product-container">
          {/* Left Side - Image Gallery */}
          <div className="image-section">
            {/* Main Image */}
            <div className="main-image-wrapper">
              <div className="main-image" aria-live="polite">
                <img
                  src={images[selectedImage] || "/placeholder.svg"}
                  alt={`Product image ${selectedImage + 1}`}
                  className="responsive-product-img"
                  loading="lazy"
                />
                <button
                  className="favorite-btn"
                  onClick={() => setIsFavorite(!isFavorite)}
                  aria-pressed={isFavorite}
                  aria-label={
                    isFavorite ? "Remove from favorites" : "Add to favorites"
                  }
                  title={isFavorite ? "Favorited" : "Add to favorites"}
                >
                  <Heart
                    size={20}
                    fill={isFavorite ? "#e74c3c" : "none"}
                    color={isFavorite ? "#e74c3c" : "#8b8b8b"}
                    stroke={2}
                  />
                </button>
              </div>

              {/* Image Navigation Arrows */}
              <button
                className="arrow-btn prev-btn"
                onClick={handlePrevImage}
                aria-label="Previous image"
              >
                <ChevronLeft size={18} color="#fff" />
              </button>
              <button
                className="arrow-btn next-btn"
                onClick={handleNextImage}
                aria-label="Next image"
              >
                <ChevronRight size={18} color="#fff" />
              </button>
            </div>

            {/* Thumbnail Gallery */}
            <div className="thumbnail-gallery" role="list">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  className={`thumbnail ${
                    selectedImage === idx ? "active" : ""
                  }`}
                  onClick={() => setSelectedImage(idx)}
                  aria-label={`Show image ${idx + 1}`}
                  role="listitem"
                >
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`Thumbnail ${idx + 1}`}
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="details-section">
            {/* Product Title */}
            <h1 className="product-title">
              GAUSWARN Authentic A2 Bilona Ghee – Made from Indigenous Gir Cow
              Milk
            </h1>

            {/* Description */}
            <p className="product-description">
              Traditionally made. Naturally pure. Rich in aroma & nutrition.
            </p>

            {/* Rating */}
            <div className="rating-section">
              <div className="stars-product" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#ffc107" color="#ffc107" />
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
                  <span className="checkmark" aria-hidden="true">
                    ✓
                  </span>
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
                    aria-pressed={selectedSize === size}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Section */}
            <div className="quantity-section">
              <h3 className="section-title">Quantity</h3>
              <div className="quantity-control">
                <button
                  className="quantity-btn decrease-btn"
                  onClick={handleDecreaseQuantity}
                  aria-label="Decrease quantity"
                >
                  <Minus size={18} />
                </button>
                <input
                  type="number"
                  className="quantity-input"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                />
                <button
                  className="quantity-btn increase-btn"
                  onClick={handleIncreaseQuantity}
                  aria-label="Increase quantity"
                >
                  <Plus size={18} />
                </button>
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
              <button className="btn-add-cart border" aria-label="Add to cart">
                Add to Cart
              </button>
              <button
                className="btn-buy-now action-buttons-bg"
                aria-label="Buy it now"
              >
                Buy now
              </button>
            </div>

            {/* Payment Methods */}
            <div className="payment-section">
              <h4 className="payment-title">Guaranteed Safe Checkout</h4>
              <div className="payment-methods" role="list">
                {paymentMethods.map((method, idx) => (
                  <div key={idx} className="payment-method" role="listitem">
                    <img
                      src={method?.icon}
                      alt={method?.name}
                      className="payment-logo"
                      loading="lazy"
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
              <img
                src={indicator.icon}
                alt={indicator.title}
                className="trust-icon"
              />
              <h4 className="trust-title">{indicator.title}</h4>
            </div>
          ))}
        </div>
      </div>
      <ProfileSection />

      {/* Reviews Section */}
      <div className="product-page">
        <div className="reviews-section">
          <div className="reviews-header">
            <h2 className="reviews-title">Customer Reviews</h2>
            <div className="reviews-summary">
              <div className="rating-summary">
                <div className="rating-score">4.5</div>
                <div className="rating-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#ffc107" color="#ffc107" />
                  ))}
                </div>
                <div className="rating-count">Based on 392 reviews</div>
              </div>
            </div>
          </div>

          {/* Display existing reviews */}
          <div className="reviews-list">
            {reviews.map((review) => (
              <div key={review.id} className="review-item">
                <div className="review-header">
                  <div className="reviewer-info">
                    <div className="reviewer-avatar">
                      {review.name.charAt(0)}
                    </div>
                    <div className="reviewer-details">
                      <h4 className="reviewer-name">
                        {review.name}
                        {review.verified && (
                          <span className="verified-badge">
                            ✓ Verified Purchase
                          </span>
                        )}
                      </h4>
                      <span className="review-date">{review.date}</span>
                    </div>
                  </div>
                </div>

                <div className="review-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill={i < review.rating ? "#ffc107" : "#ddd"}
                      color={i < review.rating ? "#ffc107" : "#ddd"}
                    />
                  ))}
                </div>

                <h5 className="review-title">{review.title}</h5>
                <p className="review-text">{review.text}</p>
              </div>
            ))}
          </div>

          {/* Add Review Form */}
          <div className="add-review-section">
            <h3 className="add-review-title">Share Your Review</h3>

            {submitSuccess && (
              <div className="success-message">
                ✓ Thank you! Your review has been submitted successfully.
              </div>
            )}

            <form onSubmit={handleSubmitReview} className="review-form">
              <div className="form-group">
                <label className="form-label">Your Name *</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter your full name"
                  value={reviewName}
                  onChange={(e) => setReviewName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Rating *</label>
                <div className="rating-selector">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className={`star-btn ${
                        reviewRating >= star ? "selected" : ""
                      }`}
                      onClick={() => setReviewRating(star)}
                      aria-label={`Rate ${star} stars`}
                    >
                      <Star
                        size={28}
                        fill={reviewRating >= star ? "#ffc107" : "none"}
                        color={reviewRating >= star ? "#ffc107" : "#ddd"}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Review Title *</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Sum up your experience in one title"
                  value={reviewTitle}
                  onChange={(e) => setReviewTitle(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Your Review *</label>
                <textarea
                  className="form-textarea"
                  placeholder="Share details of your experience with this product..."
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  rows="5"
                  required
                />
              </div>

              <button type="submit" className="submit-review-btn">
                <Send size={18} />
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>

      <ProductHeroSection />

      <ProductShowcase showProduct={false} />

      {/* ghee future  */}
      <GheeFeatureProductPage />

      {/* <PromotionalCards /> */}
    </>
  );
};

export default ProductPageMain;
