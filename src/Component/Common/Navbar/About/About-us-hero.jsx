import about1 from "../../../../asset/new-img/about-main/about1.png";
import "./AboutUsHero.css"; // Separate CSS file
import { useNavigate } from "react-router-dom";

export default function AboutUsHero() {
  const navigate = useNavigate();

  const learnMoreAbout = () => navigate("/about");

  return (
    <section className="aboutUsHero">
      <div className="containerCustom">
        <div className="aboutWrapper">
          {/* Left - Full Image Section */}
          <div className="aboutLeft">
            <img
              src={about1}
              alt="Pure A2 Gir Cow Ghee jar by Gauswarn India"
              className="aboutMainImg"
            />
          </div>

          {/* Right - Content Section */}
          <div className="aboutContentSection">
            {/* Main Heading */}
            <h2 className="aboutMainHeading">
              Pure A2 Desi Gir Cow Ghee in India – From Our Gaushala to Your
              Home
            </h2>

            {/* Description Paragraphs */}
            <p className="aboutParagraph">
              At GAUSWARN, purity isn't just a promise — it's our tradition. Our
              A2 Desi Ghee is made from the milk of our own grass-fed Gir cows,
              nurtured with care and ethical farming practices.
            </p>

            <p className="aboutParagraph">
              Prepared using the ancient Bilona method, our ghee delivers:
            </p>

            <p className="aboutParagraph">
              Prepared using the ancient Bilona method, our ghee delivers:
            </p>

            <ul className="aboutBenefits">
              <li>Authentic traditional taste</li>
              <li>Rich natural aroma</li>
              <li>High-nutrition A2 goodness</li>
              <li>100% chemical-free & preservative-free purity</li>
            </ul>

            {/* Mission Section */}
            <h3 className="aboutSubtitle">Our Mission</h3>

            <ul className="missionList">
              <li className="missionListItem">
                <svg
                  className="checkSvg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <polyline
                    points="20 6 9 17 4 12"
                    strokeWidth="2.5"
                  ></polyline>
                </svg>
                <span className="missionText">
                  Why Choose Gauswarn Desi Gir Cow Ghee?
                  <ul className="aboutBenefits small">
                    <li>Made from A2 milk of indigenous Gir cows</li>
                    <li>Prepared using the traditional Bilona method</li>
                    <li>Small-batch, Gaushala-crafted purity</li>
                    <li>Natural, ethical & chemical-free</li>
                  </ul>
                </span>
              </li>
            </ul>

            {/* Divider */}
            <hr className="aboutDivider" />

            {/* Additional Points */}
            <ul className="missionList">
              <li className="missionListItem">
                <div className="iconPlaceholder">🏆</div>
                <span className="missionText">
                  Driven by Tradition. Guided by Purity.
                  <br />
                  Experience nutrient-rich, easily digestible, immunity-boosting
                  A2 Gir Cow Ghee — crafted with devotion and ancient wisdom.
                </span>
              </li>
              <li className="missionListItem">
                <div className="iconPlaceholder">🌿</div>
                <span className="missionText">
                  Why Choose Gauswarn Desi Gir Cow Ghee?
                  <br />
                  • Made from A2 milk of indigenous Gir cows
                  <br />
                  • Prepared using the traditional Bilona method with modern
                  efficiency
                  <br />
                  • Small-batch, Gaushala-crafted purity
                  <br />• Natural, ethical & chemical-free
                </span>
              </li>
            </ul>

            {/* CTA Button */}
            <button className="ctaButton" onClick={learnMoreAbout}>
              Learn More About Gauswarn
              <svg
                className="arrowSvg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
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
