import React from "react";
import "./Footer.css";

export default function Footer() {

    const currentYear = new Date().getFullYear();

  return (
    <div id="footer">
      <p>© {currentYear} Mannekes. All rights reserved.</p>
    </div>
  );
}
