import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./careers-main-page.css";
import Seo from "../SEO/Seo";

const Internship = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      //  YE NUMBERS TUMHारे ACTUAL ENTRY IDs SE REPLACE KARO
      formData.append("entry.1351664781", data.name);
      formData.append("entry.1845723858", data.email);
      formData.append("entry.779403282", data.phone);
      formData.append("entry.2107583788", data.college);
      formData.append("entry.523569433", data.message || "");

      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLScG-gQhOdFDZKPBfl1PRZls08f647XwT71DPBLeiy_vRE8ccA/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        },
      );

      toast.success("Internship form submitted! Contact within 24 hours.");
      reset();
    } catch (error) {
      toast.error(" Try again");
    }
  };
  const jobSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Sales & Marketing Internship",
    description:
      "3-6 months Sales & Marketing Internship at Gauswarn India. Stipend upto ₹12,000/month, certificate and real work experience.",

    datePosted: "2026-03-10",
    validThrough: "2026-12-31T23:59",

    employmentType: "INTERN",

    hiringOrganization: {
      "@type": "Organization",
      name: "Gauswarn India",
      sameAs: "https://gauswarn.com",
      logo: "https://gauswarn.com/logo.png",
    },

    industry: "Food & Dairy Products",

    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bhopal",
        addressRegion: "Madhya Pradesh",
        addressCountry: "IN",
      },
    },

    applicantLocationRequirements: {
      "@type": "Country",
      name: "India",
    },

    educationRequirements: "BBA, B.Com, MBA or any Graduate",

    jobBenefits: [
      "Monthly stipend upto ₹12,000",
      "Internship certificate",
      "Real marketing experience",
      "Free A2 Gir Cow Ghee products",
      "Placement assistance",
    ],

    directApply: true,

    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "INR",
      value: {
        "@type": "QuantitativeValue",
        minValue: 5000,
        maxValue: 12000,
        unitText: "MONTH",
      },
    },
  };
  return (
    <>
      <Seo
        title="Sales & Marketing Internship at Gauswarn India | 3-6 Months"
        description="Apply for Sales & Marketing Internship with stipend upto ₹12k/month, certificate and real experience."
        url="https://gauswarn.com/careers"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobSchema) }}
      />

      {/* Page Content */}

      {/* HERO SECTION */}
      <section className="careers-hero-section">
        <div className="careers-hero-overlay"></div>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-10 text-center careers-hero-content">
              <h1 className="hero-title">Sales & Marketing Internship</h1>
              <p className="hero-subtitle">
                3-6 Months • Upto ₹12k Stipend • Real Work Experience •
                Certificate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNSHIP DETAILS */}
      <section className="internship-details-section">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="section-title">What You'll Do</h2>
              <div className="job-responsibilities">
                <div className="responsibility-item">
                  <i className="fas fa-check-circle success-icon"></i>
                  <div>
                    <h5>Social Media Management</h5>
                    <p>Instagram Reels, WhatsApp marketing, content creation</p>
                  </div>
                </div>
                <div className="responsibility-item">
                  <i className="fas fa-check-circle success-icon"></i>
                  <div>
                    <h5>Sales Support</h5>
                    <p>Customer calls, order follow-ups, dealer coordination</p>
                  </div>
                </div>
                <div className="responsibility-item">
                  <i className="fas fa-check-circle success-icon"></i>
                  <div>
                    <h5>Market Research</h5>
                    <p>Competitor analysis, customer feedback collection</p>
                  </div>
                </div>
                <div className="responsibility-item">
                  <i className="fas fa-check-circle success-icon"></i>
                  <div>
                    <h5>Field Work</h5>
                    <p>Local market visits, shop branding, promotions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <h2 className="section-title">What You'll Get</h2>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <div className="benefit-number">Upto ₹12k</div>
                  <div className="benefit-label">Monthly Stipend</div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-number">3-6 Months</div>
                  <div className="benefit-label">Duration</div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-number">FREE</div>
                  <div className="benefit-label">Ghee + Certificate</div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-number">100%</div>
                  <div className="benefit-label">Placement Help</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section className="careers-application-section">
        <div className="container py-5">
          <div className="row align-items-start">
            <div className="col-lg-8">
              <div className="section-header">
                <h2 className="section-title">Apply Now (2 Minutes)</h2>
                <p className="section-subtitle">
                  Open for College Students • Any Graduate • Immediate Joining
                </p>
              </div>

              <div className="ghee-new-careers-form">
                <form onSubmit={handleSubmit(onSubmit)} className="modern-form">
                  <div className="form-row">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Full Name *"
                        className={errors.name ? "error" : ""}
                        {...register("name", {
                          required: "Name is required",
                        })}
                      />
                      {errors.name && (
                        <span className="error-message">
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        placeholder="Email *"
                        className={errors.email ? "error" : ""}
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Enter valid email",
                          },
                        })}
                      />
                      {errors.email && (
                        <span className="error-message">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <input
                        type="tel"
                        placeholder="Phone Number *"
                        className={errors.phone ? "error" : ""}
                        {...register("phone", {
                          required: "Phone number required",
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Enter 10-digit number",
                          },
                        })}
                      />
                      {errors.phone && (
                        <span className="error-message">
                          {errors.phone.message}
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="College/University *"
                        className={errors.college ? "error" : ""}
                        {...register("college", {
                          required: "College name required",
                        })}
                      />
                      {errors.college && (
                        <span className="error-message">
                          {errors.college.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group full">
                      <textarea
                        placeholder="Why do you want this internship? (Optional)"
                        rows="3"
                        {...register("message")}
                      />
                    </div>
                  </div>

                  <button type="submit" className="submit-btn">
                    <span>Apply for Internship</span>
                  </button>
                </form>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="hiring-sidebar">
                <div className="internship-highlights">
                  <h4> Perfect For</h4>
                  <ul>
                    <li>BBA/B.Com/MBA Students</li>
                    <li>Any Year/Any College</li>
                    <li>Freshers Welcome</li>
                    <li>Sales/Marketing Passion</li>
                  </ul>
                </div>

                <div className="contact-card">
                  <h4>📞 Quick Contact</h4>
                  <p>
                    <strong>+91-74709-15905</strong>
                  </p>
                  <p>
                    <a href="mailto:gauswarn@gmail.com">gauswarn@gmail.com</a>
                  </p>
                  <p className="hours">Response within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Internship;
