import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { environment } from "../../environment/environment";
import "./contact-main-page.css";
import ProductHeroSection from "../Products/product-hero-section";
import Seo from "../SEO/Seo";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${environment?.API_BASE_URL}/users/contact`,
        data,
      );

      toast.success("Form submitted successfully!", {
        position: "top-center",
        autoClose: 3000,
      });

      reset();
    } catch (error) {
      toast.error("Failed to submit the form. Please try again.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <Seo
        title="Contact Gauswarn India | A2 Cow Ghee"
        description="Get in touch with Gauswarn India for orders, support and wholesale inquiries."
        url="https://gauswarn.com/contact"
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Gauswarn India",
          url: "https://gauswarn.com/contact",
          mainEntity: {
            "@type": "Organization",
            name: "Gauswarn India",
            url: "https://gauswarn.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "11 Manish Baag, Sapna Sangeeta Road",
              addressLocality: "Indore",
              addressRegion: "MP",
              postalCode: "452001",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-7470915905",
              contactType: "customer support",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi"],
            },
          },
        })}
      </script>

      <ProductHeroSection />

      <div className="ghee-new-contact-section">
        <div className="container py-4">
          <div className="row">
            <h2 className="ghee-new-contact-title">Contact Us</h2>

            {/* FORM LEFT */}
            <div className="col-lg-8 col-md-12 mb-5">
              <div className="contact-header">
                <h2>Have any question?</h2>
                <p>
                  For dealership enquiries or product-related questions, feel
                  free to reach us through the form below.
                </p>
              </div>

              <div className="ghee-new-contact-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* NAME + EMAIL */}
                  <div className="ghee-new-form-row">
                    <div className="ghee-new-form-field">
                      <label className="sr-only" htmlFor="user_name">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Name"
                        {...register("user_name", {
                          required: "Name is required",
                        })}
                      />
                      {errors.user_name && (
                        <small className="ghee-new-error-text">
                          {errors.user_name.message}
                        </small>
                      )}
                    </div>

                    <div className="ghee-new-form-field">
                      <label className="sr-only" htmlFor="user_email">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Email"
                        {...register("user_email", {
                          required: "Email is required",
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Invalid email address",
                          },
                        })}
                      />
                      {errors.user_email && (
                        <small className="ghee-new-error-text">
                          {errors.user_email.message}
                        </small>
                      )}
                    </div>
                  </div>

                  {/* PHONE + SUBJECT */}
                  <div className="ghee-new-form-row">
                    <div className="ghee-new-form-field">
                      <label className="sr-only" htmlFor="user_mobile">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        {...register("user_mobile", {
                          required: "Phone number is required",
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Phone number must be 10 digits",
                          },
                        })}
                      />
                      {errors.user_mobile && (
                        <small className="ghee-new-error-text">
                          {errors.user_mobile.message}
                        </small>
                      )}
                    </div>

                    <div className="ghee-new-form-field">
                      <label className="sr-only" htmlFor="user_subject">
                        Subject
                      </label>
                      <input
                        type="text"
                        placeholder="Subject"
                        {...register("user_subject", {
                          required: "Subject is required",
                        })}
                      />
                      {errors.user_subject && (
                        <small className="ghee-new-error-text">
                          {errors.user_subject.message}
                        </small>
                      )}
                    </div>
                  </div>

                  {/* MESSAGE */}
                  <div className="ghee-new-form-row full">
                    <div className="ghee-new-form-field">
                      <label className="sr-only" htmlFor="user_message">
                        Message
                      </label>
                      <textarea
                        placeholder="Message"
                        rows="6"
                        {...register("user_message", {
                          required: "Message is required",
                        })}
                      />
                      {errors.user_message && (
                        <small className="ghee-new-error-text">
                          {errors.user_message.message}
                        </small>
                      )}
                    </div>
                  </div>

                  <button
                    aria-label="Submit contact form"
                    type="submit"
                    className="ghee-new-btn-cta"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>

            {/* RIGHT SIDE DETAILS */}
            <div className="col-lg-4">
              <div className="ghee-new-contact-details-box">
                <div className="ghee-new-details-item">
                  <h4>
                    <i className="fas fa-map"></i> Manufacturing Unit
                  </h4>
                  <p className="text-capitalize">
                    s no 174, near gaytri mandir, behind kanchan stone dtc,
                    alankapuram road, pune - 412105
                  </p>
                </div>

                <div className="ghee-new-details-item">
                  <h4>
                    <i className="fas fa-map"></i> Corporate Office
                  </h4>
                  <p>11 Manish Baag, Sapna Sangeeta Road, Indore, MP 452001</p>
                </div>

                <div className="ghee-new-details-item">
                  <h4>
                    <i className="far fa-clock"></i> Office Hours
                  </h4>
                  <p>
                    Mon - Sat: 10 AM to 8 PM <br /> Sun: Closed
                  </p>
                </div>

                <div className="ghee-new-details-item">
                  <h4>
                    <i className="fas fa-address-book"></i> Contact
                  </h4>
                  <p>
                    Phone: +91-74709-15905,+91-9685715905 <br />
                    Email: info@gauswarn.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAP */}
      <div className="ghee-new-map-section">
        <iframe
          title="ghee-new-map-section"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.756483627257!2d75.86814137476085!3d22.700107428286067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fce21e4694af%3A0xa8938712e4fc840d!2sIndore!"
          height="450"
          loading="lazy"
          style={{ width: "100%", border: "0" }}
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
