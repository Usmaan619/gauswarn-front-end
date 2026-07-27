import { useEffect } from "react";
import { useCartContext } from "../Context/UserContext";
import "./payment-success.css";

const PaymentSuccess = () => {
  const { setCart } = useCartContext();

  useEffect(() => {
    try {
      const cart = JSON.parse(sessionStorage.getItem("cart") || "[]");

      if (window.fbq && cart.length > 0) {
        const contentIds = cart.map((item) => item.user_id);
        const totalValue = cart.reduce(
          (sum, item) => sum + item.product_total_amount,
          0,
        );

        window.fbq("track", "Purchase", {
          content_ids: contentIds,
          content_type: "product",
          value: totalValue,
          currency: "INR",
        });
      }
    } catch (err) {
      console.error("Purchase pixel error:", err);
    }
  }, []);

  useEffect(() => {
    sessionStorage.removeItem("cart");
    setCart([]);
  }, [setCart]);

  return (
    <div className="payment-success">
      {/* wrapper for scoped CSS */}

      <div className="payment d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="success-animation py-2">
                <svg
                  className="checkmark"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 52 52"
                >
                  <circle
                    className="checkmark__circle"
                    cx="26"
                    cy="26"
                    r="25"
                  />
                  <path
                    className="checkmark__check"
                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                  />
                </svg>
              </div>

              <div className="text-center py-2">
                <p className="fs-2 fw-bold">Payment Successful</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
