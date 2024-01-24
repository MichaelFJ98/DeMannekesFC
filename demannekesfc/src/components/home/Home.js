import Button from "../Button.js";
import React,{useState} from "react";
import Fade from "react-reveal/Fade";
import Calendly from "../Calendly.js";
import {Link as ScrollLink} from "react-scroll";

export default function Home() {
  const handleScrollTo = (to) => {
    const element = document.getElementById(to);
    if (element) {
      const yOffset = -58;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth", duration: 500 });
    }
  };
    const [isMeetingPopupOpen, setMeetingPopupOpen] = useState(false);

    const createLinkAttributes = (to) => {
      let className =
        "text-base font-semibold text-primary hover:underline cursor-pointer hover:bg-zinc-300 px-2 py-4 rounded-2xl";
  
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
      className="bg-l1 dark:bg-dark-background text-slate-900 dark:text-dark-text h-screen flex flex-row justify-center"
    >
      <Fade duration={1500}>
        <div className="flex row justify-start items-center gap-4 sm:gap-6 w-7/12 h-full ">
          <div className="text-left lg:w-7/12">
            <p className="text-lg sm:text-xl md:text-2xl py-3">
              Hi, we are Insiter
            </p>

            <h1 className="leading-tight text-3xl md:text-4xl text-c3 font-black">
              Full-Stack Developers
            </h1>

            <h1 className="leading-tight text-3xl md:text-4xl text-c3 font-black ">
              From Belgium.
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl py-3">
              We help people and brands by designing and building digital
              products that are optimized for your clients experience.
            </p>

            <div className="flex flex-row gap-4 items-center py-2">
              <Button
                text={"Book an appointment"}
                fontSize={"font-semibold"}
                onClick={() => setMeetingPopupOpen(true)}
              />

              <ScrollLink 
                {...createLinkAttributes("packages")}
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
            src="assets/images/MichelNew.png"
            className="hidden lg:block w-5/12 overflow-hidden bg-zinc-300 rounded-xl"
          ></img>
        </div>
      </Fade>
    </div>
  
  );
}
