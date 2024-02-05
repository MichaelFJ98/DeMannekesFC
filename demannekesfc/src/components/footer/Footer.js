import React from "react";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import Fade from "react-reveal/Fade";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div id="footer" className="bg-l1 text-l1">
      <div className="bg-c2 w-full leading-5 flex flex-col justify-center items-center">
        <Fade duration={1500}>
          <div className="py-7 flex flex-col items-center md:flex-row md:justify-between w-full px-4 md:w-8/12">
            {/* Socials Section */}
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h1 className="font-bold text-2xl pb-4">SOCIALS</h1>
              <div className="flex gap-2 text-xl justify-center md:justify-start">
                <FaLinkedinIn className="hover:text-primary dark:hover:text-dark-primary cursor-pointer" />
                <FaFacebookF className="hover:text-primary dark:hover:text-dark-primary cursor-pointer" />
                <FaInstagram className="hover:text-primary dark:hover:text-dark-primary cursor-pointer" onClick={() => window.open("https://www.instagram.com/insiter.be/", "_blank")} />
              </div>
            </div>
            {/* Contact Us Section */}
            <div className="text-center md:text-right">
              <h1 className="font-bold text-2xl py-4 md:py-0">CONTACT US</h1>
              <p className="font-thin text-sm">Vlaams-Brabant, 1930 Zaventem</p>
              <p className="font-thin text-sm pt-4">contact@insiter.be</p>
            </div>
          </div>
          {/* Copyright Section */}
          <div className="border-t dark:border-dark-text border-c3 w-full">
            <p className="font-thin text-xs py-7 text-center">
              © {currentYear} Insiter. All rights reserved.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}
