import React from "react";
import "./lab-report-main.css";
import Seo from "../SEO/Seo";
import SeoContent from "../SEO/SeoContent";
import { SEO_CONTENT } from "../SEO/seo-content-data";

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
  const labSchema = {
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
    "inLanguage": "en",
    "datePublished": "2024-01-01",
    "about": {
      "@type": "Product",
      "@id": "https://gauswarn.com/products/a2-gir-cow-ghee",
      "name": "A2 Gir Cow Ghee",
      "brand": {
        "@type": "Brand",
        "name": "Gauswarn India"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "269"
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
  };

  return (
    <>
      <Seo
        title="Lab Test Reports | Pure A2 Gir Cow Ghee - Gauswarn India"
        description="View official lab test reports verifying the purity, safety, and A2 beta-casein content of Gauswarn India's A2 Gir Cow Ghee."
        url="https://gauswarn.com/lab-report"
        structuredData={labSchema}
      />

      <div className="lab-page">
        <header className="lab-header" data-aos="fade-up">
          <span className="lab-subtitle">100% Transparency</span>
          <h1>Laboratory Test Reports</h1>
          <p className="intro">
            At Gauswarn, purity is not just a promise; it's a verified fact. We believe our 
            customers deserve complete transparency regarding the food they consume. 
            Below are the official reports from NABL-accredited laboratories like NDDB CALF 
            and GeneOmbio.
          </p>
        </header>

        {/* ================= LAB INFO GRID ================= */}
        <div className="lab-info-grid" data-aos="fade-up">
          <div className="lab-info-card">
            <div className="lab-card-icon">🧬</div>
            <h3>A2 Protein Verified</h3>
            <p>DNA sequencing tests confirm that our ghee contains 100% A2 Beta-Casein protein, naturally sourced from Gir Gaay.</p>
          </div>
          <div className="lab-info-card">
            <div className="lab-card-icon">🧪</div>
            <h3>Zero Adulteration</h3>
            <p>Rigorous tests ensure zero presence of vegetable oils, palm oil, or synthetic fats in any of our batches.</p>
          </div>
          <div className="lab-info-card">
            <div className="lab-card-icon">✨</div>
            <h3>Natural Texture</h3>
            <p>Our lab analysis verifies the authentic 'Danedar' (granular) texture that is the hallmark of Bilona method.</p>
          </div>
        </div>

        {/* ================= GHEE PURITY REPORT ================= */}
        <section className="report-section" data-aos="fade-up">
          <div className="section-content">
            <h2>Ghee Purity Analysis – FSSAI Compliance</h2>
            <p>
              This report from NDDB CALF verifies the chemical purity of our A2 Ghee. It checks for 
              Moisture, RM value, and ensures the ghee is free from any harmful contaminants. 
              Our results consistently meet and exceed the standard FSSAI requirements for 
              Desi Ghee.
            </p>
          </div>

          <div className="report-pages">
            <img src={GheeReport1} alt="Ghee Purity Report Page 1 - Gauswarn India" loading="lazy" />
            <img src={GheeReport2} alt="Ghee Purity Report Page 2 - Gauswarn India" loading="lazy" />
            <img src={GheeReport3} alt="Ghee Purity Report Page 3 - Gauswarn India" loading="lazy" />
          </div>
        </section>

        {/* ================= A2 BETA CASEIN REPORT ================= */}
        <section className="report-section" data-aos="fade-up">
          <div className="section-content">
            <h2>A2 Beta Casein Genetic Test (DNA Sequencing)</h2>
            <p>
              The most critical test for any A2 brand. This genetic analysis by GeneOmbio 
              Technology confirms that our milk source is strictly from indigenous cows 
              carrying the A2/A2 gene. This guarantees that our ghee is 100% A2 protein.
            </p>
          </div>

          <div className="report-pages single">
            <img src={LabReport} alt="A2 Beta Casein Test Report - DNA Sequencing - Gauswarn" loading="lazy" />
          </div>
        </section>

        {/* ================= TEXTURE REPORT ================= */}
        <section className="report-section" data-aos="fade-up">
          <div className="section-content">
            <h2>Texture Quality Analysis</h2>
            <p>
              Authentic Bilona Ghee has a unique grainy texture. This NDDB CALF analysis 
              measures the physical properties of our ghee, verifying that the traditional 
              slow-cooking and cooling process has correctly formed the desired granules.
            </p>
          </div>

          <div className="report-pages">
            <img src={Texture1} alt="Texture Report Page 1 - Granularity Analysis" loading="lazy" />
            <img src={Texture2} alt="Texture Report Page 2 - Granularity Analysis" loading="lazy" />
          </div>
        </section>
      </div>
      <SeoContent heading={SEO_CONTENT.labReport.heading} sections={SEO_CONTENT.labReport.sections} />
    </>
  );
};

export default LabReportMain;
