import React, { useState, useEffect } from "react";
import { FiSend } from "react-icons/fi";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm({
  isOpen,
  onClose,
  onSubmissionSuccess,
  onSubmissionFailure,
}) {
  const [state, handleSubmit] = useForm("mwkdvonr");

  useEffect(() => {
    if (state.succeeded) {
      onSubmissionSuccess();
    } else if (state.errors && state.errors.length > 0) {
      onSubmissionFailure();
    }
  }, [state.succeeded, state.errors]);

  const handleOutsideClick = (e) => {
    if (!state.submitting && e.target.classList.contains("bg-black")) {
      onClose();
    }
  };

  const handleKeyPress = (e) => {
    if (!state.submitting && e.key === "Escape") {
      onClose();
    }
  };

  const handleClose = () => {
    if (!state.submitting) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleKeyPress);
    } else {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyPress);
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-md p-8 w-96">
        <h2 className="text-2xl font-bold text-blue-950 mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="name"
              className="text-gray-700 font-semibold mb-1 self-start"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-blue-500 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="email"
              className="text-gray-700 font-semibold mb-1 self-start"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-blue-500 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="subject"
              className="text-gray-700 font-semibold mb-1 self-start"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="border border-blue-500 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
            />
            <ValidationError
              prefix="Subject"
              field="subject"
              errors={state.errors}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="message"
              className="text-gray-700 font-semibold mb-1 self-start"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="border border-blue-500 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500 h-32 resize-none"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              className={`text-gray-500 ${
                state.submitting ? "cursor-default" : "hover:text-red-500"
              }`}
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`flex items-center space-x-1 bg-blue-500 text-white ${
                state.submitting
                  ? ""
                  : "hover:text-blue-500 hover:bg-transparent"
              } transition-all shadow-lg duration-300 ease-in-out px-3 border-2 border-blue-500 rounded min-h-[40px]`}
              disabled={state.submitting}
            >
              {state.submitting ? (
                <div className="flex items-center">
                  <div className="w-4 h-4 border-t-2 border-blue-200 border-solid rounded-full animate-spin" />
                  <span className="ml-2">Sending...</span>
                </div>
              ) : (
                <>
                  <FiSend className="text-lg mr-1" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
