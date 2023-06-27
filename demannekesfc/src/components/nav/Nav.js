import React, { useState, useEffect } from "react";
import "./Nav.css";

import { Link, animateScroll as scroll } from "react-scroll";

export default function Nav() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav id="home" className={`navbar ${visible ? "" : "hidden"}`}>
      <a
        href="#"
        className="navbar-logo-link"
        onClick={() => scroll.scrollToTop()}
      >
        <img src="assets/images/Dev.png"/>
      </a>
      <div className="navbar-links">
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link to="portfolio" smooth={true} duration={500}>
          Portfolio
        </Link>
        <Link to="services" smooth={true} duration={500}>
          Services
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
