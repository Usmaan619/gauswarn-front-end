import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./product-faq.css";

const FAQ_DATA = [
  {
    question: "Why is Gauswarn Bilona Ghee considered a superior choice compared to others?",
    answer: (
      <>
        Gauswarn ghee is produced in small, artisanal batches using the authentic Vedic Bilona method. It takes approximately 25 to 30 kilograms of high-quality A2 Gir Cow milk to produce just one kilogram of our ghee. This concentration of raw nutrients, combined with the traditional labor-intensive process, creates a nutrient-dense, premium product that far exceeds mass-produced alternatives. You can view our different <Link to='/products/'>available sizes here</Link>.
      </>
    )
  },
  {
    question: "Is Gauswarn A2 Ghee safe for individuals with dairy sensitivities?",
    answer: (
      <>
        Yes, it is generally well-tolerated. During our meticulous slow-simmering process, we carefully remove all milk solids, including lactose and casein. The result is a pure, golden fat that is naturally free from common allergens found in raw milk, providing all the nutritional benefits of dairy without the digestive discomfort. You can read more about the <Link to='/blog/'>A2 protein advantage</Link> on our blog.
      </>
    )
  },
  {
    question: "How should I store Gauswarn Ghee, and what is its shelf life?",
    answer: (
      <>
        Authentic A2 Ghee is remarkably shelf-stable. When stored in a cool, dry place and handled with a clean, dry spoon, it remains fresh and aromatic for 9 to 12 months. Refrigeration is not required, as pure ghee naturally resists spoilage at room temperature. For more specific care instructions, feel free to <Link to='/contact/'>reach out to our team</Link>.
      </>
    )
  },
  {
    question: "What are the hallmarks of pure A2 Ghee that I can test at home?",
    answer: (
      <>
        A reliable indicator of purity is the 'Melting Point' test. Place a small amount of Gauswarn Ghee on your palm; it should begin to melt almost instantly due to its low melting point, a sign of its natural composition. Additionally, the characteristic 'Danedar' (granular) texture is a definitive hallmark of the traditional Bilona process. Every batch we produce is also <Link to='/lab-report/'>lab-verified</Link> for your complete peace of mind.
      </>
    )
  },
  {
    question: "Is Gauswarn Ghee stable for high-heat cooking and deep-frying?",
    answer: (
      <>
        Absolutely. A2 Ghee has one of the highest smoke points of any natural cooking fat, around 485°F (252°C). This stability ensures that the fat does not break down into free radicals or harmful compounds during high-heat cooking, making it the safest and healthiest choice for everything from traditional tadkas to deep-frying. Explore our <Link to='/blog/'>culinary guides</Link> for inspiration.
      </>
    )
  },
  {
    question: "Does Gauswarn provide official quality certifications for its products?",
    answer: (
      <>
        Transparency is a core value at Gauswarn. Every single batch of our A2 Ghee undergoes rigorous testing at NABL-certified laboratories. We test for essential parameters including fat content, moisture levels, and the absence of any adulterants or preservatives. We believe you have the right to know exactly what is in your food. View our <Link to='/lab-report/'>latest certifications here</Link>.
      </>
    )
  }
];

const ProductFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const productFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": typeof item.answer === 'string' ? item.answer : "Gauswarn A2 Ghee is a premium, lab-tested product made using traditional methods."
      }
    }))
  };

  return (
    <section className="product-faq-section">
      <script type="application/ld+json">
        {JSON.stringify(productFaqSchema)}
      </script>

      <div className="product-faq-container">
        <div className="product-faq-grid">
          {/* LEFT: FAQ ACCORDION */}
          <div className="product-faq-left">
            <span className="faq-tag">Product Guide</span>
            <h2 className="faq-main-title">Expert Product Insights</h2>
            <div className="p-faq-accordion">
              {FAQ_DATA.map((item, index) => (
                <div 
                  key={index} 
                  className={`p-faq-item ${activeIndex === index ? "active" : ""}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="p-faq-question">
                    <h4>{item.question}</h4>
                    <span className="p-faq-icon">{activeIndex === index ? "−" : "+"}</span>
                  </div>
                  <div className="p-faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: DEEP SEO CONTENT */}
          <div className="product-faq-right">
            <div className="seo-content-rich">
              <h3>The Gold Standard of Purity: Why Gauswarn A2 Ghee is Different</h3>
              <p>
                In an era dominated by industrial dairy, <strong>Gauswarn</strong> is dedicated to 
                returning to the source. We believe that optimal health begins with the well-being 
                of the cow and the integrity of the process. Our <Link to="/products/">A2 Gir Cow Bilona Ghee</Link> is 
                crafted with this philosophy, offering a depth of nutrition and flavor that simply 
                cannot be matched by commercial alternatives.
              </p>

              <h4>Understanding the A2 Beta-Casein Advantage</h4>
              <p>
                The source of your ghee is just as important as the process. Indigenous Indian Gir 
                cows produce milk containing exclusively the <strong>A2 beta-casein protein</strong>. 
                Unlike the A1 protein found in many hybrid breeds, A2 is naturally compatible with 
                human digestion, significantly reducing the risk of gut inflammation and allergic 
                reactions. By choosing Gauswarn, you are choosing a fat that works in harmony 
                with your body. Explore more in our <Link to="/blog/">latest health articles</Link>.
              </p>

              <h4>The Mastery of the Traditional Bilona Method</h4>
              <p>
                We reject factory-led shortcuts in favor of the 
                <strong>Vedic Bilona method</strong>. Every jar of Gauswarn Ghee follows 
                this meticulous five-step journey:
              </p>
              <ul className="bilona-steps">
                <li><strong>Ethical Milking:</strong> Ensuring the calf is well-fed before collection.</li>
                <li><strong>Natural Culture:</strong> Converting pure milk into nutrient-rich curd.</li>
                <li><strong>Wooden Churning:</strong> Extracting the butter at low temperatures.</li>
                <li><strong>Slow Clarification:</strong> Heating in earthen pots to preserve vital nutrients.</li>
                <li><strong>Quality Inspection:</strong> Ensuring that perfect, granular texture in every jar.</li>
              </ul>

              <h4>A Versatile Wellness Essential for Every Kitchen</h4>
              <p>
                Beyond its incredible culinary profile, <strong>Pure A2 Ghee</strong> is valued 
                by nutritionists for its concentration of Conjugated Linoleic Acid (CLA) and 
                Butyrate. It supports metabolic efficiency, heart health, and mental clarity, 
                making it a vital addition to any health-conscious household. Check our <Link to="/lab-report/">detailed lab certifications</Link>.
              </p>

              <h4>Global Quality, Rooted in Indian Tradition</h4>
              <p>
                Based in the cultural hubs of <strong>Pune and Indore</strong>, we bring 
                this heritage of health to families across <strong>India and the world</strong>. 
                When you buy Gauswarn, you aren't just purchasing a product; you are supporting 
                a sustainable, cruelty-free food system that honors traditional wisdom. 
                Learn more <Link to="/about/">About Our Mission</Link>.
              </p>

              <div className="aeo-highlight">
                <strong>Seeking the purest nutritional fat?</strong> Gauswarn A2 Bilona Ghee is 
                lab-verified, FSSAI certified, and completely additive-free. It is 
                the definitive answer for health enthusiasts searching for <Link to="/products/">'the best A2 ghee for long-term wellness'</Link>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFaq;
