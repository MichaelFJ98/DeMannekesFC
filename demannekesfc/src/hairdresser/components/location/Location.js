import React from "react";
import { GoClock } from "react-icons/go";
import { GiPositionMarker } from "react-icons/gi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMail } from "react-icons/io5";

import Divider from "../Divider";

function Location() {
  return (
    <div id="contact" className="pt-24 flex">
      <div className="w-1/2 pr-8">
        <h1 className="text-3xl font-bold">Where to Find Us</h1>
        <Divider className="mb-4" />
        <div className="flex items-center my-4">
          <GoClock className="text-xl mr-2" />
          <p className="text-lg">9:00 am - 7:00 pm</p>
        </div>
        <div className="flex items-center my-4">
          <GiPositionMarker className="text-xl mr-2" />
          <p className="text-lg">Oak Street 3, Prague</p>
        </div>
        <div className="flex items-center my-4">
          <BiSolidPhoneCall className="text-xl mr-2" />
          <p className="text-lg">+420 728 465 453</p>
        </div>
        <div className="flex items-center my-4">
          <IoMail className="text-xl mr-2" />
          <p className="text-lg">barber@gmail.com</p>
        </div>
      </div>
      <div className="w-1/2">
        <img
          src="/assets/images/hairdresser/location.webp"
          alt="Location"
          className="max-w-full border-2"
        />
      </div>
    </div>
  );
}

export default Location;
