import React, { useState } from "react";
import "./footer.css";
import logo from "../../../asset/new-img/logo/gauswarn-white-logo.webp";
import amazonlogo from "../../../asset/new-img/ecommerce/amazon.webp";
import flipkartlogo from "../../../asset/new-img/ecommerce/flipkart.webp";
import { Link } from "react-router-dom";
import { postData } from "../../../services/api";
import { toastError, toastSuccess } from "../../../services/toaster.service";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { Send, Loader2 } from "lucide-react";

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
                  <span className="footer-cta-heading">Find us</span>
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
                  <span className="footer-cta-heading">Call us</span>
                  <span>+91-74709 15905</span>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-4 mb-30">
              <div className="footer-single-cta">
                <i className="far fa-envelope-open"></i>
                <div className="footer-cta-text">
                  <span className="footer-cta-heading">Mail us</span>
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
                  <a
                    href="/"
                    aria-label="Gauswarn A2 Gir Cow Ghee - Return to Homepage"
                  >
                    <img src={logo} alt="Gauswarn A2 Gir Cow Ghee Logo" width="300" height="60" loading="lazy" />
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
                    aria-label="Buy Gauswarn A2 Gir Cow Ghee on Amazon"
                    href="https://amzn.in/d/h5EBdP1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={amazonlogo}
                      className="footer-facebook-bg-img"
                      alt="Amazon Logo - Buy Pure Bilona Ghee"
                      width="35"
                      height="35"
                      loading="lazy"
                    />
                  </a>

                  <a
                    aria-label="Buy Gauswarn A2 Gir Cow Ghee on Flipkart"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.flipkart.com/gau-swarn-a2-gir-cow-ghee-glass-bottle/p/itm48ba9c417cecd"
                  >
                    <img
                      src={flipkartlogo}
                      className="footer-facebook-bg-img"
                      alt="Flipkart Logo - Desi Gir Cow Ghee"
                      width="35"
                      height="35"
                      loading="lazy"
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
                    <Link
                      to="/"
                      onClick={scrollToTop}
                      aria-label="A2 Gir Cow Ghee Home"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      onClick={scrollToTop}
                      aria-label="About Gauswarn Ghee"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/lab-report"
                      onClick={scrollToTop}
                      aria-label="Ghee Purity Lab Report"
                    >
                      Lab Report
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products"
                      onClick={scrollToTop}
                      aria-label="Buy A2 Cow Ghee Online"
                    >
                      Shop Now
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/video"
                      onClick={scrollToTop}
                      aria-label="Watch Gauswarn Ghee Story"
                    >
                      Video Story
                    </Link>
                  </li>
                  <li>
                    <a
                      aria-label="Track your Pure Bilona Ghee order"
                      href="https://panel.shipmozo.com/track-order/LBYfQgGFRljv1A249H87"
                      rel="noopener noreferrer"
                      // target="_blank"

                      onClick={scrollToTop}
                    >
                      Track Order
                    </a>
                  </li>

                  <li>
                    <Link
                      to="/refund"
                      onClick={scrollToTop}
                      aria-label="Gauswarn Refund Policy"
                    >
                      Refund Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privacy"
                      onClick={scrollToTop}
                      aria-label="Gauswarn Privacy Policy"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/shipping"
                      onClick={scrollToTop}
                      aria-label="Ghee Shipping and Delivery Policy"
                    >
                      Shipping & Delivery
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/terms"
                      onClick={scrollToTop}
                      aria-label="Gauswarn Terms and Conditions"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/faq"
                      onClick={scrollToTop}
                      aria-label="Pure Ghee FAQs"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/careers"
                      onClick={scrollToTop}
                      aria-label="Careers at Gauswarn"
                    >
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
                      aria-label="Enter your email for newsletter"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <button
                      aria-label="Subscribe to Gauswarn newsletter"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? (
                        <Loader2 size={18} className="newsletter-spin" />
                      ) : (
                        <Send size={18} />
                      )}
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
                aria-label="Follow Gauswarn on Facebook"
              >
                <Facebook size={16} />
              </a>

              <a
                href="https://www.instagram.com/gauswarn/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon instagram"
                aria-label="Follow Gauswarn on Instagram"
              >
                <Instagram size={16} />
              </a>

              <a
                href="https://www.youtube.com/@gauswarngircowghee-2"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon youtube"
                aria-label="Subscribe to Gauswarn on YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>

            {/* <div className="footer-bottom-right">
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
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
