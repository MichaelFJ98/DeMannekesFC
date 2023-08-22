import React from "react";

import { GoClock } from "react-icons/go";
import { BiSolidPhoneCall, BiEnvelope } from "react-icons/bi";
import { IoLocation } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";

import Divider from "../Divider.js";
import Map from "./Map.js";

function Location() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const handleInstagramClick = () => {
    if (isMobile) {
      // Open Instagram app link
      window.location.href = "instagram://user?username=HairMajesty";
    } else {
      // Open Instagram website link
      window.open("https://www.instagram.com/");
    }
  };

  const handleGoogleMapsClick = () => {
    if (isMobile) {
      // Open Google Maps app link
      window.location.href = "https://maps.apple.com/?q=Oak+Street+3,Prague";
    } else {
      // Open Google Maps website link
      window.open(
        "https://www.google.com/maps/place/Barbershop+ODESSA-MAMA+And%C4%9Bl/@50.073145,14.4044039,17z/data=!3m1!4b1!4m6!3m5!1s0x610f480a1bf04515:0xd0b2b83af50aa46c!8m2!3d50.0731417!4d14.4092748!16s%2Fg%2F11tryl1zs0?entry=ttu"
      );
    }
  };

  return (
    <div
      id="contact"
      role="contactinformation"
      className="pt-12 md:pt-24 mx-4 flex flex-col lg:flex-row items-center"
    >
      <div className="lg:aspect-square lg:w-1/2 md:pr-8 flex flex-col items-center md:items-start">
        <h1 className="text-3xl font-extrabold mb-4 text-center">
          Where to Find Us
        </h1>
        <Divider />

        <div className="mt-6 self-start space-y-4">
          <p
            className="flex items-center text-lg cursor-pointer md:hover:text-temp-accent transition-colors"
            onClick={() => window.open("tel:+3224455507")}
          >
            <BiSolidPhoneCall className="text-xl mr-3" />
            +322 445 55 07
          </p>
          <p
            className="flex items-center text-lg cursor-pointer md:hover:text-temp-accent transition-colors"
            onClick={() => window.open("mailto:hairmajesty@gmail.com")}
          >
            <BiEnvelope className="text-xl mr-3" />
            hairmajesty@gmail.com
          </p>
          <p
            className="flex items-center text-lg cursor-pointer md:hover:text-temp-accent transition-colors"
            onClick={handleInstagramClick}
          >
            <BsInstagram className="text-xl mr-3" />
            @HairMajesty
          </p>
          <div
            className="flex items-center text-lg cursor-pointer md:hover:text-temp-accent transition-colors"
            onClick={handleGoogleMapsClick}
          >
            <IoLocation className="text-xl mr-3" />
            Oak Street 3, Prague
          </div>
        </div>

        <div className="mt-8 self-start space-y-4">
          <h2 className="text-xl font-semibold mb-4">Business Hours</h2>
          <div className="flex items-center">
            <GoClock className="text-xl mr-3" />
            <div>
              <p className="text-lg">Monday - Thursday:</p>
              <p className="text-lg">10:00h - 19:00h</p>
            </div>
          </div>
          <div className="flex items-center">
            <GoClock className="text-xl mr-3" />
            <div>
              <p className="text-lg">Friday:</p>
              <p className="text-lg">10:00h - 17:00h</p>
            </div>
          </div>
          <div className="flex items-center">
            <GoClock className="text-xl mr-3" />
            <div>
              <p className="text-lg">Saturday:</p>
              <p className="text-lg">10:00h - 17:00h</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[40%] w-screen aspect-square hidden lg:block border-4 border-temp-accent">
        <Map />
      </div>
    </div>
  );
}

export default Location;
