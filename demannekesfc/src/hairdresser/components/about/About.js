import React from "react";
import Divider from "../Divider";

function About() {
  return (
    <div id="about" className="pt-24 mx-4 flex flex-col lg:flex-row lg:space-x-16">
      <div className="hidden lg:block w-full lg:w-1/2 mb-6 lg:mb-0">
        <img
          src="/assets/images/hairdresser/herobg.webp"
          alt="Hairdresser"
          className="max-w-full h-auto rounded-xl"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-extrabold mb-2 text-center">We care about you</h1>
        <Divider />
        <p className="text-temp-gray text-center text-sm lg:text-base lg:mb-4">
          Our salon is not just a barber shop. It's a place where you can forget
          about your problems and enjoy a unique care for your appearance. Our
          team of experienced stylists is dedicated to providing you with a
          rejuvenating experience. From trendy haircuts to soothing spa
          treatments, we offer a comprehensive range of services that cater to
          your individual needs.
        </p>
        <p className="text-temp-gray text-center text-sm lg:text-base">
          Our relaxing ambiance and personalized attention ensure that every
          visit is an escape from the ordinary, leaving you not only looking
          great but also feeling revitalized and confident. Step into our salon
          and step out with a renewed sense of self-care and style.
        </p>
      </div>
    </div>
  );
}

export default About;
