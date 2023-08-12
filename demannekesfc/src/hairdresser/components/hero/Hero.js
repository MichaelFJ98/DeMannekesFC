import React, { useState } from "react";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5"; // Import the close icon from react-icons library

function Hero() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    document.body.classList.add("overflow-hidden");
    setModalIsOpen(true);
  };

  const closeModal = () => {
    document.body.classList.remove("overflow-hidden");
    setModalIsOpen(false);
  };

  return (
    <div
      id="hero"
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/assets/images/hairdresser/herobg.webp')",
      }}
    >
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-extrabold mb-4">
          Welcome to Hair Majesty
        </h1>
        <p className="text-lg text-white mb-8">
          Your hair deserves the best care and styling.
        </p>
        <button
          onClick={openModal}
          className="px-8 py-4 bg-temp-secondary text-white font-semibold text-lg rounded-full shadow-lg hover:bg-temp-accent transition-colors duration-300 ease-in-out"
        >
          Book Now
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Setmore Booking Modal"
          style={{
            overlay: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              zIndex: 1000,
            },
            content: {
              width: "80%", // Adjust the width as needed
              maxWidth: "800px",
              height: "100%",
              maxHeight: "80%", // Adjust the height as needed
              overflow: "auto", // Allow content to be scrolled if needed
              position: "relative",
              margin: "auto",
            },
          }}
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
            src="https://booking.setmore.com/scheduleappointment/3f967fb4-e07f-4eaa-bb87-9553decfbdc2"
            width="100%"
            height="100%"
            frameBorder="0"
          ></iframe>
        </Modal>
      </div>
    </div>
  );
}

export default Hero;
