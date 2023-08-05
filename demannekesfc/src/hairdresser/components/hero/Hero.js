import React, { useState } from "react";

function Hero() {
  const [selectedHairdresser, setSelectedHairdresser] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const hairdressers = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    // Add more hairdressers
  ];

  const handleHairdresserChange = (event) => {
    setSelectedHairdresser(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleAppointmentSubmit = () => {
    if (selectedHairdresser && selectedDate) {
      // Here, you can implement the API call to book the appointment
      alert(
        `Appointment booked with ${selectedHairdresser} on ${selectedDate}`
      );
    } else {
      alert("Please select a hairdresser and a date.");
    }
  };

  return (
    <div id="hero" className="bg-temp-primary text-temp-text py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-center mb-8 text-white">
          Book an Appointment
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-temp-primary focus:ring focus:ring-temp-primary focus:ring-opacity-50"
            value={selectedHairdresser}
            onChange={handleHairdresserChange}
          >
            <option value="">Select a Hairdresser</option>
            {hairdressers.map((hairdresser) => (
              <option key={hairdresser.id} value={hairdresser.name}>
                {hairdresser.name}
              </option>
            ))}
          </select>
          <input
            type="date"
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-temp-primary focus:ring focus:ring-temp-primary focus:ring-opacity-50"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="mt-4">
          <button
            className="w-full px-4 py-2 rounded-md bg-temp-secondary hover:bg-temp-accent text-white font-semibold"
            onClick={handleAppointmentSubmit}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
