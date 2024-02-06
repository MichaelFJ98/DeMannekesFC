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
    <div
      id="hosting"
      className="bg-c3 text-text h-full lg:h-[35rem]"
    >
      <div className="bg-l1 rounded-t-[40px] w-screen p-7 flex flex-col items-center h-full">
        <div className="w-full lg:w-8/12 h-full">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6">
            <div className="text-left">
              <Fade top distance="20px" duration={1500}>
                <h1 className="leading-tight text-3xl lg:text-4xl text-slate-900 font-bold tracking-wide">Our hosting service</h1>
              </Fade>
              <Fade top distance="20px" duration={1500} delay={300}>
                <p 
                  className="md:w-[32rem] py-8 text-c3 leading-7"
                >Opt for Our Hosting Solution: Experience peace of mind with 24/7 support, robust security updates, and flexible monthly website changes on request. Our service ensures your online presence is secure, supported, and tailored to your needs. Simplify your digital journey with our comprehensive hosting solution.
                </p>
                <ul className="list-none space-y-2">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-center space-x-2 text-black">
                                        <FaCheck className="text-primary" />
                                        <p dangerouslySetInnerHTML={{ __html: feature }}></p>
                                    </li>
                                ))}
                            </ul>
              </Fade>
            </div>
            <img src="./assets/images/ssl.png" className="block w-auto md:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] h-auto" alt="ssl"/>
          </div>
        </div>
      </div>
    </div>
  );
}
