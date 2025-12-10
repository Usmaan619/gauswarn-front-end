import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./b2b-styles/b2b-partner-form.css";
import { environment } from "../../environment/environment";

export default function PartnerInquiryForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  // ---------------------------
  // ON SUBMIT
  // ---------------------------
  const onSubmit = async (data) => {
    try {
      const payload = {
        full_name: data.fullName,
        business_name: data.businessName,
        phone: data.phone,
        email: data.email,
        business_type: data.businessType,
        monthly_requirement: data.bulkRequirement,
        message: data.message,
      };

      const response = await axios.post(
        `${environment?.API_BASE_URL}/users/createb2bInquiry`,
        payload
      );

      if (response.data.success) {
        toast.success("Inquiry submitted successfully!");
        reset();
      } else {
        toast.error(response.data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Submit Inquiry Error:", error);
      toast.error("Failed to submit inquiry. Try again later.");
    }
  };

  return (
    <>
      <div className="b2b-form-container">
        <div className="b2b-form-header">
          <h1>Inquiry Form</h1>
          <p>Fill in your details and we'll get back to you within 24 hours</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="b2b-inquiry-form">
          {/* ROW 1 */}
          <div className="b2b-form-row">
            <div className="b2b-form-group">
              <label htmlFor="fullName">Full Name*</label>
              <input
                type="text"
                id="fullName"
                placeholder="enter your full name"
                {...register("fullName", { required: "Full Name is required" })}
              />
              {errors.fullName && (
                <p className="b2b-error-text">{errors.fullName.message}</p>
              )}
            </div>

            <div className="b2b-form-group">
              <label htmlFor="businessName">Business Name*</label>
              <input
                type="text"
                id="businessName"
                placeholder="your business name"
                {...register("businessName", {
                  required: "Business Name is required",
                })}
              />
              {errors.businessName && (
                <p className="b2b-error-text">{errors.businessName.message}</p>
              )}
            </div>
          </div>

          {/* ROW 2 */}
          <div className="b2b-form-row">
            <div className="b2b-form-group">
              <label htmlFor="phone">Phone*</label>
              <input
                type="tel"
                id="phone"
                placeholder="+91 xxxxx xxxxx"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[6-9]\d{9}$/,
                    message: "Enter a valid 10-digit Indian mobile number",
                  },
                })}
              />
              {errors.phone && (
                <p className="b2b-error-text">{errors.phone.message}</p>
              )}
            </div>

            <div className="b2b-form-group">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                {...register("email", {
                  required: "Email is required",
                })}
              />
              {errors.email && (
                <p className="b2b-error-text">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* ROW 3 */}
          <div className="b2b-form-row">
            <div className="b2b-form-group">
              <label htmlFor="businessType">Business Type*</label>
              <select
                id="businessType"
                {...register("businessType", {
                  required: "Business Type is required",
                })}
              >
                <option value="">select business type</option>
                <option value="manufacturer">Manufacturer</option>
                <option value="distributor">Distributor</option>
                <option value="retailer">Retailer</option>
                <option value="wholesaler">Wholesaler</option>
                <option value="other">Other</option>
              </select>
              {errors.businessType && (
                <p className="b2b-error-text">{errors.businessType.message}</p>
              )}
            </div>

            <div className="b2b-form-group">
              <label htmlFor="bulkRequirement">Monthly Bulk Requirement</label>
              <input
                type="text"
                id="bulkRequirement"
                placeholder="e.g., 500kg/month"
                {...register("bulkRequirement")}
              />
            </div>
          </div>

          {/* MESSAGE */}
          <div className="b2b-form-group b2b-full-width">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Tell us about your requirements..."
              rows="5"
              {...register("message")}
            />
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="b2b-submit-btn"
          >
            {isSubmitting ? "Submitting..." : "Submit Inquiry"}
          </button>
        </form>
      </div>
    </>
  );
}
