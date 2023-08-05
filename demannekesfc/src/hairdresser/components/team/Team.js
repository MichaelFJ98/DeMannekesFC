import React from "react";

const teamMembers = [
  {
    name: "John Doe",
    role: "Hair Stylist",
    image: "/images/john.jpg",
  },
  {
    name: "Jane Smith",
    role: "Barber",
    image: "/images/jane.jpg",
  },
];

function Team() {
  return (
    <div id="team" className="bg-temp-background text-temp-text">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-center mb-8">
          Meet Our Team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center transition transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={member.image}
                alt={member.name}
                className="mx-auto rounded-full w-32 h-32 mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
              <p className="text-lg mb-4">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
