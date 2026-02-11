import React, { useState, useEffect } from "react";
import { ShoppingCart, Trash2, Plus, Minus, Package } from "lucide-react";
import mainLogo from "../../asset/new-img/logo/gauswarn-main-logo.webp";
import "./final-payment-page.css";

import axios from "axios";
import { environment } from "../../environment/environment";
import LoadingOverlay from "react-loading-overlay";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../Context/UserContext";
import { z } from "zod";

const FinalPaymentMainPage = () => {
  const navigate = useNavigate();
  const { setCart: setContextCart } = useCartContext(); // Context ka setCart
  const checkoutSchema = z.object({
    user_name: z.string().min(1, "Name is required"),
    user_email: z.string().min(1, "Email is required").email("Invalid email"),
    user_mobile_num: z
      .string()
      .regex(/^[0-9]{10}$/, "Valid 10-digit mobile number required"),
    user_house_number: z.string().min(1, "House number is required"),
    user_landmark: z.string().min(1, "Landmark is required"),
    user_country: z.string().min(1, "Country is required"),
    user_state: z.string().min(1, "State is required"),
    user_city: z.string().min(1, "City is required"),
    user_pincode: z
      .string()
      .regex(/^[0-9]{6}$/, "Valid 6-digit pincode required"),
  });

  // useState se cart manage karo + context ko sync karo
  const [cart, setCart] = useState(
    JSON.parse(sessionStorage.getItem("cart")) || [],
  );

  // Cart change ho to context ko update karo
  useEffect(() => {
    setContextCart(cart);
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart, setContextCart]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  // FORM DATA
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_mobile_num: "",
    user_house_number: "",
    user_landmark: "",
    user_country: "",
    user_state: "",
    user_city: "",
    user_pincode: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  // UPDATE QUANTITY - ab context automatically update hoga
  const updateQuantity = async (index, change) => {
    try {
      const updatedCart = cart.map((item, i) => {
        if (i === index) {
          const q = Math.max(item.product_quantity + change, 1);
          return { ...item, product_quantity: q };
        }
        return item;
      });

      setCart(updatedCart); // Ye line dependency trigger karega

      const updatedItem = updatedCart[index];

      await axios.post(`${environment.API_BASE_URL}/users/updateCartItem`, {
        product_id: updatedItem.product_id,
        user_id: updatedItem.user_id,
        product_quantity: updatedItem.product_quantity,
        product_total_amount:
          updatedItem.product_quantity * updatedItem.product_price,
      });

      toast.success("Quantity updated");
    } catch (err) {
      toast.error("Failed to update quantity");
      console.error(err);
    }
  };

  // REMOVE FROM CART - ab context automatically update hoga
  const removeFromCart = async (index) => {
    const item = cart[index];

    try {
      await axios.delete(
        `${environment.API_BASE_URL}/users/removecart?product_id=${item.product_id}&user_id=${item.user_id}`,
      );

      const filtered = cart.filter((_, i) => i !== index);
      setCart(filtered); // Ye line dependency trigger karega + header update hoga

      toast.success("Item removed");
    } catch (err) {
      toast.error("Failed to remove item");
      console.error(err);
    }
  };

  // FORM VALIDATION
  const validateForm = () => {
    const result = checkoutSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      return false;
    }

    setErrors({});
    return true;
  };

  const reset = () => {
    setFormData({
      user_name: "",
      user_email: "",
      user_mobile_num: "",
      user_house_number: "",
      user_landmark: "",
      user_country: "",
      user_state: "",
      user_city: "",
      user_pincode: "",
    });
    setErrors({});
  };

  // RAZORPAY PAYMENT + API FLOW
  // FIXED: Add cart to payload
  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      setIsLoading(true);

      const subtotal = cart.reduce(
        (acc, item) => acc + item.product_price * item.product_quantity,
        0,
      );

      //  FIXED: Include FULL cart array in payload
      const payload = {
        ...formData,
        user_total_amount: subtotal,
        purchase_price: cart[0]?.product_price || 0, // Use first item's price
        product_quantity: cart.reduce(
          (acc, item) => acc + item.product_quantity,
          0,
        ), // Total quantity
        cart: cart, //  THIS WAS MISSING!
      };

      console.log(" Payment Payload:", payload); // Debug log

      // CREATE ORDER API
      const res = await axios.post(
        `${environment.API_BASE_URL}/users/create-order`,
        payload,
      );

      if (!res.data.success) {
        toast.error(res.data.message || "Order creation failed");
        setIsLoading(false);
        return;
      }

      const order = res.data.razorpay_order;

      // Rest of Razorpay code remains same...
      // "rzp_test_qcl3EzwXvpMnwS"
      const options = {
        key: "rzp_live_woFUpWK35AZbcn",
        amount: order.amount,
        currency: order.currency,
        name: "Gauswarn",
        description: "Order Payment",
        image: mainLogo,
        order_id: order.id,
        prefill: {
          name: order.notes.user_name,
          email: order.notes.user_email,
          contact: order.notes.user_mobile_num,
        },
        handler: async function (rzpResponse) {
          try {
            setShowLoader(true);

            const validateRes = await axios.post(
              `${environment.API_BASE_URL}/users/status`,
              { rzpResponse, ...order },
            );

            const result = validateRes.data;
            console.log("Payment Validation Response:", result);

            if (result.success) {
              // ===== META PURCHASE EVENT =====
              try {
                const cartData = JSON.parse(
                  sessionStorage.getItem("cart") || "[]",
                );
                if (window.fbq && cartData.length > 0) {
                  const contentIds = cartData.map((item) => item.user_id);
                  const totalValue = cartData.reduce(
                    (sum, item) =>
                      sum + item.product_price * item.product_quantity,
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
              // ===== END META EVENT =====

              // Clear cart
              setCart([]);
              setContextCart([]);
              sessionStorage.removeItem("cart");

              reset();
              setShowLoader(false);
              navigate("/payment-success");
            } else {
              navigate("/payment-failed");
              setShowLoader(false);
              setCart([]);
              reset();
            }
          } catch (e) {
            setShowLoader(false);
            toast.error("Payment validation failed");
          }
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

      setIsLoading(false);
    } catch (err) {
      console.error("Payment Error:", err);
      toast.error(err.response?.data?.message || "Something went wrong");
      setIsLoading(false);
    }
  };

  // EMPTY CART VIEW
  if (cart.length === 0) {
    return (
      <div className="new-emptyCart">
        <ToastContainer />
        <ShoppingCart size={80} color="#fff" strokeWidth={1.5} />
        <h2 className="new-emptyTitle">Your Cart is Empty</h2>
        <button
          aria-label="Start Shopping"
          className="new-shopButton"
          onClick={() => navigate("/products")}
        >
          Start Shopping
        </button>
      </div>
    );
  }

  // SUMMARY CALCULATIONS
  const subtotal = cart.reduce(
    (acc, item) => acc + item.product_price * item.product_quantity,
    0,
  );
  const totalItems = cart.reduce((acc, item) => acc + item.product_quantity, 0);

  // UI
  return (
    <>
      <ToastContainer />

      <LoadingOverlay
        active={isLoading || showLoader}
        spinner
        text="Processing Payment..."
      >
        <div className="new-paymentContainer">
          <div className="new-paymentWrapper">
            {/* LEFT SIDE FORM */}
            <div className="new-formSection">
              <div className="new-formCard">
                <div className="new-formHeader">
                  <Package size={24} />
                  <h2 className="new-formTitle">Checkout Details</h2>
                </div>

                {/* RED COD NOTICE */}
                <div
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    marginBottom: "12px",
                  }}
                >
                  Cash on Delivery not available. Please fill your address
                  properly.
                </div>

                {/* BASIC + DELIVERY FIELDS */}
                {[
                  { name: "user_name", label: "Full Name" },
                  { name: "user_email", label: "Email Address" },
                  { name: "user_mobile_num", label: "Mobile Number" },
                  { name: "user_house_number", label: "House / Building" },
                  { name: "user_landmark", label: "Street / Landmark" },
                  { name: "user_country", label: "Country" },
                  { name: "user_state", label: "State" },
                  { name: "user_city", label: "City" },
                  { name: "user_pincode", label: "Pincode" },
                ].map((field, i) => (
                  <div className="new-inputGroup" key={i}>
                    <input
                      type="text"
                      name={field.name}
                      placeholder={field.label}
                      value={formData[field.name]}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [field.name]: e.target.value,
                        })
                      }
                      maxLength={
                        field.name === "user_mobile_num"
                          ? 10
                          : field.name === "user_pincode"
                            ? 6
                            : undefined
                      }
                      onKeyPress={(e) =>
                        (field.name === "user_mobile_num" ||
                          field.name === "user_pincode") &&
                        !/[0-9]/.test(e.key) &&
                        e.preventDefault()
                      }
                      className={`new-input ${
                        errors[field.name] ? "new-inputError" : ""
                      }`}
                    />
                    {errors[field.name] && (
                      <span className="new-errorText">
                        {errors[field.name]}
                      </span>
                    )}
                  </div>
                ))}

                <button
                  aria-label="Proceed to Payment"
                  onClick={handleSubmit}
                  className="new-btn-cta new-checkoutBtn"
                  disabled={isLoading || showLoader}
                >
                  {isLoading || showLoader
                    ? "Processing..."
                    : "Proceed to Payment"}
                </button>
              </div>
            </div>

            {/* RIGHT SIDE SUMMARY */}
            <div className="new-summarySection">
              <div className="new-summaryCard">
                <div className="new-logoContainer">
                  <img src={mainLogo} alt="Logo" className="new-logo" />
                  <p className="new-logoSubtext">Premium A2 Gir Cow Ghee</p>
                </div>

                <div className="new-summaryTitle">Order Summary</div>

                <div className="new-cartItems">
                  {cart?.map((item, index) => (
                    <div className="new-cartItem" key={index}>
                      <img
                        src={item?.product_image}
                        alt={item?.name}
                        className="new-itemImage"
                      />

                      <div className="new-itemDetails">
                        <div className="new-itemName">Ghee</div>
                        <div className="new-itemWeight">
                          {item?.product_weight}
                        </div>
                      </div>

                      {/* QUANTITY CONTROL */}
                      <div className="payment-quantity-section">
                        <div className="payment-quantity-control">
                          <button
                            className="payment-quantity-btn payment-decrease-btn"
                            onClick={() => updateQuantity(index, -1)}
                            disabled={
                              item?.product_quantity <= 1 ||
                              isLoading ||
                              showLoader
                            }
                            aria-label="Decrease quantity"
                          >
                            <Minus size={18} />
                          </button>
                          <input
                            type="number"
                            className="payment-quantity-input"
                            value={item?.product_quantity}
                            min="1"
                            readOnly
                          />
                          <button
                            className="payment-quantity-btn payment-increase-btn"
                            onClick={() => updateQuantity(index, 1)}
                            disabled={isLoading || showLoader}
                            aria-label="Increase quantity"
                          >
                            <Plus size={18} />
                          </button>
                        </div>
                      </div>

                      <div className="new-itemPrice">
                        ₹{item?.product_price}
                      </div>

                      <button
                        aria-label="Remove item from cart"
                        onClick={() => removeFromCart(index)}
                        className="new-deleteButton"
                        disabled={isLoading || showLoader}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="new-summaryDetails">
                  <div className="new-summaryRow">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>

                  <div className="new-summaryRow">
                    <span>Items</span>
                    <span>{totalItems}</span>
                  </div>

                  <div className="new-summaryRow">
                    <span>Shipping</span>
                    <span className="new-freeShipping">Free</span>
                  </div>

                  <div className="new-totalRow">
                    <span>Total</span>
                    <span>₹{subtotal}</span>
                  </div>

                  <div className="new-taxNote">
                    Including all services and taxes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LoadingOverlay>
    </>
  );
};

export default FinalPaymentMainPage;
