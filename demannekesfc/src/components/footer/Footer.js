import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="page-footer" class="bg-white">
      <div class="flex flex-col md:flex-row md:justify-between space-y-6 md:space-y-0 text-center md:text-left text-sm container xl:max-w-6xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        <nav class="space-x-2 sm:space-x-4">
          <a
            href="javascript:void(0)"
            class="font-medium text-gray-700 hover:text-blue-500"
          >
            About
          </a>
          <a
            href="javascript:void(0)"
            class="font-medium text-gray-700 hover:text-blue-500"
          >
            Terms of Service
          </a>
          <a
            href="javascript:void(0)"
            class="font-medium text-gray-700 hover:text-blue-500"
          >
            Privacy Policy
          </a>
        </nav>
        <div class="text-gray-500">
          <span class="font-medium">Insiter</span> © {currentYear}
        </div>
      </div>
    </footer>
  );
}
