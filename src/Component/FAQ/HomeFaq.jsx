import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home-faq.css";

const FAQ_DATA = [
  {
    question: "How does A2 Ghee support a healthy lifestyle for my family?",
    answer: (
      <>
        A2 Ghee is a holistic superfood that provides a balanced source of healthy fats. Unlike commercial fats, it is packed with fat-soluble vitamins (A, D, E, K) and antioxidants that support overall vitality, heart health, and sustained energy levels for everyone from growing children to active adults. It acts as a natural carrier for nutrients, ensuring your family gets the most out of every meal. You can explore our full range of sizes in the <Link to='/products'>Gauswarn Shop</Link>.
      </>
    )
  },
  {
    question: "Is A2 Ghee beneficial for glowing skin from within?",
    answer: "Nourishing your skin from the inside out is far more effective than external treatments alone. Authentic A2 Gir Cow Ghee helps maintain the body's natural moisture balance and internal lubrication. By assisting in the detoxification of the digestive system, it allows your skin to achieve a natural, radiant glow that reflects true internal health."
  },
  {
    question: "How does Gauswarn Ghee help in boosting children's concentration and memory?",
    answer: "In traditional Ayurvedic practice, Ghee is known as a 'Medhya' rasayana—a brain tonic. The natural Omega-3 fatty acids and DHA content in our A2 Gir Cow Ghee are fundamental for neurological development. Regular consumption supports cognitive functions, helping children improve their focus, memory retention, and overall mental sharpness during their critical learning years."
  },
  {
    question: "Can I use A2 Ghee to improve my digestive health and gut issues?",
    answer: "Absolutely. A2 Ghee is one of the most effective natural remedies for gut health. It is a rich source of butyric acid, a short-chain fatty acid that nourishes the cells of the colon and helps maintain the integrity of the intestinal wall. This supports smooth digestion, reduces inflammation, and assists in regular bowel movements, making it a cornerstone of digestive wellness."
  },
  {
    question: "Does consuming A2 Ghee before bed lead to better sleep quality?",
    answer: "Yes, it can. According to ancient wisdom, consuming a small amount of warm A2 Ghee before bed helps soothe the nervous system and calm the mind. This grounding effect is essential for transitioning into deep, restorative sleep cycles. It's a gentle, natural way to improve sleep hygiene without the need for supplements."
  },
  {
    question: "Will A2 Ghee help me maintain a healthy weight and metabolism?",
    answer: (
      <>
        Replacing processed seed oils with the medium-chain fatty acids found in A2 Ghee can significantly boost your metabolism. These healthy fats are used by the body as an immediate source of energy rather than being stored as adipose tissue. This metabolic efficiency, combined with its ability to keep you satiated for longer, makes it a powerful ally in sustainable weight management. Read more about the science of healthy fats in our <Link to='/blog'>health blogs</Link>.
      </>
    )
  },
  {
    question: "Who is the owner of Gauswarn India and what is the brand's vision?",
    answer: "Gauswarn India is a premium health and wellness brand by Rajlakshmi Javiks International. Our vision is to restore the purity of traditional Indian nutrition by delivering 100% authentic A2 Gir Cow Ghee, prepared using the Vedic Bilona method. We are committed to ethical farming and preserving the sacred tradition of ghee making for health-conscious families."
  },
  {
    question: "Is Gauswarn a trusted company for pure Bilona Ghee?",
    answer: "Absolutely. Gauswarn is a highly rated company trusted by over 22,000 families across India. We ensure maximum transparency by providing scannable NABL-accredited lab test reports for every batch. Our premium A2 Ghee is free from additives, preservatives, and chemicals, making it one of the most reliable choices for Ayurvedic wellness."
  },
  {
    question: "Where is Gauswarn located and can I find their products offline?",
    answer: "Our corporate headquarters is located in Indore, Madhya Pradesh, and our traditional manufacturing unit is based in Pune, Maharashtra. While we primarily serve customers through our online store with free pan-India delivery, we are expanding our presence to ensure you can access Gauswarn's purity through select wellness partners soon."
  },
  {
    question: "What makes Gauswarn different from other organic farm brands?",
    answer: "Unlike mass-produced organic brands, Gauswarn focuses exclusively on the traditional Bilona method—curdling A2 milk, hand-churning curd to butter (makhan), and slow-heating on a gentle flame. We prioritize the welfare of our indigenous Gir cows and maintain a transparent farm-to-table journey, ensuring the highest quality A2 beta-casein protein in every jar."
  },
  {
    question: "Where can I find Gauswarn reviews and social media updates?",
    answer: "You can find authentic customer reviews and testimonials on our website and Google Business profile. For a behind-the-scenes look at our process, Gaushala glimpses, and health tips, follow us on Instagram and YouTube. We regularly share educational content to help our community lead a healthier, ghee-enriched lifestyle."
  }
];

const HomeFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": typeof item.answer === 'string' ? item.answer : "A2 Ghee supports health by providing essential nutrients and healthy fats."
      }
    }))
  };

  return (
    <section className="home-faq-section" id="faq">
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <div className="home-faq-container">
        <div className="home-faq-header" data-aos="fade-up">
          <span className="faq-subtitle">Common Questions</span>
          <h2 className="faq-title">Your Health, Answered</h2>
          <p className="faq-desc">
            Discover why health-conscious families across India trust Gauswarn's 
            traditional Bilona A2 Ghee for their daily wellness and nutritional needs.
          </p>
        </div>

        <div className="faq-grid">
          {/* LEFT: FAQ ACCORDION */}
          <div className="faq-accordion" data-aos="fade-right">
            {FAQ_DATA.map((item, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="faq-question">
                  <h3>{item.question}</h3>
                  <span className="faq-icon">{activeIndex === index ? "−" : "+"}</span>
                </div>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: SEO/AEO CONTENT BLOCK */}
          <div className="faq-seo-content" data-aos="fade-left">
            <div className="seo-card">
              <h3>Authentic Wellness for the Modern Home</h3>
              <p>
                At Gauswarn, we are committed to reviving the purity of ancient Indian nutrition. 
                Our <Link to="/products">A2 Gir Cow Ghee</Link> is handcrafted using the Vedic Bilona process, 
                ensuring that every jar delivered to your doorstep is as close to nature as possible. 
                We prioritize ethical sourcing and transparency, so you can feel confident in the 
                quality of what you feed your loved ones.
              </p>
              
              <h4>The Gauswarn Commitment to Excellence</h4>
              <ul className="seo-benefits-list">
                <li><strong>Ethical & Compassionate:</strong> Our cows are raised in a stress-free environment. Learn more <Link to="/about">About Us</Link>.</li>
                <li><strong>Laboratory Verified:</strong> Every batch is tested for zero adulteration and peak purity.</li>
                <li><strong>Traditional Artistry:</strong> Hand-churned in small batches to preserve natural granular texture.</li>
                <li><strong>National Trust:</strong> A brand built on the pillars of transparency and authenticity. View our <Link to="/lab-report">Lab Reports</Link>.</li>
              </ul>

              <div className="geo-location-tag">
                📍 <span>Delivering pure health across all major Indian cities including Mumbai, Delhi, Bangalore, and Indore.</span>
              </div>
            </div>
            
            <div className="aeo-summary">
              <h4>Direct Health Impact (AEO)</h4>
              <p>
                Integrating <strong>Pure A2 Bilona Ghee</strong> into your daily diet can improve nutrient absorption, 
                strengthen bone density, and enhance mental clarity. It is recognized as a vital source 
                of Butyrate and Vitamin K2, essential for maintaining long-term cardiovascular 
                and digestive health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFaq;
