import React, { useState } from "react";
import Calendly from "../Calendly";

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
      class="min-h-screen min-w-screen bg-blue-50 flex lg:flex-row flex-col items-center justify-around "
    >
      <div className="w-1/3 flex flex-col items-center ">
        <div>
          <h2 class="font-bold tracking-tight text-black lg:text-6xl text-2xl text-center">
            Contact Us
          </h2>
          <p class="lg:mb-4 font-light text-center text-blue-400 lg:text-xl mb-2 text-xs w-screen">
            Let's build something great together.
          </p>
        </div>
        <p className="text-center text-gray-500 text-xs lg:text-lg w-screen lg:w-full px-2 ">
          was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum
        </p>
        <div className="pt-6">
          <Calendly setPopupOpen={setPopupOpen} isPopupOpen={isPopupOpen} />
          <button
            className="bg-blue-500 text-white text-xs lg:text-lg mb-4 font-semibold transition-colors shadow-lg duration-300 ease-in-out hover:text-blue-500 px-4 border-2 border-blue-500 hover:bg-transparent rounded h-10"
            onClick={() => setPopupOpen(true)}
          >
            Schedule Meeting
          </button>
        </div>
      </div>

      <div className="border-l-2  w-0.5 h-5/6 opacity-50  border-blue-950 "></div>

      <div className="">
        <h2
          h2
          class="text-2xl lg:text-5xl font-bold tracking-tight text-black text-center"
        >
          Leave A Message
        </h2>
        <p class="mb-6 font-light text-center text-blue-400 text-xs lg:text-xl">
          Ask us questions to help you realise your future.
        </p>
        <div class="p-4">
          <div className="  p-8 bg-gray-50 drop-shadow-lg lg:w-[32rem] min-w-screen">
            <form action="#" class="space-y-8 text-center lg:text-start">
              <div>
                <label
                  for="FullName"
                  class="block mb-2 text-sm font-medium text-blue-400 dark:text-gray-300"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="FullName"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-blue-400 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-blue-400 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-blue-400 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@email.com"
                  required
                />
              </div>
              <div>
                <label
                  for="subject"
                  class="block mb-2 text-sm font-medium text-blue-400 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  class="block p-3 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-blue-400 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                class="bg-blue-500 text-white font-semibold transition-colors shadow-lg duration-300 ease-in-out hover:text-blue-500 px-4 border-2 border-blue-500 hover:bg-transparent rounded h-10 text-xs lg:text-lg"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
