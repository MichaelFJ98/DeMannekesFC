import React from "react";
import "./Footer.css";

export default function Footer() {

    const currentYear = new Date().getFullYear();

  return (
    <div id="footer" className="bg-primaryBlue text-white">
      <p>© {currentYear} Mannekes. All rights reserved.</p>
    </div>
  );
}
