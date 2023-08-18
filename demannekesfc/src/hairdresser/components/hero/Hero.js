import React from "react";
import { GoClock } from "react-icons/go";
import { GiPositionMarker } from "react-icons/gi";
import { BiSolidPhoneCall } from "react-icons/bi";

function Hero() {
  return (
    <div id="hero" className="flex pt-24 max-w-[50%]">
      <div className="flex-1 pr-10">
        <h1 className="font-bold text-4xl mb-2">
          Quality Haircuts
        </h1>
        <h1 className="font-bold text-4xl mb-4">and Beard Trimming</h1>
        <p className="text-temp-gray mb-4">
          Professional haircuts and beard trimming.
        </p>
        <button className="bg-temp-accent transition-colors hover:bg-transparent border hover:text-temp-text border-temp-accent py-2 px-4 text-black font-semibold">
          Make reservation
        </button>
        <div className="flex items-center mt-6">
          <GoClock className="mr-2 text-2xl" />
          <div className="flex flex-col justify-start text-temp-gray">
            <p>Monday - Friday</p>
            <p>9:00am - 7:00pm</p>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <GiPositionMarker className="mr-2 text-2xl" />
          <p className="text-temp-gray">123 Main St</p>
        </div>
        <div className="flex items-center mt-4">
          <BiSolidPhoneCall className="mr-2 text-2xl" />
          <p className="text-temp-gray">+322 445 55 07</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
