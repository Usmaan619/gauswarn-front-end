import React, { useMemo, useState } from "react";
import { ChevronDown, ShoppingCart } from "lucide-react";
import { TiStarFullOutline } from "react-icons/ti";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCartContext } from "../Context/UserContext";

import productPlaceholder from "../../asset/new-img/product-imgs/product1.png";
import "./product-card.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { setCart } = useCartContext();

  const variants = useMemo(() => {
    if (!product) return [];
    return Array.isArray(product) ? product : [product];
  }, [product]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedVariant = variants[selectedIndex];

  const images = useMemo(() => {
    if (!selectedVariant?.product_images) return [productPlaceholder];
    try {
      const parsed = JSON.parse(selectedVariant.product_images);
      return parsed?.map((img) =>
        typeof img === "string" ? img : img?.url || img?.src
      );
    } catch {
      return [productPlaceholder];
    }
  }, [selectedVariant]);

  // ✅ BUY NOW LOGIC (same as ProductPageMain)
  const handleBuyNow = () => {
    if (!selectedVariant) {
      toast.error("Please select a variant");
      return;
    }

    let pId = sessionStorage.getItem("product_id") || uuidv4();
    sessionStorage.setItem("product_id", pId);

    const cartItem = {
      product_id: pId,
      user_id: selectedVariant.product_id,
      product_weight: selectedVariant.product_weight,
      product_quantity: 1,
      quantity: 1, // ✅ header cart count
      product_price: selectedVariant.product_price,
      product_total_amount: selectedVariant.product_price,
      purchase_price: selectedVariant.product_purchase_price,
      product_image: images[0] || productPlaceholder,
    };

    let existingCart = JSON.parse(sessionStorage.getItem("cart") || "[]");

    const foundIndex = existingCart.findIndex(
      (it) =>
        it.user_id === selectedVariant.product_id &&
        it.product_weight === selectedVariant.product_weight
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
    setCart(existingCart); // ✅ update context

    toast.success("Item added to cart");
    navigate("/cart");
  };

  return (
    <div className="featured-product">
      <div className="product-image-container">
        <img
          src={images[0] || productPlaceholder}
          alt={selectedVariant?.product_name}
          className="product-image"
        />
      </div>

      <div className="product-info">
        <h2 className="product-name">
          {selectedVariant?.product_name || "Product"}
        </h2>

        <p className="product-description">
          {selectedVariant?.product_description || "100% Natural Product"}
        </p>

        {/* PRICE */}
        <div className="product-pricing">
          <span className="price-current">
            ₹{selectedVariant?.product_price}
          </span>

          {selectedVariant?.product_del_price && (
            <span className="price-original">
              ₹{selectedVariant.product_del_price}
            </span>
          )}

          <TiStarFullOutline size={18} fill="#fed525" />
          <span className="rating-value">4.5</span>
        </div>

        {/* VARIANT SELECT */}
        <div className="product-quantity">
          <select
            value={selectedIndex}
            onChange={(e) => setSelectedIndex(Number(e.target.value))}
            className="quantity-select"
          >
            {variants.map((v, idx) => (
              <option key={idx} value={idx}>
                {v.product_weight || "Variant"}
              </option>
            ))}
          </select>
          <ChevronDown size={16} className="chevron-icon" />
        </div>

        {/* BUY NOW */}
        <button
          className="add-to-cart-btn mt-3 product-action-buttons-bg"
          onClick={handleBuyNow}
        >
          <ShoppingCart size={18} />
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
