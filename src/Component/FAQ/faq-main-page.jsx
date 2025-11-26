import React from "react";
import "./faq-main-page.css";

const FAQMainPage = () => {
  return (
    <>
      <div>
        <h4 className="faq-title text-center mt-4 fw-bold">FAQ's</h4>
        <ul className="faq-main-list">
          <li>
            <b>Does Gir Cow Ghee have a shelf life?</b> <br />
            Unopened Gir Cow Ghee lasts 6–12 months. Once opened, consume within
            3–6 months.
          </li>

          <li>
            <b>Is Gir Cow Ghee suitable for vegans?</b> <br />
            No, Gir Cow Ghee is made from cow’s milk, so it is not vegan.
          </li>

          <li>
            <b>Is Gir Cow Ghee safe for people who are lactose intolerant?</b>
            <br />
            Yes. During the ghee-making process, lactose and milk solids are
            removed.
          </li>

          <li>
            <b>How should Gir Cow Ghee be stored?</b> <br />
            Store it in a cool, dry place away from sunlight. Keep the jar
            sealed.
          </li>

          <li>
            <b>Do you deliver at my location?</b> <br />
            Enter your pincode on our website to check service availability.
          </li>

          <li>
            <b>How can I track my order?</b> <br />
            Enter your order number + delivery pincode to see real-time updates.
          </li>

          <li>
            <b>How can I update or cancel my order?</b> <br />
            Contact support immediately. If the order is already shipped,
            changes may not be possible.
          </li>
        </ul>
      </div>
    </>
  );
};

export default FAQMainPage;
