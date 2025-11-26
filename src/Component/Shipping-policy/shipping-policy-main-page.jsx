import React from "react";
import "./shipping-policy-main-page.css";

const ShippingPolicy = () => {
  return (
    <>
      <div className="">
        <div className="shipping-policy-main ">
          <h4 className="d-flex justify-content-center mt-4 fw-bold">
            Shipping & Delivery Policy
          </h4>
          <ul className=" m-auto">
            <li>
              <b>Processing Time </b>
              <ul>
                <li>
                  All orders will be devliverd within , 5-10 Working days.
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
    </>
  );
};

export default ShippingPolicy;
