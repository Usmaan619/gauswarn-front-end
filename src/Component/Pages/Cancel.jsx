import React from "react";
// import { MdCancelScheduleSend } from "react-icons/md";
// import FooterTopImg from "../../asset/img/Background/footer2.png";
import Image from "../../asset/img/Policy/terms.png";
import Footer2 from "../Common/Footer/index2";

const Cancel = () => {
  return (
    <>
      <div className="cancel">
        <div className="cancel-heading policy-bg d-flex justify-content-center text-light text-center text-uppercase">
          <img src={Image} alt="" className="mb-2 w-100 h-100" />
        </div>
        <div className="container refund-list py-5 w-75 m-auto">
          <p className="fs-5 fw-bold">
            We strive to ensure that our customers are completely satisfied with
            their purchases. If you are not fully satisfied with your order, we
            offer a refund period for most products, subject to the following
            terms and conditions:
          </p>
          <ul className="fs-5">
            <li>Eligibility for Refunds:</li>
            <li>
              To qualify for a refund, products must be unused, in their
              original condition, and in the original packaging.
            </li>
            <li>
              Certain products, such as [list any exceptions, e.g., personalized
              items, digital downloads, perishable goods], are non-refundable.
            </li>
            <li>
              Refund requests must be submitted within [ ] of receiving the
              product.
            </li>
            <li>How to Request a Refund:</li>
            <li>
              Contact us at [your contact email/phone number] with your order
              number and a description of the issue.
            </li>
            <li>
              We may ask for additional information, such as photographs of the
              item, to process your refund.
            </li>
            <li>Refund Method:</li>
            <li>
              Once your return is approved, a refund will be issued to your
              original payment method within [ ].
            </li>
            <li>
              Please note that shipping charges are non-refundable, and you will
              be responsible for return shipping costs unless the product was
              defective or an error occurred on our part.
            </li>
          </ul>
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default Cancel;
