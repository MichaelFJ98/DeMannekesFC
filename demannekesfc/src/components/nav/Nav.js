import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="navbar">
      <a href="/" id="navbar-logo">PORTFOLIO</a>
      <div className="navbar-links">
      <a href="/">Home</a>
      <a href="/">About</a>
      <a href="/">Porfolio</a>
      <a href="/">Services</a>
      <a href="/">Contact</a>
      </div>
    </nav>
  );
}
