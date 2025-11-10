import React from "react";
import Image from "../../asset/img/FinalPay/GAUSWARN A2 GHEE.png";
import Image2 from "../../asset/img/Responsive/2.png";

const GheeLabel = () => {
  return (
    <div className="p-sm-2 p-md-5">
      <div className="ghee-label">
      <div className="container">
        
        <div className="row">
          <div className="text-center">
          <p className="fs-1 fw-bold text-color-pullman-green mt-5">
            {/* Ghee - The Heart of Every Meal */}
          </p>
        </div>
          <div className="col-lg-6 py-5">
           
            <div className="ghee-label-image d-flex justify-content-end align-items-center">
              <img
                src={Image2}
                alt="Churning butter"
              />
            </div>
            
          </div>
          <div className="col-lg-4 d-flex justify-content-center align-items-center py-5">
            <div className="nutrition-info">
              <div className="nutrition-logo m-auto pb-2">
                <img src={Image} alt="Product" className="w-100 h-100" />
              </div>
              <div className="px-2 fs-6 fw-bold text-color-pullman-green">
                Nutrition Information
              </div>
              <table>
                <tbody>
                  <tr>
                    <td>Moisture</td>
                    <td className="text-end fw-semibold">0.060%</td>
                  </tr>
                  <div className="ghee"></div>
                  <tr>
                    <td>Ash</td>
                    <td className="text-end fw-semibold">&lt;0.05%</td>
                  </tr>
                  <tr>
                    <td>Fat</td>
                    <td className="text-end fw-semibold">99.94%</td>
                  </tr>
                  <tr>
                    <td>Carbohydrate</td>
                    <td className="text-end fw-semibold">&lt;0.02%</td>
                  </tr>
                  <tr>
                    <td>Energy Value</td>
                    <td className="text-end fw-semibold">899.46 Kcal/100gms</td>
                  </tr>
                </tbody>
              </table>

              <div className="footer">
                <p className="fw-bold">
                  Marketed & Manufactured by Rajlakshmi Jaiviks International
                </p>
                <address>
                  11, Manish Bagh Colony, Behind Vikram Tower, Sapna Sangeeta
                  Road, Indore, Madhya Pradesh, 452001, India.
                </address>
                <p>Contact: +91-87692-15905</p>
                <p>Email: contact@rajlakshmijaiviks.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default GheeLabel;
