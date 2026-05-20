import React, { useEffect, useState, useCallback, useMemo } from "react";
import { ChevronLeft, ChevronRight, Minus, Plus, Send } from "lucide-react";
import { Rating } from "react-simple-star-rating";
import "./product-page.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
import { environment } from "../../environment/environment";
import { useNavigate, useSearchParams, useParams } from "react-router-dom";
import {
  getProductSlug,
  getProductCanonicalUrl,
  findProductIndexBySlug,
  buildProductSchema,
  buildFAQSchema,
  buildProductBreadcrumbSchema,
} from "../../utils/seo-utils";
import { FAQ_DATA } from "../FAQ/ProductFaq";
import { useCartContext } from "../Context/UserContext";

// Assets
import secure1 from "../../asset/new-img/product-page-logo/fast.webp";
import secure2 from "../../asset/new-img/product-page-logo/secure.webp";
import secure3 from "../../asset/new-img/product-page-logo/quality.webp";
import secure4 from "../../asset/new-img/product-page-logo/natural.webp";
import paymentLogo1 from "../../asset/new-img/product-page-logo/Visa.webp";
import paymentLogo2 from "../../asset/new-img/product-page-logo/rupay.webp";
import paymentLogo3 from "../../asset/new-img/product-page-logo/master-card.webp";
import paymentLogo4 from "../../asset/new-img/product-page-logo/Bhim.webp";
import paymentLogo5 from "../../asset/new-img/product-page-logo/razor-pay.webp";
import productPlaceholder from "../../asset/new-img/product-imgs/product1.webp";

// Components
import ProfileSection from "./profileSection";
import ProductHeroSection from "./product-hero-section";
import GheeFeatureProductPage from "./ghee-product";
import "../../Component/Carousel/carousel-card-wrapper.css";
import Seo from "../SEO/Seo";
import SeoContent from "../SEO/SeoContent";
import { SEO_CONTENT } from "../SEO/seo-content-data";
import ProductFaq from "../FAQ/ProductFaq";
import NutritionFaqSection from "./NutritionFaqSection";

/* ========================= 
   CONSTANTS 
========================= */
const API_CONFIG = {
  HEADERS: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "69420",
  },
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 2000,
};

const TRUST_BADGES = [
  { icon: secure1, title: "Fast Shipping" },
  { icon: secure2, title: "Secure Payment" },
  { icon: secure3, title: "Quality Guarantee" },
  { icon: secure4, title: "Natural Ingredients" },
];

const PAYMENT_LOGOS = [
  paymentLogo1,
  paymentLogo2,
  paymentLogo3,
  paymentLogo4,
  paymentLogo5,
];

const PRODUCT_BENEFITS = [
  "Boosts Immunity & Digestion",
  "Promotes Glowing Skin & Hair",
  "Enhances Focus & Memory",
  "Helps Improve Sleep Quality",
  "Strengthens Joints & Bones",
  "Promotes Healthy Metabolism",
];

const INITIAL_REVIEW_STATE = {
  name: "",
  email: "",
  feedback: "",
  rating: 5,
};

/* ========================= 
   SHIMMER COMPONENTS 
========================= */
const ShimmerImage = () => (
  <div className="shimmer-image-wrapper">
    <div className="shimmer-image"></div>
  </div>
);

const ShimmerThumbnail = () => <div className="shimmer-thumbnail"></div>;

const ShimmerLine = ({ height = "1rem", width = "100%" }) => (
  <div className="shimmer-line" style={{ height, width }}></div>
);

const ShimmerStars = () => (
  <div className="shimmer-stars">
    {[...Array(5)].map((_, i) => (
      <div key={i} className="shimmer-star"></div>
    ))}
  </div>
);

const ShimmerSizeBtn = () => <div className="shimmer-size-btn"></div>;

const ShimmerReviewCard = () => (
  <div className="shimmer-review-card">
    <div className="shimmer-review-header">
      <div className="shimmer-avatar"></div>
      <div className="shimmer-reviewer-info">
        <ShimmerLine height="1rem" width="60%" />
        <ShimmerLine height="0.75rem" width="40%" />
      </div>
    </div>
    <ShimmerStars />
    <ShimmerLine height="1rem" width="90%" />
    <ShimmerLine height="1rem" width="70%" />
  </div>
);

/* ========================= 
   HELPER FUNCTIONS 
========================= */
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const calculateDiscountPercentage = (originalPrice, currentPrice) => {
  const origPrice = parseFloat(originalPrice) || 0;
  const currPrice = parseFloat(currentPrice) || 0;

  if (!origPrice || !currPrice || origPrice <= currPrice) return 0;

  return Math.round(((origPrice - currPrice) / origPrice) * 100);
};

const parseProductImages = (imageData) => {
  if (!imageData) return [productPlaceholder];

  try {
    const parsed = JSON.parse(imageData);
    const images = parsed.map((img) =>
      typeof img === "string" ? img : img?.url || img?.src || "",
    );
    return images.length > 0 ? images : [productPlaceholder];
  } catch {
    return [productPlaceholder];
  }
};

const normalizeProduct = (product) => ({
  ...product,
  images: parseProductImages(product.product_images),
});

const getSessionStorageCart = () => {
  try {
    return JSON.parse(sessionStorage.getItem("cart") || "[]");
  } catch {
    return [];
  }
};

const setSessionStorageCart = (cart) => {
  try {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {}
};

const triggerCrossPageToast = (type, message) => {
  try {
    sessionStorage.setItem("toastMessage", JSON.stringify({ type, message }));
  } catch (error) {}
};

/* ========================= 
   MAIN COMPONENT 
========================= */
const ProductPageMain = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { slug: urlSlug } = useParams(); // e.g. /products/a2-bilona-ghee-500ml
  const variantParam = searchParams.get("v"); // legacy e.g. /products?v=1
  const { setCart } = useCartContext();

  // Loading states
  const [isProductsLoading, setIsProductsLoading] = useState(true);
  const [isReviewsLoading, setIsReviewsLoading] = useState(true);

  // Image gallery & UI
  const [selectedImage, setSelectedImage] = useState(0);

  // Product data
  const [products, setProducts] = useState([]);

  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Reviews
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);

  const [reviewForm, setReviewForm] = useState(INITIAL_REVIEW_STATE);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  /* ========================= 
     COMPUTED VALUES 
  ========================= */
  const selectedProduct = useMemo(
    () => products[selectedVariantIndex] || null,
    [products, selectedVariantIndex],
  );

  const productImages = useMemo(
    () => selectedProduct?.images || [productPlaceholder],
    [selectedProduct],
  );

  /* ========================= 
   META VIEWCONTENT EVENT
========================= */
  useEffect(() => {
    if (window.fbq && selectedProduct) {
      window.fbq("track", "ViewContent", {
        content_ids: [selectedProduct.product_id],
        content_type: "product",
        value: selectedProduct.product_price,
        currency: "INR",
      });
    }
  }, [selectedProduct]);

  /* ========================= 
     API FUNCTIONS 
  ========================= */
  const fetchProducts = useCallback(async (attempt = 1) => {
    try {
      setIsProductsLoading(true);

      const response = await axios.get(
        `${environment?.API_BASE_URL}/users/getAllProduct`,
        { headers: API_CONFIG.HEADERS },
      );

      const apiProducts = response?.data?.products || [];
      const normalizedProducts = apiProducts
        .map(normalizeProduct)
        .sort(
          (a, b) =>
            getWeightValue(a.product_weight) - getWeightValue(b.product_weight),
        );

      setProducts(normalizedProducts);
      // Default to first variant; the variantParam useEffect will
      // override this if ?v= is present in the URL
      setSelectedVariantIndex(0);
    } catch (error) {
      if (attempt < API_CONFIG.RETRY_ATTEMPTS) {
        await delay(API_CONFIG.RETRY_DELAY);
        return fetchProducts(attempt + 1);
      }

      toast.error("Unable to fetch product data");
    } finally {
      setIsProductsLoading(false);
    }
  }, []);

  const fetchReviews = useCallback(async () => {
    try {
      setIsReviewsLoading(true);

      const response = await axios.get(
        `${environment?.API_BASE_URL}/users/allfeedback`,
        { headers: API_CONFIG.HEADERS },
      );

      const data = response?.data || {};
      setAverageRating(data.averageRating ?? 0);
      setTotalReviews(data.totalReviews ?? data.reviews?.length ?? 0);
      setReviews(data.reviews || []);
      // setRatingsBreakdown(data.ratingsBreakdown || {});
    } catch (error) {
    } finally {
      setIsReviewsLoading(false);
    }
  }, []);

  /* ========================= 
     CART FUNCTIONS 
  ========================= */
  const updateCartItem = useCallback((cartItem, existingCart) => {
    const foundIndex = existingCart.findIndex(
      (item) =>
        item.user_id === cartItem.user_id &&
        item.product_weight === cartItem.product_weight,
    );

    if (foundIndex !== -1) {
      existingCart[foundIndex].product_quantity += cartItem.product_quantity;
      existingCart[foundIndex].quantity += cartItem.quantity;
      existingCart[foundIndex].product_total_amount =
        existingCart[foundIndex].product_price *
        existingCart[foundIndex].product_quantity;
    } else {
      existingCart.push(cartItem);
    }

    return existingCart;
  }, []);

  const createCartItem = useCallback((product, qty) => {
    const productId = sessionStorage.getItem("product_id") || uuidv4();
    sessionStorage.setItem("product_id", productId);

    return {
      product_id: productId,
      user_id: product.product_id,
      product_weight: product.product_weight,
      product_quantity: qty,
      quantity: qty,
      product_price: product.product_price,
      product_total_amount: product.product_price * qty,
      purchase_price: product.product_purchase_price,
      product_image: product.images?.[0] || productPlaceholder,
    };
  }, []);

  const handleAddToCart = useCallback(async () => {
    if (isProductsLoading || !selectedProduct) {
      toast.error("Please select a variant first");
      return;
    }

    const cartItem = createCartItem(selectedProduct, quantity);

    try {
      const response = await axios.post(
        `${environment?.API_BASE_URL}/users/login/addtocart`,
        cartItem,
        { headers: API_CONFIG.HEADERS },
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("Item added to cart successfully!");

        if (window.fbq && selectedProduct) {
          window.fbq("track", "AddToCart", {
            content_ids: [selectedProduct.product_id],
            content_type: "product",
            value: selectedProduct.product_price,
            currency: "INR",
          });
        }

        let existingCart = getSessionStorageCart();
        existingCart = updateCartItem(cartItem, existingCart);

        setSessionStorageCart(existingCart);
        setCart(existingCart);
      } else {
        toast.error("Failed to add to cart");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  }, [
    isProductsLoading,
    selectedProduct,
    quantity,
    createCartItem,
    updateCartItem,
    setCart,
  ]);

  const handleBuyNow = useCallback(async () => {
    if (isProductsLoading || !selectedProduct) {
      toast.error("Please select a variant first");
      return;
    }

    const cartItem = createCartItem(selectedProduct, quantity);
    let existingCart = getSessionStorageCart();
    existingCart = updateCartItem(cartItem, existingCart);

    setSessionStorageCart(existingCart);
    setCart(existingCart);

    triggerCrossPageToast("success", "Item added to cart!");
    navigate("/cart");
  }, [
    isProductsLoading,
    selectedProduct,
    quantity,
    createCartItem,
    updateCartItem,
    setCart,
    navigate,
  ]);

  /* ========================= 
     REVIEW FUNCTIONS 
  ========================= */
  const handleSubmitReview = useCallback(
    async (e) => {
      e.preventDefault();

      const { name, email, feedback, rating } = reviewForm;

      if (!name || !email || !feedback || !rating) {
        toast.error("Please fill all fields");
        return;
      }

      try {
        const response = await axios.post(
          `${environment?.API_BASE_URL}/users/feedback`,
          reviewForm,
          { headers: API_CONFIG.HEADERS },
        );

        if (response.status === 200 || response.status === 201) {
          toast.success("Thank you! Your review has been submitted.");
          fetchReviews();
          setReviewForm(INITIAL_REVIEW_STATE);
          setSubmitSuccess(true);
          setTimeout(() => setSubmitSuccess(false), 3000);
        }
      } catch (error) {
        toast.error("Something went wrong");
      }
    },
    [reviewForm, fetchReviews],
  );

  /* ========================= 
     UI HANDLERS 
  ========================= */
  const handleVariantSelect = useCallback((index) => {
    setSelectedVariantIndex(index);
    setSelectedImage(0);
    setQuantity(1);
    // Navigate to SEO-friendly slug URL
    const product = products[index];
    if (product) {
      const slug = getProductSlug(product);
      navigate(`/products/${slug}`, { replace: true });
    }
  }, [products, navigate]);

  const handlePrevImage = useCallback(() => {
    setSelectedImage((prev) =>
      prev === 0 ? productImages.length - 1 : prev - 1,
    );
  }, [productImages.length]);

  const handleNextImage = useCallback(() => {
    setSelectedImage((prev) =>
      prev === productImages.length - 1 ? 0 : prev + 1,
    );
  }, [productImages.length]);

  const handleQuantityChange = useCallback((value) => {
    const newQuantity = parseInt(value, 10) || 1;
    setQuantity(newQuantity > 0 ? newQuantity : 1);
  }, []);

  const increaseQuantity = useCallback(
    () => setQuantity((prev) => prev + 1),
    [],
  );

  const decreaseQuantity = useCallback(
    () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1)),
    [],
  );

  const getWeightValue = (weight) => {
    if (!weight) return 0;

    const value = parseFloat(weight);
    if (weight.toLowerCase().includes("kg")) {
      return value * 1000; // convert kg to ml/g equivalent
    }
    return value;
  };

  /* ========================= 
     EFFECTS 
  ========================= */
  useEffect(() => {
    fetchProducts();
    fetchReviews();
  }, [fetchProducts, fetchReviews]);

  useEffect(() => {
    if (selectedImage >= productImages.length) {
      setSelectedImage(0);
    }
  }, [productImages.length, selectedImage]);

  // Sync variant selection from slug URL (primary) or legacy ?v= param (redirect)
  useEffect(() => {
    if (products.length === 0) return;

    // Primary: resolve from slug URL
    if (urlSlug) {
      const index = findProductIndexBySlug(products, urlSlug);
      if (index !== -1) {
        setSelectedVariantIndex(index);
        setSelectedImage(0);
        setQuantity(1);
      }
      return;
    }

    // Legacy: redirect old ?v= param to slug URL
    if (variantParam) {
      const index = products.findIndex(
        (p) => String(p.product_id) === String(variantParam)
      );
      if (index !== -1) {
        const slug = getProductSlug(products[index]);
        navigate(`/products/${slug}`, { replace: true });
      }
      return;
    }
  }, [urlSlug, variantParam, products, navigate]);

  /* ========================= 
     RENDER 
  ========================= */
  return (
    <>
      <Seo
        title={selectedProduct
          ? `Buy ${selectedProduct.product_weight} Pure A2 Gir Cow Ghee Online - Lab Tested Bilona Ghee | Gauswarn`
          : "Pure A2 Gir Cow Ghee - Lab Tested Bilona Method | Gauswarn Shop"}
        description={selectedProduct
          ? `Order ${selectedProduct.product_weight} pure A2 Gir Cow Ghee at ₹${selectedProduct.product_price}. Made using traditional Bilona method. Lab tested, chemical-free. Free delivery across India.`
          : "Shop Gauswarn's lab-verified A2 Cow Ghee. Handcrafted using the traditional wooden Bilona method for maximum nutrition. Fast pan-India delivery."}
        url={selectedProduct ? getProductCanonicalUrl(selectedProduct) : "https://gauswarn.com/products/"}
        type="product"
        image={selectedProduct?.images?.[0] || "https://gauswarn.com/favicon-512x512.png"}
        structuredData={selectedProduct ? [
          buildProductSchema(selectedProduct, averageRating, totalReviews, reviews),
          buildProductBreadcrumbSchema(selectedProduct),
          buildFAQSchema(FAQ_DATA),
        ] : undefined}
      />

      <div className="product-page">
        <div className="product-container">
          {/* ========== IMAGE GALLERY ========== */}
          <div className="image-section">
            <div className="main-image-wrapper">
              <div className="main-image" aria-live="polite">
                {isProductsLoading ? (
                  <ShimmerImage />
                ) : (
                  <img
                    src={productImages[selectedImage]}
                    alt={`Gauswarn Pure A2 Bilona Ghee ${selectedProduct?.product_weight || ''} - Product View ${selectedImage + 1}`}
                    className="responsive-product-img"
                    loading="eager"
                    fetchpriority="high"
                    width="600"
                    height="600"
                  />
                )}
              </div>

              {!isProductsLoading && (
                <>
                  <button
                    className="arrow-btn prev-btn"
                    onClick={handlePrevImage}
                    aria-label="Previous product image"
                  >
                    <ChevronLeft size={18} color="#fff" />
                  </button>
                  <button
                    className="arrow-btn next-btn"
                    onClick={handleNextImage}
                    aria-label="Next product image"
                  >
                    <ChevronRight size={18} color="#fff" />
                  </button>
                </>
              )}
            </div>

            <div className="thumbnail-gallery" role="list">
              {isProductsLoading ? (
                <>
                  {[...Array(4)].map((_, i) => (
                    <ShimmerThumbnail key={i} />
                  ))}
                </>
              ) : (
                productImages.map((img, idx) => (
                  <button
                    key={idx}
                    className={`thumbnail ${
                      selectedImage === idx ? "active" : ""
                    }`}
                    onClick={() => setSelectedImage(idx)}
                    aria-label={`View Gauswarn A2 Ghee image ${idx + 1}`}
                    role="listitem"
                  >
                    <img
                      src={img}
                      alt={`Gauswarn Ghee Thumbnail ${idx + 1}`}
                      loading="lazy"
                    />
                  </button>
                ))
              )}
            </div>
          </div>

          {/* ========== PRODUCT DETAILS ========== */}
          <div className="details-section">
            {isProductsLoading ? (
              <>
                <ShimmerLine height="2.5rem" width="80%" />
                <ShimmerLine height="1.25rem" width="60%" />
                <div className="shimmer-rating-section">
                  <ShimmerStars />
                  <ShimmerLine height="1rem" width="4rem" />
                  <ShimmerLine height="1rem" width="8rem" />
                </div>
                <ShimmerLine height="1rem" width="70%" />
                <div className="shimmer-benefits">
                  <ShimmerLine height="1rem" width="50%" />
                  <ShimmerLine height="1rem" width="60%" />
                  <ShimmerLine height="1rem" width="45%" />
                </div>
                <div className="shimmer-size-section">
                  <ShimmerLine height="1.25rem" width="20%" />
                  <div className="shimmer-size-buttons">
                    {[...Array(3)].map((_, i) => (
                      <ShimmerSizeBtn key={i} />
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <h1 className="product-title">
                  GAUSWARN Authentic A2 Bilona Ghee – Made from Indigenous Gir
                  Cow Milk
                </h1>

                <p className="product-description">
                  Traditionally made Pure Bilona Ghee. Naturally pure and rich
                  in aroma & nutrition.
                </p>

                <div className="rating-section">
                  <Rating
                    initialValue={averageRating}
                    readonly
                    size={20}
                    allowFraction={true}
                    fillColor="gold"
                    emptyColor="#ddd"
                  />
                  <span className="rating-value">
                    {averageRating.toFixed(1)}
                  </span>
                  <span className="reviews">
                    from {totalReviews || 0} Reviews
                  </span>
                </div>

                <div className="badges-section">
                  <p className="certifications-text mb-0">
                    100% Natural | Chemical-Free | Traditionally Churned
                  </p>
                </div>

                <div className="benefits-grid">
                  {PRODUCT_BENEFITS.map((benefit, idx) => (
                    <div key={idx} className="benefit-item">
                      <span className="checkmark" aria-hidden="true">
                        ✓
                      </span>
                      <span className="benefit-text">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* SIZE SELECTION */}
                <div className="size-section">
                  <h3 className="section-title">Size</h3>
                  <div className="size-options">
                    {products.map((product, idx) => (
                      <button
                        key={product.product_id || idx}
                        className={`size-btn ${
                          selectedVariantIndex === idx ? "selected" : ""
                        }`}
                        onClick={() => handleVariantSelect(idx)}
                        aria-pressed={selectedVariantIndex === idx}
                      >
                        {product.product_weight ||
                          product.liter ||
                          `Variant ${idx + 1}`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* QUANTITY */}
                <div className="quantity-section">
                  <h3 className="section-title">Quantity</h3>
                  <div className="quantity-control">
                    <button
                      className="quantity-btn decrease-btn"
                      onClick={decreaseQuantity}
                      aria-label="Decrease quantity"
                    >
                      <Minus size={18} />
                    </button>
                    <input
                      type="number"
                      className="quantity-input"
                      value={quantity}
                      onChange={(e) => handleQuantityChange(e.target.value)}
                      min="1"
                    />
                    <button
                      className="quantity-btn increase-btn"
                      onClick={increaseQuantity}
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
                      ₹
                      {selectedProduct?.product_price?.toLocaleString(
                        "en-IN",
                      ) ?? "0"}
                    </span>
                    {selectedProduct?.product_del_price &&
                      parseFloat(selectedProduct.product_del_price) >
                        parseFloat(selectedProduct.product_price) && (
                        <span className="original-price">
                          ₹
                          {parseFloat(
                            selectedProduct.product_del_price,
                          ).toLocaleString("en-IN")}
                        </span>
                      )}
                  </div>

                  {selectedProduct &&
                    selectedProduct.product_del_price &&
                    parseFloat(selectedProduct.product_del_price) >
                      parseFloat(selectedProduct.product_price) && (
                      <div className="discount-badge">
                        Save{" "}
                        {calculateDiscountPercentage(
                          selectedProduct.product_del_price,
                          selectedProduct.product_price,
                        )}
                        %
                      </div>
                    )}
                </div>

                <div className="action-buttons">
                  <button
                    className="btn-add-cart border"
                    onClick={handleAddToCart}
                    aria-label="Add to cart"
                  >
                    Add to Cart
                  </button>
                  <button
                    className="btn-buy-now action-buttons-bg"
                    onClick={handleBuyNow}
                    aria-label="Buy it now"
                  >
                    Buy now
                  </button>
                </div>

                <div className="payment-section">
                  <h4 className="payment-title">Guaranteed Safe Checkout</h4>
                  <div className="payment-methods" role="list">
                    {PAYMENT_LOGOS.map((logo, idx) => (
                      <div key={idx} className="payment-method" role="listitem">
                        <img
                          src={logo}
                          alt={`Payment method ${idx + 1}`}
                          className="payment-logo"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* ========== TRUST BADGES ========== */}
        <div className="trust-section">
          {TRUST_BADGES.map((badge, idx) => (
            <div key={idx} className="trust-item">
              <img
                src={badge.icon}
                alt={badge.title}
                className="trust-icon"
                loading="lazy"
              />
              <h4 className="trust-title">{badge.title}</h4>
            </div>
          ))}
        </div>
      </div>

      <ProfileSection />

      {/* ========== REVIEWS SECTION ========== */}
      <div className="product-page">
        <div className="reviews-section">
          <div className="reviews-header">
            <h2 className="reviews-title">Customer Reviews</h2>

            {isReviewsLoading ? (
              <div className="shimmer-review-summary">
                <div className="shimmer-rating-score"></div>
                <ShimmerStars />
                <ShimmerLine height="0.875rem" width="8rem" />
              </div>
            ) : (
              <div className="reviews-summary">
                <div className="rating-summary">
                  <div className="rating-score">{averageRating.toFixed(1)}</div>
                  {/* <StarRating rating={Math.floor(averageRating)} size={16} /> */}

                  <Rating
                    initialValue={averageRating}
                    readonly
                    size={16}
                    allowFraction={true}
                    fillColor="gold"
                    emptyColor="#ddd"
                  />
                  <div className="rating-count">
                    Based on {totalReviews} reviews
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* REVIEWS LIST */}
          <div className="reviews-list">
            {isReviewsLoading ? (
              <>
                {[...Array(3)].map((_, i) => (
                  <ShimmerReviewCard key={i} />
                ))}
              </>
            ) : (
              reviews.map((review, idx) => (
                <div key={review.id || idx} className="review-item">
                  <div className="review-header">
                    <div className="reviewer-info">
                      <div className="reviewer-avatar">
                        {(review.name || "U").charAt(0).toUpperCase()}
                      </div>
                      <div className="reviewer-details">
                        <h4 className="reviewer-name">
                          {review.name}
                          <span className="verified-badge">
                            ✓ Verified Purchase
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <Rating
                    initialValue={review.rating || 0}
                    readonly
                    size={14}
                    allowFraction={true}
                    fillColor="gold"
                    emptyColor="#ddd"
                  />
                  <p className="review-text">{review.feedback}</p>
                </div>
              ))
            )}
          </div>

          {/* ADD REVIEW FORM */}
          <div className="add-review-section">
            <h3 className="add-review-title">Share Your Review</h3>

            {submitSuccess && (
              <div className="success-message">
                ✓ Thank you! Your review has been submitted successfully.
              </div>
            )}

            <form onSubmit={handleSubmitReview} className="review-form">
              <div className="form-group">
                <label className="form-label">Give Your Rating *</label>

                <Rating
                  onClick={(value) =>
                    setReviewForm((prev) => ({ ...prev, rating: value }))
                  }
                  initialValue={reviewForm.rating}
                  size={28}
                  allowFraction={true}
                  transition
                  fillColor="gold"
                  emptyColor="#ddd"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Enter your name *</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter your name"
                  value={reviewForm.name}
                  onChange={(e) =>
                    setReviewForm({ ...reviewForm, name: e.target.value })
                  }
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email *</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="Email address"
                  value={reviewForm.email}
                  onChange={(e) =>
                    setReviewForm({ ...reviewForm, email: e.target.value })
                  }
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Share your feedback *</label>
                <textarea
                  className="form-textarea"
                  placeholder="Share your feedback..."
                  value={reviewForm.feedback}
                  onChange={(e) =>
                    setReviewForm({ ...reviewForm, feedback: e.target.value })
                  }
                  rows="5"
                  required
                />
              </div>

              <div className="form-actions d-flex gap-2">
                <button
                  aria-label="Submit Review"
                  type="submit"
                  className="submit-review-btn"
                >
                  <Send size={18} /> Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ProductHeroSection />
      <NutritionFaqSection />
      <ProductFaq />
      <GheeFeatureProductPage />
      <SeoContent
        heading={SEO_CONTENT.products.heading}
        sections={SEO_CONTENT.products.sections}
      />
    </>
  );
};

export default ProductPageMain;
