import React from "react";

function Pricing() {
  return (
    <div id="pricing" className="bg-temp-background text-temp-text">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-center mb-8">
          Our Pricing
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 hover:shadow-lg transition-transform duration-300">
            <h2 className="text-xl font-semibold mb-2">Hair Cut</h2>
            <p className="text-lg mb-4">€25</p>
            <p className="text-gray-600">
              Get a stylish hair cut from our experienced hairdressers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 hover:shadow-lg transition-transform duration-300">
            <h2 className="text-xl font-semibold mb-2">Beard Trim</h2>
            <p className="text-lg mb-4">€15</p>
            <p className="text-gray-600">
              Shape and groom your beard with our expert barbers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 hover:shadow-lg transition-transform duration-300">
            <h2 className="text-xl font-semibold mb-2">
              Hair Cut & Beard Trim
            </h2>
            <p className="text-lg mb-4">€35</p>
            <p className="text-gray-600">
              Combine a hair cut and a beard trim for the ultimate grooming
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
