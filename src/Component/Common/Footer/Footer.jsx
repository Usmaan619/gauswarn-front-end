import React, { useState } from "react";
import "./footer.css";
import logo from "../../../asset/new-img/logo/gauswarn-white-logo.webp";
import amazonlogo from "../../../asset/new-img/ecommerce/amazon.webp";
import flipkartlogo from "../../../asset/new-img/ecommerce/flipkart.webp";
import { Link } from "react-router-dom";
import { postData } from "../../../services/api";
import { toastError, toastSuccess } from "../../../services/toaster.service";

export default function NewFooter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();

    if (!email) return;

    try {
      setLoading(true);

      const response = await postData("/admin/createNewsletter", {
        email,
      });

      if (response?.success) {
        toastSuccess("Thank you for subscribing!");
        setEmail("");
      } else {
        toastError(response?.message || "Subscription failed");
      }
    } catch (error) {
      console.error("Newsletter Error:", error);
      toastError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Smooth Scroll to Top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-section">
      <div className="container-fluid px-3 px-md-4">
        <div className="footer-cta pt-4 pb-2">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="footer-single-cta">
                <i className="fas fa-map-marker-alt"></i>
                <div className="footer-cta-text">
                  <h4>Find us</h4>
                  <span>
                    11, Manish Baag Sapna Sangeeta Road Indore Madhya Pradesh
                    452001
                  </span>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-4 mb-30">
              <div className="footer-single-cta">
                <i className="fas fa-phone"></i>
                <div className="footer-cta-text">
                  <h4>Call us</h4>
                  <span>+91-74709 15905</span>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-4 mb-30">
              <div className="footer-single-cta">
                <i className="far fa-envelope-open"></i>
                <div className="footer-cta-text">
                  <h4>Mail us</h4>
                  <span>info@gauswarn.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="footer-content pt-3 pb-3">
          <div className="row">
            {/* Logo & About */}
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="/" aria-label="Gauswarn Home">
                    <img src={logo} alt="logo" />
                  </a>
                </div>

                <div className="footer-text">
                  <p>
                    From our Gaushala to your kitchen — purity you can taste,
                    trust, and feel.
                  </p>
                </div>

                <div className="footer-social-icon">
                  <span>Also available on</span>

                  <a
                    aria-label="Visit our Amazon store"
                    href="https://amzn.in/d/h5EBdP1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={amazonlogo}
                      className="footer-facebook-bg-img"
                      alt="amazonlogo"
                    />
                  </a>

                  <a
                    aria-label="Visit our Flipkart store"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.flipkart.com/gau-swarn-a2-gir-cow-ghee-glass-bottle/p/itm48ba9c417cecd"
                  >
                    <img
                      src={flipkartlogo}
                      className="footer-facebook-bg-img"
                      alt="flipkartlogo"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* USEFUL LINKS */}
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>

                <ul className="footer-ul">
                  <li>
                    <Link to="/" onClick={scrollToTop}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={scrollToTop}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/lab-report" onClick={scrollToTop}>
                      Lab Report
                    </Link>
                  </li>
                  <li>
                    <Link to="/products" onClick={scrollToTop}>
                      Shop Now
                    </Link>
                  </li>
                  <li>
                    <a
                      aria-label="Track your order"
                      href="https://panel.shipmozo.com/track-order/LBYfQgGFRljv1A249H87"
                      rel="noopener noreferrer"
                      // target="_blank"

                      onClick={scrollToTop}
                    >
                      Track Order
                    </a>
                  </li>

                  <li>
                    <Link to="/refund" onClick={scrollToTop}>
                      Refund Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy" onClick={scrollToTop}>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/shipping" onClick={scrollToTop}>
                      Shipping & Delivery Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" onClick={scrollToTop}>
                      Term & Condition
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" onClick={scrollToTop}>
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link to="/careers" onClick={scrollToTop}>
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* NEWSLETTER */}
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Newsletter</h3>
                </div>

                <div className="footer-text mb-25 ">
                  <p className="">
                    Pure updates from our Gaushala, straight to your inbox.
                  </p>
                </div>

                <div className="footer-subscribe-form">
                  <form onSubmit={handleNewsletterSubmit}>
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <button
                      aria-label="Subscribe to newsletter"
                      type="submit"
                      disabled={loading}
                    >
                      <i
                        className={
                          loading
                            ? "fas fa-spinner fa-spin"
                            : "fab fa-telegram-plane"
                        }
                      ></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="top-banner">
        <div className="container-fluid px-3 px-md-4">
          <div className="banner-content footer-bottom-bar">
            {/* Left */}
            <div className="footer-bottom-left">
              <span>
                © 2025 <b>Gauswarn</b> All Rights Reserved.
              </span>
            </div>

            {/* Center - No Hover */}
            <div className="footer-bottom-center">
              Powered by
              <b>
                <a
                  aria-label="Visit Rajlakshmi javiks International website"
                  className="ms-1"
                  href="https://rajlakshmijaviks.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {"  "} Rajlakshmi javiks International
                </a>
              </b>
            </div>

            {/* Right */}
            <div className="footer-bottom-right">
              <a
                href="https://www.facebook.com/profile.php?id=61577996747357"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon facebook"
                aria-label="Visit our Facebook page"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/gauswarn/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon instagram"
                aria-label="Visit our Instagram page"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/@gauswarngircowghee-2"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon youtube"
                aria-label="Visit our YouTube channel"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
