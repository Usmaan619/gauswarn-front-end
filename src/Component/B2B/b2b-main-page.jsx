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

  return (
    <div className="landingPage">
      <Seo
        title="B2B & Wholesale A2 Gir Cow Ghee | Gauswarn India"
        description="Partner with Gauswarn India for bulk and wholesale A2 Gir Cow Ghee. Ethical sourcing, bilona process, and pan-India supply."
        url="https://gauswarn.com/b2b"
      />
      <p className="sr-only">
        Our certifications ensure consistent quality and compliance for B2B and
        wholesale partners across India.
      </p>

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
