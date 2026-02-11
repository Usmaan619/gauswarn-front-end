import "./nurturing-about-us-page.css";
import { useNavigate } from "react-router-dom";
import cowGif from "../../asset/new-img/about-new-logo/cow.webp";

import { FaEye, FaHandsHelping } from "react-icons/fa";
import { GiArrowScope } from "react-icons/gi";

const NurituringAboutUs = () => {
  const navigate = useNavigate();

  const goToLabReport = () => navigate("/lab");

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Gauswarn India",
          url: "https://gauswarn.com",
          logo: "https://gauswarn.com/favicon-512x512.png",
          description:
            "Gauswarn India produces pure A2 Gir Cow Ghee using the traditional Bilona method, promoting ethical cow rearing, sustainability, and rural community upliftment.",
          foundingLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressCountry: "IN",
            },
          },
          knowsAbout: [
            "A2 Gir Cow Ghee",
            "Bilona Method",
            "Ethical Cow Farming",
            "Sustainable Dairy Practices",
            "Traditional Indian Nutrition",
          ],
          sameAs: [
            "https://www.facebook.com/gauswarn",
            "https://www.instagram.com/gauswarn",
            "https://www.linkedin.com/company/gauswarn",
          ],
        })}
      </script>

      <div className="nurtring-container">
        <div className="nurtring-content-wrapper">
          {/* LEFT SECTION */}
          <div className="nurtring-left-section">
            <h2 className="nurtring-main-heading">
              Pure A2 Gir Cow Ghee, Crafted with Care & Tradition
            </h2>

            {/* MISSION */}
            <div className="nurtring-card nurtring-mission-card">
              <div className="nurtring-icon-wrapper">
                <GiArrowScope className="nurtring-react-icon" />
              </div>
              <div className="nurtring-card-content">
                <h3 className="nurtring-card-title">Our Mission</h3>
                <p className="nurtring-card-text">
                  At GAUSWARN, our mission is to deliver 100% pure A2 Gir Cow
                  Ghee made using the traditional Bilona method, ensuring
                  natural nutrition, rich aroma, and authentic taste for
                  everyday wellness.
                </p>
              </div>
            </div>

            {/* VISION & VALUES */}
            <div className="nurtring-cards-row">
              {/* VISION */}
              <div className="nurtring-card nurtring-small-card">
                <div className="nurtring-icon-wrapper">
                  <FaEye className="nurtring-react-icon" />
                </div>
                <div className="nurtring-card-content">
                  <h3 className="nurtring-card-title">Our Vision</h3>
                  <p className="nurtring-card-text">
                    To preserve India’s indigenous Gir cow heritage by
                    supporting ethical cow rearing and empowering traditional
                    Pashupalak communities.
                  </p>
                </div>
              </div>

              {/* VALUES */}
              <div className="nurtring-card nurtring-small-card">
                <div className="nurtring-icon-wrapper">
                  <FaHandsHelping className="nurtring-react-icon" />
                </div>
                <div className="nurtring-card-content">
                  <h3 className="nurtring-card-title">Our Values</h3>
                  <p className="nurtring-card-text">
                    We stand for purity, sustainability, and trust by producing
                    chemical-free Bilona A2 ghee while promoting ethical farming
                    and rural community upliftment.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button
              aria-label="View Lab Report"
              className="nurtring-download-btn"
              onClick={goToLabReport}
            >
              <span>View Lab Report</span>
            </button>
          </div>

          {/* RIGHT SECTION */}
          <div className="nurtring-right-section">
            <div className="nurtring-image-container">
              <img
                src={cowGif}
                alt="Traditional Indian cow farming and rural sustainability"
                className="nurtring-hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NurituringAboutUs;
