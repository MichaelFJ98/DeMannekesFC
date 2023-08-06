import React from "react";
import { FiMail } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";

function Location() {
  return (
    <div id="location" className="bg-temp-background text-temp-text">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Contact Form */}
        <div className="md:w-1/2 md:mr-10 mb-8 md:mb-0">
          <p className="text-temp-secondary font-bold">CONTACT US</p>
          <h1 className="font-bold text-3xl mt-2">
            Feel free to give us a call or send us an email with your questions
            or comments.
          </h1>
          <p className="text-md mt-2">
            We would love to hear from you, whether you're interested in working
            with our team or pursuing a career with us.
          </p>
          <div className="mt-4 space-y-4">
            {[
              { label: "Name", id: "name", required: true },
              { label: "Email", id: "email", required: true },
              { label: "Phone", id: "phone" },
              { label: "Message", id: "message", textarea: true },
            ].map((field) => (
              <div key={field.id} className="mb-4">
                <label htmlFor={field.id} className="block font-bold">
                  {field.label}
                  {field.required && (
                    <span className="pl-1 text-red-500">*</span>
                  )}
                </label>
                {field.textarea ? (
                  <textarea
                    id={field.id}
                    className="w-full p-2 border rounded"
                    placeholder={`Enter your ${field.label.toLowerCase()}...`}
                  />
                ) : (
                  <input
                    id={field.id}
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder={`Enter your ${field.label.toLowerCase()}...`}
                  />
                )}
              </div>
            ))}
            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded transition-colors duration-300 hover:bg-blue-600">
              SUBMIT
            </button>
          </div>
        </div>
        {/* Location and Contact Info */}
        <div className="md:w-1/2 bg-gray-200">
          <img
            src="/assets/images/hairdresser/location.webp"
            alt="Location"
            className="max-w-full border-2"
          />
          <div className="mt-8 pb-10 px-10">
            <div className="flex items-center mb-4">
              <FiMail className="mr-2" />
              <a href="mailto:lordmistery_16@hotmail.com" className="underline">
                lordmistery_16@hotmail.com
              </a>
            </div>
            <div className="flex items-center mb-4">
              <MdLocationOn className="mr-2" />
              <p className="underline cursor-pointer">Vilvoorde, VLG BE</p>
            </div>
            <div>
              <p className="font-bold pb-2">Hours</p>
              <div className="grid grid-cols-2 gap-1">
                <p>Monday</p>
                <p>9:00am - 10:00pm</p>
                <p>Tuesday</p>
                <p>9:00am - 10:00pm</p>
                <p>Wednesday</p>
                <p>9:00am - 10:00pm</p>
                <p>Thursday</p>
                <p>9:00am - 10:00pm</p>
                <p>Friday</p>
                <p>9:00am - 10:00pm</p>
                <p>Saturday</p>
                <p>9:00am - 10:00pm</p>
                <p>Sunday</p>
                <p>9:00am - 10:00pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
