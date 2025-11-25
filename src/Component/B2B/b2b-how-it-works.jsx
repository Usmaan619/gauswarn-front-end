// import React from "react";
// import "./b2b-styles/b2b-how-it-work.css";
// const B2bHowItWorks = () => {
//   const steps = [
//     {
//       title: "Submit Inquiry",
//       desc: "Fill the partnership form",
//       icon1: <path d="M14 2H6v20h12V8z" />,
//       icon2: <path d="M14 2v6h6" />,
//     },
//     {
//       title: "Get Quote",
//       desc: "Receive custom pricing",
//       icon1: <rect x="3" y="3" width="18" height="18" rx="2" />,
//       icon2: <path d="M3 9h18" />,
//     },
//     {
//       title: "Approve Order",
//       desc: "Approve terms & place order",
//       icon1: <path d="M22 11.08V12a10 10..." />,
//       icon2: <path d="M22 4L12 14..." />,
//     },
//     {
//       title: "Packaging + Dispatch",
//       desc: "Timely delivery at your location",
//       icon1: <rect x="1" y="3" width="15" height="13" />,
//       icon2: <path d="M16 8l4-4 4 4" />,
//     },
//   ];

//   return (
//     <section className="howItWorksSection">
//       <div className="container">
//         <h2 className="sectionTitle">How B2B Works</h2>
//         <p className="sectionSubtitle">Start your journey in 4 steps</p>

//         <div className="stepsGrid">
//           {steps.map((s, i) => (
//             <div key={i} className="stepCard">
//               <div className="stepIcon">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                   {s.icon1}
//                   {s.icon2}
//                 </svg>
//               </div>
//               <h3 className="stepTitle">{s.title}</h3>
//               <p className="stepDescription">{s.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default B2bHowItWorks;

import React from "react";
import {
  Package,
  TrendingUp,
  Shield,
  FileText,
  Calculator,
  CircleCheckBig,
  Truck,
} from "lucide-react";
import "./b2b-styles/b2b-how-it-work.css";

const PartnerSection = () => {
  const features = [
    {
      icon: <FileText size={28} strokeWidth={1.5} />,
      title: "Submit Inquiry",
      description:
        "Fill out our partnership form with your business details and requirements.",
    },
    {
      icon: <Calculator size={28} strokeWidth={1.5} />,
      title: "Get Custom Quote",
      description:
        "Receive personalized pricing based on your volume and product selection.",
    },
    {
      icon: <CircleCheckBig size={28} strokeWidth={1.5} />,
      title: "Approve & Place Order",
      description:
        "Review terms, approve the quotation, and confirm your bulk order.",
    },
    {
      icon: <Truck size={28} strokeWidth={1.5} />,
      title: "Packaging + Dispatch",
      description:
        "We handle quality packaging and ensure timely delivery to your location.",
    },
  ];

  return (
    <div className="b2b-how-partner-section">
      <div className="b2b-how-partner-container">
        <h1 className="b2b-how-partner-title">How B2B Works</h1>
        <p className="sectionSubtitle">Start your journey in 4 steps</p>

        <div className="b2b-how-features-grid">
          {features.map((feature, index) => (
            <div key={index} className="b2b-how-feature-card">
              <div className="b2b-how-icon-wrapper">{feature.icon}</div>
              <h3 className="b2b-how-feature-title">{feature.title}</h3>
              <p className="b2b-how-feature-description">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
