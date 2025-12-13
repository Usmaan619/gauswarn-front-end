import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import mainLogo from "../../../asset/new-img/logo/gauswarn-main-logo.png";
import "./header-main.css";
import { useCartContext } from "../../Context/UserContext";

export default function Header() {
  const { cart, setCart } = useCartContext();
  const [cartCount, setCartCount] = useState(0); //  Local state for cart count
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const navigate = useNavigate();

  //  Cart count ko useEffect se sync karo
  useEffect(() => {
    // sessionStorage se cart read karo
    const sessionCart = JSON.parse(sessionStorage.getItem("cart")) || [];

    // context + sessionStorage dono sync
    setCart(sessionCart);

    const count = sessionCart.reduce(
      (total, item) => total + (item.quantity || 1),
      0
    );

    setCartCount(count);
  }, [cart.length]);

  const handleNavClick = (path) => {
    navigate(path);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY >= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${isFixed ? "fixed" : ""}`}>
      <div className="container-fluid px-4 px-md-3">
        <div className="d-flex align-items-center justify-content-between py-3 py-md-2 header-content">
          {/* Logo */}
          <div
            className="logo-wrapper"
            onClick={() => handleNavClick("/")}
            style={{ cursor: "pointer" }}
          >
            <img src={mainLogo} alt="Gauswarn Logo" className="logo-image" />
          </div>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            <NavLink
              to="/"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop Now
            </NavLink>

            <a
              href="https://panel.shipmozo.com/track-order/LBYfQgGFRljv1A249H87"
              rel="noopener noreferrer"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Track Order
            </a>

            <NavLink
              to="/gallery"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/b2b"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              B2B
            </NavLink>
            <NavLink
              to="/blog"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </NavLink>
            <NavLink
              to="/about"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </NavLink>
          </nav>

          {/* Right Icons + Cart */}
          <div className="icons-section">
            <button
              className="cart-button"
              onClick={() => handleNavClick("/cart")}
            >
              Cart ({cartCount})
            </button>

            {/* Hamburger */}
            <div
              className={`new-header-hamburger ${isMenuOpen ? "open" : ""}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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
        >
          Home
        </div>

        <div
          className="new-header-m-nav-link"
          onClick={() => handleNavClick("/products")}
        >
          Shop Now
        </div>

        <div
          className="new-header-m-nav-link"
          onClick={() => handleNavClick("/gallery")}
        >
          Gallery
        </div>

        <div
          className="new-header-m-nav-link"
          onClick={() => handleNavClick("/b2b")}
        >
          B2B
        </div>

        <div
          className="new-header-m-nav-link"
          onClick={() => handleNavClick("/blog")}
        >
          Blog
        </div>

        <div
          className="new-header-m-nav-link"
          onClick={() => handleNavClick("/about")}
        >
          About Us
        </div>

        <div
          className="new-header-m-nav-link"
          onClick={() => handleNavClick("/contact")}
        >
          Contact Us
        </div>

        <div
          className="mobile-cart-btn"
          onClick={() => handleNavClick("/cart")}
        >
          Cart ({cartCount})
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="new-header-overlay"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}
