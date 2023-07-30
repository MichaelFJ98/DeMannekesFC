import React, { useState } from "react";
import Calendly from "../Calendly";
import Button from "../Button.js";
import ContactForm from "../ContactForm";

export default function Contact() {
  const [isMeetingPopupOpen, setMeetingPopupOpen] = useState(false);
  const [isContactPopupOpen, setContactPopupOpen] = useState(false);

  return (
    <div
      id="contact"
      class="bg-blue-50 flex items-center justify-around border-t-2 py-28"
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
          Are you ready to take your business to the next level? Let us create a
          remarkable website that drives growth and success for your brand.
          Together, we'll build something extraordinary.
        </p>
        <div className="flex flex-col md:flex-row gap-x-10 gap-y-4 pt-4">
          <div className="">
            <Calendly
              setPopupOpen={setMeetingPopupOpen}
              isPopupOpen={isMeetingPopupOpen}
            />
            <Button
              text={"Schedule a meeting"}
              fontSize={"font-semibold"}
              onClick={() => setMeetingPopupOpen(true)}
            />
          </div>
          <div className="self-center">
            <Button
              text={"Send a message"}
              fontSize={"font-semibold"}
              onClick={() => setContactPopupOpen(true)}
            />
            <ContactForm
              isOpen={isContactPopupOpen}
              onClose={() => setContactPopupOpen(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
