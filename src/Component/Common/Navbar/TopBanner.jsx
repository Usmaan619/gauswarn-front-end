import { FiMail, FiPhoneCall } from "react-icons/fi";

export default function TopBanner() {
  return (
    <div className="top-banner">
      <div className="container-fluid px-3 px-md-4">
        <div className="banner-content">
          {/* Left Section - Contact Info */}
          <div className="contact-section">
            <div className="contact-item">
              <span className="phone-icon">
                <FiPhoneCall />
              </span>
              <a href="tel:+917470915905">+91-74709 15905</a>
            </div>
            <div className="divider d-none d-md-block"></div>
            <div className="contact-item">
              <span className="email-icon">
                <FiMail />
              </span>
              <a href="mailto:info@gauswarn.com">info@gauswarn.com</a>
            </div>
          </div>

          {/* Center Section - Rating */}
          <div className="top-banner-rating-section">
            <span className="top-banner-rating-text">
              4.8 Stars across 20k reviews
            </span>
            <span className="top-banner-stars top-banner-rating-text">
              ★★★★★
            </span>
          </div>

          {/* Right Section - Social Icons */}
          <div className="social-section">
            <a
              href="https://www.facebook.com/profile.php?id=61577996747357"
              className="social-icon facebook"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/gauswarn/"
              className="social-icon instagram"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com/@gauswarngircowghee-2"
              className="social-icon youtube"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
