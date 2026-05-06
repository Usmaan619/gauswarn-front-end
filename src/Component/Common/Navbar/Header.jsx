import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import mainLogo from "../../../asset/new-img/logo/gauswarn-main-logo.webp";
import "./header-main.css";
import { useCartContext } from "../../Context/UserContext";

export default function Header() {
  const { cart, setCart } = useCartContext();
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const navigate = useNavigate();

  //  Initial load - component mount par sirf ek baar cart read karega
  useEffect(() => {
    const sessionCart = JSON.parse(sessionStorage.getItem("cart")) || [];
    setCart(sessionCart);

    const count = sessionCart.reduce(
      (total, item) => total + (item.quantity || 1),
      0,
    );
    setCartCount(count);
  }, []); // Empty dependency array - sirf mount par run hoga

  //  Jab context mein cart update ho to count update karega
  useEffect(() => {
    if (cart && cart.length > 0) {
      const count = cart.reduce(
        (total, item) => total + (item.quantity || 1),
        0,
      );
      setCartCount(count);
    } else {
      setCartCount(0); // Empty cart
    }
  }, [cart]); // Cart dependency - har cart change par run hoga

  // Scroll event listener - header ko fixed karne ke liye
  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY >= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation handler with smooth scroll
  const handleNavClick = (path) => {
    navigate(path);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className={`navbar-header ${isFixed ? "fixed" : ""}`}>
      <div className="container-fluid px-4 px-md-3">
        <div className="d-flex align-items-center justify-content-between py-3 py-md-2 header-content">
          {/* Logo Section */}
          <NavLink
            to="/"
            className="logo-wrapper"
            onClick={() => handleNavClick("/")}
            aria-label="Gauswarn A2 Cow Ghee - Return to Homepage"
          >
            <img
              src={mainLogo}
              alt="Gauswarn A2 Cow Ghee Logo"
              className="logo-image"
              // loading="lazy"
              fetchpriority="high"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <NavLink
              to="/"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Go to Gauswarn A2 Cow Ghee Home"
            >
              Home
            </NavLink>
            <NavLink
              to="/products/"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Buy A2 Cow Ghee Online"
            >
              Shop Now
            </NavLink>

            <a
              aria-label="Track your Pure Bilona Ghee order"
              href="https://panel.shipmozo.com/track-order/LBYfQgGFRljv1A249H87"
              rel="noopener noreferrer"
              // target="_blank"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Track Order
            </a>

            <NavLink
              to="/gallery/"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
              aria-label="View Gauswarn Ghee Gallery"
            >
              Gallery
            </NavLink>
            <NavLink
              to="/video/"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Watch Gauswarn Ghee Story"
            >
              Video Story
            </NavLink>
            <NavLink
              to="/b2b/"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Gauswarn Bulk A2 Ghee for Businesses"
            >
              B2B
            </NavLink>
            <NavLink
              to="/blog/"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Read Blogs about Pure Bilona Ghee"
            >
              Blogs
            </NavLink>
            <NavLink
              to="/about/"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Learn About Gauswarn's Desi Gir Cow Ghee"
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact/"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Contact Gauswarn Support"
            >
              Contact Us
            </NavLink>
          </nav>

          {/* Right Section - Icons & Cart */}
          <div className="icons-section">
            <button
              className="cart-button"
              onClick={() => handleNavClick("/cart")}
              aria-label={`View your shopping cart with ${cartCount} items of A2 Ghee`}
            >
              Cart ({cartCount})
            </button>

            {/* Hamburger Menu */}
            <div
              className={`new-header-hamburger ${isMenuOpen ? "open" : ""}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              role="button"
              tabIndex="0"
              aria-label="Toggle mobile menu"
              onKeyPress={(e) => {
                if (e.key === "Enter") setIsMenuOpen(!isMenuOpen);
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`new-header-mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div
          className="new-header-m-nav-link"
          onClick={() => handleNavClick("/")}
          role="button"
          tabIndex="0"
          aria-label="Gauswarn A2 Cow Ghee Homepage"
          onKeyPress={(e) => {
            if (e.key === "Enter") handleNavClick("/");
          }}
        >
          Home
        </div>

        <div
          className="new-header-m-nav-link"
          onClick={() => handleNavClick("/products/")}
          role="button"
          tabIndex="0"
          aria-label="Buy A2 Cow Ghee Online"
          onKeyPress={(e) => {
            if (e.key === "Enter") handleNavClick("/products/");
          }}
        >
          Shop Now
        </div>

        <div
          className="new-header-m-nav-link"
          onClick={() => handleNavClick("/gallery/")}
          role="button"
          tabIndex="0"
          aria-label="Pure Bilona Ghee Gallery"
          onKeyPress={(e) => {
            if (e.key === "Enter") handleNavClick("/gallery/");
          }}
        >
          Gallery
        </div>
        <div
          className="new-header-m-nav-link"
          onClick={() => handleNavClick("/video/")}
          role="button"
          tabIndex="0"
          aria-label="Watch Gauswarn Ghee Story"
          onKeyPress={(e) => {
            if (e.key === "Enter") handleNavClick("/video/");
          }}
        >
          Video Story
        </div>

        <div
          className="new-header-m-nav-link"
          onClick={() => handleNavClick("/b2b/")}
          role="button"
          tabIndex="0"
          aria-label="B2B Bulk Ghee Inquiry"
          onKeyPress={(e) => {
            if (e.key === "Enter") handleNavClick("/b2b/");
          }}
        >
          B2B
        </div>

        <div
          className="new-header-m-nav-link"
          onClick={() => handleNavClick("/blog/")}
          role="button"
          tabIndex="0"
          aria-label="Read Pure Ghee Blogs"
          onKeyPress={(e) => {
            if (e.key === "Enter") handleNavClick("/blog/");
          }}
        >
          Blog
        </div>

        <div
          className="new-header-m-nav-link"
          onClick={() => handleNavClick("/about/")}
          role="button"
          tabIndex="0"
          aria-label="About Gauswarn Ghee"
          onKeyPress={(e) => {
            if (e.key === "Enter") handleNavClick("/about/");
          }}
        >
          About Us
        </div>

        <div
          className="new-header-m-nav-link"
          onClick={() => handleNavClick("/contact/")}
          role="button"
          tabIndex="0"
          aria-label="Contact Gauswarn Support"
          onKeyPress={(e) => {
            if (e.key === "Enter") handleNavClick("/contact/");
          }}
        >
          Contact Us
        </div>

        <div
          className="new-header-m-nav-link"
          onClick={() => handleNavClick("/careers/")}
          role="button"
          tabIndex="0"
          aria-label="Careers at Gauswarn"
          onKeyPress={(e) => {
            if (e.key === "Enter") handleNavClick("/careers/");
          }}
        >
          Careers
        </div>

        <div
          className="mobile-cart-btn"
          onClick={() => handleNavClick("/cart")}
          role="button"
          tabIndex="0"
          aria-label={`View cart with ${cartCount} items`}
          onKeyPress={(e) => {
            if (e.key === "Enter") handleNavClick("/cart");
          }}
        >
          Cart ({cartCount})
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="new-header-overlay"
          onClick={() => setIsMenuOpen(false)}
          role="button"
          tabIndex="0"
          aria-label="Close menu"
          onKeyPress={(e) => {
            if (e.key === "Enter") setIsMenuOpen(false);
          }}
        />
      )}
    </header>
  );
}
