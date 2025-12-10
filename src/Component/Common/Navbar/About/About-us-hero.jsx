// import React from "react";
// import about1 from "../../../../asset/new-img/about-main/about1.png";

// export default function AboutUsHero() {
//   const learnMoreAbout = () => {
//     console.log("Navigate to about page");
//   };

//   return (
//     <section style={styles.aboutUsHero}>
//       <div style={styles.containerCustom}>
//         <div style={styles.aboutWrapper}>
//           {/* Left - Full Image Section */}
//           <div style={styles.aboutLeft}>
//             <img
//               src={about1}
//               alt="Gauswarn Ghee Jar"
//               style={styles.aboutMainImg}
//             />
//           </div>

//           {/* Right - Content Section */}
//           <div style={styles.aboutContentSection}>
//             {/* Main Heading */}
//             <h1 style={styles.aboutMainHeading}>
//               Pure A2 Desi Gir Cow Ghee – From Our Gaushala to Your Home
//             </h1>

//             {/* Description Paragraphs */}
//             <p style={styles.aboutParagraph}>
//               At GAUSWARN, purity isn't just a promise — it's our tradition. Our
//               A2 Desi Ghee is made from the milk of our own grass-fed Gir cows,
//               nurtured with care and ethical farming practices.
//             </p>

//             <p style={styles.aboutParagraph}>
//               Prepared using the ancient Bilona method, our ghee delivers:
//             </p>

//             <p style={styles.aboutParagraph}>
//               • Authentic traditional taste <br />
//               • Rich natural aroma <br />
//               • High-nutrition A2 goodness <br />• 100% chemical-free,
//               preservative-free purity
//             </p>

//             {/* Mission Section */}
//             <h3 style={styles.aboutSubtitle}>Our Mission</h3>

//             <ul style={styles.missionList}>
//               <li style={styles.missionListItem}>
//                 <svg
//                   style={styles.checkSvg}
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                 >
//                   <polyline
//                     points="20 6 9 17 4 12"
//                     strokeWidth="2.5"
//                   ></polyline>
//                 </svg>
//                 <span style={styles.missionText}>
//                   To protect and nurture our Gir cows, preserve the traditional
//                   Bilona method, and deliver pure, trustworthy, farm-fresh A2
//                   ghee to every home.
//                 </span>
//               </li>
//             </ul>

//             {/* Divider */}
//             <hr style={styles.aboutDivider} />

//             {/* Additional Points */}
//             <ul style={styles.missionList}>
//               <li style={styles.missionListItem}>
//                 <div style={styles.iconPlaceholder}>🏆</div>
//                 <span style={styles.missionText}>
//                   Driven by Tradition. Guided by Purity.
//                   <br />
//                   Experience nutrient-rich, easily digestible, immunity-boosting
//                   A2 Gir Cow Ghee — crafted with devotion and ancient wisdom.
//                 </span>
//               </li>
//               <li style={styles.missionListItem}>
//                 <div style={styles.iconPlaceholder}>🌿</div>
//                 <span style={styles.missionText}>
//                   Why Choose Gauswarn Desi Gir Cow Ghee?
//                   <br />
//                   • Made from A2 milk of indigenous Gir cows
//                   <br />
//                   • Hand-churned Bilona method
//                   <br />
//                   • Small-batch, Gaushala-crafted purity
//                   <br />• Natural, ethical & chemical-free
//                 </span>
//               </li>
//             </ul>

//             {/* CTA Button */}
//             <button style={styles.ctaButton} onClick={learnMoreAbout}>
//               Learn More About
//               <svg
//                 style={styles.arrowSvg}
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//               >
//                 <path
//                   d="M7 17l9.2-9.2M17 17V7h-10"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// const styles = {
//   aboutUsHero: {
//     background: "linear-gradient(135deg, #f5e6d3 0%, #faf2e8 100%)",
//     padding: "0",
//     width: "100%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     minHeight: "100vh",
//   },
//   containerCustom: {
//     width: "100%",
//     maxWidth: "100%",
//     margin: "0",
//     padding: "0",
//     height: "100vh",
//   },
//   aboutWrapper: {
//     display: "grid",
//     gridTemplateColumns: "45% 55%",
//     gap: "0",
//     alignItems: "stretch",
//     height: "100vh",
//   },
//   aboutLeft: {
//     display: "flex",
//     alignItems: "stretch",
//     justifyContent: "center",
//     height: "100%",
//     overflow: "hidden",
//   },
//   aboutMainImg: {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//     objectPosition: "center",
//   },
//   aboutContentSection: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "20px",
//     padding: "60px 80px",
//     justifyContent: "center",
//     background: "linear-gradient(135deg, #f5e6d3 0%, #faf2e8 100%)",
//     overflowY: "auto",
//   },
//   aboutMainHeading: {
//     fontSize: "32px",
//     fontWeight: "800",
//     color: "#2d2d2d",
//     lineHeight: "1.3",
//     margin: "0 0 20px 0",
//   },
//   aboutParagraph: {
//     fontSize: "15px",
//     color: "#555",
//     lineHeight: "1.7",
//     margin: "0 0 12px 0",
//   },
//   aboutSubtitle: {
//     fontSize: "18px",
//     fontWeight: "700",
//     color: "#2d2d2d",
//     margin: "28px 0 18px 0",
//   },
//   missionList: {
//     listStyle: "none",
//     padding: "0",
//     margin: "0 0 15px 0",
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px",
//   },
//   missionListItem: {
//     display: "flex",
//     alignItems: "flex-start",
//     gap: "14px",
//     margin: "0",
//     padding: "0",
//   },
//   checkSvg: {
//     width: "24px",
//     height: "24px",
//     color: "#ffffff",
//     flexShrink: "0",
//     strokeWidth: "2.5",
//     marginTop: "2px",
//     background: "#29a44f",
//     borderRadius: "4px",
//     padding: "4px",
//   },
//   iconPlaceholder: {
//     width: "24px",
//     height: "24px",
//     flexShrink: "0",
//     marginTop: "2px",
//     fontSize: "20px",
//   },
//   missionText: {
//     fontSize: "15px",
//     color: "#2d2d2d",
//     lineHeight: "1.6",
//     fontWeight: "500",
//   },
//   aboutDivider: {
//     border: "none",
//     borderTop: "2px solid #d4c4b0",
//     margin: "15px 0",
//     padding: "0",
//   },
//   ctaButton: {
//     background: "#ffd700",
//     color: "#1a1a1a",
//     border: "none",
//     padding: "14px 32px",
//     fontSize: "15px",
//     fontWeight: "700",
//     borderRadius: "10px",
//     cursor: "pointer",
//     display: "inline-flex",
//     alignItems: "center",
//     gap: "12px",
//     width: "fit-content",
//     transition: "all 0.3s ease",
//     boxShadow: "0 4px 15px rgba(255, 215, 0, 0.3)",
//   },
//   arrowSvg: {
//     width: "18px",
//     height: "18px",
//     strokeWidth: "2.5",
//   },
// };

// // Responsive behavior
// if (typeof window !== "undefined") {
//   const mediaQuery = window.matchMedia("(max-width: 768px)");

//   const handleMediaChange = (e) => {
//     if (e.matches) {
//       // Mobile view
//       styles.aboutWrapper.gridTemplateColumns = "1fr";
//       styles.aboutWrapper.height = "auto";
//       styles.aboutUsHero.minHeight = "auto";
//       styles.containerCustom.height = "auto";
//       styles.aboutLeft.height = "400px";
//       styles.aboutContentSection.padding = "40px 20px";
//       styles.aboutMainHeading.fontSize = "24px";
//       styles.aboutParagraph.fontSize = "14px";
//     }
//   };

//   mediaQuery.addListener(handleMediaChange);
//   handleMediaChange(mediaQuery);
// }
// AboutUsHero.jsx
import React from "react";
import about1 from "../../../../asset/new-img/about-main/about1.png";
import "./AboutUsHero.css"; // Separate CSS file

export default function AboutUsHero() {
  const learnMoreAbout = () => {
    console.log("Navigate to about page");
  };

  return (
    <section className="aboutUsHero">
      <div className="containerCustom">
        <div className="aboutWrapper">
          {/* Left - Full Image Section */}
          <div className="aboutLeft">
            <img
              src={about1}
              alt="Gauswarn Ghee Jar"
              className="aboutMainImg"
            />
          </div>

          {/* Right - Content Section */}
           <div className="aboutContentSection">
            {/* Main Heading */}
            <h1 className="aboutMainHeading">
              Pure A2 Desi Gir Cow Ghee – From Our Gaushala to Your Home
            </h1>

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
              • Authentic traditional taste <br />
              • Rich natural aroma <br />
              • High-nutrition A2 goodness <br />• 100% chemical-free,
              preservative-free purity
            </p>

            {/* Mission Section */}
            <h3 className="aboutSubtitle">Our Mission</h3>

            <ul className="missionList">
              <li className="missionListItem">
                <svg
                  className="checkSvg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <polyline
                    points="20 6 9 17 4 12"
                    strokeWidth="2.5"
                  ></polyline>
                </svg>
                <span className="missionText">
                  To protect and nurture our Gir cows, preserve the traditional
                  Bilona method, and deliver pure, trustworthy, farm-fresh A2
                  ghee to every home.
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
                  • Hand-churned Bilona method
                  <br />
                  • Small-batch, Gaushala-crafted purity
                  <br />• Natural, ethical & chemical-free
                </span>
              </li>
            </ul>

            {/* CTA Button */}
            <button className="ctaButton" onClick={learnMoreAbout}>
              Learn More About
              <svg
                className="arrowSvg"
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
