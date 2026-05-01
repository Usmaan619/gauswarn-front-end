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
            <h1 className="aboutMainHeading">
              Pure A2 Gir Cow Ghee – Bilona Method Desi Ghee
            </h1>

            {/* Description Paragraphs */}
            <p className="aboutParagraph">
              At <strong>GAUSWARN</strong>, purity isn't just a promise — it's a legacy rooted in ancient Indian wisdom. Our premium 
              <strong> A2 Gir Cow Ghee</strong> is meticulously crafted using the time-honored <strong>Ayurvedic Bilona method</strong>. This authentic process involves curdling fresh, whole A2 milk from our indigenous, free-grazing Gir cows, and then hand-churning that curd into pure butter (makhan). This traditional approach ensures that every spoonful of Gauswarn Ghee is packed with the essence of nature and the wisdom of our ancestors.
            </p>

            <p className="aboutParagraph">
              Widely recognized as a superior Indian superfood, our authentic <strong>Desi Gir Cow Ghee</strong> is 
              a powerhouse of nutrition, rich in <strong>A2 Beta-casein protein</strong>, essential fat-soluble vitamins (A, D, E, K), and vital Omega-3 and Omega-6 fatty acids. Unlike industrially processed alternatives, our Bilona Ghee provides sustained energy, supports robust digestion, and acts as a natural catalyst for nutrient absorption. It is the perfect, gut-friendly, and immunity-boosting cooking fat for families who prioritize holistic health and authentic flavor.
            </p>

            <ul className="aboutBenefits">
              <li>Authentic Ayurvedic Bilona Ghee Process</li>
              <li>Rich Natural Aroma & Granular (Danedar) Texture</li>
              <li>100% Chemical-Free, Preservative-Free & Lab-Tested</li>
              <li>Lactose-Intolerant Friendly & Great for Keto Diets</li>
            </ul>

            {/* Mission Section */}
            <h2 className="aboutSubtitle">Why Choose Gauswarn A2 Ghee?</h2>

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
