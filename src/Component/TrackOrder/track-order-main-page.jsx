import React, { useState } from "react";
import "./track-order-main-page.css";
import ProductHeroSection from "../Products/product-hero-section";

const OrderTracking = () => {
  const [currentStep, setCurrentStep] = useState(3); 

  const orderSteps = [
    {
      id: 1,
      title: "Order Placed",
      description: "Your order has been confirmed",
      date: "14/Nov/2025",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Packed",
      description: "Your ghee is carefully packed",
      date: "14/Nov/2025",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Shipped",
      description: "On the way to your location",
      date: "14/Nov/2025",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13"></rect>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
      ),
    },
    {
      id: 4,
      title: "Out for Delivery",
      description: "Arriving today",
      date: "",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
    },
    {
      id: 5,
      title: "Delivered",
      description: "Enjoy your pure organic ghee",
      date: "",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      ),
    },
  ];

  const supportOptions = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      title: "Call Us",
      description: "Mon-Sat 9am-6PM",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      title: "Email Us",
      description: "24/7 Response",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      ),
      title: "WhatsApp",
      description: "Instant Support",
    },
  ];

  const getStepStatus = (index) => {
    if (index < currentStep) return "completed";
    if (index === currentStep) return "active";
    return "pending";
  };

  return (
    <>
      <ProductHeroSection />

      <div className="order-tracking-container">

        {/* TRACK BUTTON CARD */}
        <div className="d-flex justify-content-center">
          <div className="order-tracking-support-card w-xxl-25 my-5">
            <h3 className="order-tracking-support-card-title text-center">
              Track Your Order
            </h3>

            <div className="d-flex justify-content-center mt-5">
              <a target="_" href="https://panel.shipmozo.com/track-order/LBYfQgGFRljv1A249H87">
                <button type="submit" className="order-tracking-btn-cta">
                  Track Order
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* ORDER STATUS SECTION */}
        <div className="order-tracking-status-section">
          <h1 className="order-tracking-section-title">Order Status</h1>

          {/* PROGRESS BAR */}
          <div className="order-tracking-progress-wrapper" />

          {/* TIMELINE */}
          <div className="order-tracking-timeline-container">
            {orderSteps.map((step, index) => {
              const status = getStepStatus(index);

              return (
                <div key={step.id} className="order-tracking-timeline-item">
                  <div className="order-tracking-timeline-step">
                    <div className={`order-tracking-step-icon ${status}`}>
                      <div className="order-tracking-icon-wrapper">
                        {status === "completed" ? (
                          <svg className="order-tracking-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        ) : (
                          step.icon
                        )}
                      </div>
                    </div>

                    {index < orderSteps.length - 1 && (
                      <div className={`order-tracking-step-line ${status}`}></div>
                    )}
                  </div>

                  <div className="order-tracking-step-content">
                    <h3 className={`order-tracking-step-title ${status}`}>
                      {step.title}
                    </h3>

                    <p className={`order-tracking-step-description ${status}`}>
                      {step.description}
                    </p>

                    {step.date && <p className="order-tracking-step-date">{step.date}</p>}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CONTROL BUTTONS */}
          <div className="order-tracking-demo-controls">
            <button
              className="order-tracking-demo-btn"
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
            >
              Previous Step
            </button>

            <button
              className="order-tracking-demo-btn"
              onClick={() => setCurrentStep(Math.min(orderSteps.length - 1, currentStep + 1))}
              disabled={currentStep === orderSteps.length - 1}
            >
              Next Step
            </button>
          </div>
        </div>

        {/* SUPPORT SECTION */}
        <div className="order-tracking-support-section">
          <h2 className="order-tracking-support-title">Need Assistance?</h2>
          <p className="order-tracking-support-subtitle">Our team is here to help you</p>

          <div className="order-tracking-support-cards">
            {supportOptions.map((option, index) => (
              <div key={index} className="order-tracking-support-card">
                <div className="order-tracking-support-icon">{option.icon}</div>
                <h3 className="order-tracking-support-card-title">{option.title}</h3>
                <p className="order-tracking-support-card-description">{option.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default OrderTracking;
