import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
// import Aos from "aos"; // Moved to dynamic import in useEffect for performance
import "aos/dist/aos.css"; // Keep CSS for layout stability
import { ToastContainer } from "react-toastify";

import ScrollToTop from "./Component/Common/Scroll-to-Top/scroll-to-top.jsx";
import NavbarWrapper from "./Component/Common/Navbar/NavbarWrapper.jsx";
import NewFooter from "./Component/Common/Footer/Footer.jsx";
import ErrorBoundary from "./Component/Common/ErrorBoundary.jsx";

import { useCartContext } from "./Component/Context/UserContext.jsx";
import Seo from "./Component/SEO/Seo.jsx";
import SeoContent from "./Component/SEO/SeoContent.jsx";
import { SEO_CONTENT } from "./Component/SEO/seo-content-data.js";
import { postData } from "./services/api.jsx";

/* =======================
   LAZY LOAD COMPONENTS
======================= */
const CareersPage = lazy(
  () => import("./Component/Careers/careers-main-page.jsx"),
);

// Home sections
const Home = lazy(() => import("./Component/Pages/Home.jsx"));
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

const HealthBenefitsGrid = lazy(
  () => import("./Component/HealthBenefits/HealthBenefitsGrid.jsx"),
);
const HealthBenefitDetail = lazy(
  () => import("./Component/HealthBenefits/HealthBenefitDetail.jsx"),
);
const DiscoverHeroSection = lazy(
  () => import("./Component/Discover/discover-hero-section.jsx"),
);
const HomeFaq = lazy(() => import("./Component/FAQ/HomeFaq.jsx"));

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
    url: "https://gauswarn.com",
    logo: "https://gauswarn.com/favicon-512x512.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-74709-15905",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "Hindi"],
    },
    sameAs: [
      "https://x.com/gauswarn",
      "https://www.youtube.com/@gauswarngircowghee-2",
    ],
    // Primary FAQ for homepage visibility
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does A2 Ghee support a healthy lifestyle for my family?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A2 Ghee is a holistic superfood that provides a balanced source of healthy fats. Unlike commercial fats, it is packed with fat-soluble vitamins (A, D, E, K) and antioxidants that support overall vitality, heart health, and sustained energy levels for everyone."
        }
      }
    ]
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Gauswarn",
    url: "https://gauswarn.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://gauswarn.com/products?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <Seo
        title="Buy Pure A2 Gir Cow Ghee Online | Bilona Method Ghee India – Gauswarn"
        description="Buy pure A2 Gir cow ghee made using traditional bilona method. 100% natural desi ghee with rich taste and health benefits. Order online in India."
        url="https://gauswarn.com"
        structuredData={[structuredData, websiteData]}
      />

      <Home />
      <Certified />
      <ProductShowcase />

      <AboutUsHero />
      <VideoPage isEmbedded />
      <GheePurity />
      <HealthBenefitsGrid />
      <DiscoverHeroSection />
      <HomeFaq />
      <SeoContent
        heading={SEO_CONTENT.home.heading}
        sections={SEO_CONTENT.home.sections}
      />
    </>
  );
};

function App() {
  const { setCart } = useCartContext();
  const location = useLocation();

  /* ---------- GOOGLE ANALYTICS PAGE TRACKING ---------- */
  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-P7C7LPB0NG", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);


  /* ---------- AOS ---------- */
  useEffect(() => {
    const initAOS = async () => {
      try {
        const AOS = (await import("aos")).default;
        AOS.init({
          offset: 100,
          duration: 1000,
          easing: "ease-in-out",
          once: false,
          mirror: true,
          anchorPlacement: "top-bottom",
        });
      } catch (error) {
        console.error("AOS initialization failed", error);
      }
    };
    initAOS();
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
        <ErrorBoundary>
          <Suspense
            fallback={
              <div
                style={{
                  textAlign: "center",
                  padding: "100px 0",
                  height: "100vh",
                }}
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
                path="/health-benefits/:slug"
                element={<HealthBenefitDetail />}
              />
              <Route
                path="*"
                element={
                  <h2
                    style={{
                      textAlign: "center",
                      marginTop: 50,
                      height: "100vh",
                    }}
                  >
                    Page Not Found
                  </h2>
                }
              />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>

      <NewFooter />
    </>
  );
}

export default App;
