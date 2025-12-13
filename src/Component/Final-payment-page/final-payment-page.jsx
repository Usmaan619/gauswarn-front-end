// import React, { useState } from "react";
// import { ShoppingCart, Trash2, Plus, Minus, Package } from "lucide-react";
// import mainLogo from "../../asset/new-img/logo/gauswarn-main-logo.png";
// import "./final-payment-page.css";

// import axios from "axios";
// import { environment } from "../../environment/environment";
// import LoadingOverlay from "react-loading-overlay";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";

// const FinalPaymentMainPage = () => {
//   const navigate = useNavigate();

//   // -------------------------------
//   // CART (FROM SESSION STORAGE)
//   const [showLoader, setShowLoader] = useState(false);
//   // -------------------------------
//   const [cart, setCart] = useState(
//     JSON.parse(sessionStorage.getItem("cart")) || []
//   );

//   // -------------------------------
//   // FORM DATA
//   // -------------------------------
//   const [formData, setFormData] = useState({
//     user_name: "",
//     user_email: "",
//     user_mobile_num: "",
//     user_house_number: "",
//     user_landmark: "",
//     user_country: "",
//     user_state: "",
//     user_city: "",
//     user_pincode: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);

//   // -------------------------------
//   // UPDATE QUANTITY API
//   // -------------------------------
//   const updateQuantity = async (index, change) => {
//     try {
//       const updatedCart = cart.map((item, i) => {
//         if (i === index) {
//           const q = Math.max(item.product_quantity + change, 1);
//           return { ...item, product_quantity: q };
//         }
//         return item;
//       });

//       setCart(updatedCart);
//       sessionStorage.setItem("cart", JSON.stringify(updatedCart));

//       const updatedItem = updatedCart[index];

//       await axios.post(`${environment.API_BASE_URL}/users/updateCartItem`, {
//         product_id: updatedItem.product_id,
//         user_id: updatedItem.user_id,
//         product_quantity: updatedItem.product_quantity,
//         product_total_amount:
//           updatedItem.product_quantity * updatedItem.product_price,
//       });

//       toast.success("Quantity updated");
//     } catch (err) {
//       toast.error("Failed to update quantity");
//     }
//   };

//   // -------------------------------
//   // REMOVE FROM CART API
//   // -------------------------------
//   const removeFromCart = async (index) => {
//     const item = cart[index];

//     try {
//       await axios.delete(
//         `${environment.API_BASE_URL}/users/removecart?product_id=${item.product_id}&user_id=${item.user_id}`
//       );

//       const filtered = cart.filter((_, i) => i !== index);
//       setCart(filtered);
//       sessionStorage.setItem("cart", JSON.stringify(filtered));

//       toast.success("Item removed");
//     } catch (err) {
//       toast.error("Failed to remove item");
//     }
//   };

//   // -------------------------------
//   // FORM VALIDATION
//   // -------------------------------
//   const validateForm = () => {
//     const e = {};

//     if (!formData.user_name.trim()) e.user_name = "Name is required";
//     if (!formData.user_email.trim()) e.user_email = "Email is required";

//     if (!/^[0-9]{10}$/.test(formData.user_mobile_num))
//       e.user_mobile_num = "Valid 10-digit mobile number required";

//     if (!formData.user_house_number.trim())
//       e.user_house_number = "House number is required";
//     if (!formData.user_landmark.trim())
//       e.user_landmark = "Landmark is required";
//     if (!formData.user_country.trim()) e.user_country = "Country is required";
//     if (!formData.user_state.trim()) e.user_state = "State is required";
//     if (!formData.user_city.trim()) e.user_city = "City is required";
//     if (!formData.user_pincode.trim()) e.user_pincode = "Pincode is required";

//     setErrors(e);
//     return Object.keys(e).length === 0;
//   };

//   const reset = () => {
//     // Add reset function for form
//     setFormData({
//       user_name: "",
//       user_email: "",
//       user_mobile_num: "",
//       user_house_number: "",
//       user_landmark: "",
//       user_country: "",
//       user_state: "",
//       user_city: "",
//       user_pincode: "",
//     });
//     setErrors({});
//   };

//   // -------------------------------
//   // RAZORPAY PAYMENT + API FLOW
//   // -------------------------------
//   const handleSubmit = async () => {
//     if (!validateForm()) return;

//     try {
//       setIsLoading(true);

//       const subtotal = cart.reduce(
//         (acc, item) => acc + item.product_price * item.product_quantity,
//         0
//       );

//       const payload = {
//         ...formData,
//         user_total_amount: subtotal,
//         purchase_price: cart[0].purchase_price,
//         product_quantity: cart[0].product_quantity,
//       };

//       // CREATE ORDER API
//       const res = await axios.post(
//         `${environment.API_BASE_URL}/users/create-order`,
//         payload
//       );

//       if (!res.data.success) {
//         toast.error("Order creation failed");
//         setIsLoading(false);
//         return;
//       }

//       const order = res.data.razorpayOrder;

//       // RAZORPAY CHECKOUT
//       const options = {
//         key: "rzp_test_qcl3EzwXvpMnwS",
//         amount: order.amount,
//         currency: order.currency,
//         name: "Gauswarn",
//         description: "Order Payment",
//         image: mainLogo,
//         order_id: order.id,

//         prefill: {
//           name: order.notes.user_name,
//           email: order.notes.user_email,
//           contact: order.notes.user_mobile_num,
//         },

//         handler: async function (rzpResponse) {
//           try {
//             setShowLoader(true); // Show loader during validation

//             const validateRes = await axios.post(
//               `${environment.API_BASE_URL}/users/status`,
//               { rzpResponse, ...order }
//             );

//             const result = validateRes.data;
//             console.log("Payment Validation Response:", result);

//             if (result.success) {
//               navigate("/payment-success");
//               setShowLoader(false);
//               setCart([]);
//               reset();
//             } else {
//               navigate("/payment-failed");
//               setShowLoader(false);
//               setCart([]);
//               reset();
//             }
//           } catch (e) {
//             setShowLoader(false);
//             toast.error("Payment validation failed");
//           }
//         },
//       };

//       // SHIPPING API
//       await axios.post(
//         `${environment.SHIPPING_API_URL}/app/api/v1/push-order`,
//         {
//           order_id: order.razorpay_order_id,
//           order_date: new Date().toISOString().split("T")[0],
//           order_type: "ESSENTIALS",
//           consignee_name: formData.user_name,
//           consignee_phone: Number(formData.user_mobile_num),
//           consignee_email: formData.user_email,
//           consignee_address_line_one: formData.user_house_number,
//           consignee_address_line_two: formData.user_landmark,
//           consignee_pin_code: formData.user_pincode,
//           consignee_city: formData.user_city,
//           consignee_state: formData.user_state,
//           product_detail: cart.map((it) => ({
//             name: it.name,
//             sku_number: it.product_id,
//             quantity: it.product_quantity,
//             unit_price: it.product_price,
//           })),
//           payment_type: "PREPAID",
//         },
//         {
//           headers: {
//             "private-key": "G0K1PQYBq3Xlph6y48gw",
//             "public-key": "LBYfQgGFRljv1A249H87",
//           },
//         }
//       );

//       setIsLoading(false);
//     } catch (err) {
//       console.error(err);
//       toast.error("Something went wrong");
//       setIsLoading(false);
//     }
//   };

//   // -------------------------------
//   // EMPTY CART VIEW
//   // -------------------------------
//   if (cart.length === 0) {
//     return (
//       <div className="new-emptyCart">
//         <ToastContainer />
//         <ShoppingCart size={80} color="#fff" strokeWidth={1.5} />
//         <h2 className="new-emptyTitle">Your Cart is Empty</h2>
//         <button className="new-shopButton">Start Shopping</button>
//       </div>
//     );
//   }

//   // -------------------------------
//   // SUMMARY CALCULATIONS
//   // -------------------------------
//   const subtotal = cart.reduce(
//     (acc, item) => acc + item.product_price * item.product_quantity,
//     0
//   );
//   const totalItems = cart.reduce((acc, item) => acc + item.product_quantity, 0);

//   // -------------------------------
//   // UI (EXACT YOUR NEW UI)
//   // -------------------------------
//   return (
//     <>
//       <ToastContainer />

//       <LoadingOverlay active={isLoading} spinner text="Processing Payment...">
//         <div className="new-paymentContainer">
//           <div className="new-paymentWrapper">
//             {/* LEFT SIDE FORM */}
//             <div className="new-formSection">
//               <div className="new-formCard">
//                 <div className="new-formHeader">
//                   <Package size={24} />
//                   <h2 className="new-formTitle">Checkout Details</h2>
//                 </div>

//                 {/* BASIC + DELIVERY FIELDS */}
//                 {[
//                   { name: "user_name", label: "Full Name" },
//                   { name: "user_email", label: "Email Address" },
//                   { name: "user_mobile_num", label: "Mobile Number" },
//                   { name: "user_house_number", label: "House / Building" },
//                   { name: "user_landmark", label: "Street / Landmark" },
//                   { name: "user_country", label: "Country" },
//                   { name: "user_state", label: "State" },
//                   { name: "user_city", label: "City" },
//                   { name: "user_pincode", label: "Pincode" },
//                 ].map((field, i) => (
//                   <div className="new-inputGroup" key={i}>
//                     <input
//                       type="text"
//                       name={field.name}
//                       placeholder={field.label}
//                       value={formData[field.name]}
//                       onChange={(e) =>
//                         setFormData({
//                           ...formData,
//                           [field.name]: e.target.value,
//                         })
//                       }
//                       maxLength={
//                         field.name === "user_mobile_num" ? 10 : undefined
//                       }
//                       onKeyPress={(e) =>
//                         field.name === "user_mobile_num" &&
//                         !/[0-9]/.test(e.key) &&
//                         e.preventDefault()
//                       }
//                       className={`new-input ${
//                         errors[field.name] ? "new-inputError" : ""
//                       }`}
//                     />
//                     {errors[field.name] && (
//                       <span className="new-errorText">
//                         {errors[field.name]}
//                       </span>
//                     )}
//                   </div>
//                 ))}

//                 <button
//                   onClick={handleSubmit}
//                   className="new-btn-cta new-checkoutBtn"
//                   disabled={isLoading}
//                 >
//                   {isLoading ? "Processing..." : "Proceed to Payment"}
//                 </button>
//               </div>
//             </div>

//             {/* RIGHT SIDE SUMMARY */}
//             <div className="new-summarySection">
//               <div className="new-summaryCard">
//                 <div className="new-logoContainer">
//                   <img src={mainLogo} alt="Logo" className="new-logo" />
//                   <p className="new-logoSubtext">Premium A2 Gir Cow Ghee</p>
//                 </div>

//                 <div className="new-summaryTitle">Order Summary</div>

//                 <div className="new-cartItems">
//                   {cart?.map((item, index) => (
//                     // <div key={index} className="new-cartItem">
//                     //   <img
//                     //     src={item.product_image}
//                     //     alt={item.name}
//                     //     className="new-itemImage"
//                     //   />

//                     //   <div className="new-itemDetails">
//                     //     <div className="new-itemName">{item.name}</div>
//                     //     <div className="new-itemWeight">
//                     //       {item.product_weight}
//                     //     </div>
//                     //   </div>

//                     //   <div className="payment-quantity-control">
//                     //     <button
//                     //       onClick={() => updateQuantity(index, -1)}
//                     //       disabled={item.product_quantity <= 1}
//                     //     >
//                     //       <Minus size={18} />
//                     //     </button>

//                     //     <input
//                     //       type="number"
//                     //       value={item.product_quantity}
//                     //       min="1"
//                     //       readOnly
//                     //       className="payment-quantity-input"
//                     //     />

//                     //     <button onClick={() => updateQuantity(index, 1)}>
//                     //       <Plus size={18} />
//                     //     </button>
//                     //   </div>

//                     //   <div className="new-itemPrice">₹{item.product_price}</div>

//                     //   <button
//                     //     onClick={() => removeFromCart(index)}
//                     //     className="new-deleteButton"
//                     //   >
//                     //     <Trash2 size={18} />
//                     //   </button>
//                     // </div>

//                     <div className="new-cartItem">
//                       <img
//                         src={item?.product_image}
//                         alt={item?.name}
//                         className="new-itemImage"
//                       />

//                       <div className="new-itemDetails">
//                         <div className="new-itemName">{item?.name}</div>
//                         <div className="new-itemWeight">
//                           {item?.product_weight}
//                         </div>
//                       </div>

//                       {/* EXACT QUANTITY CONTROL YOU WANT */}
//                       <div className="payment-quantity-section">
//                         <div className="payment-quantity-control">
//                           <button
//                             className="payment-quantity-btn payment-decrease-btn"
//                             onClick={() => updateQuantity(index, -1)}
//                             disabled={item?.product_quantity <= 1}
//                             aria-label="Decrease quantity"
//                           >
//                             <Minus size={18} />
//                           </button>
//                           <input
//                             type="number"
//                             className="payment-quantity-input"
//                             value={item?.product_quantity}
//                             min="1"
//                             readOnly
//                           />
//                           <button
//                             className="payment-quantity-btn payment-increase-btn"
//                             onClick={() => updateQuantity(index, 1)}
//                             aria-label="Increase quantity"
//                           >
//                             <Plus size={18} />
//                           </button>
//                         </div>
//                       </div>

//                       <div className="new-itemPrice">
//                         ₹{item?.product_price}
//                       </div>

//                       <button
//                         onClick={() => removeFromCart(index)}
//                         className="new-deleteButton"
//                       >
//                         <Trash2 size={18} />
//                       </button>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="new-summaryDetails">
//                   <div className="new-summaryRow">
//                     <span>Subtotal</span>
//                     <span>₹{subtotal}</span>
//                   </div>

//                   <div className="new-summaryRow">
//                     <span>Items</span>
//                     <span>{totalItems}</span>
//                   </div>

//                   <div className="new-summaryRow">
//                     <span>Shipping</span>
//                     <span className="new-freeShipping">Free</span>
//                   </div>

//                   <div className="new-totalRow">
//                     <span>Total</span>
//                     <span>₹{subtotal}</span>
//                   </div>

//                   <div className="new-taxNote">
//                     Including all services and taxes
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* END SUMMARY */}
//           </div>
//         </div>
//       </LoadingOverlay>
//     </>
//   );
// };

// export default FinalPaymentMainPage;

import React, { useState } from "react";
import { ShoppingCart, Trash2, Plus, Minus, Package } from "lucide-react";
import mainLogo from "../../asset/new-img/logo/gauswarn-main-logo.png";
import "./final-payment-page.css";

import axios from "axios";
import { environment } from "../../environment/environment";
import LoadingOverlay from "react-loading-overlay";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const FinalPaymentMainPage = () => {
  const navigate = useNavigate();

  // -------------------------------
  // CART (FROM SESSION STORAGE)
  const [showLoader, setShowLoader] = useState(false);
  // -------------------------------
  const [cart, setCart] = useState(
    JSON.parse(sessionStorage.getItem("cart")) || []
  );

  // -------------------------------
  // FORM DATA
  // -------------------------------
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

  // -------------------------------
  // UPDATE QUANTITY API
  // -------------------------------
  const updateQuantity = async (index, change) => {
    try {
      const updatedCart = cart.map((item, i) => {
        if (i === index) {
          const q = Math.max(item.product_quantity + change, 1);
          return { ...item, product_quantity: q };
        }
        return item;
      });

      setCart(updatedCart);
      sessionStorage.setItem("cart", JSON.stringify(updatedCart));

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
    }
  };

  // -------------------------------
  // REMOVE FROM CART API
  // -------------------------------
  const removeFromCart = async (index) => {
    const item = cart[index];

    try {
      await axios.delete(
        `${environment.API_BASE_URL}/users/removecart?product_id=${item.product_id}&user_id=${item.user_id}`
      );

      const filtered = cart.filter((_, i) => i !== index);
      setCart(filtered);
      sessionStorage.setItem("cart", JSON.stringify(filtered));

      toast.success("Item removed");
    } catch (err) {
      toast.error("Failed to remove item");
    }
  };

  // -------------------------------
  // FORM VALIDATION
  // -------------------------------
  const validateForm = () => {
    const e = {};

    if (!formData.user_name.trim()) e.user_name = "Name is required";
    if (!formData.user_email.trim()) e.user_email = "Email is required";

    if (!/^[0-9]{10}$/.test(formData.user_mobile_num))
      e.user_mobile_num = "Valid 10-digit mobile number required";

    if (!formData.user_house_number.trim())
      e.user_house_number = "House number is required";
    if (!formData.user_landmark.trim())
      e.user_landmark = "Landmark is required";
    if (!formData.user_country.trim()) e.user_country = "Country is required";
    if (!formData.user_state.trim()) e.user_state = "State is required";
    if (!formData.user_city.trim()) e.user_city = "City is required";
    if (!formData.user_pincode.trim()) e.user_pincode = "Pincode is required";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const reset = () => {
    // Add reset function for form
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

  // -------------------------------
  // RAZORPAY PAYMENT + API FLOW
  // -------------------------------
  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      setIsLoading(true);

      const subtotal = cart.reduce(
        (acc, item) => acc + item.product_price * item.product_quantity,
        0
      );

      const payload = {
        ...formData,
        user_total_amount: subtotal,
        purchase_price: cart[0].purchase_price,
        product_quantity: cart[0].product_quantity,
      };

      // CREATE ORDER API
      const res = await axios.post(
        `${environment.API_BASE_URL}/users/create-order`,
        payload
      );

      if (!res.data.success) {
        toast.error("Order creation failed");
        setIsLoading(false);
        return;
      }

      const order = res.data.razorpayOrder;

      // RAZORPAY CHECKOUT
      const options = {
        key: "rzp_test_qcl3EzwXvpMnwS",
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
            setShowLoader(true); // Show loader during validation

            const validateRes = await axios.post(
              `${environment.API_BASE_URL}/users/status`,
              { rzpResponse, ...order }
            );

            const result = validateRes.data;
            console.log("Payment Validation Response:", result);

            if (result.success) {
              navigate("/payment-success");
              setShowLoader(false);
              setCart([]);
              reset();
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

      // SHIPPING API
      await axios.post(
        `${environment.SHIPPING_API_URL}/app/api/v1/push-order`,
        {
          order_id: order.razorpay_order_id,
          order_date: new Date().toISOString().split("T")[0],
          order_type: "ESSENTIALS",
          consignee_name: formData.user_name,
          consignee_phone: Number(formData.user_mobile_num),
          consignee_email: formData.user_email,
          consignee_address_line_one: formData.user_house_number,
          consignee_address_line_two: formData.user_landmark,
          consignee_pin_code: formData.user_pincode,
          consignee_city: formData.user_city,
          consignee_state: formData.user_state,
          product_detail: cart.map((it) => ({
            name: it.name,
            sku_number: it.product_id,
            quantity: it.product_quantity,
            unit_price: it.product_price,
          })),
          payment_type: "PREPAID",
        },
        {
          headers: {
            "private-key": "G0K1PQYBq3Xlph6y48gw",
            "public-key": "LBYfQgGFRljv1A249H87",
          },
        }
      );

      setIsLoading(false);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
      setIsLoading(false);
    }
  };

  // -------------------------------
  // EMPTY CART VIEW
  // -------------------------------
  if (cart.length === 0) {
    return (
      <div className="new-emptyCart">
        <ToastContainer />
        <ShoppingCart size={80} color="#fff" strokeWidth={1.5} />
        <h2 className="new-emptyTitle">Your Cart is Empty</h2>
        <button
          className="new-shopButton"
          onClick={() => navigate("/products")}
        >
          Start Shopping
        </button>
      </div>
    );
  }

  // -------------------------------
  // SUMMARY CALCULATIONS
  // -------------------------------
  const subtotal = cart.reduce(
    (acc, item) => acc + item.product_price * item.product_quantity,
    0
  );
  const totalItems = cart.reduce((acc, item) => acc + item.product_quantity, 0);

  // -------------------------------
  // UI (EXACT YOUR NEW UI)
  // -------------------------------
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
                        field.name === "user_mobile_num" ? 10 : undefined
                      }
                      onKeyPress={(e) =>
                        field.name === "user_mobile_num" &&
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
                        <div className="new-itemName">{item?.name}</div>
                        <div className="new-itemWeight">
                          {item?.product_weight}
                        </div>
                      </div>

                      {/* EXACT QUANTITY CONTROL YOU WANT */}
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
            {/* END SUMMARY */}
          </div>
        </div>
      </LoadingOverlay>
    </>
  );
};

export default FinalPaymentMainPage;
