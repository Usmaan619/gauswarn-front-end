import React from "react";
// import FooterTopImg from "../../asset/img/Background/footer2.png";
import Footer2 from "../Common/Footer/index2";
import Image from "../../asset/img/Policy/shipping.png";

const Shipping = () => {
  return (
    <>
      <div className="privacy">
        <div className="shipping-heading policy-bg d-flex justify-content-center align-items-center text-light text-center text-uppercase">
          <div className="w-100 h-100">
            <img src={Image} alt="" className="mb-2 w-100 h-100" />
          </div>
        </div>
        <div className="container privacy-list py-5">
          <ul className="fs-5 w-75 m-auto">
            <li>
            <b>Processing Time </b>
              <ul>
                <li>
                  All orders will be devliverd  within ,
                  5-10 Working days.
                </li>
                <li>
                  Orders are not shipped or delivered on weekends or holidays.
                </li>
                <li>
                  If we experience a high volume of orders, shipments may be
                  delayed. In such cases, we will notify you via email or phone.
                </li>
              </ul>
            </li>

            <li>
            <b>Shipping Confirmation & Order Tracking </b>
              <ul>
                <li>
                  You will receive a shipment confirmation email once your order
                  has shipped, containing a tracking number and a link to track
                  your package.
                </li>
                <li>
                  Non-personal information is automatically collected as you
                  interact with our website through the use of cookies, web
                  beacons, and other tracking technologies.
                </li>
              </ul>
            </li>

            <li>
              <b>Damages </b>
              <ul>
                <li>
                  Gauswarn is not responsible for products damaged or lost
                  during shipping. If you received your order in a damaged
                  condition, please contact the shipment carrier or our support
                  team to file a claim.
                </li>
                <li>
                  Please save all packaging materials and damaged goods before
                  filing a claim.
                </li>
              </ul>
            </li>
            <li>
             <b> Undeliverable Packages</b>
              <ul>
                <li>
                  If a package is returned to us as undeliverable due to an
                  incorrect address provided by the customer, additional
                  shipping charges may apply for reshipping.
                </li>
              </ul>
            </li>
            <li>
             <b> Contact Us</b> <br />
              For questions about shipping or issues with your order, please
              contact us:
              <ul>
                <li>Email: rajlaxmiorganicfoods@gmail.com</li>
                <li>Phone: +91 8769115905</li>
                <li>Business Hours: Mon to Sat 10Am to 8Pm</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default Shipping;
