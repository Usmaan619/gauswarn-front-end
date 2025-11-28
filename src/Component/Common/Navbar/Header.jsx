import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import mainLogo from "../../../asset/new-img/logo/gauswarn-main-logo.png";
import "./header-main.css";

export default function Header() {
  const [cartCount] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const navigate = useNavigate();

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
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/products" className="nav-link">
              Shop Now
            </NavLink>
           <a
  href="https://panel.shipmozo.com/track-order/LBYfQgGFRljv1A249H87"
  target="_blank"
  rel="noopener noreferrer"
  className="nav-link"
>
  Track Order
</a>

            <NavLink to="/gallery" className="nav-link">
              Gallery
            </NavLink>
            <NavLink to="/b2b" className="nav-link">
              B2B
            </NavLink>
            <NavLink to="/blog" className="nav-link">
              Blog
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About Us
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact Us
            </NavLink>
          </nav>

          {/* Right Icons + Mobile Toggle */}
          <div className="icons-section">
            <button
              className="cart-button"
              onClick={() => handleNavClick("/cart")}
            >
              Cart ({cartCount})
            </button>

            {/* Hamburger Button */}
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

      {/* Slide Menu */}
      <div className={`new-header-mobile-menu ${isMenuOpen ? "open" : ""}`}>
        {/* Logo */}
        {/* <div
          className="logo-wrapper"
          onClick={() => handleNavClick("/")}
          style={{ cursor: "pointer" }}
        >
          <img src={mainLogo} alt="Gauswarn Logo" className="logo-image" />
        </div> */}
        <NavLink
          onClick={() => handleNavClick("/")}
          className="new-header-m-nav-link"
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => handleNavClick("/products")}
          className="new-header-m-nav-link"
        >
          Shop Now
        </NavLink>
        <NavLink
          onClick={() => handleNavClick("/track-order")}
          className="new-header-m-nav-link"
        >
          Track Order
        </NavLink>
        <NavLink
          onClick={() => handleNavClick("/gallery")}
          className="new-header-m-nav-link"
        >
          Gallery
        </NavLink>
        <NavLink
          onClick={() => handleNavClick("/b2b")}
          className="new-header-m-nav-link"
        >
          B2B
        </NavLink>
        <NavLink
          onClick={() => handleNavClick("/blog")}
          className="new-header-m-nav-link"
        >
          Blog
        </NavLink>
        <NavLink
          onClick={() => handleNavClick("/about")}
          className="new-header-m-nav-link"
        >
          About Us
        </NavLink>
        <NavLink
          onClick={() => handleNavClick("/contact")}
          className="new-header-m-nav-link"
        >
          Contact Us
        </NavLink>
      </div>

      {/* Background Overlay */}
      {isMenuOpen && (
        <div
          className="new-header-overlay"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}

// import { useEffect, useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import mainLogo from "../../../asset/new-img/logo/gauswarn-main-logo.png";

// export default function Header() {
//   const [cartCount] = useState(1);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isFixed, setIsFixed] = useState(false);
//   const navigate = useNavigate();

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     setIsMenuOpen(false); // Close navbar after clicking
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsFixed(window.scrollY >= 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleNavClick = (path) => {
//     navigate(path);
//     scrollToTop();
//   };

//   return (
//     <header className={`navbar-header ${isFixed ? "fixed" : ""}`}>
//       <div className="container-fluid px-4 px-md-3">
//         <div className="d-flex align-items-center justify-content-between py-3 py-md-2 header-content">
//           {/* Logo */}
//           <div
//             className="logo-wrapper"
//             onClick={() => handleNavClick("/")}
//             style={{ cursor: "pointer" }}
//           >
//             <img src={mainLogo} alt="Gauswarn Logo" className="logo-image" />
//           </div>

//           {/* Navigation - All Routes */}
//           <nav className={`navbar-navs ${isMenuOpen ? "mobile-open" : ""}`}>
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 `nav-link mx-2 text-center ${isActive ? "active" : ""}`
//               }
//               onClick={() => handleNavClick("/")}
//             >
//               Home
//             </NavLink>

//             <NavLink
//               to="/products"
//               className={({ isActive }) =>
//                 `nav-link mx-2 text-center ${isActive ? "active" : ""}`
//               }
//               onClick={() => handleNavClick("/products")}
//             >
//               Shop Now
//             </NavLink>

//             <NavLink
//               to="/track-order"
//               className={({ isActive }) =>
//                 `nav-link mx-2 text-center ${isActive ? "active" : ""}`
//               }
//               onClick={() => handleNavClick("/track-order")}
//             >
//               Track Order
//             </NavLink>

//             <NavLink
//               to="/gallery"
//               className={({ isActive }) =>
//                 `nav-link mx-2 text-center ${isActive ? "active" : ""}`
//               }
//               onClick={() => handleNavClick("/gallery")}
//             >
//               Gallery
//             </NavLink>

//             <NavLink
//               to="/b2b"
//               className={({ isActive }) =>
//                 `nav-link mx-2 text-center ${isActive ? "active" : ""}`
//               }
//               onClick={() => handleNavClick("/b2b")}
//             >
//               B2B
//             </NavLink>
//             <NavLink
//               to="/blog"
//               className={({ isActive }) =>
//                 `nav-link mx-2 text-center ${isActive ? "active" : ""}`
//               }
//               onClick={() => handleNavClick("/blog")}
//             >
//               Blog
//             </NavLink>
//             <NavLink
//               to="/about"
//               className={({ isActive }) =>
//                 `nav-link mx-2 text-center ${isActive ? "active" : ""}`
//               }
//               onClick={() => handleNavClick("/about")}
//             >
//               About Us
//             </NavLink>

//             <NavLink
//               to="/contact"
//               className={({ isActive }) =>
//                 `nav-link mx-2 text-center ${isActive ? "active" : ""}`
//               }
//               onClick={() => handleNavClick("/contact")}
//             >
//               Contact Us
//             </NavLink>
//           </nav>

//           {/* Icons Section */}
//           <div className="icons-section">
//             {/* Cart Button */}
//             <button
//               className="cart-button"
//               onClick={() => handleNavClick("/cart")}
//               aria-label="Shopping Cart"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <circle cx="9" cy="21" r="1"></circle>
//                 <circle cx="20" cy="21" r="1"></circle>
//                 <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
//               </svg>
//               <span className="cart-label">Cart ({cartCount})</span>
//             </button>

//             {/* Wishlist Icon */}
//             {/* <button
//               className="icon-btn wishlist-btn"
//               aria-label="Wishlist"
//               onClick={() => handleNavClick("/wishlist")}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
//               </svg>
//             </button> */}

//             {/* Mobile Menu Toggle */}
//             <button
//               className="menu-toggle"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               aria-label="Toggle menu"
//               aria-expanded={isMenuOpen}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 {isMenuOpen ? (
//                   <>
//                     <line x1="18" y1="6" x2="6" y2="18"></line>
//                     <line x1="6" y1="6" x2="18" y2="18"></line>
//                   </>
//                 ) : (
//                   <>
//                     <line x1="3" y1="6" x2="21" y2="6"></line>
//                     <line x1="3" y1="12" x2="21" y2="12"></line>
//                     <line x1="3" y1="18" x2="21" y2="18"></line>
//                   </>
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="header-divider"></div>
//     </header>
//   );
// }
