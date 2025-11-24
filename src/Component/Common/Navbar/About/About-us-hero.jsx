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
          <div className="about-images-section-mobile">
            <div className="images-container-mobile">
              <img
                src={about1}
                alt="Gauswarn Ghee Jar"
                className="w-100 about-img
              "
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="about-content-section">
            {/* Badge */}

            {/* Main Heading */}
            <h1 className="about-main-heading">
              Pure Desi Ghee From Our Gaushala to Your Home – Crafted With Care
              & Tradition At Gauswarn, we don’t just produce ghee — we protect
              purity.
            </h1>

            {/* Description Paragraphs */}
            <p className="about-paragraph">
              Every drop of our Pure Desi Ghee comes directly from our own
              grass-fed, healthy Desi Gir cows, nurtured with love, devotion,
              and ethical farming practices.
            </p>

            <p className="about-paragraph">
              Using the traditional Bilona method, we prepare ghee that carries:
            </p>

            <p className="about-paragraph">
              • The authentic taste of Indian tradition <br />
              • The rich aroma of naturally cultured butter <br />
              • The nutritional benefits of pure A2 <br />
              ghee Our process is slow, natural, and rooted in centuries-old
              wisdom — ensuring your family receives chemical-free,
              preservative-free, 100% authentic Desi ghee.
            </p>

            {/* Mission Section */}
            <h3 className="about-subtitle">Our Mission at Gauswarn</h3>

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
                <span>
                  To ensure the health, care & happiness of our Desi Gir cows We
                  believe pure ghee comes only from Gir cows that live
                  stress-free, natural lives.
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
                  To preserve the traditional Bilona method We churn curd by
                  hand, heat on a low flame, and prepare ghee exactly the way
                  our ancestors did.
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
                  To deliver pure, trustworthy ghee to every home No chemicals.
                  Only pure, natural, farm-fresh Desi ghee.
                </span>
              </li>
            </ul>

            {/* Divider */}
            <hr className="about-divider" />

            {/* Additional Points */}
            <ul className="mission-list">
              <li className="mission-list-item">
                <img src={cupicon} className="cup-leaves-svg" />

                <span>
                  Driven by Tradition, Guided by Purity <br />
                  At Gauswarn, we combine age-old Vedic practices with ethical
                  and sustainable farming. Our commitment ensures that you get
                  ghee that’s:
                  <br />
                  • Rich in nutrients
                  <br />
                  • Easily digestible
                  <br />
                  • Perfect for immunity, heart health, and everyday cooking
                  <br />
                </span>
              </li>
              <li className="mission-list-item">
                <img src={leavesicon} className="cup-leaves-svg" />

                <span>
                  Why Choose Gauswarn Desi Gir Cow Ghee?
                  <br />
                  • Made from A2 milk of Desi Gir cows
                  <br />
                  • Bilona churned, not machine processed
                  <br />
                  • Prepared in small batches for maximum purity
                  <br />
                  • Authentic Gaushala-sourced farm ghee
                  <br />
                  • organic, natural & chemical-free
                  <br />
                </span>
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
