import "./refund-main-page.css";
const RefundMainPage = () => {
  return (
    <>
      <div>
        <h4 className="d-flex justify-content-center mt-4 fw-bold">
          Refund Policy
        </h4>
        <div className=" refund-list-main  m-auto">
          <p>
            Once an order is confirmed, GAUSWARN will not accept return or
            refund requests . However, in any of the below situations, we are
            more than happy to work with our patrons to find an amicable
            solution that is fair to all parties.
          </p>
          <br />
          <ul>
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
            <li>
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

            <li>
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
            <li>
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
    </>
  );
};

export default RefundMainPage;
