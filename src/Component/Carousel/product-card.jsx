import React, { useState } from "react";
import { ChevronDown, Star, ShoppingCart } from "lucide-react";
import { TiStarFullOutline } from "react-icons/ti";

const ProductCard = () => {
  const [quantity, setQuantity] = useState("1000ml");
  // #FFF9E0
  return (
    <div className="featured-product">
      <div className="product-image-container">
        <img
          src="/ghee-jar-product-shot.jpg"
          alt="Natural Gir Cow Ghee"
          className="product-image"
        />
      </div>

      <div className="product-info">
        <h2 className="product-name">Natural Gir Cow Ghee</h2>
        <p className="product-description">
          100% Natural and Pure Gir Cow Ghee
        </p>

        <div className="product-pricing">
          <span className="price-current">₹899</span>
          <span className="price-original">₹1800</span>

          <TiStarFullOutline size={20} className="star-icon" fill="#fed525" />
          <span className="rating-value">4.5</span>
        </div>

        <div className="product-quantity">
          <select
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="quantity-select"
          >
            <option value="1000ml">1000ml</option>
            <option value="500ml">500ml</option>
            <option value="250ml">250ml</option>
          </select>
          <ChevronDown size={16} className="chevron-icon" />
        </div>

        <button className="add-to-cart-btn mt-3">
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
