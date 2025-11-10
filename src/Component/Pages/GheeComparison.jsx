import React from "react";
import gheeImage from "../../asset/img/Ghee/difference.png";
import versus from "../../asset/img/Icons/versus.png";

const GheeComparison = () => {
  return (
    <div className="ghee-comparison position-relative text-color-white height-100vh">
      <div className="section background-color-pullman-green">
        <div
          className="text-center font-size-27 text-color-eggshell fw-bold"
          data-aos="fade-right"
        >
          GIR COW GHEE
        </div>
        <ul className="ul px-2">
          <li
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1700"
          >
            Generally easier to digest due to protein
          </li>
          <li
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            Often prepared using the traditional Bilona method (hand-churned,
            slow-cooked)
          </li>
          <li
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            Highly valued in Ayurveda for its healing and medicinal properties
          </li>
          <li
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            Long shelf life due to natural antioxidants; can be stored at room
            temperature
          </li>
          <li
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            Higher value due to selective breed, traditional processing, and
            perceived health benefits
          </li>
        </ul>
      </div>
      <div className="section background-color-eggshell">
        <div
          className="text-center font-size-27 text-color-pullman-green fw-bold"
          data-aos="fade-left"
        >
          OTHER COW GHEE
        </div>
        <ul className="ul p-2">
          <li
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
            className="text-dark"
          >
            Usually from crossbred or mixed dairy cows, which may produce or
            other milk
          </li>
          <li
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="20000"
            className="text-dark"
          >
            May be harder to digest for people with A1 protein sensitivity
          </li>
          <li
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
            className="text-dark"
          >
            Commercially produced ghee involves modern processing, reducing
            nutrient quality
          </li>
          <li
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
            className="text-dark"
          >
            Factories perform this process, adding other flavors, additives, or
            flavors to enhance taste
          </li>
          <li
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
            className="text-dark"
          >
            Shorter shelf life due to synthetic processing or modern storage
            conditions
          </li>
          {/* <li data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000">Generally more affordable but less widely available</li> */}
        </ul>
      </div>
      <img src={versus} alt="Ghee Jar" className="versus-image" />
      <img src={gheeImage} alt="Ghee Jar" className="ghee-image" />
    </div>
  );
};

export default GheeComparison;
