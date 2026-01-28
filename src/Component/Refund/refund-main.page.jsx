import "./refund-main-page.css";

const RefundMainPage = () => {
  return (
    <div className="refund-container">
      <div className="refund-header">
        <h4 className="refund-title">Refund Policy</h4>
      </div>

      <div className="refund-content">
        <div className="refund-intro">
          <p>
            Once an order is confirmed, GAUSWARN will not accept return or
            refund requests. However, in any of the below situations, we are
            more than happy to work with our patrons to find an amicable
            solution that is fair to all parties.
          </p> 
        </div>

        <div className="refund-sections">
          {/* Return & Exchange */}
          <div className="refund-section">
            <h5 className="section-title">🔄 In case of Return & Exchange</h5>
            <ul className="section-list">
              <li>
                Return/exchange will be done within{" "}
                <strong>5 working days</strong>.
              </li>
              <li>
                If refund is approved it will be credited within{" "}
                <strong>7-10 working days</strong>
                to original payment method.
              </li>
            </ul>
          </div>

          {/* Damaged Product */}
          <div className="refund-section">
            <h5 className="section-title">💥 In case of Damaged product</h5>
            <ul className="section-list">
              <li>
                GAUSWARN needs to be notified of damaged product within{" "}
                <strong>2 days</strong>
                from delivery date via email to{" "}
                <a
                  href="mailto:rajlaxmiorganicfoods@gmail.com"
                  className="email-link"
                >
                  rajlaxmiorganicfoods@gmail.com
                </a>
              </li>
              <li>
                In the email, order number, image of invoice, 1 outer box image,
                2 clear images & unboxing videos of damaged products to be sent.
              </li>
              <li>
                In case of multiple item shipments, only the affected product
                can be returned and replaced.
              </li>
              <li>
                We will be happy to re-send and replace the product(s) promptly
                and work with you on providing an amicable solution.
              </li>
              <li>
                Email will be responded to within <strong>24-48 hrs</strong> and
                full assistance will be provided thereafter.
              </li>
            </ul>
          </div>

          {/* Missing Product */}
          <div className="refund-section">
            <h5 className="section-title">📦 In case of Missing product</h5>
            <ul className="section-list">
              <li>
                GAUSWARN needs to be notified of missing product within{" "}
                <strong>2 days</strong>
                from delivery date via email to{" "}
                <a
                  href="mailto:rajlaxmiorganicfoods@gmail.com"
                  className="email-link"
                >
                  rajlaxmiorganicfoods@gmail.com
                </a>
              </li>
              <li>
                In the email, order number, image of the invoice, 1 outer box
                image, 2 clear images of the opened box & unboxing video with
                all items received to be sent.
              </li>
              <li>
                We will be unable to accept a refund request. But, we will be
                happy to promptly re-send the missing product.
              </li>
              <li>
                Email will be responded to within <strong>24-48 hrs</strong> and
                full assistance will be provided thereafter.
              </li>
            </ul>
          </div>

          {/* Spoiled Product */}
          <div className="refund-section">
            <h5 className="section-title">🍲 In case of Spoiled product</h5>
            <ul className="section-list">
              <li>
                GAUSWARN needs to be notified of spoilage of product within{" "}
                <strong>2 days</strong>
                from delivery date via email to{" "}
                <a
                  href="mailto:rajlaxmiorganicfoods@gmail.com"
                  className="email-link"
                >
                  rajlaxmiorganicfoods@gmail.com
                </a>
              </li>
              <li>
                In the email, order number, date of packaging/manufacture, clear
                images or video of the product to be shared.
              </li>
              <li>
                We will be unable to accept returns due to variance in taste,
                texture, colour or aroma. Our products are completely natural
                and made mostly by hand so no two batches will be identical.
              </li>
              <li>We will work with you on providing an amicable solution.</li>
              <li>
                Product will be replaced after due investigation. Email will be
                responded to within
                <strong>24-48 hrs</strong>, and full assistance will be provided
                thereafter.
              </li>
            </ul>
          </div>
        </div>

        <div className="refund-contact">
          <p className="contact-note">
            <strong>📧 Contact:</strong>{" "}
            <a
              href="mailto:rajlaxmiorganicfoods@gmail.com"
              className="email-link"
            >
              rajlaxmiorganicfoods@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundMainPage;
