import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../Context/UserContext";
import "./payment-failed.css";

const PaymentFailed = () => {
  const { setCart } = useCartContext();
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.removeItem("cart");
    setCart([]);
  }, [setCart]);

  return (
    <div className="payment-failed">
      <div className="payment-fail d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="check_mark">
                <div className="sa-icon sa-error">
                  <span className="sa-line sa-tip"></span>
                  <span className="sa-line sa-long"></span>
                </div>
              </div>

              <div className="text-center py-2">
                <p className="fs-2 fw-bold">Payment Failed</p>

                <button aria-label="Try Again"
                  className="px-5 py-2 fw-bold rounded-pill"
                  onClick={() => navigate("/cart")}
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;
