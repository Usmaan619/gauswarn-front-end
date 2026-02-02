import React from "react";
import "./lab-report-main.css";

// NDDB CALF – Ghee Purity
import GheeReport1 from "../../asset/new-img/lap-report/ghee-report-1.webp";
import GheeReport2 from "../../asset/new-img/lap-report/ghee-report-2.webp";
import GheeReport3 from "../../asset/new-img/lap-report/ghee-report-3.webp";

// GeneOmbio – A2 Test
import LabReport from "../../asset/new-img/lap-report/labreport.webp";

// NDDB CALF – Texture
import Texture1 from "../../asset/new-img/lap-report/texture-1.webp";
import Texture2 from "../../asset/new-img/lap-report/texture-2.webp";

const LabReportMain = () => {
  return (
    <>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `
{
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "additionalType": "https://schema.org/Report",
  "@id": "https://gauswarn.com/lab-report#report",

  "name": "Lab Tested Purity Report – A2 Gir Cow Ghee",
  "description": "Official laboratory test reports verifying the purity, safety and quality of Gauswarn India A2 Gir Cow Ghee including FSSAI and genetic analysis.",
  "url": "https://gauswarn.com/lab-report",

  "image": [
    "https://gauswarn.com/asset/new-img/lap-report/labreport.webp"
  ],

  "inLanguage": "en-IN",
  "datePublished": "2024-01-01",

  "about": {
    "@type": "Product",
    "@id": "https://gauswarn.com/products/a2-gir-cow-ghee",
    "name": "A2 Gir Cow Ghee",
    "brand": {
      "@type": "Brand",
      "name": "Gauswarn India"
    }
  },

  "publisher": {
    "@type": "Organization",
    "name": "Gauswarn India",
    "url": "https://gauswarn.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://gauswarn.com/favicon-512x512.png"
    }
  }
}
`
  }}
/>


      <div className="lab-page">
        <h1>Laboratory Test Reports</h1>

        <p className="intro">
          All reports shown below are original laboratory test reports issued by
          NABL-accredited laboratories. QR codes on reports can be scanned for
          authenticity.
        </p>

        {/* ================= GHEE PURITY REPORT ================= */}
        <section className="report-section">
          <h2>Ghee Purity Analysis – FSSAI Compliance</h2>

          <div className="report-pages">
            <img src={GheeReport1} alt="Ghee Purity Report Page 1" />
            <img src={GheeReport2} alt="Ghee Purity Report Page 2" />
            <img src={GheeReport3} alt="Ghee Purity Report Page 3" />
          </div>
        </section>

        {/* ================= A2 BETA CASEIN REPORT ================= */}
        <section className="report-section">
          <h2>A2 Beta Casein Genetic Test (DNA Sequencing)</h2>

          <div className="report-pages">
            <img src={LabReport} alt="A2 Beta Casein Test Report" />
          </div>
        </section>

        {/* ================= TEXTURE REPORT ================= */}
        <section className="report-section">
          <h2>Texture Quality Analysis</h2>

          <div className="report-pages">
            <img src={Texture1} alt="Texture Report Page 1" />
            <img src={Texture2} alt="Texture Report Page 2" />
          </div>
        </section>
      </div>
    </>
  );
};

export default LabReportMain;
