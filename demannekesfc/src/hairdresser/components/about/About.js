import React from "react";
import Divider from "../Divider";

function About() {
  return (
    <div id="about" className="pt-24 flex md:space-x-16">
      <div className="w-1/2 hidden md:block">
        <img
          src="/assets/images/hairdresser/herobg.webp"
          alt="Hairdresser"
          className="max-w-full h-auto object-cover"
        />
      </div>
      <div className="w-1/2">
        <h1 className="text-3xl font-extrabold mb-2">We care about you</h1>
        <Divider />
        <p className="text-temp-gray">
          Our salon is not just a barber shop. It's a place where you can forget
          about your problems and enjoy a unique care for your appearance. Our team
          of experienced stylists is dedicated to providing you with a rejuvenating
          experience. From trendy haircuts to soothing spa treatments, we offer a
          comprehensive range of services that cater to your individual needs. Our
          relaxing ambiance and personalized attention ensure that every visit is
          an escape from the ordinary, leaving you not only looking great but also
          feeling revitalized and confident. Step into our salon and step out with
          a renewed sense of self-care and style.
        </p>
      </div>
    </div>
  );
}

export default About;
