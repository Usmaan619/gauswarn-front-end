import { Helmet } from "react-helmet-async";
import about1 from "../../../../asset/new-img/about-main/about1.webp";
import "./AboutUsHero.css"; // Separate CSS file
import { useNavigate } from "react-router-dom";

export default function AboutUsHero() {
  const navigate = useNavigate();

  const learnMoreAbout = () => navigate("/about");

  return (
    <section className="aboutUsHero">
      {/* Preload LCP image */}
      <Helmet>
        <link rel="preload" as="image" href={about1} />
      </Helmet>
      <div className="containerCustom">
        <div className="aboutWrapper">
          {/* Left - Full Image Section */}
          <div className="aboutLeft">
            <img
              src={about1}
              alt="Pure A2 Cow Ghee jar by Gauswarn India"
              className="aboutMainImg"
              width="412"
              height="481"
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />
          </div>

          {/* Right - Content Section */}
          <div className="aboutContentSection">
            {/* Main Heading */}
            <h2 className="aboutMainHeading">
              Pure A2 Cow Ghee by Gauswarn
            </h2>

            {/* Description Paragraphs */}
            <p className="aboutParagraph">
              At <strong>GAUSWARN</strong>, purity isn't just a promise — it's our tradition. Our premium 
              <strong> A2 Cow Ghee</strong> is crafted using the ancient <strong>Ayurvedic Bilona method</strong>, 
              churning curd (bilona) made from the fresh A2 milk of our free-grazing, grass-fed cows.
            </p>

            <p className="aboutParagraph">
              Recognized as a powerful Indian superfood, our authentic <strong>Desi Cow Ghee</strong> is 
              rich in <strong>A2 Beta-casein protein</strong>, essential vitamins (A, D, E, K), and Omega-3 fatty acids. 
              It provides steady energy, supports better digestion, and serves as an excellent 
              immunity-boosting, gut-friendly cooking fat for your family.
            </p>

            <ul className="aboutBenefits">
              <li>Authentic Ayurvedic Bilona Ghee Process</li>
              <li>Rich Natural Aroma & Granular (Danedar) Texture</li>
              <li>100% Chemical-Free, Preservative-Free & Lab-Tested</li>
              <li>Lactose-Intolerant Friendly & Great for Keto Diets</li>
            </ul>

            {/* Mission Section */}
            <h3 className="aboutSubtitle">Why Buy Gauswarn A2 Ghee Online?</h3>

            <ul className="missionList">
              <li className="missionListItem">
                <div className="iconPlaceholder">🌿</div>
                <span className="missionText">
                  <strong>Ethical & Farm-Fresh Purity</strong>
                  <br />
                  Handcrafted in small batches directly at our Gaushala. We ensure zero adulteration, bringing you farm-to-table freshness.
                </span>
              </li>
              <li className="missionListItem">
                <div className="iconPlaceholder">🏆</div>
                <span className="missionText">
                  <strong>Holistic Health & Wellness</strong>
                  <br />
                  Enhances memory, deeply nourishes the body, balances doshas, and acts as a natural antioxidant to keep your family healthy.
                </span>
              </li>
            </ul>

            {/* CTA Button */}
            <button
              aria-label="Learn more about Gauswarn"
              className="ctaButton"
              onClick={learnMoreAbout}
            >
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
