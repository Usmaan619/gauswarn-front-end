// import React, { useState } from "react";
// import {
//   ShoppingCart,
//   Trash2,
//   Plus,
//   Minus,
//   Package,
//   CreditCard,
// } from "lucide-react";

// const FinalPaymentMainPage = () => {
//   const [cart, setCart] = useState([
//     {
//       id: 1,
//       name: "Gir Cow Ghee",
//       weight: "500 ml",
//       price: 699,
//       quantity: 1,
//       image:
//         "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=200&h=200&fit=crop",
//     },
//   ]);

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

//   const updateQuantity = (index, change) => {
//     const updatedCart = cart.map((item, i) => {
//       if (i === index) {
//         const newQuantity = Math.max(item.quantity + change, 1);
//         return { ...item, quantity: newQuantity };
//       }
//       return item;
//     });
//     setCart(updatedCart);
//   };

//   const removeFromCart = (index) => {
//     setCart(cart.filter((_, i) => i !== index));
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: "" }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.user_name.trim()) newErrors.user_name = "Name is required";
//     if (!formData.user_email.trim()) newErrors.user_email = "Email is required";
//     if (!/^[0-9]{10}$/.test(formData.user_mobile_num)) {
//       newErrors.user_mobile_num = "Valid 10-digit mobile number required";
//     }
//     if (!formData.user_house_number.trim())
//       newErrors.user_house_number = "House number is required";
//     if (!formData.user_landmark.trim())
//       newErrors.user_landmark = "Landmark is required";
//     if (!formData.user_country.trim())
//       newErrors.user_country = "Country is required";
//     if (!formData.user_state.trim()) newErrors.user_state = "State is required";
//     if (!formData.user_city.trim()) newErrors.user_city = "City is required";
//     if (!formData.user_pincode.trim())
//       newErrors.user_pincode = "Pincode is required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = () => {
//     if (validateForm()) {
//       setIsLoading(true);
//       setTimeout(() => {
//         alert("Payment processing...");
//         setIsLoading(false);
//       }, 2000);
//     }
//   };

//   const subtotal = cart.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );
//   const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

//   if (cart.length === 0) {
//     return (
//       <div style={styles.emptyCart}>
//         <ShoppingCart size={80} color="#fff" strokeWidth={1.5} />
//         <h2 style={styles.emptyTitle}>Your Cart is Empty</h2>
//         <p style={styles.emptyText}>
//           Add some delicious products to get started!
//         </p>
//         <button style={styles.shopButton}>Start Shopping</button>
//       </div>
//     );
//   }

//   return (
//     <div style={styles.container}>
//       <div style={styles.wrapper}>
//         {/* Left Side - Form */}
//         <div style={styles.formSection}>
//           <div style={styles.formCard}>
//             <div style={styles.formHeader}>
//               <Package size={24} />
//               <h2 style={styles.formTitle}>Checkout Details</h2>
//             </div>

//             <div>
//               {/* Basic Details */}
//               <div style={styles.sectionTitle}>
//                 <span style={styles.sectionDot}></span>
//                 Basic Information
//               </div>

//               <div style={styles.inputGroup}>
//                 <input
//                   type="text"
//                   name="user_name"
//                   placeholder="Full Name"
//                   value={formData.user_name}
//                   onChange={handleInputChange}
//                   style={
//                     errors.user_name
//                       ? { ...styles.input, ...styles.inputError }
//                       : styles.input
//                   }
//                 />
//                 {errors.user_name && (
//                   <span style={styles.errorText}>{errors.user_name}</span>
//                 )}
//               </div>

//               <div style={styles.inputGroup}>
//                 <input
//                   type="email"
//                   name="user_email"
//                   placeholder="Email Address"
//                   value={formData.user_email}
//                   onChange={handleInputChange}
//                   style={
//                     errors.user_email
//                       ? { ...styles.input, ...styles.inputError }
//                       : styles.input
//                   }
//                 />
//                 {errors.user_email && (
//                   <span style={styles.errorText}>{errors.user_email}</span>
//                 )}
//               </div>

//               <div style={styles.inputGroup}>
//                 <input
//                   type="tel"
//                   name="user_mobile_num"
//                   placeholder="Mobile Number"
//                   maxLength={10}
//                   value={formData.user_mobile_num}
//                   onChange={handleInputChange}
//                   onKeyPress={(e) => {
//                     if (!/[0-9]/.test(e.key)) e.preventDefault();
//                   }}
//                   style={
//                     errors.user_mobile_num
//                       ? { ...styles.input, ...styles.inputError }
//                       : styles.input
//                   }
//                 />
//                 {errors.user_mobile_num && (
//                   <span style={styles.errorText}>{errors.user_mobile_num}</span>
//                 )}
//               </div>

//               {/* Delivery Details */}
//               <div style={styles.sectionTitle}>
//                 <span style={styles.sectionDot}></span>
//                 Delivery Address
//               </div>

//               <div style={styles.inputGroup}>
//                 <input
//                   type="text"
//                   name="user_house_number"
//                   placeholder="House No. / Building / Apartment"
//                   value={formData.user_house_number}
//                   onChange={handleInputChange}
//                   style={
//                     errors.user_house_number
//                       ? { ...styles.input, ...styles.inputError }
//                       : styles.input
//                   }
//                 />
//                 {errors.user_house_number && (
//                   <span style={styles.errorText}>
//                     {errors.user_house_number}
//                   </span>
//                 )}
//               </div>

//               <div style={styles.inputGroup}>
//                 <input
//                   type="text"
//                   name="user_landmark"
//                   placeholder="Street / Area / Landmark"
//                   value={formData.user_landmark}
//                   onChange={handleInputChange}
//                   style={
//                     errors.user_landmark
//                       ? { ...styles.input, ...styles.inputError }
//                       : styles.input
//                   }
//                 />
//                 {errors.user_landmark && (
//                   <span style={styles.errorText}>{errors.user_landmark}</span>
//                 )}
//               </div>

//               <div style={styles.row}>
//                 <div style={styles.halfWidth}>
//                   <input
//                     type="text"
//                     name="user_country"
//                     placeholder="Country"
//                     value={formData.user_country}
//                     onChange={handleInputChange}
//                     style={
//                       errors.user_country
//                         ? { ...styles.input, ...styles.inputError }
//                         : styles.input
//                     }
//                   />
//                   {errors.user_country && (
//                     <span style={styles.errorText}>{errors.user_country}</span>
//                   )}
//                 </div>
//                 <div style={styles.halfWidth}>
//                   <input
//                     type="text"
//                     name="user_state"
//                     placeholder="State"
//                     value={formData.user_state}
//                     onChange={handleInputChange}
//                     style={
//                       errors.user_state
//                         ? { ...styles.input, ...styles.inputError }
//                         : styles.input
//                     }
//                   />
//                   {errors.user_state && (
//                     <span style={styles.errorText}>{errors.user_state}</span>
//                   )}
//                 </div>
//               </div>

//               <div style={styles.row}>
//                 <div style={styles.halfWidth}>
//                   <input
//                     type="text"
//                     name="user_city"
//                     placeholder="City"
//                     value={formData.user_city}
//                     onChange={handleInputChange}
//                     style={
//                       errors.user_city
//                         ? { ...styles.input, ...styles.inputError }
//                         : styles.input
//                     }
//                   />
//                   {errors.user_city && (
//                     <span style={styles.errorText}>{errors.user_city}</span>
//                   )}
//                 </div>
//                 <div style={styles.halfWidth}>
//                   <input
//                     type="text"
//                     name="user_pincode"
//                     placeholder="Pincode"
//                     value={formData.user_pincode}
//                     onChange={handleInputChange}
//                     style={
//                       errors.user_pincode
//                         ? { ...styles.input, ...styles.inputError }
//                         : styles.input
//                     }
//                   />
//                   {errors.user_pincode && (
//                     <span style={styles.errorText}>{errors.user_pincode}</span>
//                   )}
//                 </div>
//               </div>

//               <button
//                 onClick={handleSubmit}
//                 style={
//                   isLoading
//                     ? { ...styles.submitButton, ...styles.submitButtonDisabled }
//                     : styles.submitButton
//                 }
//                 disabled={isLoading}
//               >
//                 <CreditCard size={20} />
//                 {isLoading ? "Processing..." : "Proceed to Payment"}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Order Summary */}
//         <div style={styles.summarySection}>
//           <div style={styles.summaryCard}>
//             <div style={styles.logoContainer}>
//               <h1 style={styles.logo}>गौस्वर्ण</h1>
//               <p style={styles.logoSubtext}>Premium Gir Cow Ghee</p>
//             </div>

//             <div style={styles.summaryTitle}>Order Summary</div>

//             <div style={styles.cartItems}>
//               {cart.map((item, index) => (
//                 <div key={index} style={styles.cartItem}>
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     style={styles.itemImage}
//                   />
//                   <div style={styles.itemDetails}>
//                     <div style={styles.itemName}>{item.name}</div>
//                     <div style={styles.itemWeight}>{item.weight}</div>
//                   </div>
//                   <div style={styles.quantityControl}>
//                     <button
//                       onClick={() => updateQuantity(index, -1)}
//                       disabled={item.quantity <= 1}
//                       style={styles.qtyButton}
//                     >
//                       <Minus size={14} />
//                     </button>
//                     <span style={styles.quantity}>{item.quantity}</span>
//                     <button
//                       onClick={() => updateQuantity(index, 1)}
//                       style={styles.qtyButton}
//                     >
//                       <Plus size={14} />
//                     </button>
//                   </div>
//                   <div style={styles.itemPrice}>₹{item.price}</div>
//                   <button
//                     onClick={() => removeFromCart(index)}
//                     style={styles.deleteButton}
//                   >
//                     <Trash2 size={18} />
//                   </button>
//                 </div>
//               ))}
//             </div>

//             <div style={styles.summaryDetails}>
//               <div style={styles.summaryRow}>
//                 <span>Subtotal</span>
//                 <span>₹{subtotal}</span>
//               </div>
//               <div style={styles.summaryRow}>
//                 <span>Items</span>
//                 <span>{totalItems}</span>
//               </div>
//               <div style={styles.summaryRow}>
//                 <span>Shipping</span>
//                 <span style={styles.freeShipping}>Free</span>
//               </div>
//               <div style={styles.divider}></div>
//               <div style={styles.totalRow}>
//                 <span>Total</span>
//                 <span>₹{subtotal}</span>
//               </div>
//               <div style={styles.taxNote}>Including all services and taxes</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     minHeight: "100vh",
//     background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//     padding: "20px",
//   },
//   wrapper: {
//     maxWidth: "1400px",
//     margin: "0 auto",
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
//     gap: "30px",
//   },
//   formSection: {
//     display: "flex",
//     alignItems: "start",
//   },
//   formCard: {
//     background: "white",
//     borderRadius: "20px",
//     padding: "40px",
//     boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
//     width: "100%",
//   },
//   formHeader: {
//     display: "flex",
//     alignItems: "center",
//     gap: "12px",
//     marginBottom: "30px",
//     color: "#667eea",
//   },
//   formTitle: {
//     margin: 0,
//     fontSize: "28px",
//     fontWeight: "700",
//   },
//   sectionTitle: {
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//     fontSize: "16px",
//     fontWeight: "600",
//     color: "#333",
//     marginTop: "25px",
//     marginBottom: "15px",
//     textTransform: "uppercase",
//     letterSpacing: "0.5px",
//   },
//   sectionDot: {
//     width: "8px",
//     height: "8px",
//     background: "#667eea",
//     borderRadius: "50%",
//   },
//   inputGroup: {
//     marginBottom: "16px",
//   },
//   input: {
//     width: "100%",
//     padding: "14px 18px",
//     border: "2px solid #e0e0e0",
//     borderRadius: "12px",
//     fontSize: "15px",
//     transition: "all 0.3s ease",
//     outline: "none",
//     boxSizing: "border-box",
//   },
//   inputError: {
//     borderColor: "#ff4757",
//   },
//   errorText: {
//     color: "#ff4757",
//     fontSize: "13px",
//     marginTop: "5px",
//     display: "block",
//   },
//   row: {
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr",
//     gap: "16px",
//     marginBottom: "16px",
//   },
//   halfWidth: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   submitButton: {
//     width: "100%",
//     padding: "16px",
//     background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//     color: "white",
//     border: "none",
//     borderRadius: "12px",
//     fontSize: "16px",
//     fontWeight: "600",
//     cursor: "pointer",
//     marginTop: "30px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     gap: "10px",
//     transition: "transform 0.2s ease",
//   },
//   submitButtonDisabled: {
//     opacity: 0.7,
//     cursor: "not-allowed",
//   },
//   summarySection: {
//     display: "flex",
//     alignItems: "start",
//   },
//   summaryCard: {
//     background: "white",
//     borderRadius: "20px",
//     padding: "40px",
//     boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
//     width: "100%",
//   },
//   logoContainer: {
//     textAlign: "center",
//     marginBottom: "30px",
//     paddingBottom: "20px",
//     borderBottom: "2px solid #f0f0f0",
//   },
//   logo: {
//     fontSize: "36px",
//     fontWeight: "700",
//     background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//     WebkitBackgroundClip: "text",
//     WebkitTextFillColor: "transparent",
//     backgroundClip: "text",
//     margin: 0,
//   },
//   logoSubtext: {
//     fontSize: "14px",
//     color: "#888",
//     margin: "5px 0 0 0",
//   },
//   summaryTitle: {
//     fontSize: "22px",
//     fontWeight: "700",
//     marginBottom: "20px",
//     color: "#333",
//   },
//   cartItems: {
//     marginBottom: "25px",
//   },
//   cartItem: {
//     display: "flex",
//     alignItems: "center",
//     gap: "15px",
//     padding: "15px",
//     background: "#f8f9fa",
//     borderRadius: "12px",
//     marginBottom: "12px",
//   },
//   itemImage: {
//     width: "60px",
//     height: "60px",
//     borderRadius: "10px",
//     objectFit: "cover",
//   },
//   itemDetails: {
//     flex: 1,
//   },
//   itemName: {
//     fontSize: "15px",
//     fontWeight: "600",
//     color: "#333",
//   },
//   itemWeight: {
//     fontSize: "13px",
//     color: "#888",
//     marginTop: "3px",
//   },
//   quantityControl: {
//     display: "flex",
//     alignItems: "center",
//     gap: "8px",
//     background: "white",
//     padding: "4px 8px",
//     borderRadius: "8px",
//   },
//   qtyButton: {
//     width: "24px",
//     height: "24px",
//     border: "none",
//     background: "#667eea",
//     color: "white",
//     borderRadius: "6px",
//     cursor: "pointer",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   quantity: {
//     fontSize: "14px",
//     fontWeight: "600",
//     minWidth: "20px",
//     textAlign: "center",
//   },
//   itemPrice: {
//     fontSize: "16px",
//     fontWeight: "700",
//     color: "#667eea",
//     minWidth: "70px",
//     textAlign: "right",
//   },
//   deleteButton: {
//     background: "none",
//     border: "none",
//     color: "#ff4757",
//     cursor: "pointer",
//     padding: "5px",
//   },
//   summaryDetails: {
//     background: "#f8f9fa",
//     padding: "20px",
//     borderRadius: "12px",
//   },
//   summaryRow: {
//     display: "flex",
//     justifyContent: "space-between",
//     marginBottom: "12px",
//     fontSize: "15px",
//     color: "#666",
//   },
//   freeShipping: {
//     color: "#00b894",
//     fontWeight: "600",
//   },
//   divider: {
//     height: "1px",
//     background: "#ddd",
//     margin: "15px 0",
//   },
//   totalRow: {
//     display: "flex",
//     justifyContent: "space-between",
//     fontSize: "20px",
//     fontWeight: "700",
//     color: "#333",
//     marginBottom: "8px",
//   },
//   taxNote: {
//     fontSize: "12px",
//     color: "#888",
//     textAlign: "center",
//   },
//   emptyCart: {
//     minHeight: "100vh",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//   },
//   emptyTitle: {
//     color: "white",
//     fontSize: "32px",
//     marginTop: "20px",
//   },
//   emptyText: {
//     color: "rgba(255,255,255,0.8)",
//     fontSize: "18px",
//   },
//   shopButton: {
//     padding: "14px 40px",
//     background: "white",
//     color: "#667eea",
//     border: "none",
//     borderRadius: "12px",
//     fontSize: "16px",
//     fontWeight: "600",
//     cursor: "pointer",
//     marginTop: "20px",
//   },
// };

// export default FinalPaymentMainPage;
import React, { useState } from "react";
import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  Package,
  CreditCard,
} from "lucide-react";
import mainLogo from "../../asset/new-img/logo/gauswarn-main-logo.png";
import "./final-payment-page.css";

const FinalPaymentMainPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Gir Cow Ghee",
      weight: "500 ml",
      price: 699,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=200&h=200&fit=crop",
    },
  ]);

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

  const updateQuantity = (index, change) => {
    const updatedCart = cart.map((item, i) => {
      if (i === index) {
        const newQuantity = Math.max(item.quantity + change, 1);
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.user_name.trim()) newErrors.user_name = "Name is required";
    if (!formData.user_email.trim()) newErrors.user_email = "Email is required";
    if (!/^[0-9]{10}$/.test(formData.user_mobile_num)) {
      newErrors.user_mobile_num = "Valid 10-digit mobile number required";
    }
    if (!formData.user_house_number.trim())
      newErrors.user_house_number = "House number is required";
    if (!formData.user_landmark.trim())
      newErrors.user_landmark = "Landmark is required";
    if (!formData.user_country.trim())
      newErrors.user_country = "Country is required";
    if (!formData.user_state.trim()) newErrors.user_state = "State is required";
    if (!formData.user_city.trim()) newErrors.user_city = "City is required";
    if (!formData.user_pincode.trim())
      newErrors.user_pincode = "Pincode is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setIsLoading(true);
      setTimeout(() => {
        alert("Payment processing...");
        setIsLoading(false);
      }, 2000);
    }
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="new-emptyCart">
        <ShoppingCart size={80} color="#fff" strokeWidth={1.5} />
        <h2 className="new-emptyTitle">Your Cart is Empty</h2>
        <p className="new-emptyText">
          Add some delicious products to get started!
        </p>
        <button className="new-shopButton">Start Shopping</button>
      </div>
    );
  }

  return (
    <div className="new-paymentContainer">
      <div className="new-paymentWrapper">
        {/* Left Side */}
        <div className="new-formSection">
          <div className="new-formCard">
            <div className="new-formHeader">
              <Package size={24} />
              <h2 className="new-formTitle">Checkout Details</h2>
            </div>

            <div>
              {/* Basic Info */}
              <div className="new-sectionTitle">
                <span className="new-sectionDot"></span> Basic Information
              </div>

              <div className="new-inputGroup">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Full Name"
                  value={formData.user_name}
                  onChange={handleInputChange}
                  className={`new-input ${
                    errors.user_name ? "new-inputError" : ""
                  }`}
                />
                {errors.user_name && (
                  <span className="new-errorText">{errors.user_name}</span>
                )}
              </div>

              <div className="new-inputGroup">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email Address"
                  value={formData.user_email}
                  onChange={handleInputChange}
                  className={`new-input ${
                    errors.user_email ? "new-inputError" : ""
                  }`}
                />
                {errors.user_email && (
                  <span className="new-errorText">{errors.user_email}</span>
                )}
              </div>

              <div className="new-inputGroup">
                <input
                  type="tel"
                  name="user_mobile_num"
                  placeholder="Mobile Number"
                  maxLength={10}
                  value={formData.user_mobile_num}
                  onChange={handleInputChange}
                  onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
                  className={`new-input ${
                    errors.user_mobile_num ? "new-inputError" : ""
                  }`}
                />
                {errors.user_mobile_num && (
                  <span className="new-errorText">
                    {errors.user_mobile_num}
                  </span>
                )}
              </div>

              {/* Delivery Info */}
              <div className="new-sectionTitle">
                <span className="new-sectionDot"></span> Delivery Address
              </div>

              <div className="new-inputGroup">
                <input
                  type="text"
                  name="user_house_number"
                  placeholder="House No. / Building / Apartment"
                  value={formData.user_house_number}
                  onChange={handleInputChange}
                  className={`new-input ${
                    errors.user_house_number ? "new-inputError" : ""
                  }`}
                />
                {errors.user_house_number && (
                  <span className="new-errorText">
                    {errors.user_house_number}
                  </span>
                )}
              </div>

              <div className="new-inputGroup">
                <input
                  type="text"
                  name="user_landmark"
                  placeholder="Street / Area / Landmark"
                  value={formData.user_landmark}
                  onChange={handleInputChange}
                  className={`new-input ${
                    errors.user_landmark ? "new-inputError" : ""
                  }`}
                />
                {errors.user_landmark && (
                  <span className="new-errorText">{errors.user_landmark}</span>
                )}
              </div>

              <div className="new-row">
                <div className="new-halfWidth">
                  <input
                    type="text"
                    name="user_country"
                    placeholder="Country"
                    value={formData.user_country}
                    onChange={handleInputChange}
                    className={`new-input ${
                      errors.user_country ? "new-inputError" : ""
                    }`}
                  />
                  {errors.user_country && (
                    <span className="new-errorText">{errors.user_country}</span>
                  )}
                </div>

                <div className="new-halfWidth">
                  <input
                    type="text"
                    name="user_state"
                    placeholder="State"
                    value={formData.user_state}
                    onChange={handleInputChange}
                    className={`new-input ${
                      errors.user_state ? "new-inputError" : ""
                    }`}
                  />
                  {errors.user_state && (
                    <span className="new-errorText">{errors.user_state}</span>
                  )}
                </div>
              </div>

              <div className="new-row">
                <div className="new-halfWidth">
                  <input
                    type="text"
                    name="user_city"
                    placeholder="City"
                    value={formData.user_city}
                    onChange={handleInputChange}
                    className={`new-input ${
                      errors.user_city ? "new-inputError" : ""
                    }`}
                  />
                  {errors.user_city && (
                    <span className="new-errorText">{errors.user_city}</span>
                  )}
                </div>

                <div className="new-halfWidth">
                  <input
                    type="text"
                    name="user_pincode"
                    placeholder="Pincode"
                    value={formData.user_pincode}
                    onChange={handleInputChange}
                    className={`new-input ${
                      errors.user_pincode ? "new-inputError" : ""
                    }`}
                  />
                  {errors.user_pincode && (
                    <span className="new-errorText">{errors.user_pincode}</span>
                  )}
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className={`new-btn-cta new-checkoutBtn ${
                  isLoading ? "new-disabledBtn" : ""
                }`}
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Proceed to Payment"}
              </button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="new-summarySection">
          <div className="new-summaryCard">
            <div className="new-logoContainer">
              <img src={mainLogo} alt="Gauswarn Logo" className="new-logo" />

              <p className="new-logoSubtext">Premium Gir Cow Ghee</p>
            </div>

            <div className="new-summaryTitle">Order Summary</div>

            <div className="new-cartItems">
              {cart.map((item, index) => (
                <div key={index} className="new-cartItem">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="new-itemImage"
                  />

                  <div className="new-itemDetails">
                    <div className="new-itemName">{item.name}</div>
                    <div className="new-itemWeight">{item.weight}</div>
                  </div>

                  <div className="payment-quantity-section">
                    <div className="payment-quantity-control">
                      <button
                        className="payment-quantity-btn payment-decrease-btn"
                        onClick={() => updateQuantity(index, -1)}
                        disabled={item.quantity <= 1}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={18} />
                      </button>
                      <input
                        type="number"
                        className="payment-quantity-input"
                        value={item.quantity}
                        // onChange={handleQuantityChange}
                        min="1"
                      />
                      <button
                        className="payment-quantity-btn payment-increase-btn"
                        onClick={() => updateQuantity(index, 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus size={18} />
                      </button>
                    </div>
                  </div>

                  <div className="new-itemPrice">₹{item.price}</div>

                  <button
                    onClick={() => removeFromCart(index)}
                    className="new-deleteButton"
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

              <div className="new-divider"></div>

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
  );
};

export default FinalPaymentMainPage;
