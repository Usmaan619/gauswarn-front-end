import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "../../asset/img/Logo/GAUSWARN A2 GHEE  Logo.png";
import Rajlaxmi from "../../asset/img/Logo/RAJLAXMI JAVIK PNG.png";
import Image2 from "../../asset/img/SingleProduct/1.png";
import EmptyCart from "../../asset/img/Order/cart.png";
import { useCartContext } from "../Context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import Button from "../Common/Button";
import Footer2 from "../Common/Footer/index2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { environment } from "../../environment/environment";
import LoadingOverlay from "react-loading-overlay";

const Finalpayment = () => {
  const { cart, setCart } = useCartContext();
  const navigate = useNavigate();

  let size = cart.length;

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    reset,
    formState: { errors },
  } = useForm();
  const [showLoader, setShowLoader] = useState(false);
  console.log("showLoader: ", showLoader);

  const onSubmit = async (data, e) => {
    e.preventDefault?.();
    setShowLoader(true);
    try {
      // Cart details
      const { purchase_price, product_quantity, product_price } = cart[0];
      const payload = {
        ...data,
        user_total_amount: total,
        user_country: data?.user_country,
        user_state: data?.user_state,
        user_city: data?.user_city,
        user_pincode: data?.user_pincode,
        purchase_price,
        product_quantity,
      };

      // Store order payload
      sessionStorage.setItem("order_payload", JSON.stringify(payload));
      console.log("payload:", payload);

      //  Create Order API (your backend)
      const response = await axios.post(
        `${environment?.API_BASE_URL}/users/create-order`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 && response.data.success) {
        console.log("response:-------- ", response);
        const {
          razorpay_order_id,
          amount,
          currency,
          user_email,
          contact,
          name,
          id,
        } = response.data.razorpayOrder; // safe destructure

        console.log(
          "response.data.razorpayOrder.notes.user_mobile_num: ",
          response.data.razorpayOrder.notes.user_mobile_num
        );
        //  Razorpay Checkout Setup
        const options = {
          key: "rzp_live_woFUpWK35AZbcn", // Replace with your Razorpay Key
          amount, // in paise
          currency,
          name: name || "Gauswarn",
          description: "Test Transaction",
          image: Rajlaxmi,
          order_id: id,

          prefill: {
            name: response?.data?.razorpayOrder?.notes?.user_name,
            email: response?.data?.razorpayOrder?.notes?.user_email,
            contact: response?.data?.razorpayOrder?.notes?.user_mobile_num,
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },

          modal: {
            ondismiss: async function (d) {
              setShowLoader(false);
            },
          },

          handler: async function (rzpResponse) {
            console.log("rzpResponse:==== ", rzpResponse);

            try {
              const payload = {
                rzpResponse,
                ...response.data.razorpayOrder,
              };

              const validateRes = await axios.post(
                `${environment?.API_BASE_URL}/users/status`,
                payload,
                {
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
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
            } catch (error) {
              setShowLoader(false);
              console.error("Payment validation failed:", error);

              navigate("/payment-failed");
            }
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.on("payment.failed", function (response) {
          alert(`Payment Failed: ${response.error.description}`);
          console.error("Payment Failed:", response.error);
        });

        rzp.open();

        //  SHIPPING API Integration
        const shippingPayload = {
          order_id: razorpay_order_id,
          order_date: new Date().toISOString().split("T")[0],
          order_type: "ESSENTIALS",
          consignee_name: data?.user_name,
          consignee_phone: Number(data?.user_mobile_num),
          consignee_alternate_phone: Number(data?.user_mobile_num),
          consignee_email: data?.user_email,
          consignee_address_line_one: data?.user_house_number,
          consignee_address_line_two: data?.user_landmark,
          consignee_pin_code: data?.user_pincode,
          consignee_city: data?.user_city,
          consignee_state: data?.user_state,
          product_detail: cart.map((item) => ({
            name: "Laptop",
            sku_number: "22",
            quantity: item?.product_quantity,
            discount: "",
            hsn: "#123",
            unit_price: item?.product_price,
            product_category: "Other",
          })),
          payment_type: "PREPAID",
          cod_amount: "",
          shipping_charges: "",
          weight: 200,
          length: 10,
          width: 20,
          height: 15,
          warehouse_id: "",
          gst_ewaybill_number: "",
          gstin_number: "",
        };

        const shippingRes = await axios.post(
          `${environment?.SHIPPING_API_URL}/app/api/v1/push-order`,
          shippingPayload,
          {
            headers: {
              "Content-Type": "application/json",
              "private-key": "G0K1PQYBq3Xlph6y48gw",
              "public-key": "LBYfQgGFRljv1A249H87",
            },
          }
        );

        sessionStorage.setItem("orderId", shippingRes?.data?.data?.order_id);
        console.log("Shipping Order Created:", shippingRes?.data);
      } else {
        throw new Error("Order creation failed");
      }
    } catch (error) {
      console.error(
        "Error during order submission:",
        error.response?.data || error.message
      );
      toast.error("Failed to place the order. Please try again later.");
      setShowLoader(true);
    }
  };

  // const getAllCodesByCity = async (city) => {
  //   const response = await axios.get(
  //     `https://api.postalpincode.in/postoffice/${city}`
  //   );

  //   if (response?.data[0]?.Status === "Success")
  //     setPinOptions(
  //       response?.data[0]?.PostOffice ? response?.data[0]?.PostOffice : "na"
  //     );
  // };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.product_price * item.product_quantity,
    0
  );
  const total = subtotal;

  const removeFromCart = async (item) => {
    console.log("Removing item: ", item);

    const product_id = sessionStorage.getItem("product_id");

    try {
      const response = await axios.delete(
        `${environment?.API_BASE_URL}/users/removecart?product_id=${product_id}&user_id=${item.user_id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("response: ", response);

      if (response?.data?.success) {
        // Remove from state cart
        setCart((prevCart) =>
          prevCart.filter(
            (i) =>
              !(
                i.user_id === item.user_id &&
                i.product_weight === item.product_weight &&
                i.product_price === item.product_price &&
                i.purchase_price === item.purchase_price &&
                i.product_id === item.product_id
              )
          )
        );

        // Remove from session cart
        const getCart = JSON.parse(sessionStorage.getItem("cart")) || [];

        const filteredArray = getCart.filter(
          (i) =>
            !(
              i.user_id === item.user_id &&
              i.product_weight === item.product_weight &&
              i.product_price === item.product_price &&
              i.purchase_price === item.purchase_price &&
              i.product_id === item.product_id
            )
        );

        sessionStorage.setItem("cart", JSON.stringify(filteredArray));

        toast.success("Item removed from cart successfully!");
      } else {
        toast.error("Failed to remove item from cart.");
      }
    } catch (error) {
      console.error(
        "Error removing item from cart:",
        error.response?.data || error.message
      );
      toast.error("Something went wrong. Please try again.");
    }
  };

  const updateQuantity = async (index, change) => {
    try {
      // Optimistically update the cart
      const updatedCart = cart.map((item, i) => {
        console.log("item:======================== ", item);
        console.log("i === index: ", i === index);
        if (i === index) {
          const updatedQuantity = Math.max(item.product_quantity + change, 1);

          console.log("item.user_id: ", item.user_id);
          return {
            ...item,
            product_quantity: updatedQuantity,
            product_total_amount: item.product_price * updatedQuantity,
            // Correct total amount calculation
            product_id: sessionStorage.getItem("product_id"),
            user_id: item.user_id,
          };
        }
        return item;
      });

      // Save the original cart for rollback
      const originalCart = [...cart];

      // Update local state and localStorage
      setCart(updatedCart);
      sessionStorage.setItem("cart", JSON.stringify(updatedCart));

      const updatedItem = updatedCart[index];
      console.log("updatedItem------------------: ", updatedItem);
      const { product_id, product_quantity, product_total_amount, user_id } =
        updatedItem;

      console.log("Updated Item Details:", {
        product_quantity,
        product_id,
        product_total_amount,
        user_id,
      });

      // API call to sync with the server
      const response = await axios.post(
        `${environment?.API_BASE_URL}/users/updateCartItem`,
        {
          product_id: sessionStorage.getItem("product_id"),
          user_id,
          product_quantity,
          product_total_amount,
          change,
        }
      );

      console.log("Server Response:", response.data);
      toast.success("Quantity updated successfully!");
    } catch (error) {
      console.error("Error updating quantity:", error);

      // Revert the optimistic update on failure
      setCart(cart);
      sessionStorage.setItem("cart", JSON.stringify(cart));
      toast.error("Failed to update quantity. Please try again later.");
    }
  };
  console.log("cart: ", cart);

  const calculateTotalQuantity = () => {
    return cart?.reduce((acc, item) => acc + item.product_quantity, 0);
  };
  const Iteam = calculateTotalQuantity();
  console.log("calculating total quantity");
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        closeOnClick
        pauseOnHover
      />
      <LoadingOverlay active={showLoader} spinner text="Loading...">
        <div className="final-pay">
          <div className="container-fluid">
            {size === 0 ? (
              <div className="py-5">
                <div>
                  <h3 className="text-center">- : Your Basket is Empty : -</h3>
                </div>
                <div className="d-flex justify-content-center my-5">
                  <h5>
                    {/* <FontAwesomeIcon icon={faCartShopping} /> */}
                    <img
                      src={EmptyCart}
                      alt="Loading"
                      className="rounded mx-auto d-block w-75"
                    />
                  </h5>
                </div>
                <Link to="/singleproduct" className="text-center d-block mt-3">
                  {/* <button className="btn btn-primary">Go Back to Shopping</button> */}
                  <Button title="Go Back to Shopping" />
                </Link>
              </div>
            ) : (
              <>
                <div className="row">
                  <div className="col-lg-6 col-md-12 py-3 background-color-pullman-green">
                    <div className="order-input px-4">
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="p-4 border rounded-3 lh-lg"
                        style={{
                          maxWidth: "600px",
                          margin: "0 auto",
                        }}
                      >
                        <label className="text-white fw-bold pb-3">
                          BASIC DETAIL
                        </label>
                        <input
                          className="w-100 px-3 py-2 border rounded-1"
                          {...register("user_name", { required: true })}
                          placeholder="FULL NAME"
                        />
                        {errors.user_name && (
                          <p className="text-light mb-0">
                            This field is required
                          </p>
                        )}
                        <input
                          type="email"
                          className="input w-100 mt-2 px-3 py-2 border rounded-1"
                          {...register("user_email")}
                          placeholder="E-MAIL"
                        />
                        {errors.user_email && (
                          <p className="text-light mb-0">
                            This field is required
                          </p>
                        )}

                        <input
                          className="w-100 mt-2 px-3 py-2 border rounded-1"
                          type="tel"
                          inputMode="numeric"
                          maxLength={10}
                          placeholder="MOB NO."
                          {...register("user_mobile_num", {
                            required: "Mobile number is required",
                            pattern: {
                              value: /^[0-9]{10}$/,
                              message:
                                "Mobile number must be exactly 10 digits",
                            },
                          })}
                          onKeyPress={(e) => {
                            // Allow only digits
                            if (!/[0-9]/.test(e.key)) {
                              e.preventDefault();
                            }
                          }}
                        />

                        {errors.user_mobile_num && (
                          <p className="text-light mb-0">
                            {errors.user_mobile_num.message}
                          </p>
                        )}

                        <label className="text-white fw-bold py-2">
                          DELIVERY
                        </label>

                        <input
                          className="w-100 mt-2 px-3 py-2 border rounded-1"
                          {...register("user_house_number", { required: true })}
                          placeholder="HOUSE NO. / COLONY"
                        />
                        {errors.user_house_number && (
                          <p className="text-light mb-0">
                            This field is required
                          </p>
                        )}

                        <input
                          className="w-100 mt-2 px-3 py-2 border rounded-1"
                          {...register("user_landmark", { required: true })}
                          placeholder="STREET / LANDMARK"
                        />
                        {errors.user_landmark && (
                          <p className="text-light mb-0">
                            This field is required
                          </p>
                        )}

                        <div className="row d-flex justify-content-between">
                          <div className="col-lg-6 col-md-6">
                            <input
                              type="text"
                              placeholder="COUNTRY"
                              className="w-100 mt-2 px-3 py-2 border rounded-1 mob-input"
                              {...register("user_country", { required: true })}
                            />
                            {errors.user_country && (
                              <p className="text-light mb-0">
                                This field is required
                              </p>
                            )}
                          </div>

                          <div className="col-lg-6 col-md-6">
                            <input
                              type="text"
                              placeholder="STATE"
                              className="w-100 mt-2 px-3 py-2 border rounded-1 state-input"
                              {...register("user_state", { required: true })}
                            />
                            {errors.user_state && (
                              <p className="text-light mb-0">
                                This field is required
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="row d-flex justify-content-between">
                          <div className="col-lg-6 col-md-6">
                            <input
                              type="text"
                              placeholder="CITY"
                              className="w-100 mt-2 px-3 py-2 border rounded-1 city-input"
                              {...register("user_city", { required: true })}
                            />
                            {errors.user_city && (
                              <p className="text-light mb-0">
                                This field is required
                              </p>
                            )}
                          </div>

                          <div className="col-lg-6 col-md-6">
                            <input
                              type="text"
                              placeholder="PIN"
                              className="w-100 mt-2 px-3 py-2 border rounded-1 pin-input"
                              {...register("user_pincode", { required: true })}
                            />
                            {errors.user_pincode && (
                              <p className="text-light mb-0">
                                This field is required
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pt-4">
                          <button
                            type="submit"
                            className="w-50 border rounded-pill text-uppercase button-feedback"
                          >
                            Pay Now
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="final-price">
                      <div className="order-logo m-auto">
                        <img
                          src={Image}
                          alt="Product"
                          className="w-100 h-100"
                        />
                      </div>

                      <div className="product-table mt-5">
                        <table className="table table-striped table-bordered text-center">
                          <tbody>
                            {cart.map((item, index) => (
                              <tr key={index} className="align-middle">
                                <td>
                                  <img
                                    src={item.image || Image2}
                                    alt="Product"
                                    style={{ width: "60px", height: "60px" }}
                                  />
                                </td>
                                <td>Gir Cow Ghee ({item.product_weight})</td>
                                <td>
                                  <div className="quantity-controls d-flex align-items-center justify-content-center">
                                    <button
                                      className="btn btn-outline-secondary btn-sm"
                                      onClick={() => updateQuantity(index, -1)}
                                      disabled={item.product_quantity <= 1}
                                    >
                                      -
                                    </button>
                                    <span className="mx-3">
                                      {item.product_quantity}
                                    </span>
                                    <button
                                      className="btn btn-outline-secondary btn-sm"
                                      onClick={() => updateQuantity(index, 1)}
                                    >
                                      +
                                    </button>
                                  </div>
                                </td>
                                <td>₹ {item.product_price}</td>
                                <td>
                                  <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => removeFromCart(item)}
                                  >
                                    <MdDelete />
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="d-flex justify-content-between mt-1">
                        <p className="fs-5 ms-4">Subtotal :-</p>
                        <p className="fw-normal me-4">₹{subtotal}</p>
                      </div>
                      <div className="d-flex justify-content-between mt-1">
                        <p className="fs-5 ms-4"> Item:-</p>
                        <p className="fw-normal me-4">{Iteam}</p>
                      </div>
                      <div className="d-flex justify-content-between lh-1 mt-1">
                        <p className="fs-5 ms-4">Shipping Charges</p>
                        <p className="fw-normal me-4">Free</p>
                      </div>
                      <div className="d-flex justify-content-between lh-1 mt-1">
                        <p className="fs-5 fw-bold ms-4">Total</p>
                        <p className="fw-normal me-4">₹{total}</p>
                      </div>
                      <p className="lh-1 ms-4">
                        (Including all services and taxes)
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </LoadingOverlay>
      {/*  */}
      <Footer2 />
    </>
  );
};

export default Finalpayment;
