import { useState } from "react";
import "./profileSection.css";
import tab1 from "../../asset/new-img/tabs/tabs1.jpg";

const data = [
  {
    key: "description",
    label: "DESCRIPTION",
    content: `Discover the golden essence of purity with Premium A2 Desi Cow Ghee — your all-natural source of nourishment, energy, and wellness.
Handcrafted using the traditional Bilona method from grass-fed Gir cow’s milk, each spoonful is rich in aroma, taste, and nutrition — just like homemade ghee.
This pure A2 Ghee is packed with essential fatty acids, antioxidants, and vitamins that support digestion, enhance immunity, and boost overall vitality — without any preservatives or chemicals.
Whether you’re cooking, meditating, or caring for your family’s health, our ghee adds a touch of tradition and purity to every meal, every day.
✅ 100% Natural | A2 Milk | Chemical-Free | Gluten-Free | Traditionally Made`,
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
    content: `* Cooking
Adds natural flavor and richness to everyday meals.
* Morning Empty Stomach
A gentle start to the day with pure, nourishing ghee.
* Kids Nutrition
Supports growing children with healthy fats.
* Meditation
Helps create calmness and balance during spiritual practices.
* Ayurvedic Healing
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
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* ANIMATED CONTENT */}
      <div className="content-wrapper fade-slide mx-4">
        <div className="image-box">
          <img src={active.image} alt="" />
        </div>
        <div className="text-content">{active.content}</div>
      </div>
    </>
  );
}
