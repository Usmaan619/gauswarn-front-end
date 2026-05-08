import React, { useState } from "react";
import "./nutrition-faq.css";

const NUTRITION_DATA = {
  per100g: [
    { label: "Energy", value: "898.29 Kcal" },
    { label: "Total Fat", value: "99.81 g" },
    { label: "Protein", value: "0 g" },
    { label: "Carbohydrate", value: "0 g" },
    { label: "Saturated Fat", value: "62.11 g" },
    { label: "Poly-unsaturated Fat", value: "3.58 g" },
    { label: "Mono-unsaturated Fat", value: "28.6 g" },
    { label: "Trans Fatty Acid", value: "Nil" },
    { label: "Cholesterol", value: "227 mg" },
    { label: "Added Sugar", value: "0 mg" },
    { label: "Sodium", value: "0 mg" },
  ],
  per10g: [
    { label: "Energy", value: "89.8 Kcal" },
    { label: "Total Fat", value: "9.98 g" },
    { label: "Saturated Fat", value: "6.21 g" },
    { label: "Poly-unsaturated Fat", value: "0.36 g" },
    { label: "Mono-unsaturated Fat", value: "2.86 g" },
    { label: "Cholesterol", value: "22.7 mg" },
  ],
};

const FAQ_DATA = [
  {
    question: "Is Gauswarn A2 Gir Cow Ghee good for weight management?",
    answer: "Yes, Gauswarn A2 Ghee contains Conjugated Linoleic Acid (CLA), which helps in fat metabolism and reducing body fat while providing sustained energy during weight loss journeys."
  },
  {
    question: "Does Gauswarn Bilona Ghee contain any harmful trans-fats?",
    answer: "Absolutely not. Our traditional Bilona method ensures that the ghee is 100% pure and contains 'Nil' trans fatty acids, making it a safe choice for heart health."
  },
  {
    question: "How does A2 Ghee nutrition support brain function and memory?",
    answer: "A2 Ghee is rich in Omega-3 fatty acids and healthy saturated fats that are essential for cognitive health, helping improve focus, memory, and overall brain performance naturally."
  },
  {
    question: "Can lactose-intolerant people safely consume Gauswarn A2 Ghee?",
    answer: "Yes, the slow clarification process removes all milk solids like lactose and casein, leaving behind pure nutritional fat that is easily digestible for individuals with dairy sensitivities."
  },
  {
    question: "What vitamins are naturally present in Gauswarn Bilona Ghee?",
    answer: "Our ghee is a natural source of fat-soluble vitamins A, D, E, and K2, which are vital for bone strength, immunity, and skin health in a balanced diet."
  },
  {
    question: "Why is the nutritional profile of Bilona Ghee better than industrial ghee?",
    answer: "The Bilona process uses curd-based churning which preserves essential nutrients and probiotics, whereas industrial methods use cream-separators that often destroy these vital nutritional components."
  },
  {
    question: "Is Gauswarn A2 Ghee suitable for a Keto or Paleo diet?",
    answer: "Definitely. With zero carbohydrates and high-quality healthy fats, our A2 ghee is an ideal fat source for anyone following a ketogenic or paleo lifestyle for wellness."
  },
  {
    question: "Does Gauswarn test its ghee for nutritional accuracy and purity?",
    answer: "Yes, every batch is third-party lab-tested at NABL-accredited labs to verify the nutritional values like fat content and to ensure zero adulteration or chemicals."
  },
  {
    question: "How does the butyric acid in A2 Ghee benefit gut health?",
    answer: "A2 Ghee is rich in butyric acid, a short-chain fatty acid that nourishes the intestinal lining, reduces inflammation, and supports a healthy digestive system for better nutrient absorption."
  },
  {
    question: "What is the recommended daily serving of A2 Ghee for health?",
    answer: "A serving of 10-20 grams per day is recommended to gain its nutritional benefits. It provides 89.8 Kcal per 10g serving, supporting energy needs without bloating."
  }
];

const NutritionFaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="nutrition-section" id="nutrition-info">
      <div className="nutrition-container">
        <div className="section-header text-center mb-5">
          <span className="subtitle">Scientific Wellness</span>
          <h2 className="main-title">Nutrition Information</h2>
          <div className="title-underline"></div>
          <p className="description">
            Experience the power of traditional A2 Ghee nutrition. Our lab-verified results 
            ensure you get the purest healthy fats for your family's AEO and GEO lifestyle.
          </p>
        </div>

        <div className="nutrition-grid">
          {/* Nutrition Tables */}
          <div className="nutrition-tables">
            <div className="nutrition-card premium-card">
              <h3>Per 100 gm Nutrition</h3>
              <div className="table-wrapper">
                <table className="nutrition-table">
                  <thead>
                    <tr>
                      <th>Nutrient</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {NUTRITION_DATA.per100g.map((item, idx) => (
                      <tr key={idx}>
                        <td>{item.label}</td>
                        <td>{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="nutrition-card premium-card mt-4">
              <h3>Per 10 gm Serving</h3>
              <div className="table-wrapper">
                <table className="nutrition-table">
                  <thead>
                    <tr>
                      <th>Nutrient</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {NUTRITION_DATA.per10g.map((item, idx) => (
                      <tr key={idx}>
                        <td>{item.label}</td>
                        <td>{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Nutrition FAQs */}
          <div className="nutrition-faqs">
            <h3 className="mb-4">Nutrition FAQs</h3>
            <div className="nutrition-accordion">
              {FAQ_DATA.map((item, index) => (
                <div 
                  key={index} 
                  className={`n-faq-item ${activeIndex === index ? "active" : ""}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="n-faq-question">
                    <h4>{item.question}</h4>
                    <span className="n-faq-icon">{activeIndex === index ? "−" : "+"}</span>
                  </div>
                  {activeIndex === index && (
                    <div className="n-faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="brand-promise-content mt-5 p-4 border-start border-warning border-4 rounded shadow-sm bg-white">
              <h4 className="text-dark mb-3">The Gauswarn Quality Promise</h4>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#000' }}>
                Our commitment to your health begins with the absolute purity of the <strong>Bilona Method</strong>. 
                Every jar of <strong>Gauswarn A2 Gir Cow Ghee</strong> is meticulously crafted to preserve its unique 
                <strong>nutritional profile</strong>, providing the essential healthy fats your body deserves. 
                Whether you are ordering from <strong>Indore, Pune</strong>, or anywhere across <strong>India</strong>, 
                you can trust in our lab-verified purity. This <strong>authentic desi ghee</strong> is more than 
                just a cooking ingredient; it is a foundation for a healthier lifestyle, supporting digestion, 
                brain health, and immunity as prescribed in ancient <strong>Ayurvedic wisdom</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionFaqSection;
