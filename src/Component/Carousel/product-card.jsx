import React from "react";
import { ShoppingCart, Star } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { environment } from "../../environment/environment";
import { useCartContext } from "../Context/UserContext";

import productPlaceholder from "../../asset/new-img/product-imgs/product1.webp";
import "./product-card.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { setCart } = useCartContext();

  const images = React.useMemo(() => {
    if (!product?.product_images) return [productPlaceholder];
    try {
      // If product_images is already an array, use it, otherwise parse it
      const parsed = Array.isArray(product.product_images)
        ? product.product_images
        : typeof product.product_images === "string"
          ? JSON.parse(product.product_images)
          : [productPlaceholder];

      return parsed?.map((img) =>
        typeof img === "string" ? img : img?.url || img?.src,
      );
    } catch {
      return [productPlaceholder];
    }
  }, [product]);

  const handleBuyNow = (e) => {
    e.stopPropagation();
    if (!product) {
      toast.error("Product data unavailable");
      return;
    }

    let pId = sessionStorage.getItem("product_id") || uuidv4();
    sessionStorage.setItem("product_id", pId);

    const cartItem = {
      product_id: pId,
      user_id: product.product_id,
      product_weight: product.product_weight,
      product_quantity: 1,
      quantity: 1, // header cart count
      product_price: product.product_price,
      product_total_amount: product.product_price,
      purchase_price: product.product_purchase_price,
      product_image: images[0] || productPlaceholder,
    };

    let existingCart = JSON.parse(sessionStorage.getItem("cart") || "[]");

    const foundIndex = existingCart.findIndex(
      (it) =>
        it.user_id === product.product_id &&
        it.product_weight === product.product_weight,
    );

    if (foundIndex !== -1) {
      existingCart[foundIndex].product_quantity += 1;
      existingCart[foundIndex].quantity += 1;
      existingCart[foundIndex].product_total_amount =
        existingCart[foundIndex].product_price *
        existingCart[foundIndex].product_quantity;
    } else {
      existingCart.push(cartItem);
    }

    sessionStorage.setItem("cart", JSON.stringify(existingCart));
    setCart(existingCart);

    toast.success(`${product.product_weight} Ghee added to cart`);
    navigate("/cart");
  };

  const handleAddToCart = async (e) => {
    e.stopPropagation();
    if (!product) {
      toast.error("Product data unavailable");
      return;
    }

    let pId = sessionStorage.getItem("product_id") || uuidv4();
    sessionStorage.setItem("product_id", pId);

    const cartItem = {
      product_id: pId,
      user_id: product.product_id,
      product_weight: product.product_weight,
      product_quantity: 1,
      quantity: 1,
      product_price: product.product_price,
      product_total_amount: product.product_price,
      purchase_price: product.product_purchase_price,
      product_image: images[0] || productPlaceholder,
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
        },
      );

      if (response.status === 200 || response.status === 201) {
        toast.success(`${product.product_weight} added to cart!`);

        let existingCart = JSON.parse(sessionStorage.getItem("cart") || "[]");
        const foundIndex = existingCart.findIndex(
          (it) =>
            it.user_id === product.product_id &&
            it.product_weight === product.product_weight,
        );

        if (foundIndex !== -1) {
          existingCart[foundIndex].product_quantity += 1;
          existingCart[foundIndex].quantity += 1;
          existingCart[foundIndex].product_total_amount =
            existingCart[foundIndex].product_price *
            existingCart[foundIndex].product_quantity;
        } else {
          existingCart.push(cartItem);
        }

        sessionStorage.setItem("cart", JSON.stringify(existingCart));
        setCart(existingCart);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handleViewDetails = (e) => {
    e.stopPropagation();
    if (product?.product_id) {
      sessionStorage.setItem("selected_variant_id", product.product_id);
    }
    navigate("/products");
  };

  const calculateDiscount = (original, current) => {
    const orig = parseFloat(original) || 0;
    const curr = parseFloat(current) || 0;
    if (!orig || !curr || orig <= curr) return null;
    return Math.round(((orig - curr) / orig) * 100);
  };

  const discount = calculateDiscount(
    product?.product_del_price,
    product?.product_price,
  );

  return (
    <div className="premium-product-card" onClick={handleViewDetails}>
      {discount ? (
        <div className="product-card-badge discount-mode">OFF {discount}%</div>
      ) : (
        <div></div>
      )}

      <div className="product-image-box">
        <img
          src={images[0] || productPlaceholder}
          alt={product?.product_name}
          className="product-img-main"
          width="300"
          height="300"
          loading="lazy"
        />
        <div className="image-overlay">
          <button className="quick-view-btn">View Details</button>
        </div>
      </div>

      <div className="product-details">
        <h3 className="product-title">
          Pure A2 Gir Cow Bilona Ghee - {product?.product_weight || "Weight Not Specified"}
        </h3>

        <div className="rating-row">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                fill={i < 4 ? "#d4af37" : "transparent"}
                color="#d4af37"
              />
            ))}
          </div>
          <span className="review-count">(120+)</span>
        </div>

        <div className="price-row">
          <div className="price-container">
            <span className="current-price">₹{product?.product_price}</span>
            {product?.product_del_price && (
              <span className="old-price">₹{product.product_del_price}</span>
            )}
          </div>
          <button
            className="add-to-cart-icon-btn"
            onClick={handleAddToCart}
            aria-label="Add to cart"
          >
            <ShoppingCart size={20} />
          </button>
        </div>

        <button className="buy-btn-full" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export { ProductCard };
export default ProductCard;
