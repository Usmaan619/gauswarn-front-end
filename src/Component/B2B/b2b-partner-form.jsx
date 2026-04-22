import React, { forwardRef } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "./b2b-styles/b2b-partner-form.css";
import { environment } from "../../environment/environment";

const PartnerInquiryForm = forwardRef((props, ref) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

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
        `${environment.API_BASE_URL}/users/createb2bInquiry`,
        payload,
      );

      if (response?.data?.success) {
        toast.success("Form submitted successfully!", {
          position: "top-center",
          autoClose: 3000,
        });
        reset();
      } else {
        toast.error("Something went wrong", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error("Failed to submit the form. Please try again.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <div ref={ref} className="b2b-form-container">
        <div className="b2b-form-header">
          <h2>Get a Wholesale Quote</h2>

          <p>Fill in your details and we'll get back to you within 24 hours</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="b2b-inquiry-form">
          {/* ROW 1 */}
          <div className="b2b-form-row">
            <div className="b2b-form-group">
              <label>Full Name*</label>
              <input
                type="text"
                {...register("fullName", { required: "Full Name is required" })}
              />
              {errors.fullName && (
                <p className="b2b-error-text">{errors.fullName.message}</p>
              )}
            </div>

            <div className="b2b-form-group">
              <label>Business Name*</label>
              <input
                type="text"
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
              <label>Phone*</label>
              <input
                type="tel"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[6-9]\d{9}$/,
                    message: "Enter valid 10-digit mobile number",
                  },
                })}
              />
              {errors.phone && (
                <p className="b2b-error-text">{errors.phone.message}</p>
              )}
            </div>

            <div className="b2b-form-group">
              <label>Email*</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="b2b-error-text">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* ROW 3 */}
          <div className="b2b-form-row">
            <div className="b2b-form-group">
              <label aria-label="Select Business Type" htmlFor="businessType">
                Business Type*
              </label>
              <select
                aria-label="Select Business Type"
                id="businessType"
                {...register("businessType", {
                  required: "Business Type is required",
                })}
              >
                <option value="">Select business type</option>
                <option value="manufacturer">Manufacturer</option>
                <option value="distributor">Distributor</option>
                <option value="retailer">Retailer</option>
                <option value="wholesaler">Wholesaler</option>
              </select>
              {errors.businessType && (
                <p className="b2b-error-text">{errors.businessType.message}</p>
              )}
            </div>

            <div className="b2b-form-group">
              <label>Monthly Bulk Requirement</label>
              <input type="text" {...register("bulkRequirement")} />
            </div>
          </div>

          {/* MESSAGE */}
          <div className="b2b-form-group b2b-full-width">
            <label>Message</label>
            <textarea rows="5" {...register("message")} />
          </div>

          <button
            aria-label="Submit Partner Inquiry Form"
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
});

export default PartnerInquiryForm;
