import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image1 from "../../asset/img/SingleProduct/1.png";
import Image2 from "../../asset/img/SingleProduct/2.png";
import Image3 from "../../asset/img/SingleProduct/3.png";
import Image4 from "../../asset/img/SingleProduct/4.png";
import Image5 from "../../asset/img/SingleProduct/Single3.jpg";
import Image6 from "../../asset/img/SingleProduct/Single2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/UserContext";
import { IoMdContact } from "react-icons/io";
import FeedbackForm from "./Feedback";
import Footer2 from "../Common/Footer/index2";
import axios from "axios";
import Image from "../../asset/img/Icons/clapping.gif";
import { environment } from "../../environment/environment";
import { v4 as uuidv4 } from "uuid";

const Order = () => {


  const data = [
    {
      user_id: 1,
      liter: "500 ml",
      price: 720,
      del: 1200,
      purchase_price: 559,
    },
    {
      user_id: 2,
      liter: "1000 ml",
      price: 1440,
      del: 2400,
      purchase_price: 1007,
    },
    {
      user_id: 3,
      liter: "5 kg",
      price: 6600,
      del: 12000,
      purchase_price: 4760,
    },
    {
      user_id: 4,
      liter: "15 kg",
      price: 18000,
      del: 36000,
      purchase_price: 14280,
    },
  ];

  const [reviews, setReviews] = useState([]); // To store reviews
  const [loading, setLoading] = useState(false); // To show loading state
  const { feedbackOpen, setFeedbackOpen } = useCartContext();
  const [showImage, setShowImage] = useState(false); // Image display state
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const { setCart } = useCartContext();
  const [selectedImage, setSelectedImage] = useState(Image1);
  const [checkedItems, setCheckedItems] = useState(
    Array(data.length).fill(false)
  );
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [count, setCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0); // Set initial price
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [ratingsBreakdown, setRatingsBreakdown] = useState({
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  });

  const [prdData, setPrdData] = useState([]);
  

  const images = [Image1, Image2, Image3, Image4, Image5, Image6];

  const handleImageClick = (image) => setSelectedImage(image);

  const handleCheckboxChange = (index) => {
    const newCheckedItems = Array(prdData.length).fill(false);
    newCheckedItems[index] = true;

    setCheckedItems(newCheckedItems);
    setSelectedPrice(prdData[index].product_price);

    setTotalAmount(prdData[index]?.product_price?.toFixed(2));
    // Set total based on selected variant
    setCount(1);
    // setTotalAmount((data[index]?.price * count)?.toFixed(2)); // Set total based on selected variant
  };

  const increaseCount = () => {
    setCount(count + 1);
    const selectedIndex = checkedItems.findIndex((item) => item);
    if (selectedIndex !== -1) {
      setTotalAmount((prdData[selectedIndex].product_price * (count + 1)).toFixed(2));
    }
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
      // Update total amount whenever quantity changes
      const selectedIndex = checkedItems.findIndex((item) => item);
      if (selectedIndex !== -1) {
        setTotalAmount((prdData[selectedIndex].product_price * (count - 1)).toFixed(2));
      }
    }
  };

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    arrows: false,
    responsive: [
      { breakpoint: 1026, settings: { slidesToShow: 6 } },
      { breakpoint: 998, settings: { slidesToShow: 5, vertical: false } },
      { breakpoint: 768, settings: { slidesToShow: 6, vertical: false } },
      { breakpoint: 480, settings: { slidesToShow: 5, vertical: false } },
      { breakpoint: 360, settings: { slidesToShow: 5, vertical: false } },
    ],
  };

  const renderStars = (averageRating) => {
    const fullStars = Math.floor(averageRating); // Full stars
    const hasHalfStar = averageRating % 1 >= 0.5; // Check if there's a half star
    const emptyStars = 5 - Math.ceil(averageRating); // Remaining empty stars

    return (
      <div className="star-container d-inline-block">
        {/* Full stars */}
        {Array.from({ length: fullStars }, (_, i) => (
          <span key={`full-${i}`} className="star text-warning">
            ★
          </span>
        ))}
        {/* Half star */}
        {hasHalfStar && (
          <span
            className="star half text-warning"
            style={{ position: "relative" }}
          >
            <span
              style={{ position: "absolute", overflow: "hidden", width: "50%" }}
            >
              ★
            </span>
            <span style={{ opacity: 0.3 }}>★</span>
          </span>
        )}
        {/* Empty stars */}
        {Array.from({ length: emptyStars }, (_, i) => (
          <span key={`empty-${i}`} className="star text-muted">
            ★
          </span>
        ))}
      </div>
    );
  };

  const handleAddToCart = async () => {
    const selectedIndex = checkedItems.findIndex((item) => item);

    // Validate selection and quantity
    if (selectedIndex === -1 || count <= 0) {
      toast.error("Please select a variant and quantity!");
      return;
    }

    const selectedItem = prdData[selectedIndex];
    
    let pId;
    // if (!localStorage.getItem("product_id")) {
    //   pId = uuidv4();
    //   localStorage.setItem("product_id", pId);
    // }

    if (!sessionStorage.getItem("product_id")) {
      pId = uuidv4();
      sessionStorage.setItem("product_id", pId);
    }

    const cartItem = {
      product_id: sessionStorage.getItem("product_id") || pId,
      user_id: selectedItem.product_id,
      product_weight: selectedItem.product_weight,
      product_quantity: count,
      product_price: selectedItem.product_price,
      product_total_amount: selectedItem.product_price * count,
      purchase_price: selectedItem.product_purchase_price,
    };

    try {
      const response = await axios.post(
        `${environment?.API_BASE_URL}/users/login/addtocart`,
        cartItem,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("Item added to cart successfully!");

        // Update the cart state
        setCart((prevCart) => {
          const updatedCart = [...prevCart];
          const existingItemIndex = updatedCart.findIndex(
            (item) => item.user_id === selectedItem.user_id
          );

          if (existingItemIndex !== -1) {
            // Update quantity of existing item
            updatedCart[existingItemIndex] = {
              ...updatedCart[existingItemIndex],
              product_quantity:
                updatedCart[existingItemIndex].product_quantity + count,
            };
          } else {
            // Add new item to cart
            updatedCart.push({
              user_id: selectedItem.product_id,
              product_weight: selectedItem.product_weight,
              product_quantity: count,
              product_price: selectedItem.product_price,
              product_total_amount: selectedItem.product_price * count,
              purchase_price: selectedItem.product_purchase_price,
            });
          }

          // Ensure data is serializable
          sessionStorage.setItem("cart", JSON.stringify(updatedCart));

          return updatedCart;
        });

        // Reset form values
        setTotalAmount("");
        setCount(0);
      } else {
        toast.error("Failed to add item to cart. Please try again.");
      }
    } catch (error) {
      
      toast.error("Something went wrong. Please try again later.");
    }
  };

  const handleFeedbackSubmit = async (feedbackData) => {
    setSelectedEmoji(Image);
    setShowImage(true);
    // setFeedbackOpen(false);

    // Remove image and reset after 30 seconds
    setTimeout(() => {
      setShowImage(false);
      setFeedbackOpen(false); // Show the client reviews again
    }, 3000); // 30 seconds

    try {
      setLoading(true); // Start loading

      const response = await axios.post(
        `${environment?.API_BASE_URL}/users/feedback`, // Replace with your actual API endpoint
        feedbackData,
        {
          headers: {
            "Content-Type": "application/json",
            'ngrok-skip-browser-warning': '69420',
          },
        }
      );
      if (response.status === 201) {
        toast.success("Feedback submitted successfully!");
        fetchReviews();
      } else {
        toast.error("Failed to submit feedback. Please try again.");
      }
    } catch (error) {
      console.error(
        "Error submitting feedback:",
        error.response?.data || error.message
      );
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Function to fetch reviews from the backend
  const fetchReviews = async () => {
    try {
      const response = await axios.get(
        `${environment?.API_BASE_URL}/users/allfeedback`,
        {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
        }
      );
      const data = response.data;
      setAverageRating(data.averageRating || 0);
      setTotalReviews(data.totalReviews || 0);
      setRatingsBreakdown(
        data.ratingsBreakdown || { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
      );
      setReviews(data.reviews || []);

      setReviews(response?.data?.reviews); // Assuming the response contains a `reviews` array
    } catch (error) {
      
    }
  };
  const ProductData = async () => {
    try {
      const response = await axios.get(
        `${environment?.API_BASE_URL}/users/getAllProduct`,
        {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
        }
      );
      setPrdData(response?.data?.products);
      
      // return response?.data?.products
    } catch (error) {
      
    }
  };

  // Fetch reviews on component mount
  useEffect(() => {
    fetchReviews();
    ProductData();
  }, []);

  return (
    <>
      {showImage ? (
        <div className="uploaded-image-container text-center">
          <img
            src={selectedEmoji}
            alt="selectedEmoji"
            className="img-fluid submit-emoji"
          />
          <p className="fs-4 py-5">Thank you for your feedback!</p>
        </div>
      ) : feedbackOpen ? (
        <FeedbackForm onSubmit={handleFeedbackSubmit} />
      ) : (
        <div className="order pt-lg-5 pb-5">
          <div className="container pt-2 pb-2">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-1 col-md-12 col-sm-12">
                <div className="scrollbar-container">
                  <Slider {...settings}>
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className="select-order-img py-1 d-flex justify-content-center"
                      >
                        <img
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          onClick={() => handleImageClick(image)}
                          className="w-100 border rounded-3"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 d-flex justify-content-center align-items-center">
                <div className="order-img">
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="border rounded-3"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="order-section">
                  <h3 className="text-success">100% Natural Gir Cow Ghee</h3>
                  <p className="mt-3">Cultured with vedic bilona method</p>
                  <p className="fs-4">
                    {renderStars(averageRating)}
                    <b> {averageRating.toFixed(1)}</b>
                  </p>
                  <div className="fw-bold">
                    <img
                      width="30"
                      height="30"
                      src="https://img.icons8.com/color/48/vegetarian-food-symbol.png"
                      alt="vegetarian-food-symbol"
                    />
                    <span className="ms-2">This is a Vegetarian Product</span>
                  </div>
                  <p className="lh-lg">
                    <span
                      style={{ textDecoration: "line-through", color: "grey" }}
                    >
                      Rs.{" "}
                      {selectedPrice
                        ? prdData[checkedItems.findIndex((item) => item)]?.product_del_price
                        : "0"}
                    </span>
                    <b className="ms-2">Rs. {selectedPrice || "0"}</b> MRP
                    (Incl. of all taxes)
                  </p>

                  <p className="w-100 my-2 border border-secondary"></p>
                  <p className="fw-bold pt-4">Select Variant</p>
                  <div className="card-flex pt-2 d-flex align-items-center gap-4 w-100 h-100">
                    {prdData?.map((item, index) => (
                      <div
                        key={index}
                        className={`order-card ${checkedItems[index] ? "highlight" : ""
                          }`}
                        onClick={() => handleCheckboxChange(index)}
                      >
                        <div
                          className="order-card-head  p-1 d-flex justify-content-between"
                          style={{ borderRadius: "10px 10px 0px 0px" }}
                        >
                          <p className="fw-bold text-light mt-2 px-3">
                            {item?.product_weight}
                          </p>
                          <div className="form-check">
                            <input
                              className="form-check-input border-0"
                              type="checkbox"
                              checked={checkedItems[index]}
                              onChange={() => handleCheckboxChange(index)}
                              id={`flexCheckDefault${index}`}
                            />
                          </div>
                        </div>
                        <div
                          className="order-card-price border ps-3"
                          style={{ borderRadius: "0px 0px 10px 10px" }}
                        >
                          <p>{item.batch}</p>
                          <h6 className="mb-4">
                            <b>INR {item?.product_price} /-</b>

                            <div
                              className="mt-1"
                              style={{
                                textDecoration: "line-through",
                                color: "grey",
                              }}
                            >
                              <del>INR {item?.product_del_price} </del>
                            </div>
                          </h6>
                          <p className="">(Incl of All Taxes)</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="count mt-4 d-flex align-items-center">
                    <div className="count-btn d-flex align-items-center justify-content-center border border-3 border-black rounded-pill">
                      <button
                        onClick={decreaseCount}
                        className="count-section border-0 bg-transparent text-danger"
                      >
                        <BiSolidDownArrow />
                      </button>
                      <div className="count-section border-0 fw-bold">
                        {count}
                      </div>
                      <button
                        onClick={increaseCount}
                        className="count-section border-0 bg-transparent text-success"
                      >
                        <BiSolidUpArrow />
                      </button>
                    </div>
                  </div>

                  <div className="cart-order d-flex mt-4 cursor-pointer">
                    <button
                      className="cart-btn px-1 text-uppercase text-light d-flex align-items-center justify-content-between border rounded-pill"
                      onClick={handleAddToCart}
                    >
                      <div className="cart-icon rounded-pill d-flex align-items-center justify-content-center fs-5">
                        <HiOutlineShoppingCart />
                      </div>
                      <p className="w-100 text-uppercase pt-3 lh-1">
                        add to cart
                      </p>
                    </button>

                    {/* <Link
                      to="/finalpayment"
                      className="cart-btn text-decoration-none ms-5 px-1 text-uppercase text-light d-flex align-items-center justify-content-between border rounded-pill"
                    >
                      <div className="cart-icon rounded-pill d-flex align-items-center justify-content-center fs-5">
                        <HiOutlineShoppingCart />
                      </div>
                      <p className="m-auto text-uppercase lh-1">BUY NOW</p>
                    </Link> */}
                  </div>
                </div>
              </div>

              {/* <div className="container mt-5">
                <div className="row">
                  {prdData?.map((item) => (
                    <div className="col-md-4" key={item.product_id}>
                      <div className="card mb-4">
                        <img
                          width={200}
                          height={200}
                          src={item.product_image}
                          alt=""
                          className="m-auto"
                        />
                        <div className="d-flex">
                          <div className="card-body">
                            <h5 className="card-title">
                              Product: {item.product_name}
                            </h5>
                            <p className="card-text">
                              Price: {item.product_price}
                            </p>
                          </div>
                          <div className="card-body">
                            <p className="card-title">
                              Stock: {item.product_stock}
                            </p>
                            <p className="card-text">id: {item.product_id}</p>
                          </div>
                        </div>
                        <div className="p-2">
                          <a href="#" className="btn btn-primary">
                            Add to Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}

              <div className="row py-3 mt-4 d-flex justify-content-center">
                <h4 className="text-center mb-3">Customer Review</h4>
                {/* Left Section: Average Rating */}
                <div className="col-lg-4 border-end-1 d-flex align-items-center justify-content-center mb-4">
                  {/* Average Rating */}

                  <div className="review-sec1 py-2 fs-6 lh-sm">
                    <p>
                      {renderStars(averageRating)} {averageRating.toFixed(1)}{" "}
                      out of 5
                    </p>
                    <p>Based on {totalReviews} reviews</p>
                  </div>
                </div>

                {/* Middle Section: Rating Distribution */}
                <div className="col-lg-4 border-end-1 mb-4">
                  <div className="d-flex">
                    {/* Ratings List */}
                    <div className="review-sec2 w-25 fw-bolder">
                      <p className="text-warning">★ ★ ★ ★ ★</p>
                      <p className="text-warning">★ ★ ★ ★</p>
                      <p className="text-warning">★ ★ ★</p>
                      <p className="text-warning">★ ★</p>
                      <p className="text-warning">★</p>
                    </div>

                    {/* Progress Bars */}
                    <div className="bar-section w-50 mt-1 d-grid gap-1">
                      {[5, 4, 3, 2, 1]?.map((rating) => (
                        <div key={rating} className="progress progress-striped">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: `${ratingsBreakdown[rating]}%` }}
                          >
                            {ratingsBreakdown[rating]?.toFixed(1)}%
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Percentages */}
                    <div className="w-25 d-grid gap-0 fw-bold text-end">
                      <p>{ratingsBreakdown[5]?.toFixed(1)}%</p>
                      <p>{ratingsBreakdown[4]?.toFixed(1)}%</p>
                      <p>{ratingsBreakdown[3]?.toFixed(1)}%</p>
                      <p>{ratingsBreakdown[2]?.toFixed(1)}%</p>
                      <p>{ratingsBreakdown[1]?.toFixed(1)}%</p>
                    </div>
                  </div>
                </div>

                {/* Right Section: Feedback Button */}
                <div className="col-lg-4 d-flex align-items-center justify-content-center  mb-4">
                  <div className="py-2">
                    <button
                      className="shop-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Review
                    </button>
                  </div>
                </div>

                {/* Feedback Form */}
                <div className="collapse" id="collapseExample">
                  <FeedbackForm onSubmit={handleFeedbackSubmit} />
                </div>
                <div className="row d-flex justify-content-center">
                  {/* Reviews Section */}
                  {reviews?.map((review, index) => (
                    <div
                      className={`col-lg-5 col-sm-12 border pt-2 m-1`}
                      key={index}
                    >
                      <div className="d-flex align-items-center">
                        <IoMdContact className="fs-2" />
                        <b className="fs-6">{review.name}</b>
                        {/* <b className="text-warning fs-6 ms-2">  {"★".repeat(review.rating)}
                      {"☆".repeat(5 - review.rating)}</b> */}
                        <b className="fs-6 ms-2">
                          <span className="text-warning fs-6 ms-2">
                            {"★".repeat(review.rating)}
                          </span>
                          <span className="fs-6" style={{ color: "gray" }}>
                            {"☆".repeat(5 - review.rating)}
                          </span>
                        </b>
                      </div>
                      <p>{review.feedback}</p>
                    </div>
                  ))}

                  {loading && <p>Loading...</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        closeOnClick
        pauseOnHover
      />
      <Footer2 />
    </>
  );
};

export default Order;
