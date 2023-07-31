import React from "react";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div
      id="footer"
      className="bg-gray-900 text-white px-7 leading-5 flex flex-col justify-center"
    >
      <div className="py-7 flex flex-col md:flex-row md:justify-between md:self-center w-7/12">
        <div className="md:self-center md:justify-self-start">
          <h1 className="font-bold text-2xl pb-4">SOCIAL</h1>
          <div className="flex gap-2 text-xl">
            <FaLinkedinIn className="hover:text-blue-500 cursor-pointer" />
            <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram
              className="hover:text-blue-500 cursor-pointer"
              onClick={() =>
                window.open("https://www.instagram.com/insiter.be/", "_blank")
              }
            />
          </div>
        </div>
        <div className="md:self-center md:justify-self-end">
          <h1 className="font-bold text-2xl py-4 md:pt-0">CONTACT</h1>
          <p className="font-thin text-sm">Vlaams-Brabant, 1930 Zaventem</p>
          <p className="font-thin text-sm pt-4">contact@insiter.be</p>
        </div>
      </div>
      <div className="border-t border-white text-center">
        <p className="font-thin text-xs py-7">
          © {currentYear} Insiter. All rights reserved.
        </p>
      </div>
    </div>
  );
}
