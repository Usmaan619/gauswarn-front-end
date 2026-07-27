import React, { useEffect } from "react";

const RazorpayCheckout = ({ paymentData }) => {
  useEffect(() => {
    if (!paymentData) return;

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(script);

    script.onload = () => {
      const options = {
        key: "rzp_live_woFUpWK35AZbcn", // Replace with Razorpay Key ID

        amount: paymentData.amount,
        currency: paymentData.currency,
        name: "Your App",
        description: "Test Transaction",
        order_id: paymentData.order_id,
        prefill: {
          name: paymentData.name,
          email: paymentData.email,
          contact: paymentData.contact,
        },
        handler: async function (response) {
          const verifyRes = await fetch(
            "http://localhost:5000/verify-payment",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(response),
            }
          );

          const result = await verifyRes.json();
          alert(result.message);
        },
        theme: { color: "#3399cc" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    };
  }, [paymentData]);

  return <div>Loading Payment Gateway...</div>;
};

export default RazorpayCheckout;
