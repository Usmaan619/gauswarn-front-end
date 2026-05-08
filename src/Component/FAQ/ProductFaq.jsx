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
  },
  {
    question: "What exactly is the difference between A1 and A2 cow breeds?",
    answer: (
      <>
        The difference lies in a single amino acid in the beta-casein protein. Indigenous Indian breeds like the Gir cow produce A2 protein, which is structurally similar to human breast milk and easier to digest. Foreign or cross-bred cows often produce A1 protein, which can release a peptide called BCM-7 during digestion, leading to inflammation and discomfort for many people.
      </>
    )
  },
  {
    question: "Do you follow ethical 'Ahimsa' milking practices at your Gaushala?",
    answer: (
      <>
        Yes, compassion is at the heart of Gauswarn. We follow 'Dohan' or ethical milking, where the calf is allowed to drink its full share of milk from two teats before we collect the remaining for ghee production. Our cows are never injected with growth hormones (oxytocin) and are treated as family members in a stress-free environment.
      </>
    )
  },
  {
    question: "Why does the color and texture of Gauswarn Ghee vary occasionally?",
    answer: (
      <>
        Since our ghee is 100% natural and handcrafted, slight variations in color and graininess are normal. These are influenced by the seasonal fodder our grass-fed cows eat. For instance, ghee may look more golden in the monsoon when cows eat fresh green grass rich in beta-carotene. This variation is a hallmark of an authentic, non-industrial product.
      </>
    )
  },
  {
    question: "Can Gauswarn A2 Ghee be used for Ayurvedic treatments like Nasya or massage?",
    answer: (
      <>
        Absolutely. Our Bilona ghee is of 'Sattvic' quality, making it ideal for Ayurvedic rituals. It is pure enough for 'Nasya' (nasal drops for mental clarity), 'Abhyanga' (body massage for joint health), and even for lighting diyas. Its high purity ensures that it is absorbed deeply into the tissues to provide holistic healing.
      </>
    )
  },
  {
    question: "Is Gauswarn Ghee suitable for babies and pregnant women?",
    answer: (
      <>
        Yes, it is highly recommended. For babies, it supports brain development and bone strength. For pregnant women, it provides essential healthy fats and fat-soluble vitamins that aid in the baby's growth and help the mother maintain energy levels. It is a natural superfood for all stages of life.
      </>
    )
  },
  {
    question: "Is your packaging safe for long-term storage?",
    answer: (
      <>
        We use only premium, food-grade glass jars and high-quality seals for our ghee. Glass is non-reactive and preserves the aroma, taste, and nutritional integrity of the ghee without the risk of chemical leaching associated with plastic. Our packaging is designed to keep your ghee fresh from our farm to your kitchen.
      </>
    )
  },
  {
    question: "Why do you use a wooden Bilona instead of modern steel churners?",
    answer: (
      <>
        Wooden churners (Bilona) are used to maintain a low temperature during the churning process, which is essential to preserve the heat-sensitive vitamins and enzymes in the curd. Steel churners can generate friction-led heat that may alter the nutritional structure and the delicate aroma of the ghee.
      </>
    )
  },
  {
    question: "Is it normal for the ghee to be in a liquid state during the summer?",
    answer: (
      <>
        Yes, pure ghee has a melting point of approximately 32°C to 35°C. In warmer climates or during summer, it is completely natural for it to turn liquid. This change in state does not affect its quality or nutritional value. You can simply place it in a cooler area if you prefer a more solid texture.
      </>
    )
  },
  {
    question: "Can I use Gauswarn A2 Ghee for skin and hair care?",
    answer: (
      <>
        Definitely. A2 Ghee is an excellent natural moisturizer. Applying it to the skin helps in healing dry patches and provides a natural glow. For hair, it acts as a deep conditioner that nourishes the scalp and helps reduce frizz. Its anti-inflammatory properties also make it great for healing minor burns or rashes.
      </>
    )
  },
  {
    question: "Is Gauswarn Ghee safe for people with high blood pressure?",
    answer: (
      <>
        Yes, our A2 Ghee is naturally low in sodium (0mg per 100g). Since it contains no added salt or preservatives, it is a much safer fat choice for individuals monitoring their blood pressure compared to salted butter or processed oils.
      </>
    )
  },
  {
    question: "Can I use this ghee for the Ayurvedic practice of Oil Pulling?",
    answer: (
      <>
        While oil pulling is traditionally done with sesame or coconut oil, many Ayurvedic practitioners recommend 'Ghee Kavala' (holding ghee in the mouth). It helps in strengthening the gums, whitening teeth, and removing toxins from the mouth while providing a soothing effect on the oral mucosa.
      </>
    )
  },
  {
    question: "Does Gauswarn ensure that the cows are hormone and antibiotic-free?",
    answer: (
      <>
        Yes, we have a strict policy against the use of growth hormones (like Oxytocin) or routine antibiotics. Our cows are raised naturally, and if a cow requires medical treatment, her milk is excluded from production until she is fully recovered and the medication is completely out of her system.
      </>
    )
  },
  {
    question: "How is 'Bilona Ghee' different from 'Direct Cream Ghee'?",
    answer: (
      <>
        Direct cream ghee is made by boiling milk cream at high speeds, which is faster but less nutritious. Bilona ghee involves turning milk into curd and then churning it. This curd-based process introduces beneficial probiotics and ensures a much higher concentration of vitamins and healthy fatty acids.
      </>
    )
  },
  {
    question: "Can I add Gauswarn Ghee to my morning coffee or tea?",
    answer: (
      <>
        Yes, it is a popular choice for 'Bulletproof Coffee' enthusiasts. Adding a teaspoon of A2 Ghee to your morning beverage provides healthy fats that help in slow caffeine absorption, preventing energy crashes and keeping you satiated for longer durations.
      </>
    )
  },
  {
    question: "Is your ghee free from artificial fragrances or colors?",
    answer: (
      <>
        Absolutely. The rich golden color and nutty aroma of Gauswarn Ghee are 100% natural, derived solely from the A2 Gir Cow milk and our slow-cooking process. We never add any artificial coloring agents, aromatic chemicals, or 'ghee essence' to our products.
      </>
    )
  },
  {
    question: "Is there an age limit for children to start consuming A2 Ghee?",
    answer: (
      <>
        A2 Ghee can be introduced to a child's diet as soon as they start semi-solid foods (usually around 6 months). Starting early helps in their brain development, improves digestion, and provides the necessary energy for their active growth phases.
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
