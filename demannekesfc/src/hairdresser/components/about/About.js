import React from "react";
import Divider from "../Divider";

function About() {
  return (
    <div id="about" className="pt-24 flex space-x-16">
      <div className="w-full">
        <img
          src="/assets/images/hairdresser/herobg.webp"
          alt="Hairdresser"
          className="max-w-full h-auto object-cover"
        />
      </div>
      <div>
        <h1 className="text-3xl font-extrabold mb-2">We care about you</h1>
        <Divider />
        <p className="text-temp-gray">
          Our salon is not just a barber shop. It's a place where you can forget
          about your problems and enjoy a unique care for your appearance.
        </p>
      </div>
    </div>
  );
}

export default About;
