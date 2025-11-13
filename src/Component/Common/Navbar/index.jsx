import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../../asset/img/Logo/GAUSWARN A2 GHEE  Logo.png";
import { GrHomeRounded } from "react-icons/gr";
import { useCartContext } from "../../Context/UserContext";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import GoogleTranslate from "../../Pages/GoogleTranslate";
import TopBanner from "./TopBanner";
import Header from "./Header";
import Home from "../../Pages/Home";
import Certified from "../../Pages/Certified";
import AboutUsHero from "./About/About-us-hero";

const CustomNavbar = () => {
  const { cart } = useCartContext();
  const [isFixed, setIsFixed] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); // State for controlling navbar collapse

  let size = cart.length;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsExpanded(false); // Close navbar after clicking
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY >= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = () => setIsExpanded(false); // Close navbar on link click

  return (
    <>
      <TopBanner />
      <Header />
      <Home />
      <Certified />
      <AboutUsHero />
    </>

    // <Navbar
    //   expand="lg"
    //   className={`custom-navbar ${isFixed ? "scrolled" : ""}`}
    //   expanded={isExpanded} // Bind expanded state
    // >
    //   <div className="container">
    //     <Navbar.Brand href="#">
    //       <img src={logo} alt="Logo" />
    //     </Navbar.Brand>
    //     <div className="nav-item cart-trolley-link text-center d-lg-none">
    //       <NavLink
    //         to="/finalpayment"
    //         className="nav-link"
    //         activeClassName="active"
    //         onClick={handleNavLinkClick} // Close navbar on click
    //       >
    //         <FiShoppingCart className="fs-5" />
    //         {size === 0 ? (
    //           <span className="cart-total-item"></span>
    //         ) : (
    //           <span className="cart-total">{size}</span>
    //         )}
    //       </NavLink>
    //     </div>
    //     <Navbar.Toggle
    //       aria-controls="basic-navbar-nav"
    //       onClick={() => setIsExpanded(!isExpanded)} // Toggle expanded state
    //     />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="ms-auto nav d-flex align-items-center">
    //         <NavLink
    //           to="/"
    //           aria-label="Scroll to top"
    //           onClick={scrollToTop}
    //           className="nav-link mx-3 text-center"
    //           activeClassName="active"
    //         >
    //           {/* <GrHomeRounded className="fs-5 fw-bold" /> */}
    //           Home
    //         </NavLink>
    //         <NavLink
    //           to="/singleproduct"
    //           className="nav-link fw-bold mx-3 text-center"
    //           activeClassName="active"
    //           onClick={handleNavLinkClick} // Close navbar on click
    //         >
    //           Shop Now
    //         </NavLink>
    //         <NavLink
    //           to="/lab"
    //           className="nav-link fw-bold mx-3 text-center"
    //           activeClassName="active"
    //           onClick={handleNavLinkClick} // Close navbar on click
    //         >
    //           Lab Report
    //         </NavLink>
    //         <NavLink
    //           to="/about"
    //           className="nav-link fw-bold mx-3 text-center"
    //           activeClassName="active"
    //           onClick={handleNavLinkClick} // Close navbar on click
    //         >
    //           About Us
    //         </NavLink>

    //         <NavLink
    //           to="/track"
    //           className="nav-link fw-bold mx-3 text-center"
    //           activeClassName="active"
    //           onClick={handleNavLinkClick} // Close navbar on click
    //         >
    //           Track Order
    //         </NavLink>
    //         <NavLink
    //           to="/contact"
    //           className="nav-link fw-bold mx-3 text-center"
    //           activeClassName="active"
    //           onClick={handleNavLinkClick} // Close navbar on click
    //         >
    //           Contact Us
    //         </NavLink>
    //         <div className="nav-item cart-trolley-link text-center d-none d-lg-block">
    //           <NavLink
    //             to="/finalpayment"
    //             className="nav-link"
    //             activeClassName="active"
    //             onClick={handleNavLinkClick} // Close navbar on click
    //           >
    //             <FiShoppingCart className="fs-5" />
    //             {size === 0 ? (
    //               <span className="cart-total-item"></span>
    //             ) : (
    //               <span className="cart-total">{size}</span>
    //             )}
    //           </NavLink>
    //         </div>
    //         {/* <NavLink className="text-center">
    //           <GoogleTranslate />
    //         </NavLink> */}
    //       </Nav>
    //     </Navbar.Collapse>
    //   </div>
    // </Navbar>
  );
};

export default CustomNavbar;
