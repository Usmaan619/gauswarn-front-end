import React, { useState } from "react";
import "./faq-main-page.css";

const FAQMainPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Does Gir Cow Ghee have a shelf life?",
      answer:
        "Unopened Gir Cow Ghee lasts 6–12 months. Once opened, consume within 3–6 months.",
    },
    {
      question: "Is Gir Cow Ghee suitable for vegans?",
      answer: "No, Gir Cow Ghee is made from cow's milk, so it is not vegan.",
    },
    {
      question: "Is Gir Cow Ghee safe for lactose intolerant people?",
      answer:
        "Yes. During ghee-making process, lactose and milk solids are removed.",
    },
    {
      question: "How should Gir Cow Ghee be stored?",
      answer: "Store in a cool, dry place away from sunlight. Keep jar sealed.",
    },
    {
      question: "Do you deliver at my location?",
      answer:
        "Enter your pincode on our website to check service availability.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Enter your order number + delivery pincode for real-time updates.",
    },
    {
      question: "How can I update or cancel my order?",
      answer:
        "Contact support immediately. Changes may not be possible after shipping.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Does Gir Cow Ghee have a shelf life?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Unopened Gir Cow Ghee lasts 6–12 months. Once opened, consume within 3–6 months.",
              },
            },
            {
              "@type": "Question",
              name: "Is Gir Cow Ghee suitable for vegans?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No, Gir Cow Ghee is made from cow's milk, so it is not vegan.",
              },
            },
            {
              "@type": "Question",
              name: "Is Gir Cow Ghee safe for lactose intolerant people?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. During the ghee-making process, lactose and milk solids are removed.",
              },
            },
            {
              "@type": "Question",
              name: "How should Gir Cow Ghee be stored?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Store in a cool, dry place away from sunlight. Keep the jar sealed.",
              },
            },
            {
              "@type": "Question",
              name: "Do you deliver at my location?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Enter your pincode on our website to check service availability.",
              },
            },
            {
              "@type": "Question",
              name: "How can I track my order?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Enter your order number and delivery pincode for real-time updates.",
              },
            },
            {
              "@type": "Question",
              name: "How can I update or cancel my order?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Contact customer support immediately. Changes may not be possible after shipping.",
              },
            },
          ],
        })}
      </script>

      <div className="faq-container">
        <div className="faq-header">
          <h4 className="faq-title">FAQ's</h4>
        </div>

        <div className="faq-content">
          <div className="faq-list">
            {faqData.map((faq, index) => (
              <div key={index} className="faq-item">
                <button aria-label={`Toggle FAQ answer for: ${faq.question}`}
                  className={`faq-question ${openIndex === index ? "active" : ""}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="question-text">{faq.question}</span>
                  <span className="faq-icon">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`faq-answer ${openIndex === index ? "open" : ""}`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQMainPage;
