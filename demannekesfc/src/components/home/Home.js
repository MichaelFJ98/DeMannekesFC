import React,{useState} from "react";
import Fade from "react-reveal/Fade";
import Calendly from "../Calendly.js";
import {Link as ScrollLink} from "react-scroll";
import bg from "../svg/bg.svg"

export default function Home() {
    const [isMeetingPopupOpen, setMeetingPopupOpen] = useState(false);

    const createLinkAttributes = (to) => {
      let className =
        "text-base text-center font-semibold text-primary hover:underline cursor-pointer hover:bg-zinc-300 px-2 py-4 rounded-2xl";
  
      return {
        to,
        smooth: true,
        duration: 500,
        offset: -63,
        className
      };
    };

  return (
    <div
      id="home"
      className="bg-l1 text-slate-900 h-screen lg:h-[80vh] flex flex-row justify-center "
      style={{backgroundImage: `url(${bg})`}}
    >
      <Fade duration={1500}>
        <div className="flex row justify-start items-center gap-4 sm:gap-6 w-10/12 lg:w-7/12 h-full ">
          <div className="text-center lg:text-start lg:w-7/12">
            <p className="text-lg sm:text-xl md:text-2xl py-3">
              Hi, we are Insiter
            </p>

            <h1 className="leading-tight text-4xl text-c3 font-black">
              Full-Stack Developers
            </h1>

            <h1 className="leading-tight text-4xl text-c3 font-black ">
              From Belgium.
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl py-3">
              We help people and brands by designing and building digital
              products that are optimized for your clients experience.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start md:items-center py-2">
              <button onClick={() => setMeetingPopupOpen(true)}  className="bg-primary hover:bg-blue-600 hover:scale-110 transition-all shadow-lg duration-300 p-4 rounded-2xl text-l1 font-semibold lg:mx-0">Book an appointment</button>

              <ScrollLink 
                {...createLinkAttributes("tier1")}
              >
                Our Packages 
              </ScrollLink>

              <Calendly
              setPopupOpen={setMeetingPopupOpen}
              isPopupOpen={isMeetingPopupOpen}
            />
            </div>
          </div>

          <img
            src="assets/images/home_img.png"
            className="hidden lg:block w-7/12 overflow-hidden rounded-full"
          ></img>
        </div>
      </Fade>
    </div>
  
  );
}
