import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import Aos from "aos";
import { ToastContainer } from "react-toastify";

import ScrollToTop from "./Component/Common/Scroll-to-Top/scroll-to-top.jsx";
import NavbarWrapper from "./Component/Common/Navbar/NavbarWrapper.jsx";
import NewFooter from "./Component/Common/Footer/Footer.jsx";

import { useCartContext } from "./Component/Context/UserContext.jsx";

/* =======================
   LAZY LOAD COMPONENTS
======================= */

// Home sections
const Home = lazy(() => import("./Component/Pages/Home.jsx"));
const Certified = lazy(() => import("./Component/Pages/Certified.jsx"));
const AboutUsHero = lazy(() =>
  import("./Component/Common/Navbar/About/About-us-hero.jsx")
);
const ProductShowcase = lazy(() =>
  import("./Component/Carousel/product-showcase.jsx")
);
const VideoSection = lazy(() => import("./Component/Video/Video-hero.jsx"));
const GheePurity = lazy(() =>
  import("./Component/AboutUs-new/ghee-purity.jsx")
);
const HealthProductShowcase = lazy(() =>
  import("./Component/Banefit/health-product-showcase.jsx")
);
const DiscoverHeroSection = lazy(() =>
  import("./Component/Discover/discover-hero-section.jsx")
);

// Pages
const AboutUsHeroMain = lazy(() =>
  import("./Component/AboutUs-new/about-us-new-main-page.jsx")
);
const BlogMainPageNew = lazy(() =>
  import("./Component/Blog/blog-new-main.jsx")
);
const BlogView = lazy(() => import("./Component/Blog/blogView.jsx"));
const GheeGallery = lazy(() => import("./Component/Gallery/gallery-main.jsx"));
const ContactMainPage = lazy(() =>
  import("./Component/Contact/contact-main-page.jsx")
);
const OrderTracking = lazy(() =>
  import("./Component/TrackOrder/track-order-main-page.jsx")
);
const B2BLandingPage = lazy(() => import("./Component/B2B/b2b-main-page.jsx"));
const ProductPageMain = lazy(() =>
  import("./Component/Products/product-page-main.jsx")
);
const FinalPaymentMainPage = lazy(() =>
  import("./Component/Final-payment-page/final-payment-page.jsx")
);

// Policies
const RefundMainPage = lazy(() =>
  import("./Component/Refund/refund-main.page.jsx")
);
const ShippingPolicy = lazy(() =>
  import("./Component/Shipping-policy/shipping-policy-main-page.jsx")
);
const PrivacyPolicy = lazy(() =>
  import("./Component/Privacy-Policy/privacy-policy-main-page.jsx")
);
const FAQMainPage = lazy(() => import("./Component/FAQ/faq-main-page.jsx"));
const TermsConditions = lazy(() =>
  import("./Component/Terms-And-Conditions/terms-and-condition.jsx")
);
const LabReportMain = lazy(() => import("./Component/Lab/lab-report-main.jsx"));

// Payment
const PaymentFailed = lazy(() =>
  import("./Component/Payment-fails-pages/PaymentFailed.jsx")
);
const PaymentSuccess = lazy(() =>
  import("./Component/PaymentSuccess/PaymentSuccess.jsx")
);

/* =======================
   HOME PAGE GROUP
======================= */
const HomePage = () => (
  <>
    <Home />
    <Certified />
    <AboutUsHero />
    <ProductShowcase />
    <VideoSection />
    <GheePurity />
    <HealthProductShowcase />
    <DiscoverHeroSection />
  </>
);

function App() {
  const { setCart } = useCartContext();

  /* ---------- AOS ---------- */
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

  /* ---------- CART ---------- */
  useEffect(() => {
    try {
      const cart = JSON.parse(sessionStorage.getItem("cart") || "[]");
      setCart(cart);
    } catch {
      setCart([]);
    }
  }, [setCart]);

  return (
    <>
      <ToastContainer />
      <ScrollToTop />
      <NavbarWrapper />

      {/*  Suspense Wrapper */}
      <Suspense
        fallback={
          <div
            style={{ textAlign: "center", padding: "100px 0", height: "100vh" }}
          >
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/about" element={<AboutUsHeroMain />} />
          <Route path="/blog" element={<BlogMainPageNew />} />
          <Route path="/blog/:slug" element={<BlogView />} />

          <Route path="/gallery" element={<GheeGallery />} />
          <Route path="/contact" element={<ContactMainPage />} />
          <Route path="/track-order" element={<OrderTracking />} />
          <Route path="/b2b" element={<B2BLandingPage />} />
          <Route path="/products" element={<ProductPageMain />} />
          <Route path="/cart" element={<FinalPaymentMainPage />} />

          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/payment-failed" element={<PaymentFailed />} />

          <Route path="/refund" element={<RefundMainPage />} />
          <Route path="/shipping" element={<ShippingPolicy />} />

          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />

          <Route path="/faq" element={<FAQMainPage />} />
          <Route path="/lab" element={<LabReportMain />} />

          <Route
            path="*"
            element={
              <h2 style={{ textAlign: "center", marginTop: 50,height:"100vh" }}>
                Page Not Found
              </h2>
            }
          />
        </Routes>
      </Suspense>

      <NewFooter />
    </>
  );
}

export default App;
