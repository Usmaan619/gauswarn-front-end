import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import Aos from "aos";
import { ToastContainer } from "react-toastify";

import ScrollToTop from "./Component/Common/Scroll-to-Top/scroll-to-top.jsx";
import NavbarWrapper from "./Component/Common/Navbar/NavbarWrapper.jsx";
import NewFooter from "./Component/Common/Footer/Footer.jsx";

import { useCartContext } from "./Component/Context/UserContext.jsx";
import Seo from "./Component/SEO/Seo.jsx";
import CareersPage from "./Component/Careers/careers-main-page.jsx";
import { postData } from "./services/api.jsx";

/* =======================
   LAZY LOAD COMPONENTS
======================= */

// Home sections
const Home = lazy(() => import("./Component/Pages/Home.jsx"));
const GauswarnHome = lazy(() => import("./Component/Pages/GauswarnHome.jsx"));
const Certified = lazy(() => import("./Component/Pages/Certified.jsx"));
const AboutUsHero = lazy(
  () => import("./Component/Common/Navbar/About/About-us-hero.jsx"),
);
const ProductShowcase = lazy(
  () => import("./Component/Carousel/product-showcase.jsx"),
);
const GheePurity = lazy(
  () => import("./Component/AboutUs-new/ghee-purity.jsx"),
);
const HealthProductShowcase = lazy(
  () => import("./Component/Banefit/health-product-showcase.jsx"),
);
const DiscoverHeroSection = lazy(
  () => import("./Component/Discover/discover-hero-section.jsx"),
);

// Pages
const AboutUsHeroMain = lazy(
  () => import("./Component/AboutUs-new/about-us-new-main-page.jsx"),
);
const BlogMainPageNew = lazy(
  () => import("./Component/Blog/blog-new-main.jsx"),
);
const BlogView = lazy(() => import("./Component/Blog/blogView.jsx"));
const GheeGallery = lazy(() => import("./Component/Gallery/gallery-main.jsx"));
const ContactMainPage = lazy(
  () => import("./Component/Contact/contact-main-page.jsx"),
);
// const OrderTracking = lazy(
//   () => import("./Component/TrackOrder/track-order-main-page.jsx"),
// );
const B2BLandingPage = lazy(() => import("./Component/B2B/b2b-main-page.jsx"));
const ProductPageMain = lazy(
  () => import("./Component/Products/product-page-main.jsx"),
);
const FinalPaymentMainPage = lazy(
  () => import("./Component/Final-payment-page/final-payment-page.jsx"),
);

// Policies
const RefundMainPage = lazy(
  () => import("./Component/Refund/refund-main.page.jsx"),
);
const ShippingPolicy = lazy(
  () => import("./Component/Shipping-policy/shipping-policy-main-page.jsx"),
);
const PrivacyPolicy = lazy(
  () => import("./Component/Privacy-Policy/privacy-policy-main-page.jsx"),
);
const FAQMainPage = lazy(() => import("./Component/FAQ/faq-main-page.jsx"));
const TermsConditions = lazy(
  () => import("./Component/Terms-And-Conditions/terms-and-condition.jsx"),
);
const LabReportMain = lazy(() => import("./Component/Lab/lab-report-main.jsx"));
const VideoPage = lazy(() => import("./Component/Pages/VideoPage.jsx"));

// Payment
const PaymentFailed = lazy(
  () => import("./Component/Payment-fails-pages/PaymentFailed.jsx"),
);
const PaymentSuccess = lazy(
  () => import("./Component/PaymentSuccess/PaymentSuccess.jsx"),
);

/* =======================
   HOME PAGE GROUP
======================= */
const HomePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Gauswarn India",
    url: "https://gauswarn.com/",
    logo: "https://gauswarn.com/favicon-512x512.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-74709-15905",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "Hindi"],
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61577996747357",
      "https://www.instagram.com/gauswarn/",
      "https://www.youtube.com/@gauswarngircowghee-2",
    ],
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Gauswarn",
    url: "https://gauswarn.com/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://gauswarn.com/products?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <Seo
        title="Buy Pure A2 Gir Cow Ghee in India – Gauswarn India"
        description="Buy 100% pure, bilona-made A2 Gir cow ghee from Gauswarn India. Farm fresh, lab tested, rich in nutrients and delivered across India."
        url="https://gauswarn.com"
        structuredData={[structuredData, websiteData]}
      />

      {/* GauswarnHome: full SEO homepage with all 9 sections */}
      <GauswarnHome />

      {/* Original hero carousel */}
      <Home />
      <Certified />
      <ProductShowcase />

      <AboutUsHero />
      <VideoPage isEmbedded />
      <GheePurity />
      <HealthProductShowcase />
      <DiscoverHeroSection />
    </>
  );
};

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
    } catch (error) {
      setCart([]);
    }
  }, [setCart]);

  useEffect(() => {
    trackVisitor();
  }, []);

  const trackVisitor = async () => {
    try {
      await postData("/api/track-visitor", {
        page_url: window.location.href,
      });
    } catch (error) {
      // Silently fail if tracking fails to not disrupt user experience
      console.log("Visitor tracking failed");
    }
  };

  return (
    <>
      <ToastContainer />
      <ScrollToTop />
      <NavbarWrapper />

      {/*  Suspense Wrapper */}
      <main>
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

            {/* <Route path="/track-order" element={<OrderTracking />} /> */}
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
            <Route path="/lab-report" element={<LabReportMain />} />
            <Route path="/video" element={<VideoPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route
              path="*"
              element={
                <h2
                  style={{ textAlign: "center", marginTop: 50, height: "100vh" }}
                >
                  Page Not Found
                </h2>
              }
            />
          </Routes>
        </Suspense>
      </main>

      <NewFooter />
    </>
  );
}

export default App;
