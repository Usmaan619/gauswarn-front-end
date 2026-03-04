import { FiMail, FiPhoneCall } from "react-icons/fi";
import { useState, useEffect } from "react";
import { getData } from "../../../services/api";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function TopBanner() {
  const [offers, setOffers] = useState([
    "Free shipping on orders above ₹999",
    "Use code GAUS10 for 10% off",
    "Pure A2 Desi Cow Ghee – Fresh batch available",
  ]);
  const [loading, setLoading] = useState(true);

  // API se offers fetch karo
  useEffect(() => {
    const fetchOffers = async () => {
      try {
        setLoading(true);
        const response = await getData("admin/getAllOffer"); // Tumhara exact endpoint
        if (response.success && response.data && response.data.length > 0) {
          setOffers(response.data);
        }
      } catch (error) {
        console.error("Offers fetch error:", error);
        // Fallback to static offers on error
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  if (loading) {
    return (
      <div className="top-banner">
        <div className="container-fluid px-3 px-md-4">
          <div className="banner-content">
            {/* Contact same */}
            <div className="contact-section">
              <div className="contact-item">
                <span className="phone-icon">
                  <FiPhoneCall />
                </span>
                <a
                  aria-label="Call Gauswarn customer support"
                  href="tel:+917470915905"
                >
                  +91-74709 15905
                </a>
              </div>
              <div className="divider d-none d-md-block"></div>
              <div className="contact-item">
                <span className="email-icon">
                  <FiMail />
                </span>
                <a
                  aria-label="Send an email to Gauswarn"
                  href="mailto:info@gauswarn.com"
                >
                  info@gauswarn.com
                </a>
              </div>
            </div>

            {/* Loading state */}
            <div className="top-banner-offer-section">
              <div className="offer-item">Loading offers...</div>
            </div>

            {/* Social same */}
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
                target="_blank"
                aria-label="Visit our Instagram page"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/@gauswarngircowghee-2"
                className="social-icon youtube"
                target="_blank"
                aria-label="Visit our YouTube channel"
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
              <a
                aria-label="Call Gauswarn customer support"
                href="tel:+917470915905"
              >
                +91-74709 15905
              </a>
            </div>
            <div className="divider d-none d-md-block"></div>
            <div className="contact-item">
              <span className="email-icon">
                <FiMail />
              </span>
              <a
                aria-label="Send an email to Gauswarn"
                href="mailto:info@gauswarn.com"
              >
                info@gauswarn.com
              </a>
            </div>
          </div>

          {/* Center Section - Offers Slider (Dynamic) */}
          <div className="top-banner-offer-section">
            <div className="offer-slider">
              <div className="offer-track">
                {/* Original offers */}
                {offers.map((offer, index) => (
                  <span className="offer-item" key={`orig-${index}`}>
                    {offer}
                  </span>
                ))}
                {/* Duplicate for seamless loop */}
                {offers.map((offer, index) => (
                  <span className="offer-item" key={`dup-${index}`}>
                    {offer}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Social Icons */}

          <div className="social-section">
            <a
              href="https://www.facebook.com/profile.php?id=61577996747357"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon facebook"
              aria-label="Visit our Facebook page"
            >
              <Facebook size={16} />
            </a>

            <a
              href="https://www.instagram.com/gauswarn/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagram"
              aria-label="Visit our Instagram page"
            >
              <Instagram size={16} />
            </a>

            <a
              href="https://www.youtube.com/@gauswarngircowghee-2"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon youtube"
              aria-label="Visit our YouTube channel"
            >
              <Youtube size={16} />
            </a>
          </div>

          {/* <div className="social-section">
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
          </div> */}
        </div>
      </div>
    </div>
  );
}
