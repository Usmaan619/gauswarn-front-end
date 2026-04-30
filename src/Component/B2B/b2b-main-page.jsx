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
            name: "Do you provide wholesale A2 Cow Ghee?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Gauswarn India supplies bulk and wholesale A2 Cow Ghee to retailers, distributors, and corporate partners across India.",
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
      <h1 className="sr-only">
        Wholesale & Bulk A2 Cow Ghee Supply - Gauswarn India
      </h1>

      <ProductHeroSection />
      <Certified />

      <B2bAboutSection onQuoteClick={scrollToForm} />
      <B2bWhyPartner />
      <B2bHowItWorks />

      {/* 🔽 TARGET FORM */}
      <B2bPartnerForm ref={formRef} />

      <B2bContactSection />
      <SustainableFeaturesAboutus />
    </div>
  );
};

export default B2BLandingPage;
