import React from "react";
import GheeImage from "../../asset/img/GirCowImg/123 (1).png"; // Replace with the actual image path

const ComparisonCard = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-lg-6 col-md-12 p-4 bg-dark text-light rounded-start">
          <h2 className="mb-4">GIR COW GHEE</h2>
          <ul className="list-unstyled">
            <li>
               Gir cow, an indigenous Indian breed known for producing milk
            </li>
            <li>Generally easier to digest due to protein</li>
            <li>
              Often prepared using the traditional Bilona method (hand-churned,
              slow-cooked)
            </li>
            <li>
              Highly valued in Ayurveda for its healing and medicinal properties
            </li>
            <li>
              Long shelf life due to natural antioxidants; can be stored at room
              temperature
            </li>
            <li>
              Higher cost due to selective breed and traditional processing
            </li>
          </ul>
        </div>
        {/* Image Section */}
        <div className="text-center mt-4">
          <img
            src={GheeImage}
            alt="Gir Cow Ghee"
            className="img-fluid"
            style={{ maxWidth: "300px", borderRadius: "8px" }}
          />
        </div>sa

        {/* Right Section */}
        <div className="col-lg-6 col-md-12 p-4 bg-light text-dark rounded-end">
          <h2 className="mb-4">OTHER COW GHEE</h2>
          <ul className="list-unstyled">
            <li>
              Usually from crossbred or mixed dairy cows, producing A1 or mixed
              A1/A2 milk
            </li>
            <li>
              May be harder to digest for people with A1 protein sensitivity
            </li>
            <li>
              Commercially produced ghee may use machine processing, affecting
              nutrient quality
            </li>
            <li>Not always preferred in Ayurveda for health effects</li>
            <li>Shelf life varies with processing and storage conditions</li>
            <li>Generally more affordable and widely available</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ComparisonCard;
