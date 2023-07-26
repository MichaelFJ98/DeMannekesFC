import React, { useState } from "react";
import Calendly from "../Calendly";
import Button from "../Button.js";

export default function Contact() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleEmailClick = () => {
    const emailAddress = "info@mannekes.be";
    navigator.clipboard.writeText(emailAddress);
    window.location.href = `mailto:${emailAddress}`;
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/bryan_langhendries");
  };

  return (
    <div
      id="contact"
      class="bg-blue-50 flex items-center justify-around border-t-2 p-8"
    >
      <div className="flex flex-col text-center w-7/12 items-center">
        <div>
          <h1 class="font-black tracking-tight text-blue-950 text-2xl md:text-3xl ">
            In need of a website to improve your business?
          </h1>
          <p class="lg:mb-4 font-semibold text-blue-500 lg:text-xl mb-2 text-xs ">
            Let's build something great together.
          </p>
        </div>
        <p className="text-center text-gray-500 text-xs lg:text-lg w-screen lg:w-full px-2 ">
          was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum
        </p>
        <div className="flex flex-row gap-x-10 pt-4">
          <div className="">
            <Calendly setPopupOpen={setPopupOpen} isPopupOpen={isPopupOpen} />
            <button
              className=" bg-blue-500 text-white font-semibold transition-all shadow-lg duration-300 ease-in-out hover:scale-110 hover:text-blue-500 px-4 border-2 border-blue-500 hover:bg-transparent rounded h-10"
              onClick={() => setPopupOpen(true)}
            >
              Schedule a meeting
            </button>
          </div>
          <Button text={"Send a message"} fontSize={"font-semibold"} />
        </div>
      </div>
    </div>
  );
}
