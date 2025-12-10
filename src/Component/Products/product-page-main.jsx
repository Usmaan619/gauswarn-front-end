import React, { useEffect, useState } from "react";
import {
  Heart,
  Star,
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  Send,
} from "lucide-react";
import "./product-page.css";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
import { environment } from "../../environment/environment";

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
// import PromotionalCards from "../PromotionalBanner/promotional-cards";

import productPlaceholder from "../../asset/new-img/product-imgs/product1.png";

import "../../Component/Carousel/carousel-card-wrapper.css";

const ProductPageMain = () => {
  // Image gallery & UI selection
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  // Product & variant data from API
  const [prdData, setPrdData] = useState([]); // array of variants/products
  const [images, setImages] = useState([productPlaceholder]);
  const [checkedItems, setCheckedItems] = useState([]); // single-select boolean array
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [count, setCount] = useState(1);

  // Reviews from API
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [ratingsBreakdown, setRatingsBreakdown] = useState({
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  });

  // Add review form states (name, email, feedback, rating)
  const [reviewName, setReviewName] = useState("");
  const [reviewEmail, setReviewEmail] = useState("");
  const [reviewFeedback, setReviewFeedback] = useState("");
  const [reviewRating, setReviewRating] = useState(5);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Fetch products (GET /users/getAllProduct)
  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        `${environment?.API_BASE_URL}/users/getAllProduct`,
        {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
        }
      );
      const products = res?.data?.products || res?.data || [];
      setPrdData(products);

      if (products.length > 0) {
        const initChecks = Array(products.length).fill(false);
        initChecks[0] = true;
        setCheckedItems(initChecks);

        setSelectedPrice(products[0]?.product_price ?? null);
        setSelectedSize(products[0]?.product_weight ?? null);

        if (products[0]?.images && products[0].images.length > 0) {
          setImages(products[0].images);
          setSelectedImage(0);
        } else {
          setImages([productPlaceholder]);
          setSelectedImage(0);
        }
      } else {
        setCheckedItems([]);
        setImages([productPlaceholder]);
      }
    } catch (err) {
      console.error("Error fetching products:", err?.response || err.message);
      toast.error("Unable to fetch product data");
    }
  };

  // Fetch reviews (GET /users/allfeedback)
  const fetchReviews = async () => {
    try {
      const res = await axios.get(
        `${environment?.API_BASE_URL}/users/allfeedback`,
        {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
        }
      );
      const data = res?.data || {};
      setAverageRating(data.averageRating ?? 0);
      setTotalReviews(data.totalReviews ?? (data.reviews?.length || 0));
      setRatingsBreakdown(
        data.ratingsBreakdown || { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
      );
      setReviews(data.reviews || []);
    } catch (err) {
      console.error("Error fetching reviews:", err?.response || err.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep selectedImage in range when images change
  useEffect(() => {
    if (selectedImage >= images.length) setSelectedImage(0);
  }, [images, selectedImage]);

  // Image gallery controls
  const handlePrevImage = () =>
    setSelectedImage((p) => (p === 0 ? images.length - 1 : p - 1));
  const handleNextImage = () =>
    setSelectedImage((p) => (p === images.length - 1 ? 0 : p + 1));

  // Variant selection (single-select)
  const handleVariantSelect = (index) => {
    if (!prdData || !prdData.length) return;
    const newChecked = Array(prdData.length).fill(false);
    newChecked[index] = true;
    setCheckedItems(newChecked);

    const v = prdData[index];
    setSelectedPrice(v?.product_price ?? null);
    setSelectedSize(v?.product_weight ?? null);
    if (v?.images?.length) {
      setImages(v.images);
      setSelectedImage(0);
    }
    setCount(1);
  };

  // Quantity handlers
  const increaseCount = () => setCount((c) => c + 1);
  const decreaseCount = () => setCount((c) => (c > 1 ? c - 1 : 1));

  // Add to cart (POST /users/login/addtocart)
  const handleAddToCart = async () => {
    const selectedIndex = checkedItems.findIndex(Boolean);
    if (selectedIndex === -1) {
      toast.error("Please select a variant first");
      return;
    }
    if (count <= 0) {
      toast.error("Quantity must be at least 1");
      return;
    }

    const selectedItem = prdData[selectedIndex];

    let pId = sessionStorage.getItem("product_id");
    if (!pId) {
      pId = uuidv4();
      sessionStorage.setItem("product_id", pId);
    }

    const cartItem = {
      product_id: pId,
      user_id: selectedItem.product_id,
      product_weight: selectedItem.product_weight,
      product_quantity: count,
      product_price: selectedItem.product_price,
      product_total_amount: selectedItem.product_price * count,
      purchase_price: selectedItem.product_purchase_price,
    };

    try {
      const response = await axios.post(
        `${environment?.API_BASE_URL}/users/login/addtocart`,
        cartItem,

        {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("Item added to cart successfully!");

        // mirror to sessionStorage
        const existingCart = JSON.parse(sessionStorage.getItem("cart") || "[]");
        const foundIndex = existingCart.findIndex(
          (it) =>
            it.user_id === selectedItem.product_id &&
            it.product_weight === selectedItem.product_weight
        );
        if (foundIndex !== -1) {
          existingCart[foundIndex].product_quantity += count;
          existingCart[foundIndex].product_total_amount =
            existingCart[foundIndex].product_price *
            existingCart[foundIndex].product_quantity;
        } else {
          existingCart.push({
            user_id: selectedItem.product_id,
            product_weight: selectedItem.product_weight,
            product_quantity: count,
            product_price: selectedItem.product_price,
            product_total_amount: selectedItem.product_price * count,
            purchase_price: selectedItem.product_purchase_price,
          });
        }
        sessionStorage.setItem("cart", JSON.stringify(existingCart));
      } else {
        toast.error("Failed to add to cart. Please try again.");
      }
    } catch (error) {
      console.error("Add to cart error:", error?.response || error.message);
      toast.error("Something went wrong while adding to cart");
    }
  };

  // Submit review (POST /users/feedback)
  const handleSubmitReview = async (e) => {
    e.preventDefault();

    if (!reviewName || !reviewEmail || !reviewFeedback || !reviewRating) {
      toast.error("Please fill all fields");
      return;
    }

    const payload = {
      name: reviewName,
      email: reviewEmail,
      feedback: reviewFeedback,
      rating: reviewRating,
    };

    try {
      const res = await axios.post(
        `${environment?.API_BASE_URL}/users/feedback`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
        }
      );

      if (res.status === 201 || res.status === 200) {
        toast.success("Thank you! Your review has been submitted.");
        fetchReviews();
        setReviewName("");
        setReviewEmail("");
        setReviewFeedback("");
        setReviewRating(5);
        setSubmitSuccess(true);
        setTimeout(() => setSubmitSuccess(false), 3000);
      } else {
        toast.error("Failed to submit review. Please try again.");
      }
    } catch (err) {
      console.error("Submit review error:", err?.response || err.message);
      toast.error("Something went wrong while submitting review");
    }
  };

  // Helper to render average-star display (visual)
  const renderAverageStars = (avg) => {
    return (
      <>
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            fill={i < avg ? "#ffc107" : "#ddd"}
            color={i < avg ? "#ffc107" : "#ddd"}
          />
        ))}
      </>
    );
  };

  return (
    <>
      <div className="product-page">
        <div className="product-container">
          {/* Left Side - Image Gallery */}
          <div className="image-section">
            <div className="main-image-wrapper">
              <div className="main-image" aria-live="polite">
                <img
                  src={images[selectedImage] || productPlaceholder}
                  alt={`Product image ${selectedImage + 1}`}
                  className="responsive-product-img"
                  loading="lazy"
                />
                <button
                  className="favorite-btn"
                  onClick={() => setIsFavorite((s) => !s)}
                  aria-pressed={isFavorite}
                  aria-label={
                    isFavorite ? "Remove from favorites" : "Add to favorites"
                  }
                >
                  <Heart
                    size={20}
                    fill={isFavorite ? "#e74c3c" : "none"}
                    color={isFavorite ? "#e74c3c" : "#8b8b8b"}
                    stroke={2}
                  />
                </button>
              </div>

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
                    src={img || productPlaceholder}
                    alt={`Thumbnail ${idx + 1}`}
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="details-section">
            <h1 className="product-title">
              GAUSWARN Authentic A2 Bilona Ghee – Made from Indigenous Gir Cow
              Milk
            </h1>

            <p className="product-description">
              Traditionally made. Naturally pure. Rich in aroma & nutrition.
            </p>

            <div className="rating-section">
              <div className="stars-product" aria-hidden="true">
                {renderAverageStars(averageRating)}
              </div>
              <span className="rating-value">{averageRating.toFixed(1)}</span>
              <span className="reviews">from {totalReviews || 0} Reviews</span>
            </div>

            <div className="badges-section">
              <p className="certifications-text mb-0">
                100% Natural | Chemical-Free | Lactose-Free | Gluten-Free |
                Traditionally Churned
              </p>
            </div>

            <div className="benefits-grid">
              {[
                "Boosts Immunity & Digestion",
                "Promotes Glowing Skin & Hair",
                "Enhances Focus & Memory",
                "Helps Improve Sleep Quality",
                "Strengthens Joints & Bones",
                "Supports Hormonal Balance",
              ].map((benefit, idx) => (
                <div key={idx} className="benefit-item">
                  <span className="checkmark" aria-hidden="true">
                    ✓
                  </span>
                  <span className="benefit-text">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Variant / Size */}
            <div className="size-section">
              <h3 className="section-title">Size</h3>
              <div className="size-options">
                {prdData?.length
                  ? prdData?.map((v, idx) => (
                      <button
                        key={v.product_id || idx}
                        className={`size-btn ${
                          checkedItems[idx] ? "selected" : ""
                        }`}
                        onClick={() => handleVariantSelect(idx)}
                        aria-pressed={checkedItems[idx] || false}
                      >
                        {v.product_weight || v.liter || `Variant ${idx + 1}`}
                      </button>
                    ))
                  : ["500ML", "1000ML", "5KG"].map((s, i) => (
                      <button
                        key={s + i}
                        className={`size-btn ${
                          selectedSize === s ? "selected" : ""
                        }`}
                        onClick={() => setSelectedSize(s)}
                      >
                        {s}
                      </button>
                    ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="quantity-section">
              <h3 className="section-title">Quantity</h3>
              <div className="quantity-control">
                <button
                  className="quantity-btn decrease-btn"
                  onClick={decreaseCount}
                  aria-label="Decrease quantity"
                >
                  <Minus size={18} />
                </button>
                <input
                  type="number"
                  className="quantity-input"
                  value={count}
                  onChange={(e) => {
                    const v = parseInt(e.target.value, 10) || 1;
                    setCount(v > 0 ? v : 1);
                  }}
                  min="1"
                />
                <button
                  className="quantity-btn increase-btn"
                  onClick={increaseCount}
                  aria-label="Increase quantity"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            <div className="availability-section">
              <span className="availability-label">Availability:</span>
              <span className="availability-status">In Stock</span>
            </div>

            <div className="pricing-section">
              <div className="price">
                <span className="current-price">
                  ₹{selectedPrice ?? prdData[0]?.product_price ?? "0"}
                </span>
                <span className="original-price">
                  {selectedPrice
                    ? prdData[checkedItems.findIndex((item) => item)]
                        ?.product_del_price
                    : "0"}
                </span>
              </div>
              <div className="discount-badge">Save 50%</div>
            </div>

            <div className="action-buttons">
              <button
                className="btn-add-cart border"
                aria-label="Add to cart"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <button
                className="btn-buy-now action-buttons-bg"
                aria-label="Buy it now"
              >
                Buy now
              </button>
            </div>

            <div className="payment-section">
              <h4 className="payment-title">Guaranteed Safe Checkout</h4>
              <div className="payment-methods" role="list">
                {[
                  paymentLogo1,
                  paymentLogo2,
                  paymentLogo3,
                  paymentLogo4,
                  paymentLogo5,
                ].map((icon, idx) => (
                  <div key={idx} className="payment-method" role="listitem">
                    <img
                      src={icon}
                      alt={`payment-${idx}`}
                      className="payment-logo"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="trust-section">
          {[secure1, secure2, secure3, secure4].map((icon, idx) => (
            <div key={idx} className="trust-item">
              <img src={icon} alt={`trust-${idx}`} className="trust-icon" />
              <h4 className="trust-title">
                {
                  [
                    "Fast Shipping",
                    "Secure Payment",
                    "Quality Guarantee",
                    "Natural Ingredients",
                  ][idx]
                }
              </h4>
            </div>
          ))}
        </div>
      </div>

      <ProfileSection />

      {/* ===================== REVIEWS SECTION ===================== */}
      <div className="product-page">
        <div className="reviews-section">
          <div className="reviews-header">
            <h2 className="reviews-title">Customer Reviews</h2>

            <div className="reviews-summary">
              <div className="rating-summary">
                <div className="rating-score">{averageRating.toFixed(1)}</div>

                <div className="rating-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < averageRating ? "#ffc107" : "#ddd"}
                      color={i < averageRating ? "#ffc107" : "#ddd"}
                    />
                  ))}
                </div>

                <div className="rating-count">
                  Based on {totalReviews} reviews
                </div>
              </div>
            </div>
          </div>

          {/* ------------------- REVIEWS LIST ------------------- */}
          <div className="reviews-list">
            {reviews.map((review) => (
              <div key={review.id || review.email} className="review-item">
                <div className="review-header">
                  <div className="reviewer-info">
                    <div className="reviewer-avatar">
                      {(review.name || "U").charAt(0)}
                    </div>

                    <div className="reviewer-details">
                      <h4 className="reviewer-name">
                        {review.name}
                        {/* hard-coded verified badge */}
                        <span className="verified-badge">
                          ✓ Verified Purchase
                        </span>
                      </h4>

                      {/* no date in API — left blank */}
                      <span className="review-date"></span>
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

                <p className="review-text">{review.feedback}</p>
              </div>
            ))}
          </div>

          {/* ------------------ ADD REVIEW FORM ------------------ */}
          <div className="add-review-section">
            <h3 className="add-review-title">Share Your Review</h3>

            {submitSuccess && (
              <div className="success-message">
                ✓ Thank you! Your review has been submitted successfully.
              </div>
            )}

            <form onSubmit={handleSubmitReview} className="review-form">
              {/* Rating */}
              <div className="form-group">
                <label className="form-label">Give Your Rating *</label>
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

              {/* Name */}
              <div className="form-group">
                <label className="form-label">Enter your name *</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter your name"
                  value={reviewName}
                  onChange={(e) => setReviewName(e.target.value)}
                  required
                />
              </div>

              {/* Email */}
              <div className="form-group">
                <label className="form-label">Email *</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="Email address"
                  value={reviewEmail}
                  onChange={(e) => setReviewEmail(e.target.value)}
                  required
                />
              </div>

              {/* Feedback */}
              <div className="form-group">
                <label className="form-label">Share your feedback *</label>
                <textarea
                  className="form-textarea"
                  placeholder="Share your feedback..."
                  value={reviewFeedback}
                  onChange={(e) => setReviewFeedback(e.target.value)}
                  rows="5"
                  required
                />
              </div>

              <div className="form-actions d-flex gap-2">
                <button type="submit" className="submit-review-btn">
                  <Send size={18} /> Submit
                </button>

                {/* <button
                  type="button"
                  className="cancel-review-btn"
                  onClick={() => {
                    setReviewName("");
                    setReviewEmail("");
                    setReviewFeedback("");
                    setReviewRating(5);
                  }}
                >
                  Cancel
                </button> */}
              </div>
            </form>
          </div>
        </div>
      </div>

      <ProductHeroSection />
      <ProductShowcase showProduct={false} />
      <GheeFeatureProductPage />
      {/* <PromotionalCards /> */}

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        pauseOnHover
      />
    </>
  );
};

export default ProductPageMain;

// import React, { useEffect, useState } from "react";
// import {
//   Heart,
//   Star,
//   ChevronLeft,
//   ChevronRight,
//   Minus,
//   Plus,
//   Send,
// } from "lucide-react";
// import "./product-page.css";

// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { v4 as uuidv4 } from "uuid";
// import { environment } from "../../environment/environment";

// import secure1 from "../../asset/new-img/product-page-logo/fast.png";
// import secure2 from "../../asset/new-img/product-page-logo/secure.png";
// import secure3 from "../../asset/new-img/product-page-logo/quality.png";
// import secure4 from "../../asset/new-img/product-page-logo/natural.png";

// import paymentLogo1 from "../../asset/new-img/product-page-logo/Visa.png";
// import paymentLogo2 from "../../asset/new-img/product-page-logo/rupay.png";
// import paymentLogo3 from "../../asset/new-img/product-page-logo/master-card.png";
// import paymentLogo4 from "../../asset/new-img/product-page-logo/Bhim.png";
// import paymentLogo5 from "../../asset/new-img/product-page-logo/razor-pay.png";

// import ProfileSection from "./profileSection";
// import ProductHeroSection from "./product-hero-section";
// import ProductShowcase from "../Carousel/product-showcase";
// import GheeFeatureProductPage from "./ghee-product";
// // import PromotionalCards from "../PromotionalBanner/promotional-cards";

// import productPlaceholder from "../../asset/new-img/product-imgs/product1.png";

// const ProductPageMain = () => {
//   // UI states
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [selectedSize, setSelectedSize] = useState(null); // from API
//   const [isFavorite, setIsFavorite] = useState(false);
//   const [quantity, setQuantity] = useState(1);

//   // Data from API
//   const [prdData, setPrdData] = useState([]); // product variants array
//   const [images, setImages] = useState([productPlaceholder]);
//   const [reviews, setReviews] = useState([]);
//   const [averageRating, setAverageRating] = useState(0);
//   const [totalReviews, setTotalReviews] = useState(0);
//   const [ratingsBreakdown, setRatingsBreakdown] = useState({
//     5: 0,
//     4: 0,
//     3: 0,
//     2: 0,
//     1: 0,
//   });

//   // selection states similar to Order component
//   const [checkedItems, setCheckedItems] = useState([]);
//   const [selectedPrice, setSelectedPrice] = useState(null);
//   const [count, setCount] = useState(1);

//   // review form states (keep your existing form)
//   const [reviewName, setReviewName] = useState("");
//   const [reviewRating, setReviewRating] = useState(5);
//   const [reviewTitle, setReviewTitle] = useState("");
//   const [reviewText, setReviewText] = useState("");
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   // --- Helper: fetch products from API ---
//   const fetchProducts = async () => {
//     try {
//       const res = await axios.get(
//         `${environment?.API_BASE_URL}/users/getAllProduct`
//       );
//       // Expecting res.data.products — adjust if API differs
//       const products = res?.data?.products || res?.data || [];
//       setPrdData(products);

//       // Initialize checkedItems based on product length
//       setCheckedItems(Array(products.length).fill(false));

//       // Collect available images (first product's images if available)
//       if (products.length > 0 && products[0].images?.length) {
//         setImages(products[0].images);
//       } else {
//         setImages([productPlaceholder]);
//       }

//       // setDefault selection (first variant)
//       if (products.length > 0) {
//         setCheckedItems((prev) => {
//           const arr = Array(products.length).fill(false);
//           arr[0] = true;
//           return arr;
//         });
//         setSelectedPrice(products[0].product_price || null);
//         setSelectedSize(products[0].product_weight || null);
//         setCount(1);
//       }
//     } catch (err) {
//       console.error("Error fetching products:", err?.response || err.message);
//     }
//   };

//   // --- Helper: fetch reviews/ratings ---
//   const fetchReviews = async () => {
//     try {
//       const res = await axios.get(
//         `${environment?.API_BASE_URL}/users/allfeedback`
//       );
//       const data = res?.data || {};
//       setAverageRating(data.averageRating || 0);
//       setTotalReviews(data.totalReviews || data.reviews?.length || 0);
//       setRatingsBreakdown(
//         data.ratingsBreakdown || { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
//       );
//       setReviews(data.reviews || []);
//     } catch (err) {
//       console.error("Error fetching reviews:", err?.response || err.message);
//     }
//   };

//   // --- choose variant (single-select behaviour) ---
//   const handleCheckboxChange = (index) => {
//     const newChecked = Array(prdData.length).fill(false);
//     newChecked[index] = true;
//     setCheckedItems(newChecked);

//     const variant = prdData[index];
//     setSelectedPrice(variant?.product_price ?? null);
//     setSelectedSize(variant?.product_weight ?? null);
//     setImages(variant?.images?.length ? variant.images : images);
//     setCount(1);
//   };

//   // quantity handlers
//   const increaseCount = () => {
//     setCount((c) => c + 1);
//   };
//   const decreaseCount = () => {
//     setCount((c) => (c > 1 ? c - 1 : 1));
//   };

//   const handleQuantityChange = (e) => {
//     const value = parseInt(e.target.value) || 1;
//     setQuantity(value > 0 ? value : 1);
//   };

//   // add to cart (POST)
//   const handleAddToCart = async () => {
//     const selectedIndex = checkedItems.findIndex((v) => v);
//     if (selectedIndex === -1) {
//       toast.error("Please select a variant first!");
//       return;
//     }
//     if (count <= 0) {
//       toast.error("Quantity must be at least 1");
//       return;
//     }

//     const selectedItem = prdData[selectedIndex];

//     let pId = sessionStorage.getItem("product_id");
//     if (!pId) {
//       pId = uuidv4();
//       sessionStorage.setItem("product_id", pId);
//     }

//     const cartItem = {
//       product_id: pId,
//       user_id: selectedItem.product_id,
//       product_weight: selectedItem.product_weight,
//       product_quantity: count,
//       product_price: selectedItem.product_price,
//       product_total_amount: selectedItem.product_price * count,
//       purchase_price: selectedItem.product_purchase_price,
//     };

//     try {
//       const response = await axios.post(
//         `${environment?.API_BASE_URL}/users/login/addtocart`,
//         cartItem,
//         {
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       if (response.status === 200 || response.status === 201) {
//         toast.success("Item added to cart successfully!");
//         // store cart in sessionStorage for persistence (frontend-only mirror)
//         const existingCart = JSON.parse(sessionStorage.getItem("cart") || "[]");
//         // push or update existing
//         const foundIndex = existingCart.findIndex(
//           (it) =>
//             it.user_id === selectedItem.product_id &&
//             it.product_weight === selectedItem.product_weight
//         );
//         if (foundIndex !== -1) {
//           existingCart[foundIndex].product_quantity += count;
//           existingCart[foundIndex].product_total_amount =
//             existingCart[foundIndex].product_price *
//             existingCart[foundIndex].product_quantity;
//         } else {
//           existingCart.push({
//             user_id: selectedItem.product_id,
//             product_weight: selectedItem.product_weight,
//             product_quantity: count,
//             product_price: selectedItem.product_price,
//             product_total_amount: selectedItem.product_price * count,
//             purchase_price: selectedItem.product_purchase_price,
//           });
//         }
//         sessionStorage.setItem("cart", JSON.stringify(existingCart));
//       } else {
//         toast.error("Failed to add item to cart. Try again.");
//       }
//     } catch (error) {
//       console.error("Add to cart error:", error?.response || error.message);
//       toast.error("Something went wrong. Please try again later.");
//     }
//   };

//   // Review submission (sends to backend if you have endpoint; otherwise just local push)
//   const handleSubmitReview = async (e) => {
//     e.preventDefault();
//     if (!reviewName || !reviewTitle || !reviewText) {
//       toast.error("Please fill in all fields");
//       return;
//     }

//     // If you have a backend endpoint to post review, you can post here.
//     // For now we push locally and optimistically show success and refresh from API.
//     const newReview = {
//       id: reviews.length + 1,
//       name: reviewName,
//       rating: reviewRating,
//       title: reviewTitle,
//       text: reviewText,
//       date: "Just now",
//       verified: false,
//     };

//     setReviews((prev) => [newReview, ...prev]);
//     setReviewName("");
//     setReviewRating(5);
//     setReviewTitle("");
//     setReviewText("");
//     setSubmitSuccess(true);
//     setTimeout(() => setSubmitSuccess(false), 3000);
//     // optionally: post to your backend endpoint for feedback (similar to Order component)
//   };

//   // render stars helper (keeps existing logic)
//   const renderStars = (avg) => {
//     const fullStars = Math.floor(avg);
//     const hasHalf = avg % 1 >= 0.5;
//     const empty = 5 - Math.ceil(avg);
//     return (
//       <div className="star-container d-inline-block">
//         {Array.from({ length: fullStars }).map((_, i) => (
//           <span key={`f-${i}`} className="star text-warning">
//             ★
//           </span>
//         ))}
//         {hasHalf && (
//           <span
//             className="star half text-warning"
//             style={{ position: "relative" }}
//           >
//             <span
//               style={{ position: "absolute", overflow: "hidden", width: "50%" }}
//             >
//               ★
//             </span>
//             <span style={{ opacity: 0.3 }}>★</span>
//           </span>
//         )}
//         {Array.from({ length: empty }).map((_, i) => (
//           <span key={`e-${i}`} className="star text-muted">
//             ★
//           </span>
//         ))}
//       </div>
//     );
//   };

//   // initial data fetch
//   useEffect(() => {
//     fetchProducts();
//     fetchReviews();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // Sync images selected index bounds-safe
//   useEffect(() => {
//     if (selectedImage >= images.length) {
//       setSelectedImage(0);
//     }
//   }, [images, selectedImage]);

//   // UI: prev/next images for gallery
//   const handlePrevImage = () =>
//     setSelectedImage((p) => (p === 0 ? images.length - 1 : p - 1));
//   const handleNextImage = () =>
//     setSelectedImage((p) => (p === images.length - 1 ? 0 : p + 1));

//   return (
//     <>
//       <div className="product-page">
//         <div className="product-container">
//           {/* Left Side - Image Gallery */}
//           <div className="image-section">
//             <div className="main-image-wrapper">
//               <div className="main-image" aria-live="polite">
//                 <img
//                   src={images[selectedImage] || productPlaceholder}
//                   alt={`Product image ${selectedImage + 1}`}
//                   className="responsive-product-img"
//                   loading="lazy"
//                 />
//                 <button
//                   className="favorite-btn"
//                   onClick={() => setIsFavorite(!isFavorite)}
//                   aria-pressed={isFavorite}
//                 >
//                   <Heart
//                     size={20}
//                     fill={isFavorite ? "#e74c3c" : "none"}
//                     color={isFavorite ? "#e74c3c" : "#8b8b8b"}
//                     stroke={2}
//                   />
//                 </button>
//               </div>

//               <button
//                 className="arrow-btn prev-btn"
//                 onClick={handlePrevImage}
//                 aria-label="Previous image"
//               >
//                 <ChevronLeft size={18} color="#fff" />
//               </button>
//               <button
//                 className="arrow-btn next-btn"
//                 onClick={handleNextImage}
//                 aria-label="Next image"
//               >
//                 <ChevronRight size={18} color="#fff" />
//               </button>
//             </div>

//             <div className="thumbnail-gallery" role="list">
//               {images.map((img, idx) => (
//                 <button
//                   key={idx}
//                   className={`thumbnail ${
//                     selectedImage === idx ? "active" : ""
//                   }`}
//                   onClick={() => setSelectedImage(idx)}
//                   aria-label={`Show image ${idx + 1}`}
//                   role="listitem"
//                 >
//                   <img
//                     src={img || productPlaceholder}
//                     alt={`Thumbnail ${idx + 1}`}
//                     loading="lazy"
//                   />
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Right Side - Product Details */}
//           <div className="details-section">
//             <h1 className="product-title">
//               GAUSWARN Authentic A2 Bilona Ghee – Made from Indigenous Gir Cow
//               Milk
//             </h1>

//             <p className="product-description">
//               Traditionally made. Naturally pure. Rich in aroma & nutrition.
//             </p>

//             <div className="rating-section">
//               <div className="stars-product" aria-hidden="true">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} size={18} fill="#ffc107" color="#ffc107" />
//                 ))}
//               </div>
//               <span className="rating-value">{averageRating.toFixed(1)}</span>
//               <span className="reviews">from {totalReviews || 0} Reviews</span>
//             </div>

//             <div className="badges-section">
//               <p className="certifications-text mb-0">
//                 100% Natural | Chemical-Free | Lactose-Free | Gluten-Free |
//                 Traditionally Churned
//               </p>
//             </div>

//             <div className="benefits-grid">
//               {/* hardcoded benefits preserved */}
//               {[
//                 "Boosts Immunity & Digestion",
//                 "Promotes Glowing Skin & Hair",
//                 "Enhances Focus & Memory",
//                 "Helps Improve Sleep Quality",
//                 "Strengthens Joints & Bones",
//                 "Supports Hormonal Balance",
//               ].map((benefit, idx) => (
//                 <div key={idx} className="benefit-item">
//                   <span className="checkmark" aria-hidden="true">
//                     ✓
//                   </span>
//                   <span className="benefit-text">{benefit}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Variant / Size */}
//             <div className="size-section">
//               <h3 className="section-title">Size</h3>
//               <div className="size-options">
//                 {/* Render variants from prdData */}
//                 {prdData?.map((v, idx) => (
//                   <button
//                     key={v.product_id || idx}
//                     className={`size-btn ${
//                       checkedItems[idx] ? "selected" : ""
//                     }`}
//                     onClick={() => handleCheckboxChange(idx)}
//                     aria-pressed={checkedItems[idx] || false}
//                   >
//                     {v.product_weight || v.liter || `Variant ${idx + 1}`}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Quantity */}
//             <div className="quantity-section">
//               <h3 className="section-title">Quantity</h3>
//               <div className="quantity-control">
//                 <button
//                   className="quantity-btn decrease-btn"
//                   onClick={() => setCount((c) => (c > 1 ? c - 1 : 1))}
//                   aria-label="Decrease quantity"
//                 >
//                   <Minus size={18} />
//                 </button>
//                 <input
//                   type="number"
//                   className="quantity-input"
//                   value={count}
//                   onChange={(e) => {
//                     const v = parseInt(e.target.value) || 1;
//                     setCount(v > 0 ? v : 1);
//                   }}
//                   min="1"
//                 />
//                 <button
//                   className="quantity-btn increase-btn"
//                   onClick={() => setCount((c) => c + 1)}
//                   aria-label="Increase quantity"
//                 >
//                   <Plus size={18} />
//                 </button>
//               </div>
//             </div>

//             <div className="availability-section">
//               <span className="availability-label">Availability:</span>
//               <span className="availability-status">In Stock</span>
//             </div>

//             <div className="pricing-section">
//               <div className="price">
//                 <span className="current-price">
//                   ₹{selectedPrice || (prdData[0]?.product_price ?? "0")}
//                 </span>
//                 <span className="original-price">
//                   ₹{prdData[0]?.product_del_price || ""}
//                 </span>
//               </div>
//               <div className="discount-badge">Save 50%</div>
//             </div>

//             <div className="action-buttons">
//               <button
//                 className="btn-add-cart border"
//                 aria-label="Add to cart"
//                 onClick={handleAddToCart}
//               >
//                 Add to Cart
//               </button>
//               <button
//                 className="btn-buy-now action-buttons-bg"
//                 aria-label="Buy it now"
//               >
//                 Buy now
//               </button>
//             </div>

//             <div className="payment-section">
//               <h4 className="payment-title">Guaranteed Safe Checkout</h4>
//               <div className="payment-methods" role="list">
//                 {[
//                   paymentLogo1,
//                   paymentLogo2,
//                   paymentLogo3,
//                   paymentLogo4,
//                   paymentLogo5,
//                 ].map((icon, idx) => (
//                   <div key={idx} className="payment-method" role="listitem">
//                     <img
//                       src={icon}
//                       alt={`payment-${idx}`}
//                       className="payment-logo"
//                       loading="lazy"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="trust-section">
//           {[secure1, secure2, secure3, secure4].map((icon, idx) => (
//             <div key={idx} className="trust-item">
//               <img src={icon} alt={`trust-${idx}`} className="trust-icon" />
//               <h4 className="trust-title">
//                 {
//                   [
//                     "Fast Shipping",
//                     "Secure Payment",
//                     "Quality Guarantee",
//                     "Natural Ingredients",
//                   ][idx]
//                 }
//               </h4>
//             </div>
//           ))}
//         </div>
//       </div>

//       <ProfileSection />

//       {/* Reviews Section (same as your original JSX, but using API-driven data) */}
//       <div className="product-page">
//         <div className="reviews-section">
//           <div className="reviews-header">
//             <h2 className="reviews-title">Customer Reviews</h2>
//             <div className="reviews-summary">
//               <div className="rating-summary">
//                 <div className="rating-score">{averageRating.toFixed(1)}</div>
//                 <div className="rating-stars">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} size={16} fill="#ffc107" color="#ffc107" />
//                   ))}
//                 </div>
//                 <div className="rating-count">
//                   Based on {totalReviews} reviews
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="reviews-list">
//             {reviews.map((review, idx) => (
//               <div key={idx} className="review-item">
//                 <div className="review-header">
//                   <div className="reviewer-info">
//                     <div className="reviewer-avatar">
//                       {(review.name || "U").charAt(0)}
//                     </div>
//                     <div className="reviewer-details">
//                       <h4 className="reviewer-name">
//                         {review.name}
//                         {review.verified && (
//                           <span className="verified-badge">
//                             ✓ Verified Purchase
//                           </span>
//                         )}
//                       </h4>
//                       <span className="review-date">
//                         {review.date || review.createdAt || ""}
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="review-rating">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       size={14}
//                       fill={i < review.rating ? "#ffc107" : "#ddd"}
//                       color={i < review.rating ? "#ffc107" : "#ddd"}
//                     />
//                   ))}
//                 </div>

//                 <h5 className="review-title">{review.title || ""}</h5>
//                 <p className="review-text">
//                   {review.text || review.feedback || ""}
//                 </p>
//               </div>
//             ))}
//           </div>

//           <div className="add-review-section">
//             <h3 className="add-review-title">Share Your Review</h3>

//             {submitSuccess && (
//               <div className="success-message">
//                 ✓ Thank you! Your review has been submitted successfully.
//               </div>
//             )}

//             <form onSubmit={handleSubmitReview} className="review-form">
//               <div className="form-group">
//                 <label className="form-label">Your Name *</label>
//                 <input
//                   type="text"
//                   className="form-input"
//                   placeholder="Enter your full name"
//                   value={reviewName}
//                   onChange={(e) => setReviewName(e.target.value)}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label className="form-label">Rating *</label>
//                 <div className="rating-selector">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <button
//                       key={star}
//                       type="button"
//                       className={`star-btn ${
//                         reviewRating >= star ? "selected" : ""
//                       }`}
//                       onClick={() => setReviewRating(star)}
//                       aria-label={`Rate ${star} stars`}
//                     >
//                       <Star
//                         size={28}
//                         fill={reviewRating >= star ? "#ffc107" : "none"}
//                         color={reviewRating >= star ? "#ffc107" : "#ddd"}
//                       />
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label className="form-label">Review Title *</label>
//                 <input
//                   type="text"
//                   className="form-input"
//                   placeholder="Sum up your experience in one title"
//                   value={reviewTitle}
//                   onChange={(e) => setReviewTitle(e.target.value)}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label className="form-label">Your Review *</label>
//                 <textarea
//                   className="form-textarea"
//                   placeholder="Share details of your experience with this product..."
//                   value={reviewText}
//                   onChange={(e) => setReviewText(e.target.value)}
//                   rows="5"
//                   required
//                 />
//               </div>

//               <button type="submit" className="submit-review-btn">
//                 <Send size={18} />
//                 Submit Review
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       <ProductHeroSection />
//       <ProductShowcase showProduct={false} />
//       <GheeFeatureProductPage />
//       {/* <PromotionalCards /> */}

//       <ToastContainer
//         position="top-center"
//         autoClose={3000}
//         hideProgressBar
//         closeOnClick
//         pauseOnHover
//       />
//     </>
//   );
// };

// export default ProductPageMain;

// import React, { useState } from "react";
// import {
//   Heart,
//   Star,
//   ChevronLeft,
//   ChevronRight,
//   Minus,
//   Plus,
//   Send,
//   Sparkles,
// } from "lucide-react";
// import "./product-page.css";

// import secure1 from "../../asset/new-img/product-page-logo/fast.png";
// import secure2 from "../../asset/new-img/product-page-logo/secure.png";
// import secure3 from "../../asset/new-img/product-page-logo/quality.png";
// import secure4 from "../../asset/new-img/product-page-logo/natural.png";

// import paymentLogo1 from "../../asset/new-img/product-page-logo/Visa.png";
// import paymentLogo2 from "../../asset/new-img/product-page-logo/rupay.png";
// import paymentLogo3 from "../../asset/new-img/product-page-logo/master-card.png";
// import paymentLogo4 from "../../asset/new-img/product-page-logo/Bhim.png";
// import paymentLogo5 from "../../asset/new-img/product-page-logo/razor-pay.png";

// import ProfileSection from "./profileSection";
// import ProductHeroSection from "./product-hero-section";
// import ProductShowcase from "../Carousel/product-showcase";
// import GheeFeatureProductPage from "./ghee-product";
// import PromotionalCards from "../PromotionalBanner/promotional-cards";

// import productImg from "../../asset/new-img/product-imgs/product1.png";

// const ProductPageMain = () => {
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [selectedSize, setSelectedSize] = useState("500ML");
//   const [isFavorite, setIsFavorite] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [reviews, setReviews] = useState([
//     {
//       id: 1,
//       name: "Priya Sharma",
//       rating: 5,
//       title: "Best Quality Ghee!",
//       text: "Absolutely amazing quality. The aroma is incredible and it's pure as claimed. Will definitely order again!",
//       date: "2 weeks ago",
//       verified: true,
//     },
//     {
//       id: 2,
//       name: "Rajesh Kumar",
//       rating: 4,
//       title: "Good Product",
//       text: "Very satisfied with the purchase. Fresh and authentic ghee. Highly recommended.",
//       date: "1 month ago",
//       verified: true,
//     },
//     {
//       id: 3,
//       name: "Anjali Patel",
//       rating: 5,
//       title: "Perfect for Cooking",
//       text: "Using this for all my cooking now. The taste is superior to store-bought ghee. Worth every penny!",
//       date: "3 weeks ago",
//       verified: true,
//     },
//   ]);
//   const [reviewName, setReviewName] = useState("");
//   const [reviewRating, setReviewRating] = useState(5);
//   const [reviewTitle, setReviewTitle] = useState("");
//   const [reviewText, setReviewText] = useState("");
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   const images = [productImg, productImg, productImg, productImg, productImg];

//   const sizes = ["500ML", "1000ML", "5KG", "10KG"];

//   const benefits = [
//     "Boosts Immunity & Digestion",
//     "Promotes Glowing Skin & Hair",
//     "Enhances Focus & Memory",
//     "Helps Improve Sleep Quality",
//     "Strengthens Joints & Bones",
//     "Supports Hormonal Balance",
//   ];

//   const paymentMethods = [
//     { name: "VISA", icon: paymentLogo1 },
//     { name: "RuPay", icon: paymentLogo2 },
//     { name: "MasterCard", icon: paymentLogo3 },
//     { name: "BHIM", icon: paymentLogo4 },
//     { name: "Cash on Delivery", icon: paymentLogo5 },
//   ];

//   const trustIndicators = [
//     { icon: secure1, title: "Fast Shipping", desc: "Quick delivery" },
//     { icon: secure2, title: "Secure Payment", desc: "Protected checkout" },
//     { icon: secure3, title: "Quality Guarantee", desc: "Premium product" },
//     { icon: secure4, title: "Natural Ingredients", desc: "100% pure" },
//   ];

//   const handlePrevImage = () => {
//     setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const handleNextImage = () => {
//     setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   const handleIncreaseQuantity = () => {
//     setQuantity((prev) => prev + 1);
//   };

//   const handleDecreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity((prev) => prev - 1);
//     }
//   };

//   const handleQuantityChange = (e) => {
//     const value = parseInt(e.target.value) || 1;
//     setQuantity(value > 0 ? value : 1);
//   };

//   const handleSubmitReview = (e) => {
//     e.preventDefault();

//     if (!reviewName || !reviewTitle || !reviewText) {
//       alert("Please fill in all fields");
//       return;
//     }

//     const newReview = {
//       id: reviews.length + 1,
//       name: reviewName,
//       rating: reviewRating,
//       title: reviewTitle,
//       text: reviewText,
//       date: "Just now",
//       verified: false,
//     };

//     setReviews([newReview, ...reviews]);

//     setReviewName("");
//     setReviewRating(5);
//     setReviewTitle("");
//     setReviewText("");
//     setSubmitSuccess(true);

//     setTimeout(() => setSubmitSuccess(false), 3000);
//   };

//   //

//   return (
//     <>
//       <div className="product-page">
//         {/* Header Navigation */}

//         {/* Main Product Section */}
//         <div className="product-container">
//           {/* Left Side - Image Gallery */}
//           <div className="image-section">
//             {/* Main Image */}
//             <div className="main-image-wrapper">
//               <div className="main-image" aria-live="polite">
//                 <img
//                   src={images[selectedImage] || "/placeholder.svg"}
//                   alt={`Product image ${selectedImage + 1}`}
//                   className="responsive-product-img"
//                   loading="lazy"
//                 />
//                 <button
//                   className="favorite-btn"
//                   onClick={() => setIsFavorite(!isFavorite)}
//                   aria-pressed={isFavorite}
//                   aria-label={
//                     isFavorite ? "Remove from favorites" : "Add to favorites"
//                   }
//                   title={isFavorite ? "Favorited" : "Add to favorites"}
//                 >
//                   <Heart
//                     size={20}
//                     fill={isFavorite ? "#e74c3c" : "none"}
//                     color={isFavorite ? "#e74c3c" : "#8b8b8b"}
//                     stroke={2}
//                   />
//                 </button>
//               </div>

//               {/* Image Navigation Arrows */}
//               <button
//                 className="arrow-btn prev-btn"
//                 onClick={handlePrevImage}
//                 aria-label="Previous image"
//               >
//                 <ChevronLeft size={18} color="#fff" />
//               </button>
//               <button
//                 className="arrow-btn next-btn"
//                 onClick={handleNextImage}
//                 aria-label="Next image"
//               >
//                 <ChevronRight size={18} color="#fff" />
//               </button>
//             </div>

//             {/* Thumbnail Gallery */}
//             <div className="thumbnail-gallery" role="list">
//               {images.map((img, idx) => (
//                 <button
//                   key={idx}
//                   className={`thumbnail ${
//                     selectedImage === idx ? "active" : ""
//                   }`}
//                   onClick={() => setSelectedImage(idx)}
//                   aria-label={`Show image ${idx + 1}`}
//                   role="listitem"
//                 >
//                   <img
//                     src={img || "/placeholder.svg"}
//                     alt={`Thumbnail ${idx + 1}`}
//                     loading="lazy"
//                   />
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Right Side - Product Details */}
//           <div className="details-section">
//             {/* Product Title */}
//             <h1 className="product-title">
//               GAUSWARN Authentic A2 Bilona Ghee – Made from Indigenous Gir Cow
//               Milk
//             </h1>

//             {/* Description */}
//             <p className="product-description">
//               Traditionally made. Naturally pure. Rich in aroma & nutrition.
//             </p>

//             {/* Rating */}
//             <div className="rating-section">
//               <div className="stars-product" aria-hidden="true">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} size={18} fill="#ffc107" color="#ffc107" />
//                 ))}
//               </div>
//               <span className="rating-value">4.5</span>
//               <span className="reviews">from 392 Reviews</span>
//             </div>

//             {/* Badges */}
//             <div className="badges-section">
//               <p className="certifications-text mb-0">
//                 100% Natural | Chemical-Free | Lactose-Free | Gluten-Free |
//                 Traditionally Churned
//               </p>
//             </div>

//             {/* Benefits Grid */}
//             <div className="benefits-grid">
//               {benefits.map((benefit, idx) => (
//                 <div key={idx} className="benefit-item">
//                   <span className="checkmark" aria-hidden="true">
//                     ✓
//                   </span>
//                   <span className="benefit-text">{benefit}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Size Selector */}
//             <div className="size-section">
//               <h3 className="section-title">Size</h3>
//               <div className="size-options">
//                 {sizes.map((size) => (
//                   <button
//                     key={size}
//                     className={`size-btn ${
//                       selectedSize === size ? "selected" : ""
//                     }`}
//                     onClick={() => setSelectedSize(size)}
//                     aria-pressed={selectedSize === size}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Quantity Section */}
//             <div className="quantity-section">
//               <h3 className="section-title">Quantity</h3>
//               <div className="quantity-control">
//                 <button
//                   className="quantity-btn decrease-btn"
//                   onClick={handleDecreaseQuantity}
//                   aria-label="Decrease quantity"
//                 >
//                   <Minus size={18} />
//                 </button>
//                 <input
//                   type="number"
//                   className="quantity-input"
//                   value={quantity}
//                   onChange={handleQuantityChange}
//                   min="1"
//                 />
//                 <button
//                   className="quantity-btn increase-btn"
//                   onClick={handleIncreaseQuantity}
//                   aria-label="Increase quantity"
//                 >
//                   <Plus size={18} />
//                 </button>
//               </div>
//             </div>

//             {/* Availability */}
//             <div className="availability-section">
//               <span className="availability-label">Availability:</span>
//               <span className="availability-status">In Stock</span>
//             </div>

//             {/* Pricing */}
//             <div className="pricing-section">
//               <div className="price">
//                 <span className="current-price">₹699</span>
//                 <span className="original-price">₹1400</span>
//               </div>
//               <div className="discount-badge">Save 50%</div>
//             </div>

//             {/* Action Buttons */}
//             <div className="action-buttons">
//               <button className="btn-add-cart border" aria-label="Add to cart">
//                 Add to Cart
//               </button>
//               <button
//                 className="btn-buy-now action-buttons-bg"
//                 aria-label="Buy it now"
//               >
//                 Buy now
//               </button>
//             </div>

//             {/* Payment Methods */}
//             <div className="payment-section">
//               <h4 className="payment-title">Guaranteed Safe Checkout</h4>
//               <div className="payment-methods" role="list">
//                 {paymentMethods.map((method, idx) => (
//                   <div key={idx} className="payment-method" role="listitem">
//                     <img
//                       src={method?.icon}
//                       alt={method?.name}
//                       className="payment-logo"
//                       loading="lazy"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Trust Indicators */}
//         <div className="trust-section">
//           {trustIndicators.map((indicator, idx) => (
//             <div key={idx} className="trust-item">
//               <img
//                 src={indicator.icon}
//                 alt={indicator.title}
//                 className="trust-icon"
//               />
//               <h4 className="trust-title">{indicator.title}</h4>
//             </div>
//           ))}
//         </div>
//       </div>
//       <ProfileSection />

//       {/* Reviews Section */}
//       <div className="product-page">
//         <div className="reviews-section">
//           <div className="reviews-header">
//             <h2 className="reviews-title">Customer Reviews</h2>
//             <div className="reviews-summary">
//               <div className="rating-summary">
//                 <div className="rating-score">4.5</div>
//                 <div className="rating-stars">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} size={16} fill="#ffc107" color="#ffc107" />
//                   ))}
//                 </div>
//                 <div className="rating-count">Based on 392 reviews</div>
//               </div>
//             </div>
//           </div>

//           {/* Display existing reviews */}
//           <div className="reviews-list">
//             {reviews.map((review) => (
//               <div key={review.id} className="review-item">
//                 <div className="review-header">
//                   <div className="reviewer-info">
//                     <div className="reviewer-avatar">
//                       {review.name.charAt(0)}
//                     </div>
//                     <div className="reviewer-details">
//                       <h4 className="reviewer-name">
//                         {review.name}
//                         {review.verified && (
//                           <span className="verified-badge">
//                             ✓ Verified Purchase
//                           </span>
//                         )}
//                       </h4>
//                       <span className="review-date">{review.date}</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="review-rating">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       size={14}
//                       fill={i < review.rating ? "#ffc107" : "#ddd"}
//                       color={i < review.rating ? "#ffc107" : "#ddd"}
//                     />
//                   ))}
//                 </div>

//                 <h5 className="review-title">{review.title}</h5>
//                 <p className="review-text">{review.text}</p>
//               </div>
//             ))}
//           </div>

//           {/* Add Review Form */}
//           <div className="add-review-section">
//             <h3 className="add-review-title">Share Your Review</h3>

//             {submitSuccess && (
//               <div className="success-message">
//                 ✓ Thank you! Your review has been submitted successfully.
//               </div>
//             )}

//             <form onSubmit={handleSubmitReview} className="review-form">
//               <div className="form-group">
//                 <label className="form-label">Your Name *</label>
//                 <input
//                   type="text"
//                   className="form-input"
//                   placeholder="Enter your full name"
//                   value={reviewName}
//                   onChange={(e) => setReviewName(e.target.value)}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label className="form-label">Rating *</label>
//                 <div className="rating-selector">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <button
//                       key={star}
//                       type="button"
//                       className={`star-btn ${
//                         reviewRating >= star ? "selected" : ""
//                       }`}
//                       onClick={() => setReviewRating(star)}
//                       aria-label={`Rate ${star} stars`}
//                     >
//                       <Star
//                         size={28}
//                         fill={reviewRating >= star ? "#ffc107" : "none"}
//                         color={reviewRating >= star ? "#ffc107" : "#ddd"}
//                       />
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label className="form-label">Review Title *</label>
//                 <input
//                   type="text"
//                   className="form-input"
//                   placeholder="Sum up your experience in one title"
//                   value={reviewTitle}
//                   onChange={(e) => setReviewTitle(e.target.value)}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label className="form-label">Your Review *</label>
//                 <textarea
//                   className="form-textarea"
//                   placeholder="Share details of your experience with this product..."
//                   value={reviewText}
//                   onChange={(e) => setReviewText(e.target.value)}
//                   rows="5"
//                   required
//                 />
//               </div>

//               <button type="submit" className="submit-review-btn">
//                 <Send size={18} />
//                 Submit Review
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       <ProductHeroSection />

//       <ProductShowcase showProduct={false} />

//       {/* ghee future  */}
//       <GheeFeatureProductPage />

//       {/* <PromotionalCards /> */}
//     </>
//   );
// };

// export default ProductPageMain;
