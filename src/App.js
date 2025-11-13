import "./App.css";
import Main from "./Component/Pages/Main";
import { Routes, Route } from "react-router-dom";
import SingleProcess from "./Component/Pages/SingleProcessed.jsx";
import Finalpayment from "./Component/Pages/Finalpayment.jsx";
import CustomNavbar from "./Component/Common/Navbar/index.jsx";
import ScrollToTop from "./Component/Common/Scroll-to-Top/index.jsx";
import Contact from "./Component/Pages/Contact.jsx";
import Refund from "./Component/Pages/Refund.jsx";
import Cancel from "./Component/Pages/Cancel.jsx";
import Privacy from "./Component/Pages/Privacy.jsx";
import Shipping from "./Component/Pages/Shipping.jsx";
import Lab from "./Component/Pages/Lab.jsx";
import Faq from "./Component/Pages/Faq.jsx";
import Loader from "./Component/Common/Loader/loader.jsx";
import TrackingOrder from "./Component/Pages/TrackOrder.jsx";
import FeedbackForm from "./Component/Pages/Feedback.jsx";
import AOS from "aos";
import { useEffect, useState } from "react";
import TermsConditions from "./Component/Pages/Terms&Conditions.jsx";
import PaymentDone from "./Component/Pages/PaymentSuccess.jsx";
import PaymentFail from "./Component/Pages/PaymentFailed.jsx";
import { useCartContext } from "./Component/Context/UserContext.jsx";
import Admin from "./Component/Pages/Admin.jsx";
import NotFound from "./Component/Pages/NotFound.jsx"; // Import 404 Page
import Gallery from "./Component/Pages/Gallery.jsx";
import About from "./Component/Pages/About.jsx";

function App() {
  const { setCart } = useCartContext();

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    try {
      const storedCart = JSON.parse(sessionStorage.getItem("cart") || "[]");
      setCart(storedCart);
    } catch (error) {
      console.error("Failed to parse cart from localStorage:", error);
      setCart([]);
    }
  }, []);

  const hideNavbar = window.location.pathname;

  return (
    <>
      <ScrollToTop />
      <CustomNavbar />
    </>
  );
}

export default App;
