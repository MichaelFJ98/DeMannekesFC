import React from "react";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import Fade from "react-reveal/Fade";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-c2 text-white">
      <Fade duration={1500}>
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row justify-between text-center md:text-left">
            <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 md:flex-1">
              <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-blue-300">
                  <FaLinkedinIn size={24} />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-blue-600">
                  <FaFacebookF size={24} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-pink-600">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end md:flex-1">
              <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
              <p className="text-sm">Vlaams-Brabant, 1930 Zaventem</p>
              <p className="text-sm mt-2">contact@insiter.be</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-xs">
              © {currentYear} Insiter. All rights reserved.
            </p>
          </div>
        </div>
      </Fade>
    </footer>
  );
}
