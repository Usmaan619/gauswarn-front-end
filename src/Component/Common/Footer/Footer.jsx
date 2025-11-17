import React from "react";
import "./footer.css";
import logo from "../../../asset/new-img/logo/gauswarn-white-logo.png";
import amazonlogo from "../../../asset/new-img/ecommerce/amazon.png";
import flipkartlogo from "../../../asset/new-img/ecommerce/flipkart.png";
import { Mail, MapPinned, PhoneCall } from "lucide-react";
import { FiMail, FiPhoneCall } from "react-icons/fi";
export default function NewFooter() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const emailInput = formElement.querySelector('input[type="email"]');
    if (emailInput) {
      emailInput.value = "";
    }
    alert("Thank you for subscribing!");
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
                    11 Manish Baag Sapna Sangeeta Road Indore Madhya Pradesh
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

        <div className="footer-content pt-3 pb-3">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a>
                    <img src={logo} className="" alt="logo" />
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
                  <a href="#">
                    <img
                      src={amazonlogo}
                      className="fab fa-facebook-f footer-facebook-bg-img"
                      alt=""
                      srcset=""
                    />
                  </a>
                  <a href="#">
                    <img
                      src={flipkartlogo}
                      className="fab fa-facebook-f footer-facebook-bg-img"
                      alt=""
                      srcset=""
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>

                <ul className="footer-ul">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Lab Report</a>
                  </li>
                  <li>
                    <a href="#">Shop Now</a>
                  </li>
                  <li>
                    <a href="#">Track Order</a>
                  </li>
                  <li>
                    <a href="#">Refund Policy</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Shipping & Delivery Policy</a>
                  </li>
                  <li>
                    <a href="#">Term & Condition</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Newslatter</h3>
                </div>

                <div className="footer-text mb-25">
                  <p>
                    From our Gaushala to your kitchen — purity you can taste,
                    trust, and feel.
                  </p>
                </div>

                <div className="footer-subscribe-form">
                  <form>
                    <input type="text" placeholder="Email Address" />
                    <button>
                      <i className="fab fa-telegram-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="top-banner">
        <div className="container-fluid px-3 px-md-4">
          <div className="banner-content">
            {/* Left Section - Contact Info */}
            <div className="contact-section ">
              <div className="contact-item">
                <a>
                  <b>Copyright © 2025 Gauswarn. All Rights Reserved.</b>
                </a>
              </div>
            </div>

            {/* Center Section - Rating */}

            {/* Right Section - Social Icons */}
            <div className="social-section">
              <a
                href="#facebook"
                className="social-icon facebook"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#instagram"
                className="social-icon instagram"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#youtube"
                className="social-icon youtube"
                aria-label="YouTube"
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
