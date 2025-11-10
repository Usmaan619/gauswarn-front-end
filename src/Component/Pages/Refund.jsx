import React from "react";
// import { RiRefund2Line } from "react-icons/ri";
// import FooterTopImg from "../../asset/img/Background/footer2.png";
import Footer2 from "../Common/Footer/index2";
import Image from "../../asset/img/Policy/refund.png";

const Refund = () => {
  return (
    <>
      <div className="refund border">
        <div className="refund-heading text-light d-flex justify-content-center text-center text-uppercase">
          <img src={Image} alt="" className="mb-2 w-100 h-100" />
        </div>
        {/* <div className="container refund-list py-5 w-75 m-auto">
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
        </div> */}
        <div className="container refund-list py-5 w-75 m-auto">
          <p className="fw-bold h4">
            Once an order is confirmed, GAUSWARN will not accept return or
            refund requests . However, in any of the below situations, we are
            more than happy to work with our patrons to find an amicable
            solution that is fair to all parties.
          </p>
          <br />
          <ul className="fs-5">
            <b>In case of Return & Exchange</b>
            <br />
            <li>Return/exchange will be done with in 5 working days.</li>
            <li>
              If refund is approved it will be credited within 7-10 working days
              to original payment method.
            </li>
            <br />
            <b> In case of Damaged product </b>
            <br />
            <li className="mt-2">
              {" "}
              GAUSWARN needs to be notified of damaged product within 2 days
              from delivery date via email to rajlaxmiorganicfoods@gmail.com
            </li>
            <li>
              {" "}
              In the email, order number, image of invoice, 1 outer box image, 2
              clear images & we also need unboxing videos of damaged products to
              be sent.
            </li>
            <li>
              {" "}
              In case of multiple item shipments, only the affected product can
              be returned and replaced.
            </li>
            <li>
              We will be happy to re-send and replace the product(s) promptly
              and we will work with you on providing an amicable solution.
            </li>
            <li>
              {" "}
              Email will be responded to within 24-48 hrs and full assistance
              will be provided thereafter.
            </li>
            <br />
            <b> In case of Missing product</b>

            <li className="mt-2">
              {" "}
              GAUSWARN needs to be notified of missing product within 2 days
              from delivery date via email to rajlaxmiorganicfoods@gmail.com{" "}
            </li>
            <li>
              In the email, order number, image of the invoice, 1 outer box
              image, 2 clear images of the opened box & unboxing video with all
              items received to be sent.
            </li>
            <li>
              {" "}
              We will be unable to accept a refund request. But, we will be
              happy to promptly re-send the missing product
            </li>
            <li>
              {" "}
              Email will be responded to within 24-48 hrs and full assistance
              will be provided thereafter.
            </li>
            <br />
            <b> In case of spoiled product </b>
            <li className="mt-2">
              {" "}
              GAUSWARN needs to be notified of spoilage of product within 2 days
              from delivery date via email to rajlaxmiorganicfoods@gmail.com{" "}
            </li>
            <li>
              In the email, order number, date of packaging/ date of
              manufacture, clear images or video of the product to be shared
            </li>
            <li>
              {" "}
              We will be unable to accept returns due to variance in taste,
              texture, colour or aroma. This is because our products are
              completely natural and made mostly by hand so no two batches will
              be identical. No compromise is made in the natural production
              process, use of best and natural ingredients and we will ensure
              that maximum nutritional value is retained{" "}
            </li>
            <li>We will work with you on providing an amicable solution.</li>
            <li>
              {" "}
              Product will be replaced after due investigation and diligence and
              we assure a fair outcome at all times. Email will be responded to
              within 24-48 hrs, and full assistance will be provided thereafter.
            </li>
          </ul>
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default Refund;
