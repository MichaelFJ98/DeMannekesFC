import React from "react";
import Fade from "react-reveal/Fade";

export default function Hosting() {
  return (
    <div
      id="hosting"
      className="bg-c3 text-text dark:bg-dark-background dark:text-dark-text h-full lg:h-[35rem]"
    >
      <div className="bg-l1 rounded-t-[40px] w-screen p-7 flex flex-col items-center h-full">
        <div className="w-full lg:w-8/12 h-full">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-center lg:text-left">
              <Fade top distance="20px" duration={1500}>
                <h1 className="leading-tight text-3xl lg:text-4xl text-slate-900 font-bold">Our hosting service</h1>
              </Fade>
              <Fade top distance="20px" duration={1500} delay={300}>
                <p 
                  className="lg:w-[32rem] py-4 text-c3 leading-7"
                >Discover worry-free online success with our hosting service! We prioritize top-notch security updates to safeguard your website. Our dedicated support team handles all technical aspects, allowing you to focus on your business. Elevate your digital journey with our hosting solution today!
                </p>
              </Fade>
            </div>
            <img src="./assets/images/ssl.png" className="hidden lg:block w-full lg:w-auto lg:max-w-[500px] h-auto" alt="ssl"/>
          </div>
        </div>
      </div>
    </div>
  );
}
