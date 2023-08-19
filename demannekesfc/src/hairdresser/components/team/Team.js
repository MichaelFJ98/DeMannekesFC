import React from "react";
import Divider from "../Divider";

import { BsInstagram } from "react-icons/bs";

const teamMembers = [
  {
    name: "John Doe",
    image: "assets/images/hairdresser/p2.webp",
    experience: "5 years of experience",
    instagram: "https://instagram.com",
  },
  {
    name: "Jane Smith",
    image: "assets/images/hairdresser/p1.webp",
    experience: "4 years of experience",
    instagram: "https://instagram.com",
  },
  {
    name: "Potter Smith",
    image: "assets/images/hairdresser/p1.webp",
    experience: "14 years of experience",
    instagram: "https://instagram.com",
  },
];

function Team() {
  const handleInstagram = (link) => {
    window.open(link, "_blank");
  };

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
            className="bg-white p-6 rounded-lg hover:shadow-temp-accent hover:shadow-md transition-shadow relative"
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
              <BsInstagram
                onClick={() => handleInstagram(member.instagram)}
                className="text-xl cursor-pointer hover:text-temp-accent"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
