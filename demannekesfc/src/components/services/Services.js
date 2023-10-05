import React from "react";
import Service from "./Service.js";

import { FaLaptopCode, FaClipboardCheck, FaVideo } from "react-icons/fa";

export default function Services() {
  return (
    <div className="space-y-16 container xl:max-w-6xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
      <div class="text-center">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-4">Powerful Tools</h2>
        <h3 class="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
          We built the best tools to elevate your marketing efforts.
        </h3>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12">
        <div class="py-5 text-center">
          <div class="inline-flex items-center justify-center w-16 h-16 ml-3 mb-12 relative">
            <div class="absolute inset-0 rounded-full -m-3 transform translate-x-1 translate-y-1 bg-blue-300"></div>
            <div class="absolute inset-0 rounded-full -m-3 transform bg-blue-600 bg-opacity-75"></div>
            <FaLaptopCode/>
          </div>
          <h4 class="text-xl font-bold mb-2">Automation</h4>
          <p class="leading-relaxed text-gray-600 text-left">
            Vestibulum ullamcorper, odio sed rhoncus imperdiet, enim elit
            sollicitudin orci, eget dictum leo mi nec lectus. Nam commodo turpis
            id lectus scelerisque vulputate.
          </p>
        </div>
        <div class="py-5 text-center">
          <div class="inline-flex items-center justify-center w-16 h-16 ml-3 mb-12 relative">
            <div class="absolute inset-0 rounded-full -m-3 transform translate-x-1 translate-y-1 bg-blue-300"></div>
            <div class="absolute inset-0 rounded-full -m-3 transform bg-blue-600 bg-opacity-75"></div>
            <svg
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              class="text-white relative transform transition ease-out duration-150 opacity-90 group-hover:scale-125 group-hover:opacity-100 hi-outline hi-device-mobile inline-block w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
          <h4 class="text-xl font-bold mb-2">Schedule</h4>
          <p class="leading-relaxed text-gray-600 text-left">
            Vestibulum ullamcorper, odio sed rhoncus imperdiet, enim elit
            sollicitudin orci, eget dictum leo mi nec lectus. Nam commodo turpis
            id lectus scelerisque vulputate.
          </p>
        </div>
        <div class="py-5 text-center">
          <div class="inline-flex items-center justify-center w-16 h-16 ml-3 mb-12 relative">
            <div class="absolute inset-0 rounded-full -m-3 transform translate-x-1 translate-y-1 bg-blue-300"></div>
            <div class="absolute inset-0 rounded-full -m-3 transform bg-blue-600 bg-opacity-75"></div>
            <span class="font-semibold text-xl text-white relative transform transition ease-out duration-150 opacity-90 group-hover:scale-125 group-hover:opacity-100">
              JS
            </span>
          </div>
          <h4 class="text-xl font-bold mb-2">Integrations</h4>
          <p class="leading-relaxed text-gray-600 text-left">
            Vestibulum ullamcorper, odio sed rhoncus imperdiet, enim elit
            sollicitudin orci, eget dictum leo mi nec lectus. Nam commodo turpis
            id lectus scelerisque vulputate.
          </p>
        </div>
      </div>
    </div>
  );
}
