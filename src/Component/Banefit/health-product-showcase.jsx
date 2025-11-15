import HealthBenefitsGrid from "./health-benefits-grid";
import "./health-product-showcase.css";

export default function HealthProductShowcase() {
  return (
    <section className="health-product-showcase">
      <div className="health-showcase-container">
        {/* Left side - Product image and kitchen scene */}
        <div className="health-product-section">
          <div className="health-product-image-wrapper">
            {/* <img
              src="/ghee-jar-in-kitchen-with-fresh-vegetables.jpg"
              alt="Ghee product with kitchen background"
              className="health-product-image"
            /> */}
          </div>
        </div>

        {/* Right side - Health Benefits Grid */}
        <div className="health-benefits-section">
          <HealthBenefitsGrid />
        </div>
      </div>
    </section>
  );
}
