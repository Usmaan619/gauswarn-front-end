import about1 from "../../../../asset/new-img/about-main/about1.png";
import about2 from "../../../../asset/new-img/about-main/about2.png";
import cupicon from "../../../../asset/cup.png";
import leavesicon from "../../../../asset/leaves-icon.png";
import { useNavigate } from "react-router-dom";

export default function AboutUsHero() {
  const naigate = useNavigate();

  const learnMoreAbout = () => naigate("/about");

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
              Pure A2 Desi Gir Cow Ghee – From Our Gaushala to Your Home
            </h1>

            {/* Description Paragraphs */}
            <p className="about-paragraph">
              At GAUSWARN, purity isn’t just a promise — it’s our tradition. Our
              A2 Desi Ghee is made from the milk of our own grass-fed Gir cows,
              nurtured with care and ethical farming practices.
            </p>

            <p className="about-paragraph">
              Prepared using the ancient Bilona method, our ghee delivers:
            </p>

            <p className="about-paragraph">
              • Authentic traditional taste <br />
              • Rich natural aroma <br />
              • High-nutrition A2 goodness <br />• 100% chemical-free,
              preservative-free purity
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
                <span>
                  To protect and nurture our Gir cows, preserve the traditional
                  Bilona method, and deliver pure, trustworthy, farm-fresh A2
                  ghee to every home.
                </span>
              </li>
              {/* <li className="mission-list-item">
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
              </li> */}
            </ul>

            {/* Divider */}
            <hr className="about-divider" />

            {/* Additional Points */}
            <ul className="mission-list">
              <li className="mission-list-item">
                <img src={cupicon} className="cup-leaves-svg" />

                <span>
                  Driven by Tradition. Guided by Purity.
                  <br />
                  Experience nutrient-rich, easily digestible, immunity-boosting
                  A2 Gir Cow Ghee — crafted with devotion and ancient wisdom.
                  {/* <br />
                  • Rich in nutrients
                  <br />
                  • Easily digestible
                  <br />
                  • Perfect for immunity, heart health, and everyday cooking
                  <br /> */}
                </span>
              </li>
              <li className="mission-list-item">
                <img src={leavesicon} className="cup-leaves-svg" />

                <span>
                  Why Choose Gauswarn Desi Gir Cow Ghee?
                  <br />
                  • Made from A2 milk of indigenous Gir cows
                  <br />
                  • Hand-churned Bilona method
                  <br />
                  • Small-batch, Gaushala-crafted purity
                  <br />
                  • Natural, ethical & chemical-free
                  <br />
                  {/* • organic, natural & chemical-free
                  <br /> */}
                </span>
              </li>
            </ul>

            {/* CTA Button */}
            <button className="cta-button" onClick={learnMoreAbout}>
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
