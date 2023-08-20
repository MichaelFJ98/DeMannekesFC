import React, { useState } from "react";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import { GiPositionMarker } from "react-icons/gi";
import { BiSolidPhoneCall } from "react-icons/bi";
import ImageFade from "../ImageFade";

const phone = "+322 445 55 07";
const bookingURL =
  "https://booking.setmore.com/scheduleappointment/3f967fb4-e07f-4eaa-bb87-9553decfbdc2";

const Hero = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    document.body.classList.add("overflow-hidden");
    setModalIsOpen(true);
  };

  const closeModal = () => {
    document.body.classList.remove("overflow-hidden");
    setModalIsOpen(false);
  };

  const modalStyles = {
    overlay: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "fixed",
      top: 0,
      left: -48,
      right: 32,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      zIndex: 1000,
    },
    content: {
      width: "80%",
      maxWidth: "800px",
      height: "100%",
      maxHeight: "80%",
      overflow: "auto",
      position: "relative",
      margin: "auto",
    },
  };

  return (
    <div
      id="hero"
      className="flex flex-col mx-4 lg:flex-row lg:space-x-16 items-center lg:items-start pt-40 text-center lg:text-left"
    >
      <div className="w-full lg:w-1/2">
        <h1 className="font-bold text-4xl mb-2">Quality Haircuts</h1>
        <h1 className="font-bold text-4xl mb-2">and Beard Trimming</h1>
        <p className="text-temp-gray mb-6">
          Professional haircuts and beard trimming.
        </p>
        <button
          onClick={openModal}
          className="bg-temp-accent transition-colors md:hover:bg-transparent border md:hover:text-temp-text border-temp-accent py-2 px-4 text-black font-bold"
        >
          Book Now
        </button>
        <div className="flex flex-col lg:flex-row items-center mt-6">
          <GoClock className="mr-2 text-2xl mb-2 lg:mb-0" />
          <div className="flex flex-col justify-center text-temp-gray">
            <p>Monday - Friday</p>
            <p>9:00am - 7:00pm</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center mt-4">
          <GiPositionMarker className="mr-2 text-2xl mb-2 lg:mb-0" />
          <p className="text-temp-gray">Oak Street 3, Prague</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center mt-4">
          <BiSolidPhoneCall className="mr-2 text-2xl mb-2 lg:mb-0" />
          <p className="text-temp-gray">{phone}</p>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Setmore Booking Modal"
          style={modalStyles}
        >
          <button
            onClick={closeModal}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <IoClose size={32} color="black" />
          </button>
          <iframe
            title="Setmore Booking"
            src={bookingURL}
            width="100%"
            height="100%"
            frameBorder="0"
          ></iframe>
        </Modal>
      </div>
      <div className="w-1/2 hidden lg:block">
        <ImageFade
          imageSrc={"assets/images/hairdresser/herobg.webp"}
          fadeLeft={true}
        />
      </div>
    </div>
  );
};

export default Hero;
