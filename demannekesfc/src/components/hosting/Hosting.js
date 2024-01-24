import React from "react";

import Fade from "react-reveal/Fade";

export default function Hosting() {
  return (
    <div
      id="hosting"
      className="bg-c3  text-text dark:bg-dark-background dark:text-dark-text h-[35rem]"
    >
      <div className="bg-l1 rounded-t-[40px] w-screen p-7 flex flex-col items-center  h-full">
      <Fade top distance="20px" duration={1500}>
        <div className="w-10/12 h-full">
            <div className=" flex flex-row justify-between items-center">
                <div>
                    <h1 className="leading-tight text-3xl md:text-4xl text-slate-900 font-bold ">Our hosting service</h1>
                    <p 
                    className="w-[32rem] py-4 text-c3 leading-7"
                    >Discover worry-free online success with our hosting service! We prioritize top-notch security updates to safeguard your website. Our dedicated support team handles all technical aspects, allowing you to focus on your business. Elevate your digital journey with our hosting solution today!
                    </p>
                </div>
               
                <img src="./assets/images/ssl.png" width={500} height={500} alt="ssl"/>
            </div>
            
        </div>
      </Fade>
      </div>
    </div>
  );
}
