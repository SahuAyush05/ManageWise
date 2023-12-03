import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logoimg from "../assets/logo1.webp";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const [navBar, setNavBar] = useState(false);
  const navChange = () => {
    if (window.scrollY >= 100) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  window.addEventListener("scroll", navChange);
  return (
    <div className={navBar ? "header header-bg" : "header"}>
      <div className="logo">
        <img className="headerimg" src={logoimg} alt="logo" />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <a href="#" onClick={() => scrollToSection("features")}>
          <li>
            <Link>Features</Link>
          </li>
        </a>
        <a href="#" onClick={() => scrollToSection("faq")}>
          <li>
            <Link>FAQ</Link>
          </li>
        </a>
        <a href="#" onClick={() => scrollToSection("price")}>
          <li>
            <Link >Pricing</Link>
          </li>
        </a>
        <a href="#" onClick={() => scrollToSection("clients")}>
          <li>
            <Link >Testimonials</Link>
          </li>
        </a>
        <li className="BuyButton">
            <Link >Buy Templates</Link>
          </li>
      </ul>
      <div className="hamBurger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#1C1C1C" }} />
        ) : (
          <FaBars size={20} style={{ color: "#1C1C1C" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
