import React, { useState } from "react";
import Calendly from "../Calendly";
import Button from "../Button.js";
import ContactForm from "../ContactForm";

import SuccessPopup from "./SuccessPopup";
import FailurePopup from "./FailurePopup";

import Fade from "react-reveal/Fade";

export default function Contact() {
  const [isMeetingPopupOpen, setMeetingPopupOpen] = useState(false);
  const [isContactPopupOpen, setContactPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);
  const [isFailurePopupOpen, setFailurePopupOpen] = useState(false);

  const showSuccessPopup = () => {
    setSuccessPopupOpen(true);
  };

  const showFailurePopup = () => {
    setFailurePopupOpen(true);
  };

  const closeAllPopups = () => {
    setMeetingPopupOpen(false);
    setContactPopupOpen(false);
    setSuccessPopupOpen(false);
    setFailurePopupOpen(false);
  };

  return (
    <div
      id="contact"
      className="bg-background dark:bg-dark-background flex items-center justify-around border-b-2 py-28"
    >
      {/* Render the popups conditionally */}
      {isSuccessPopupOpen && <SuccessPopup onClose={closeAllPopups} />}
      {isFailurePopupOpen && <FailurePopup onClose={closeAllPopups} />}
      <div className="flex flex-col text-center w-7/12 items-center">
        <div>
          <Fade top distance="20px" duration={1500}>
            <h1 className="font-black tracking-tight text-primary dark:text-dark-primary text-2xl md:text-3xl ">
              In need of a website to improve your business?
            </h1>
          </Fade>
          <Fade top distance="20px" duration={1500}>
            <p className="lg:mb-4 font-semibold text-primary lg:text-xl mb-2 text-xs ">
              Let's build something great together.
            </p>
          </Fade>
        </div>
        <Fade top distance="20px" duration={1500}>
          <p className="text-center text-text dark:text-dark-text text-xs lg:text-lg w-screen lg:w-full px-2 ">
            Are you ready to take your business to the next level? Let us create
            a remarkable website that drives growth and success for your brand.
            Together, we'll build something extraordinary.
          </p>
        </Fade>
        <div className="flex flex-col md:flex-row gap-x-10 gap-y-4 pt-4">
          <div className="">
            <Calendly
              setPopupOpen={setMeetingPopupOpen}
              isPopupOpen={isMeetingPopupOpen}
            />
            <Fade top distance="20px" duration={1500}>
              <Button
                text={"Schedule a meeting"}
                fontSize={"font-semibold"}
                onClick={() => setMeetingPopupOpen(true)}
              />
            </Fade>
          </div>
          <div className="self-center">
            <Fade top distance="20px" duration={1500}>
              <Button
                text={"Send a message"}
                fontSize={"font-semibold"}
                onClick={() => setContactPopupOpen(true)}
              />
            </Fade>
            <ContactForm
              isOpen={isContactPopupOpen}
              onClose={() => setContactPopupOpen(false)}
              onSubmissionSuccess={() => {
                showSuccessPopup();
                setContactPopupOpen(false); // Close the form after success
              }}
              onSubmissionFailure={() => {
                showFailurePopup();
                setContactPopupOpen(false); // Close the form after failure
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
