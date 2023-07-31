import React, { useState, useEffect } from "react";
import { FiSend } from "react-icons/fi";

const validator = require("validator");

const API_URL = "http://localhost:3001/send-email";

export default function ContactForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isMailSuccess, setMailSuccess] = useState(false);
  const [isMailFailure, setMailFailure] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) {
      return;
    }

    // Sanitize user input
    const sanitizedFormData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    };

    // Validate email
    if (!validator.isEmail(sanitizedFormData.email)) {
      console.error("Invalid email address");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sanitizedFormData),
      });

      if (!response.ok) {
        throw new Error("Error sending email");
      }

      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
    }

    setLoading(false);
    onClose();
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleOutsideClick = (e) => {
    if (!isLoading && e.target.classList.contains("bg-black")) {
      onClose();
    }
  };

  const handleKeyPress = (e) => {
    if (!isLoading && e.key === "Escape") {
      onClose();
    }
  };

  const handleClose = () => {
    if (!isLoading) {
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
  }, [isOpen, isLoading]);

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
              value={formData.name}
              onChange={handleChange}
              className="border border-blue-500 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
              required
            />
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
              value={formData.email}
              onChange={handleChange}
              className="border border-blue-500 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
              required
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
              value={formData.subject}
              onChange={handleChange}
              className="border border-blue-500 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
              required
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
              value={formData.message}
              onChange={handleChange}
              className="border border-blue-500 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500 h-32 resize-none"
              required
            />
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              className="text-gray-500 hover:text-red-500"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`flex items-center space-x-1 bg-blue-500 text-white ${
                isLoading ? "" : "hover:text-blue-500 hover:bg-transparent"
              } transition-all shadow-lg duration-300 ease-in-out px-3 border-2 border-blue-500 rounded min-h-[40px]`}
              disabled={isLoading}
            >
              {isLoading ? (
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
