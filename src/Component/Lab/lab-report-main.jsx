import React from "react";
import Image1 from "../../asset/new-img/lap-report/labreport.webp";

const LabReportMain = () => {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          additionalType: "https://schema.org/Report",

          "@id": "https://gauswarn.com/lab-report#creativework",

          name: "Lab Tested Purity Report – A2 Gir Cow Ghee",
          description:
            "Official laboratory test report verifying the purity, safety, and quality of Gauswarn India’s A2 Gir Cow Ghee.",

          url: "https://gauswarn.com/lab-report",

          image: [
            "https://gauswarn.com/asset/new-img/lap-report/labreport.webp",
          ],

          inLanguage: "en-IN",
          datePublished: "2024-01-01",

          about: {
            "@type": "ProductGroup",
            "@id": "https://gauswarn.com/products#a2-ghee",
            name: "A2 Gir Cow Ghee",
          },

          publisher: {
            "@type": "Organization",
            name: "Gauswarn India",
            url: "https://gauswarn.com",
            logo: {
              "@type": "ImageObject",
              url: "https://gauswarn.com/favicon-512x512.png",
            },
          },
        })}
      </script>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
        {/* Center Heading */}
        <h4
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "20px",
            textTransform: "uppercase",
          }}
        >
          Lab Report
        </h4>

        {/* Wrapper */}
        <div
          style={{
            position: "relative",
            width: "100%",
          }}
          onContextMenu={(e) => e.preventDefault()}
        >
          {/* Image - NO pointerEvents (to avoid blur) */}
          <img
            src={Image1}
            alt="Lab Report"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              userSelect: "none",
            }}
            draggable="false"
          />

          {/* Invisible protection layer */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "transparent",
            }}
            onContextMenu={(e) => e.preventDefault()}
          ></div>
        </div>
      </div>
    </>
  );
};

export default LabReportMain;
