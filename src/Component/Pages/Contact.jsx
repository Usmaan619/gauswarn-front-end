import React from "react";
import { useForm } from "react-hook-form";
import Button from "../Common/Button";
import Footer2 from "../Common/Footer/index2";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { environment } from "../../environment/environment";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        `${environment?.API_BASE_URL}/users/contact`,
        data
      );
      toast.success("Form submitted successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
      console.log(response.data);
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit the form. Please try again.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      {/* Rest of your JSX remains the same */}
      <div className="breadcrumb-section breadcrumb-bg"></div>
      {/* Contact Form Section */}
      <div
        className="contact-from-section"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div className="container py-4">
          <div className="row">
            <div className="breadcrumb-text">
              <h1 className="text-black d-flex justify-content-center">
                Contact us
              </h1>
            </div>
            <div className="col-lg-8 col-md-12 mb-5 mb-lg-0">
              <div className="form-title">
                <h2>Have you any question?</h2>
                <p>
                  To enquire about dealership or about any query regarding
                  product, feel free to reach us out through the contact form
                  below.
                </p>
              </div>
              <div className="contact-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <p>
                    <span className="me-2">
                      <input
                        type="text"
                        placeholder="Name"
                        {...register("user_name", {
                          required: "Name is required",
                          maxLength: 50,
                        })}
                      />
                      {errors.name && (
                        <small className="text-danger">
                          {errors.user_name.message}
                        </small>
                      )}
                    </span>

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
                    {errors.email && (
                      <small className="text-danger">
                        {errors.user_email.message}
                      </small>
                    )}
                  </p>
                  <p>
                    <span className="me-2">
                      <input
                        type="tel"
                        placeholder="Phone"
                        {...register("user_mobile", {
                          required: "Phone number is required",
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Invalid phone number",
                          },
                        })}
                      />
                      {errors.phoneNumber && (
                        <small className="text-danger">
                          {errors.user_mobile.message}
                        </small>
                      )}
                    </span>
                    <input
                      type="text"
                      placeholder="Subject"
                      {...register("user_subject", {
                        required: "Subject is required",
                      })}
                    />
                    {errors.subject && (
                      <small className="text-danger">
                        {errors.user_subject.message}
                      </small>
                    )}
                  </p>
                  <p>
                    <textarea
                      placeholder="Message"
                      {...register("user_message", {
                        required: "Message is required",
                      })}
                      cols="30"
                      rows="10"
                    ></textarea>
                    {errors.message && (
                      <small className="text-danger">
                        {errors.user_message.message}
                      </small>
                    )}
                  </p>
                  <p>
                    <Button title="Submit" />
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Details */}
            <div
              className="col-lg-4"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="contact-form-wrap">
                <div className="contact-form-box">
                  <h4>
                    <i className="fas fa-map"></i> Manufacturing Unit
                  </h4>
                  <p class="text-capitalize">
                    s no 174, near gaytri mandir, behind kanchan stone dtc,
                    alankapuram road wadmukh, alandi rural, pune, maharashtra -
                    412105
                  </p>
                </div>
                <div className="contact-form-box">
                  <h4>
                    <i className="fas fa-map"></i> Corporate Office
                  </h4>
                  <p>
                    11 Manish Baag, Sapna Sangeeta Road, Indore, Madhya Pradesh
                    452001
                  </p>
                </div>
                <div className="contact-form-box">
                  <h4>
                    <i className="far fa-clock"></i> Office Hours
                  </h4>
                  <p>
                    Mon - Sat: 10 AM to 8 PM <br /> Sun : Close
                  </p>
                </div>
                <div className="contact-form-box">
                  <h4>
                    <i className="fas fa-address-book"></i> Contact
                  </h4>
                  <p>
                    Phone: +91 8769115905 <br /> Email:
                    rajlaxmiorganicfoods@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Google Map Section */}
      <div className="embed-responsive embed-responsive-21by9 mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.756483627257!2d75.86814137476085!3d22.700107428286067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fce21e4694af%3A0xa8938712e4fc840d!2s11%2C%20Manish%20Baag%20Colony%2C%20Navlakha%2C%20Indore%2C%20Madhya%20Pradesh%20452001!5e0!3m2!1sen!2sin!4v1731327925359!5m2!1sen!2sin"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: "0", width: "100%" }}
          className="embed-responsive-item"
          title="map"
        ></iframe>
      </div>

      <Footer2 />
    </>
  );
};

export default Contact;
