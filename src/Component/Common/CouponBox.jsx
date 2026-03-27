import React, { useState } from "react";
import axios from "axios";
import { environment } from "../../environment/environment";
import { toast } from "react-toastify";
import { Tag, X, CheckCircle } from "lucide-react";

const CouponBox = ({ cartTotal, onApply, onRemove }) => {
  const [couponCode, setCouponCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  const handleApply = async () => {
    if (!couponCode.trim()) {
      toast.warning("Please enter a coupon code.");
      return;
    }

    setLoading(true);
    try {
      // Updated URL to /users path
      const response = await axios.post(`${environment.API_BASE_URL}/users/coupons/apply`, {
        code: couponCode.toUpperCase(),
        cartTotal: cartTotal,
      });

      if (response.data.success) {
        const { discount, finalPrice } = response.data;
        setAppliedCoupon({ code: couponCode.toUpperCase(), discount });
        onApply(discount, finalPrice, couponCode.toUpperCase());
        toast.success(response.data.message || "Coupon applied!");
      } else {
        toast.error(response.data.message || "Invalid coupon.");
      }
    } catch (error) {
      console.error("Coupon apply error:", error);
      toast.error(error.response?.data?.message || "Failed to apply coupon.");
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = () => {
    setAppliedCoupon(null);
    setCouponCode("");
    onRemove();
    toast.info("Coupon removed.");
  };

  return (
    <div className="coupon-box-container">
      {!appliedCoupon ? (
        <div className="coupon-input-group">
          <div className="coupon-input-wrapper">
            <Tag size={18} className="coupon-icon" />
            <input
              type="text"
              placeholder="ENTER COUPON CODE"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
              className="coupon-input"
            />
          </div>
          <button
            onClick={handleApply}
            disabled={loading}
            className="coupon-apply-btn"
          >
            {loading ? "APPLYING..." : "APPLY"}
          </button>
        </div>
      ) : (
        <div className="applied-coupon-tag">
          <div className="applied-info">
            <CheckCircle size={18} color="#4b3109" />
            <span className="applied-text">
              <strong>{appliedCoupon.code}</strong> Applied (-₹{appliedCoupon.discount})
            </span>
          </div>
          <button onClick={handleRemove} className="coupon-remove-btn">
            <X size={18} />
          </button>
        </div>
      )}

      <style jsx>{`
        .coupon-box-container {
          margin: 15px 0;
          padding: 10px 0;
          border-top: 1px dashed #ddd;
          border-bottom: 1px dashed #ddd;
        }
        .coupon-input-group {
          display: flex;
          background: #fff;
          border: 2px solid #ddd;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .coupon-input-group:focus-within {
          border-color: #4b3109;
        }
        .coupon-input-wrapper {
          position: relative;
          flex: 1;
          display: flex;
          align-items: center;
        }
        .coupon-icon {
          position: absolute;
          left: 12px;
          color: #4b3109;
        }
        .coupon-input {
          width: 100%;
          padding: 12px 12px 12px 40px;
          border: none;
          outline: none;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1px;
          color: #333;
        }
        .coupon-input::placeholder {
          color: #999;
          font-weight: 500;
          letter-spacing: 0;
        }
        .coupon-apply-btn {
          padding: 0 24px;
          background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
          color: #000;
          border: none;
          cursor: pointer;
          font-weight: 700;
          font-size: 13px;
          transition: all 0.3s ease;
          border-left: 1px solid #ddd;
        }
        .coupon-apply-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #ffed4e 0%, #ffd700 100%);
        }
        .coupon-apply-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .applied-coupon-tag {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          background: #f7d48622;
          border: 1.5px solid #f7d486;
          border-radius: 12px;
        }
        .applied-info {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .applied-text {
          color: #4b3109;
          font-size: 14px;
          font-weight: 500;
        }
        .coupon-remove-btn {
          background: none;
          border: none;
          color: #4b3109;
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 4px;
          border-radius: 50%;
          transition: background 0.2s;
        }
        .coupon-remove-btn:hover {
          background: rgba(0,0,0,0.05);
          color: #ff4d4d;
        }
      `}</style>
    </div>
  );
};

export default CouponBox;
