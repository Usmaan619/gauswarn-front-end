import { useState } from "react";
import "./profileSection.css";
import tab1 from "../../asset/new-img/tabs/tabs1.jpg";

const data = [
  {
    key: "description",
    label: "DESCRIPTION",
    content: `Discover the golden purity of Premium A2 Desi Cow Ghee, made the traditional way for everyday health and nourishment.
Prepared using the slow Bilona method from the milk of grass-fed Gir cows, every spoon has a rich aroma, natural taste, and the comfort of homemade ghee. Nothing rushed, nothing artificial — just pure care in every step.
Made from pure A2 milk, this ghee naturally supports digestion, immunity, and overall well-being. There are no chemicals, no preservatives, and no shortcuts — only honest ghee you can trust for your family.
Whether you’re cooking daily meals or simply choosing better for your home, our ghee brings tradition, purity, and warmth to your kitchen — every day.
100% Natural • A2 Milk • Chemical-Free • Traditionally Made`,
    image: tab1,
  },
  {
    key: "WhyChooseUs",
    label: "WHY CHOOSE US",
    content: `✓ Improves Digestion
Helps support a healthy and comfortable digestive system.
✓ Supports Immunity
Nourishing fats that naturally assist your body’s defense.
✓ Increases Stamina
Provides steady energy for daily activities.
✓ Boosts Brain Health
Healthy fats that support focus and mental clarity.
✓ Pure A2 Nutrients
Made from A2 milk of Gir cows using the traditional Bilona method.`,
    image: tab1,
  },

  {
    key: "KeyBenefits",
    label: "KEY BENEFITS",
    content: `✓ Cooking
Adds natural flavor and richness to everyday meals.
✓ Morning Empty Stomach
A gentle start to the day with pure, nourishing ghee.
✓ Kids Nutrition
Supports growing children with healthy fats.
✓ Meditation
Helps create calmness and balance during spiritual practices.
✓ Ayurvedic Healing
Traditionally used for soothing, cleansing, and wellness routines.`,
    image: tab1,
  },
];

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState(data[0].key);

  const active = data.find((item) => item.key === activeTab);

  return (
    <>
      {/* Tabs */}
      <div className="tabs mt-5">
        {data.map((item) => (
          <button
            key={item.key}
            className={`tab-btn ${activeTab === item.key ? "active" : ""}`}
            onClick={() => setActiveTab(item.key)}
            aria-label={item.label}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* ANIMATED CONTENT */}
      <div className="content-wrapper fade-slide mx-4">
        <div className="image-box">
          <img src={active.image} alt={active.label} />
        </div>
        <div className="text-content">{active.content}</div>
      </div>
    </>
  );
}
