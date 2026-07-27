import { useState } from "react";
import "./profileSection.css";
import tab1 from "../../asset/new-img/tabs/tabs1.webp";

const data = [
  {
    key: "description",
    label: "DESCRIPTION",
    heading: "What is Gauswarn A2 Bilona Gir Cow Ghee?",
    content: [
      {
        title: null,
        text: "Gauswarn A2 Bilona Ghee is a premium, traditionally handcrafted ghee made exclusively from the A2 milk of indigenous Gir cows. Every jar is prepared using the authentic Vedic Bilona churning method — a slow, careful process where curd is hand-churned to extract butter, then gently simmered into golden, aromatic ghee.",
      },
      {
        title: "How is Bilona Ghee Different from Regular Ghee?",
        text: "Unlike commercial ghee that uses cream-separator machines, Bilona ghee preserves the full spectrum of fat-soluble vitamins (A, D, E, K2), CLA (Conjugated Linoleic Acid), and Omega-3 fatty acids. The slow-culture process retains beneficial probiotics and natural butyric acid — a short-chain fatty acid known to support gut health and reduce inflammation.",
      },
      {
        title: "Why A2 Milk Matters",
        text: "A2 milk from Gir cows contains only the A2 beta-casein protein, which is easier to digest and does not produce BCM-7 — a compound linked to digestive discomfort in many people. This makes Gauswarn A2 Ghee a healthier, more natural alternative to regular dairy ghee.",
      },
      {
        title: null,
        text: "100% Natural • Pure A2 Gir Cow Milk • Zero Chemicals • Zero Preservatives • Lab-Tested • FSSAI Certified",
      },
    ],
    image: tab1,
  },
  {
    key: "WhyChooseUs",
    label: "WHY CHOOSE US",
    heading: "Why Choose Gauswarn Over Other Ghee Brands?",
    content: [
      {
        title: "Single-Origin Gir Cow Milk",
        text: "We source A2 milk only from native Gir cows raised on organic, pesticide-free pastures. No cross-bred or hybrid breeds — ensuring the purest A2 protein in every drop.",
      },
      {
        title: "Authentic Hand-Churned Bilona Process",
        text: "Our ghee is made through the 5-step Bilona method: raw A2 milk → curd setting → hand-churning (Bilona) → butter extraction → slow wood-fire simmering. No shortcuts, no machines at the churning stage.",
      },
      {
        title: "Lab-Tested & FSSAI Certified",
        text: "Every batch is third-party lab-tested for purity, moisture content, and adulteration. We are fully FSSAI compliant — you get complete transparency with every purchase.",
      },
      {
        title: "Supports Digestion & Gut Health",
        text: "Rich in natural butyric acid, Gauswarn A2 Ghee helps nourish the intestinal lining, supports a healthy microbiome, and aids smooth digestion — recommended in Ayurveda for daily consumption.",
      },
      {
        title: "Boosts Brain Function & Immunity",
        text: "Loaded with Omega-3 fatty acids and fat-soluble vitamins, this ghee helps improve cognitive function, strengthens immunity, and provides sustained energy without inflammatory seed oils.",
      },
      {
        title: "Increases Stamina & Bone Strength",
        text: "Vitamin K2 in A2 ghee aids calcium absorption for stronger bones and joints. The healthy saturated fats provide long-lasting energy — making it ideal for athletes, growing children, and elderly nutrition.",
      },
    ],
    image: tab1,
  },
  {
    key: "KeyBenefits",
    label: "HOW TO USE",
    heading: "How to Use A2 Ghee in Daily Life?",
    content: [
      {
        title: "Everyday Cooking & Tadka",
        text: "Gauswarn A2 Ghee has a high smoke point (250°C), making it perfect for Indian cooking — dal tadka, roti, paratha, rice, curries, and deep frying. It adds a rich, nutty aroma without producing harmful free radicals like refined oils.",
      },
      {
        title: "Morning Empty Stomach (Ayurvedic Ritual)",
        text: "Take 1 teaspoon of warm A2 ghee on an empty stomach with lukewarm water. This traditional Ayurvedic practice helps lubricate the digestive tract, supports detoxification, and kickstarts your metabolism naturally.",
      },
      {
        title: "Children's Nutrition & Growth",
        text: "Add a spoon to your child's dal, khichdi, or chapati. The DHA and healthy fats in A2 ghee support brain development, bone growth, and provide essential calories for growing kids — a natural alternative to processed fats.",
      },
      {
        title: "Meditation & Spiritual Practices",
        text: "In Vedic tradition, pure cow ghee is used for diya lighting, havan, and as a sattvic food that calms the mind. Gauswarn A2 Ghee is ideal for spiritual practices, promoting mental clarity and inner peace.",
      },
      {
        title: "Ayurvedic Healing & Skincare",
        text: "Applied topically, A2 ghee moisturizes dry skin, soothes cracked heels, and nourishes lips naturally. Internally, it's used in Panchakarma therapy and traditional remedies for joint pain, eye health, and respiratory wellness.",
      },
      {
        title: "Bulletproof Coffee & Keto Diet",
        text: "Blend 1 tablespoon of Gauswarn A2 Ghee into your morning coffee for a creamy, energy-boosting bulletproof drink. Its MCT-friendly fat profile makes it a go-to for keto and low-carb lifestyles.",
      },
    ],
    image: tab1,
  },
  {
    key: "nutrition",
    label: "NUTRITION",
    heading: "Nutritional Profile of Gauswarn A2 Bilona Ghee",
    content: [
      {
        title: "Pure Energy & Healthy Fats",
        text: "Gauswarn A2 Gir Cow Ghee is a powerhouse of energy, providing 898.29 Kcal per 100g. Made using the traditional Bilona method, it is rich in short-chain and medium-chain fatty acids that are easily metabolized by the body. This pure desi ghee is free from trans-fats and added sugars, making it a perfect addition to a Keto or Paleo diet.",
      },
      {
        title: "Nutrition Facts (Per 100g Serving)",
        text: "Energy: 898.29 Kcal | Total Fat: 99.81g | Protein: 0g | Carbohydrate: 0g | Saturated Fat: 62.11g | Poly-unsaturated Fat: 3.58g | Mono-unsaturated Fat: 28.6g | Trans Fatty Acid: Nil | Cholesterol: 227mg | Added Sugar: 0mg | Sodium: 0mg",
      },
      {
        title: "Per 10g Serving (Typical Daily Intake)",
        text: "Energy: 89.8 Kcal | Total Fat: 9.98g | Saturated Fat: 6.21g | Poly-unsaturated Fat: 0.36g | Mono-unsaturated Fat: 2.86g | Cholesterol: 22.7mg. This balanced fat profile supports brain health, hormonal balance, and joint lubrication.",
      },
      {
        title: "Why Gauswarn Nutrition Stands Out",
        text: "Our A2 Ghee is lab-tested to ensure the highest quality. It contains zero trans-fat and is naturally rich in Vitamin A, D, E, and K2. The Bilona process ensures that the nutrition of Gir Cow milk is preserved, unlike industrial ghee. It's a gold standard for health-conscious consumers looking for authentic, nutrient-dense superfoods.",
      },
    ],
    image: tab1,
  },
];

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState(data[0].key);

  const active = data.find((item) => item.key === activeTab);

  return (
    <section aria-label="Product Details Tabs">
      {/* Tabs */}
      <div className="tabs mt-5" role="tablist">
        {data.map((item) => (
          <button
            key={item.key}
            role="tab"
            id={`tab-${item.key}`}
            aria-selected={activeTab === item.key}
            aria-controls={`tabpanel-${item.key}`}
            className={`tab-btn ${activeTab === item.key ? "active" : ""}`}
            onClick={() => setActiveTab(item.key)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* ANIMATED CONTENT */}
      <div
        className="content-wrapper fade-slide mx-4"
        role="tabpanel"
        id={`tabpanel-${active.key}`}
        aria-labelledby={`tab-${active.key}`}
      >
        <div className="image-box">
          <img
            src={active.image}
            alt={`Gauswarn A2 Bilona Gir Cow Ghee — ${active.label}`}
            width="320"
            height="320"
            decoding="async"
            loading="lazy"
          />
        </div>
        <div className="text-content">
          {active.heading && (
            <h2 className="tab-section-heading">{active.heading}</h2>
          )}
          {active.content.map((block, idx) => (
            <div key={idx} className="tab-content-block">
              {block.title && (
                <h3 className="tab-content-title">{block.title}</h3>
              )}
              <p className="tab-content-text">{block.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
