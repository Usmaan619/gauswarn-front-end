import about1 from "../../../../asset/img/about1.png";
import about2 from "../../../../asset/img/about2.png";
import cupicon from "../../../../asset/cup.png";
import leavesicon from "../../../../asset/leaves-icon.png";

export default function AboutUsHero() {
  return (
    <section className="about-us-hero">
      <div className="container-custom">
        {/* Desktop Layout */}
        <div className="about-wrapper">
          {/* Left - Images */}
          <div className="about-images-section">
            <div className="images-container">
              <img
                src={about1}
                alt="Gauswarn Ghee Jar"
                className="about-img main-img"
              />
              <img
                src={about1}
                alt="Gauswarn Ghee Bowl"
                className="about-img secondary-img"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="about-content-section">
            {/* Badge */}
            {/* <div className="about-badge">
              <svg
                className="badge-svg"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#4caf50"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
                <circle cx="50" cy="50" r="20" fill="#4caf50" />
                <text
                  x="50"
                  y="56"
                  textAnchor="middle"
                  fontSize="8"
                  fill="white"
                  fontWeight="bold"
                >
                  ✓
                </text>
                <text
                  x="50"
                  y="70"
                  textAnchor="middle"
                  fontSize="6"
                  fill="#4caf50"
                  fontWeight="600"
                >
                  About Us
                </text>
              </svg>
            </div> */}

            {/* Main Heading */}
            <h1 className="about-main-heading">
              From Our Gaushala to Your Home – Pure Desi Ghee Crafted with Care
            </h1>

            {/* Description Paragraphs */}
            <p className="about-paragraph">
              We're not just a brand — we're caretakers of purity.
            </p>

            <p className="about-paragraph">
              At Gauswarn, every drop of ghee comes from our healthy, grass-fed
              Desi cows, nurtured with love and devotion.
            </p>

            <p className="about-paragraph">
              We follow age-old Bilona methods to create ghee that carries the
              taste of tradition and the essence of health.
            </p>

            {/* Mission Section */}
            <h3 className="about-subtitle">Our Mission</h3>

            <ul className="mission-list">
              <li className="mission-list-item">
                <svg
                  className="check-svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Ensure the health and happiness of our Desi cows.</span>
              </li>
              <li className="mission-list-item">
                <svg
                  className="check-svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>
                  Preserve the ancient Bilona method of ghee preparation.
                </span>
              </li>
              <li className="mission-list-item">
                <svg
                  className="check-svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>

                <span>
                  Deliver pure, chemical-free ghee that families can trust.
                </span>
              </li>
            </ul>

            {/* Divider */}
            <hr className="about-divider" />

            {/* Additional Points */}
            <ul className="mission-list">
              <li className="mission-list-item">
                <img src={cupicon} className="cup-leaves-svg" />

                <span>Driven by Tradition, Guided by Purity</span>
              </li>
              <li className="mission-list-item">
                <img src={leavesicon} className="cup-leaves-svg" />

                <span>Committed to Natural & Ethical Farming</span>
              </li>
            </ul>

            {/* CTA Button */}
            <button className="cta-button">
              Learn More About
              <svg
                className="arrow-svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M7 17l9.2-9.2M17 17V7h-10"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
