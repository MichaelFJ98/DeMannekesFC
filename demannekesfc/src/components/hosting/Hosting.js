import React from "react";
import Fade from "react-reveal/Fade";
import { FaCheck } from "react-icons/fa";

const features = [
  "24/7 support",
  "Security updates",
  "Monthly website changes per request",
];

export default function Hosting() {
  return (
    <div id="hosting" className="bg-gray-100 text-gray-900 h-full lg:h-[35rem]">
      <div className="bg-l1 rounded-t-3xl w-full p-7 flex flex-col items-center h-full shadow-md">
        <div className="w-full lg:w-8/12 h-full">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-left">
              <Fade top distance="20px" duration={1500}>
                <h1 className="text-3xl lg:text-4xl font-bold tracking-wide">Our Hosting Service</h1>
              </Fade>
              <Fade top distance="20px" duration={1500} delay={300}>
                <p className="mt-4 lg:mt-8 text-base lg:text-lg leading-relaxed">
                  Opt for Our Hosting Solution: Experience peace of mind with 24/7 support, robust security updates, and flexible monthly website changes on request. Our service ensures your online presence is secure, supported, and tailored to your needs. Simplify your digital journey with our comprehensive hosting solution.
                </p>
                <ul className="mt-4 space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <FaCheck className="text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Fade>
            </div>
            <img src="./assets/images/ssl.png" className="mt-4 md:mt-0 w-auto md:max-w-xs lg:max-w-sm xl:max-w-md h-auto hidden md:block" alt="ssl"/>
          </div>
        </div>
      </div>
    </div>
  );
}
