import React, { useRef } from "react";
import ProductHeroSection from "../Products/product-hero-section";
import Certified from "../Pages/Certified";
import B2bAboutSection from "./b2b-about-section";
import B2bWhyPartner from "./b2b-why-partner";
import B2bPartnerForm from "./b2b-partner-form";
import B2bHowItWorks from "./b2b-how-it-works";
import B2bContactSection from "./b2b-contact-section";
import SustainableFeaturesAboutus from "../AboutUs-new/sustainable-features-aboutus";
import "./b2b-styles/b2b-main-page.css";
import Seo from "../SEO/Seo";
import SeoContent from "../SEO/SeoContent";
import { SEO_CONTENT } from "../SEO/seo-content-data";

const B2BLandingPage = () => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const b2bSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Wholesale & Bulk A2 Cow Ghee Supply",
        description:
          "Gauswarn India provides bulk and wholesale supply of A2 Cow Ghee for retailers, distributors, wholesalers, and corporate buyers across India.",
        provider: {
          "@type": "Organization",
          name: "Gauswarn India",
          url: "https://gauswarn.com",
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        audience: {
          "@type": "BusinessAudience",
          audienceType: [
            "Retailers",
            "Distributors",
            "Wholesalers",
            "Corporate Buyers",
            "Exporters",
          ],
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do you provide White Labeling or Private Labeling services?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Gauswarn India offers comprehensive White Labeling support. We provide premium A2 Bilona Ghee, and you can sell it under your own brand name with our custom packaging solutions.",
            },
          },
          {
            "@type": "Question",
            name: "What is the minimum order quantity for B2B partners?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Minimum order quantity depends on packaging and location. Our team provides flexible MOQ options for distributors and retailers.",
            },
          },
          {
            "@type": "Question",
            name: "Is your ghee certified and lab tested?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, our A2 Cow Ghee is lab-tested and certified to ensure purity, safety, and quality for B2B and wholesale supply.",
            },
          },
          {
            "@type": "Question",
            name: "Do you support private labeling or bulk packaging?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we offer bulk packaging and private labeling support for eligible B2B partners.",
            },
          },
          {
            "@type": "Question",
            name: "How can I become a B2B partner with Gauswarn India?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can submit a partnership request using the B2B form on this page, and our team will contact you with pricing and onboarding details.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="landingPage">
      <Seo
        title="B2B & Wholesale A2 Cow Ghee | Gauswarn India"
        description="Partner with Gauswarn India for bulk and wholesale A2 Cow Ghee. Ethical sourcing, bilona process, and pan-India supply."
        url="https://gauswarn.com/b2b"
        structuredData={b2bSchema}
      />
      <ProductHeroSection
        title="Wholesale & Bulk A2 Cow Ghee Supply - Gauswarn India"
        isH1={true}
      />
      <Certified />

      <B2bAboutSection onQuoteClick={scrollToForm} />
      <B2bWhyPartner />
      <B2bHowItWorks />

      {/* 🔽 B2B FAQ SECTION */}
      <section className="b2b-faq-section container">
        <h2 className="b2b-section-title">Wholesale & Partnership FAQs</h2>
        <div className="b2b-faq-grid">
          <div className="b2b-faq-item">
            <h4>Do you offer White Labeling or Private Labeling services?</h4>
            <p>
              Yes, Gauswarn India provides comprehensive White Labeling support.
              We supply our premium, lab-tested A2 Gir Cow Ghee, which you can
              sell under your own brand identity. Our team assists with custom
              packaging and labeling solutions to ensure your brand stands out
              in the market.
            </p>
          </div>
          <div className="b2b-faq-item">
            <h4>
              How do you support the growth of small businesses and startups?
            </h4>
            <p>
              We empower entrepreneurs by offering low Minimum Order Quantities
              (MOQ) and consistent, high-quality supply. This allows startups to
              enter the healthy food market with minimal upfront investment and
              scale their operations as their customer base grows.
            </p>
          </div>
          <div className="b2b-faq-item">
            <h4>Why should I choose Gauswarn as my official B2B partner?</h4>
            <p>
              Gauswarn is synonymous with purity and transparency. By partnering
              with us, you gain access to 100% authentic Bilona Ghee, supported
              by verifiable lab reports and a robust supply chain that
              guarantees quality consistency for your retail or export business.
            </p>
          </div>
          <div className="b2b-faq-item">
            <h4>What are your delivery and logistics terms for bulk orders?</h4>
            <p>
              We have established partnerships with specialized logistics
              providers to ensure safe and timely Pan-India delivery. While
              shipping costs depend on volume and location, we strive to offer
              the most competitive rates for our B2B partners. Please submit the
              form below for a detailed quote.
            </p>
          </div>
        </div>
      </section>

      {/* 🔽 TARGET FORM */}
      <B2bPartnerForm ref={formRef} />

      <B2bContactSection />
      <SustainableFeaturesAboutus />
      <SeoContent
        heading={SEO_CONTENT.b2b.heading}
        sections={SEO_CONTENT.b2b.sections}
      />
    </div>
  );
};

export default B2BLandingPage;
