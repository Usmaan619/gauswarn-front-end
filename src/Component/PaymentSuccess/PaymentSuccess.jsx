import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import { useCartContext } from "../Context/UserContext";
import "./payment-success.css";

const PaymentSuccess = () => {
  const { setCart } = useCartContext();
  // const navigate = useNavigate();

  // const sendInvoice = async () => {
  //   const order_payload = sessionStorage.getItem("order_payload");

  //   if (!order_payload) {
  //     toast.error("Failed to retrieve order details.");
  //     return;
  //   }

  //   const orderData = JSON.parse(order_payload);
  //   const { user_mobile_num, user_total_amount } = orderData;
  //   const ordeId = sessionStorage.getItem("orderId");

  //   const whatsappApiUrl = `https://bhashsms.com/api/sendmsg.php?user=RAJLAKSHMIBWA&pass=123456&sender=BUZWAP&phone=${user_mobile_num}&text=gauswarn_ghee002&priority=wa&stype=normal&Params=${ordeId},${user_total_amount}&htype=image&url=https://i.ibb.co/p6P86j3J/Whats-App-Image-2025-02-17-at-12-46-41.jpg`;

  //   try {
  //     await fetch(whatsappApiUrl, { mode: "no-cors" });
  //     toast.success("Invoice sent successfully!");
  //     navigate("/");
  //     localStorage.removeItem("orderId");
  //   } catch (error) {
  //     toast.error("Failed to send invoice.");
  //     localStorage.removeItem("orderId");
  //   }
  // };

  useEffect(() => {
    localStorage.removeItem("cart");
    setCart([]);
  }, [setCart]);

  return (
    <div className="payment-success">
      {/* 👆 wrapper for scoped CSS */}

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

                {/* optional button */}
                {/* 
                <button
                  onClick={sendInvoice}
                  className="px-5 py-2 fw-bold rounded-pill"
                >
                  Send Invoice
                </button> 
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
