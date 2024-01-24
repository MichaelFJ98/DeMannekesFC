import React from "react";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import Fade from "react-reveal/Fade";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div
      id="footer"
      className=" bg-l1 text-l1"
    >
      <div className="bg-c2 w-screen rounded-t-[40px] leading-5 flex flex-col justify-center">

      
      <Fade duration={1500}>
        <div className="py-7 flex flex-col md:flex-row md:justify-between md:self-center w-7/12">
          <div className="md:self-center md:justify-self-start">
            <h1 className="font-bold text-2xl pb-4">SOCIALS</h1>
            <div className="flex gap-2 text-xl">
              <FaLinkedinIn className="hover:text-primary dark:hover:text-dark-primary cursor-pointer" />
              <FaFacebookF className="hover:text-primary dark:hover:text-dark-primary cursor-pointer" />
              <FaInstagram
                className="hover:text-primary dark:hover:text-dark-primary cursor-pointer"
                onClick={() =>
                  window.open("https://www.instagram.com/insiter.be/", "_blank")
                }
              />
            </div>
          </div>
          <div className="md:self-center md:justify-self-end">
            <h1 className="font-bold text-2xl py-4 md:pt-0">CONTACT US</h1>
            <p className="font-thin text-sm">Vlaams-Brabant, 1930 Zaventem</p>
            <p className="font-thin text-sm pt-4">contact@insiter.be</p>
          </div>
        </div>
        <div className="border-t dark:border-dark-text border-text text-center">
          <p className="font-thin text-xs py-7">
            © {currentYear} Insiter. All rights reserved.
          </p>
        </div>
      </Fade>
      </div>
    </div>
    
  );
}
