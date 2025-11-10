import React, { useEffect } from "react";
import Footer2 from "../Common/Footer/index2";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../Context/UserContext";
import { toast } from "react-toastify";

const PaymentSuccess = () => {
  const { setCart } = useCartContext();

  const navigate = useNavigate();
  // const sendInvoice = async () => {
  //   // localStorage getItem product_id
  //   const order_payload = localStorage.getItem("order_payload");
  //   if (!order_payload) {
  //     console.error("Product ID not found in localStorage.");
  //     return;
  //   }

  //   // Data in object format 

  //   console.log('order_payload: ', order_payload.user_name);
    
    
  //   try {
  //     // Whats APP Api
  //     const response = await fetch(
  //       "http://bhashsms.com/api/sendmsg.php?user=RAJLAKSHMIBWA&pass=123456&sender=BUZWAP&phone=&text=organic_wholesale01&priority=wa&stype=normal",
  //       { mode: "no-cors" }
  //     );
  //     console.log("response: ", response);
  //     navigate("/");
  //   } catch (error) {
  //     console.error("Error sending invoice:", error);
  //   }
  // };

  const sendInvoice = async () => {
    // Retrieve and parse order_payload from localStorage
    const order_payload = sessionStorage.getItem("order_payload");

    if (!order_payload) {
      console.error("Order payload not found in localStorage.");
      alert("Failed to retrieve order details.");
      return;
    }

    const orderData = JSON.parse(order_payload);
    

    const { user_mobile_num, user_total_amount } = orderData;
    
    const ordeId = sessionStorage.getItem("orderId")

    
    // const whatsappApiUrl = `https://bhashsms.com/api/sendmsg.php?user=RAJLAKSHMIBWA&pass=123456&sender=BUZWAP&phone=${user_mobile_num}&text=rajlakshmi_test001&priority=wa&stype=normal&Params=${ordeId},${user_total_amount}&htype=image&url=https://i.ibb.co/p6P86j3J/Whats-App-Image-2025-02-17-at-12-46-41.jpg`

    const whatsappApiUrl = `https://bhashsms.com/api/sendmsg.php?user=RAJLAKSHMIBWA&pass=123456&sender=BUZWAP&phone=${user_mobile_num}&text=gauswarn_ghee002&priority=wa&stype=normal&Params=${ordeId},${user_total_amount}&htype=image&url=https://i.ibb.co/p6P86j3J/Whats-App-Image-2025-02-17-at-12-46-41.jpg`


    try {
      
      await fetch(whatsappApiUrl, { mode: "no-cors" });
      toast.success("Invoice sent successfully!");
      navigate("/");
      // localStorage.removeItem("order_payload");
      localStorage.removeItem("orderId");
      
    } catch (error) {
      console.error("Error sending invoice:", error);
      toast.error("Failed to send invoice. Please try again.");
      localStorage.removeItem("orderId");
    }
  };
  useEffect(() => {
    // Clear data from localStorage when this component loads
    localStorage.removeItem("cart");
    console.log("Cart data cleared from localStorage.");
    setCart([]);
    
  }, [setCart]); // Empty dependency array ensures this runs only once when the component mounts


  return (
    <div>
      <div className="payment border border-black d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div class="success-animation py-2">
                <svg
                  class="checkmark"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 52 52"
                >
                  <circle
                    class="checkmark__circle"
                    cx="26"
                    cy="26"
                    r="25"
                    fill="none"
                  />
                  <path
                    class="checkmark__check"
                    fill="none"
                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                  />
                </svg>
              </div>
              <div className="text-center py-2">
                <p className="fs-2 fw-bold">Payment Success full</p>
                <button
                  onClick={sendInvoice}
                  className="px-5 py-2 fw-bold border rounded-pill bg-success text-light"
                >
                  Print
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default PaymentSuccess;
