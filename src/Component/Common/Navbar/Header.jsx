"use client";

import { useState } from "react";
import mainLogo from "../../../asset/new-img/logo/gauswarn-main-logo.png";

export default function Header() {
  const [cartCount] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar-header">
      <div className="container-fluid px-4 px-md-3">
        <div className="d-flex align-items-center justify-content-between py-3 py-md-2 header-content">
          <div className="logo-wrapper">
            <img src={mainLogo} alt="Gauswarn Logo" className="logo-image" />
          </div>

          

          <nav className={`navbar-navs ${isMenuOpen ? "mobile-open" : ""}`}>
            <a className="nav-link active" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
            <a className="nav-link" onClick={() => setIsMenuOpen(false)}>
              About Us
            </a>
            <a className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Track Order
            </a>
            <a className="nav-link" onClick={() => setIsMenuOpen(false)}>
              B2B
            </a>
            <a className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </a>
          </nav>

          <div className="icons-section">
            {/* Cart Button */}
            <div className="cart-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span className="cart-label">Cart ({cartCount})</span>
            </div>

            {/* Wishlist Icon */}
            <button className="icon-btn wishlist-btn" aria-label="Wishlist">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>

            {/* User Profile Icon */}
         <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          </div>
        </div>
      </div>

      <div className="header-divider"></div>
    </header>
  );
}
