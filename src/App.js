import "./App.css";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./Component/Common/Scroll-to-Top/scroll-to-top.jsx";
import { useEffect, useState } from "react";
import { useCartContext } from "./Component/Context/UserContext.jsx";

// MAIN HOME PAGE COMPONENTS
import Home from "./Component/Pages/Home.jsx";
import Certified from "./Component/Pages/Certified.jsx";
import AboutUsHero from "./Component/Common/Navbar/About/About-us-hero.jsx";
import ProductShowcase from "./Component/Carousel/product-showcase.jsx";
import VideoSection from "./Component/Video/Video-hero.jsx";
import PromotionalCards from "./Component/PromotionalBanner/promotional-cards.jsx";
import HealthProductShowcase from "./Component/Banefit/health-product-showcase.jsx";
import DiscoverHeroSection from "./Component/Discover/discover-hero-section.jsx";

// OTHER PAGES
import AboutUsHeroMain from "./Component/AboutUs-new/about-us-new-main-page.jsx";
import BlogMainPageNew from "./Component/Blog/blog-new-main.jsx";
import GheeGallery from "./Component/Gallery/gallery-main.jsx";
import ContactMainPage from "./Component/Contact/contact-main-page.jsx";
import OrderTracking from "./Component/TrackOrder/track-order-main-page.jsx";
import B2BLandingPage from "./Component/B2B/b2b-main-page.jsx";
import ProductPageMain from "./Component/Products/product-page-main.jsx";
import RefundMainPage from "./Component/Refund/refund-main.page.jsx";
import ShippingPolicy from "./Component/Shipping-policy/shipping-policy-main-page.jsx";
import PrivacyPolicy from "./Component/Privacy-Policy/privacy-policy-main-page.jsx";
import FAQMainPage from "./Component/FAQ/faq-main-page.jsx";
import TermsConditions from "./Component/Terms-And-Conditions/terms-and-condition.jsx";
import LabReportMain from "./Component/Lab/lab-report-main.jsx";

// FOOTER + NAVBAR
import NewFooter from "./Component/Common/Footer/Footer.jsx";
import NavbarWrapper from "./Component/Common/Navbar/NavbarWrapper.jsx";
import Aos from "aos";
import FinalPaymentMainPage from "./Component/Final-payment-page/final-payment-page.jsx";
import { ToastContainer } from "react-toastify";

function App() {
  const { setCart } = useCartContext();

  // AOS INIT
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  // SESSION CART LOAD
  useEffect(() => {
    try {
      const storedCart = JSON.parse(sessionStorage.getItem("cart") || "[]");
      setCart(storedCart);
    } catch (error) {
      console.error("Failed to parse cart:", error);
      setCart([]);
    }
  }, []);

  return (
    <>
      <ToastContainer />
      <ScrollToTop />
      <NavbarWrapper />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <Certified />
              <AboutUsHero />
              <ProductShowcase />
              <VideoSection />
              {/* <PromotionalCards /> */}
              <HealthProductShowcase />
              <DiscoverHeroSection />
            </>
          }
        />

        {/* MAIN PAGES */}
        <Route path="/about" element={<AboutUsHeroMain />} />
        <Route path="/blog" element={<BlogMainPageNew />} />
        <Route path="/gallery" element={<GheeGallery />} />
        <Route path="/contact" element={<ContactMainPage />} />
        <Route path="/track-order" element={<OrderTracking />} />
        <Route path="/b2b" element={<B2BLandingPage />} />
        <Route path="/products" element={<ProductPageMain />} />
        <Route path="/cart" element={<FinalPaymentMainPage />} />

        {/* NEW POLICY ROUTES */}
        <Route path="/refund" element={<RefundMainPage />} />
        <Route path="/shipping" element={<ShippingPolicy />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/faq" element={<FAQMainPage />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/lab" element={<LabReportMain />} />

        {/* 404 */}
        <Route
          path="*"
          element={
            <h2 style={{ textAlign: "center", marginTop: "50px",height:"41dvh" }}>
              Page Not Found
            </h2>
          }
        />
      </Routes>

      <NewFooter />
    </>
  );
}

export default App;
