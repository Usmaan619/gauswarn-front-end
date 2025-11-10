import React from "react";

// Image imports
import Logo from "../../../asset/img/Logo/RAJLAXMI JAVIK PNG.png";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  // FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import FooterTopImg from "../../../asset/img/Background/policyfooter.png";
import { MdOutlineMail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";

const Footer2 = () => {
  return (
    <footer>
      <div className="fixed-whatsapp">
        <ReactWhatsapp
          number="+918769215905" // Replace with your number
          message="Hello! I have an inquiry."
          style={{
            display: "inline-block",
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          <FaWhatsapp
            style={{
              fontSize: "40px",
              color: "#ffffff",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            title="Chat with us on WhatsApp"
          />
        </ReactWhatsapp>
      </div>

      <div className="">
        <img className="img-fluid w-100" src={FooterTopImg} alt="Background" />
      </div>
      <div className="background-color-pullman-green py-2">
        <div className="container">
          <div className="row">
            {/* Logo */}
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <img
                className="img-fluid"
                src={Logo}
                alt="Logo"
                style={{ maxWidth: "100px" }}
              />
            </div>

            <div className="col-md-6 d-flex justify-content-md-end justify-content-center align-items-center">
              {[
                {
                  Icon: FaFacebook,
                  alt: "Facebook",
                  type: "icon",
                  link: "https://www.facebook.com/ramdev.sweets/",
                },
                {
                  Icon: FaInstagram,
                  alt: "Instagram",
                  type: "icon",
                  link: "https://www.instagram.com/rajlaxmiorganic_/",
                },
                {
                  Icon: FaYoutube,
                  alt: "YouTube",
                  type: "icon",
                  link: "https://www.youtube.com/@rajendrarajpurohit8787",
                },
                {
                  Icon: FaLinkedin,
                  alt: "LinkeDin",
                  type: "icon",
                },
              ].map((item, index) =>
                item.type === "icon" ? (
                  <NavLink
                    key={index}
                    to={item.link}
                    target="_blank"
                    className="mx-2"
                  >
                    <item.Icon
                      className="icon-size text-color-eggshell"
                      style={{ width: "35px", height: "35px", padding: "4px" }}
                      title={item.alt}
                    />
                  </NavLink>
                ) : (
                  <ReactWhatsapp
                    key={index}
                    number={item.phoneNumber}
                    message={item.message}
                    className="mx-2"
                    style={{
                      display: "inline-block",
                      backgroundColor: "transparent",
                      border: "none",
                    }}
                  >
                    <FaWhatsapp
                      className="icon-size rounded-circle text-color-eggshell"
                      style={{ width: "35px", height: "35px", padding: "4px" }}
                      title={item.alt}
                    />
                  </ReactWhatsapp>
                )
              )}
            </div>

            {/* Social Icons End */}

            <div className="col-12">
              <hr className="hr-line-background" />
            </div>

            <div className="col-lg-5 col-md-6 col-6 footer-content">
              <div className="fw-bold text-color-eggshell fs-5">
              About Gauswaran Gir Cow Ghee (Vedic Bilona Method)
              </div>
              <p className="footer-about mx-auto text-color-eggshell pt-2">
                Rajlakshmi Javik International is committed to producing the
                highest quality Gauswaran Gir Cow Ghee, crafted using the
                traditional Bilona method. Our ghee is 100% natural, free from
                additives and preservatives, and made with love and care to
                offer a healthy, nutrient-rich product for your kitchen and
                well-being.
              </p>
            </div>

            {/* Footer Links */}
            <div className="col-lg-2 col-md-6 col-sm-12 text">
              <div className="fw-bold text-color-eggshell">
                Navigate Our Site
              </div>
              <div className="border-color mb-2"></div>
              <ul
                className="list-unstyled"
                style={{ listStyleType: "none", paddingLeft: "0px" }}
              >
                <li className="my-1">
                  <Link
                    to="/lab"
                    className="text-decoration-none text-color-eggshell"
                  >
                    Lab Report
                  </Link>
                </li>
                <li className="my-1">
                  <Link
                    to="/faq"
                    className="text-decoration-none text-color-eggshell"
                  >
                    Faq's
                  </Link>
                </li>
                <li className="my-1">
                  <Link
                    to="/singleproduct"
                    className="text-decoration-none text-color-eggshell"
                  >
                    Shop Now
                  </Link>
                </li>
                <li className="my-1">
                  <Link
                    to="/gallery"
                    className="text-decoration-none text-color-eggshell"
                  >
                    Gallery
                  </Link>
                </li>
                <li className="my-1">
                  <Link
                    to="/track"
                    className="text-decoration-none text-color-eggshell"
                  >
                    Track Order
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 text">
              <div className="fw-bold text-color-eggshell">General</div>
              <div className="border-color mb-2"></div>
              <div className="footer-link pb-1">
                <a
                  href="/refund"
                  className="footer-general w-100 text-decoration-none mb-2"
                >
                  Refund Policy
                </a>
                <a
                  href="/privacy"
                  className="footer-general w-100 text-decoration-none mb-2"
                >
                  Privacy Policy
                </a>
                <a
                  href="/shipping"
                  className="footer-general w-100 text-decoration-none mb-2"
                >
                  Shipping & Delivery Policy
                </a>
                <a
                  href="/terms"
                  className="footer-general w-100 text-decoration-none mb-2"
                >
                  Terms & Conditions
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text">
              <div className="fw-bold text-color-eggshell">Contact Us</div>
              <div className="border-color"></div>
              <ul
                className="list-unstyled"
                style={{ listStyleType: "none", paddingLeft: "0px" }}
              >
                <li className="my-2">
                  <a
                    href="#/"
                    className="text-decoration-none text-color-eggshell"
                  >
                    Address: 11 Manish Baag Sapna Sangeeta Road Indore Madhya
                    Pradesh 452001
                  </a>
                </li>
                <li className="my-2">
                  <a
                    href="#/"
                    className="text-decoration-none text-color-eggshell"
                  >
                    <MdOutlineMail /> rajlaxmiorganicfoods@gmail.com
                  </a>
                </li>
                <li className="my-2">
                  <a
                    href="#/"
                    className="text-decoration-none text-color-eggshell"
                  >
                    <IoMdCall /> +91 8769115905
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}

      {/* <div className="background-color-eggshell py-3">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-md-6 col-lg-12 d-flex justify-content-around text-center text-md-start mb-2 mb-md-0">
              <div className="text-color-pullman-green text-center">
                Copyright &copy; 2024 Rajlakshmi Jaiviks International.{" "}
                <b>All Rights Reserved</b>
              </div>
              <div className="text-color-pullman-green text-center">
                Powered by <strong>Intelligence Fusion Technologies</strong>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="background-color-eggshell py-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12 d-sm-flex justify-content-around text-center text-md-start mb-2 mb-md-0">
              <div className="text-color-pullman-green text-center py-1">
                Copyright &copy; 2024 Rajlakshmi Jaiviks International. <br />
                <b>All Rights Reserved</b>
              </div>
              <div className="text-color-pullman-green text-center py-1">
                Powered by <br />{" "}
                <strong>Intelligence Fusion Technologies</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
