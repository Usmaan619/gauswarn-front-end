import Faq from "react-faq-component";
import Footer2 from "../Common/Footer/index2";

import React from "react";
const faq = () => {
  const data = {
    title: "FAQ's",
    rows: [
      {
        title: "Does Gir Cow Ghee have a shelf life?",
        content:
          "Unopened Gir Cow Ghee can typically last for 6 months to 1 year when stored properly in a cool, dry place. Once opened, it's best to consume it within 3 to 6 months, depending on storage conditions. ",
      },
      {
        title: "Is Gir Cow Ghee suitable for vegans?",
        content:
          "No, Gir Cow Ghee is made from cow's milk and is not suitable for vegans, as it is an animal-derived product. However, it can be an excellent addition to a dairy-friendly or vegetarian diet.",
      },
      {
        title: "Is Gir Cow Ghee safe for people who are lactose intolerant?",
        content:
          "Yes, Gir Cow Ghee is generally considered safe for people with lactose intolerance. During the process of making ghee, the milk solids and lactose are removed, leaving behind only the clarified butter, which does not contain significant amounts of lactose. However, if you have a dairy allergy, it's best to consult with a healthcare provider before consuming any type of ghee.",
      },
      {
        title: "How should Gir Cow Ghee be stored?",
        content:
          "Gir Cow Ghee should be stored in a cool, dry place, away from direct sunlight. It can be kept at room temperature for up to several weeks or refrigerated for longer shelf life. Make sure to always use a clean, dry spoon to avoid contamination.",
      },
      {
        title: "Do you Deliver at my location?",
        content:
          "We have a broad delivery network. Simply enter your zip code on our website to check if we serve your location.",
      },
      {
        title: "How can I track my order?",
        content:
          "You can easily track your order’s progress through our website. Just enter your order number and delivery zip code to get real-time updates.",
      },
      {
        title: "How Can I update or cancel my order?",
        content:
          "For order modifications or cancellations, please contact our customer service promptly. While we’ll do our best to assist, please note changes may not be possible if the order is already processed and shipped.",
      },
    ],
  };

  return (
    <>
      <div className="m-5">
        <Faq data={data} />
      </div>
      <Footer2 />
    </>
  );
};
export default faq;
