import React from "react";

function Location() {
  return (
    <div id="location" className="bg-temp-background text-temp-text">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-center mb-8">
          Our Location
        </h1>
        <div className="flex justify-center">
          <img
            src="/assets/images/hairdresser/location.png"
            alt="Location"
            className="max-w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Location;
