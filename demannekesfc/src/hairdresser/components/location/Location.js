import React from "react";

import { GoClock } from "react-icons/go";
import { BiSolidPhoneCall, BiEnvelope } from "react-icons/bi";
import { IoLocation } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";

import Divider from "../Divider";

function Location() {
  return (
    <div
      id="contact"
      className="pt-12 md:pt-24 flex flex-col md:flex-row items-center"
    >
      <div className="md:w-1/2 md:pr-8">
        <h1 className="text-3xl font-extrabold mb-4">Where to Find Us</h1>
        <Divider />

        <div className="mt-6 space-y-4">
          <p className="flex items-center text-lg">
            <BiSolidPhoneCall className="text-xl mr-3" />
            +322 445 55 07
          </p>
          <p className="flex items-center text-lg">
            <BiEnvelope className="text-xl mr-3" />
            hairmajesty@gmail.com
          </p>
          <p className="flex items-center text-lg">
            <BsInstagram className="text-xl mr-3" />
            /HairMajesty
          </p>
          <div className="flex items-center text-lg">
            <IoLocation className="text-xl mr-3" />
            Oak Street 3, Prague
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold mb-4">Business Hours</h2>
          <div className="flex items-center">
            <GoClock className="text-xl mr-3" />
            <div>
              <p className="text-lg">Monday - Thursday:</p>
              <p className="text-lg">10:00 am - 7:00 pm</p>
            </div>
          </div>
          <div className="flex items-center">
            <GoClock className="text-xl mr-3" />
            <div>
              <p className="text-lg">Friday:</p>
              <p className="text-lg">10:00 am - 5:00 pm</p>
            </div>
          </div>
          <div className="flex items-center">
            <GoClock className="text-xl mr-3" />
            <div>
              <p className="text-lg">Saturday:</p>
              <p className="text-lg">10:00 am - 5:00 pm</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <img
          src="/assets/images/hairdresser/location.webp"
          alt="Hair Majesty Salon Location"
          className="w-full rounded-xl"
        />
      </div>
    </div>
  );
}

export default Location;
