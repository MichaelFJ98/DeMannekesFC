import React from "react";
import Divider from "../Divider";

const teamMembers = [
  {
    name: "John Doe",
    image: "assets/images/hairdresser/p2.webp",
    experience: "5 years of experience",
  },
  {
    name: "Jane Smith",
    image: "assets/images/hairdresser/p1.webp",
    experience: "4 years of experience",
  },
  {
    name: "Potter Smith",
    image: "assets/images/hairdresser/p1.webp",
    experience: "14 years of experience",
  },
];

function Team() {
  return (
    <div id="team" className="pt-24">
      <div className="">
        <h1 className="text-3xl font-extrabold mb-2">
          Team of absolute experts
        </h1>
        <Divider />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md transition transform duration-300 hover:scale-105 hover:shadow-lg relative"
            style={{
              backgroundImage: `url(${member.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              paddingBottom: "100%",
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-10 p-4 rounded-b-lg text-center">
              <p className="text-lg mb-2 uppercase font-bold text-white">
                {member.name}
              </p>
              <p className="text-sm text-gray-300">{member.experience}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
