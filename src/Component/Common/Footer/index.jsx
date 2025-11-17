import React, { useState, useEffect } from "react";
import Logo from "../../../asset/img/Logo/RAJLAXMI JAVIK PNG.png";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import FooterTopImg from "../../../asset/img/Background/footer-img-top.png";
import { MdOutlineMail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 600); // Show button after scrolling 300px
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Attach scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer>

      <div className="background-color-pullman-green ">
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

            {/* Social Icons */}

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
            <div className="col-lg-2 col-6">
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
                    to="/track"
                    className="text-decoration-none text-color-eggshell"
                  >
                    Track Order
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-6">
              <div className="fw-bold text-color-eggshell">General</div>
              <div className="border-color mb-2"></div>
              <div className="footer-link pb-1">
                <a
                  href="/refund"
                  className="footer-general w-100 text-decoration-none mb-lg-2"
                >
                  Refund Policy
                </a>

                <a
                  href="/privacy"
                  className="footer-general w-100 text-decoration-none mb-lg-2"
                >
                  Privacy Policy
                </a>
                <a
                  href="/shipping"
                  className="footer-general w-100 text-decoration-none mb-lg-2"
                >
                  Shipping & Delivery Policy
                </a>
                <a
                  href="/terms"
                  className="footer-general w-100 text-decoration-none mb-lg-2"
                >
                  Terms & Conditions
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="fw-bold text-color-eggshell">Contact Us</div>
              <div className="border-color mb-2"></div>
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
      <div className="background-color-eggshell py-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12 d-sm-flex justify-content-around text-center text-md-start mb-2 mb-md-0">
              <div className="text-color-pullman-green text-center py-1">
                {/* Copyright &copy; 2024 Rajlakshmi Jaiviks International. <br />
                <b>All Rights Reserved</b> */}
                <b>Copyright © 2025 Gauswarn. All Rights Reserved.</b>
              </div>
              <div className="text-color-pullman-green text-center py-1">
                <br /> <strong></strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
