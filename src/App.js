import "./App.css";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./Component/Common/Scroll-to-Top/index.jsx";
import { useEffect, useState } from "react";
import { useCartContext } from "./Component/Context/UserContext.jsx";
import Home from "./Component/Pages/Home.jsx";
import Certified from "./Component/Pages/Certified.jsx";
import AboutUsHero from "./Component/Common/Navbar/About/About-us-hero.jsx";
import ProductShowcase from "./Component/Carousel/product-showcase.jsx";
import VideoSection from "./Component/Video/Video-hero.jsx";
import PromotionalCards from "./Component/PromotionalBanner/promotional-cards.jsx";
import HealthProductShowcase from "./Component/Banefit/health-product-showcase.jsx";
import DiscoverHeroSection from "./Component/Discover/discover-hero-section.jsx";
import NewFooter from "./Component/Common/Footer/Footer.jsx";
import NavbarWrapper from "./Component/Common/Navbar/NavbarWrapper.jsx";
import ProductPageMain from "./Component/Products/product-page-main.jsx";
import Aos from "aos";
import AboutUsHeroMain from "./Component/AboutUs-new/about-us-new-main-page.jsx";
import BlogMainPageNew from "./Component/Blog/blog-new-main.jsx";
import GheeGallery from "./Component/Gallery/gallery-main.jsx";
import ContactMainPage from "./Component/Contact/contact-main-page.jsx";
import OrderTracking from "./Component/TrackOrder/track-order-main-page.jsx";
import B2BLandingPage from "./Component/B2B/b2b-main-page.jsx";

function App() {
  const { setCart } = useCartContext();

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
    // <>
    //   <ScrollToTop />

    //   <NavbarWrapper />

    //   {/* main page */}
    //   <Home />
    //   <Certified />
    //   <AboutUsHero />
    //   <ProductShowcase />
    //   <VideoSection />
    //   <PromotionalCards />

    //   <HealthProductShowcase />
    //   <DiscoverHeroSection />

    //   <ProductPageMain />

    //   {/* main page end */}

    //   {/* aboutus */}

    //   <AboutUsHeroMain />

    //   {/* blog page */}
    //   <BlogMainPageNew />

    //   {/* ghee gallery */}
    //   <GheeGallery />

    //   {/* contact page */}
    //   <ContactMainPage />

    //   {/* track order */}

    //   <OrderTracking />

    //   {/* b2b */}

    //   <B2BLandingPage />

    //   <NewFooter />
    // </>


 <>
      <ScrollToTop />

      <NavbarWrapper />

      <Routes>
        {/* Home (landing page) */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <Certified />
              <AboutUsHero />
              <ProductShowcase />
              <VideoSection />
              <PromotionalCards />
              <HealthProductShowcase />
              <DiscoverHeroSection />
            </>
          }
        />

        {/* About us page */}
        <Route path="/about" element={<AboutUsHeroMain />} />

        {/* Blog page */}
        <Route path="/blog" element={<BlogMainPageNew />} />

        {/* Gallery page */}
        <Route path="/gallery" element={<GheeGallery />} />

        {/* Contact page */}
        <Route path="/contact" element={<ContactMainPage />} />

        {/* Track order */}
        <Route path="/track-order" element={<OrderTracking />} />

        {/* B2B */}
        <Route path="/b2b" element={<B2BLandingPage />} />

        {/* Products separate route (optional) */}
        <Route path="/products" element={<ProductPageMain />} />

        {/* 404 fallback */}
        <Route
          path="*"
          element={<h2 style={{ textAlign: "center" }}>Page not found</h2>}
        />
      </Routes>

      <NewFooter />
    </>
  );
}

export default App;
