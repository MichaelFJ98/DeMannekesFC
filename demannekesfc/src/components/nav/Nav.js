import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Nav() {

  return (
    <div className="bg-gray-800">
    <header id="page-header" class="flex flex-none items-center py-10">
    <div class="flex flex-col text-center sm:flex-row sm:items-center sm:justify-between space-y-6 sm:space-y-0 container xl:max-w-6xl mx-auto px-4 lg:px-8">
      <div className="cursor-pointer">
        <a class="inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-white hover:opacity-75">
        <img src="assets/images/logo.png" alt="Logo" width="20" height="20" />
          <span>Insiter</span>
        </a>
      </div>
      <nav class="flex items-center justify-center space-x-4 sm:space-x-6 text-sm">
        <a class="font-semibold text-gray-300 hover:text-gray-400 cursor-pointer">
          <span>Features</span>
        </a>
        <a class="font-semibold text-gray-300 hover:text-gray-400 cursor-pointer">
          <span>Pricing</span>
        </a>
        <a class="font-semibold text-gray-300 hover:text-gray-400 cursor-pointer">
          <span>Contact</span>
        </a>
      </nav>
    </div>
  </header>
  </div>
  );
}

export default Nav;
