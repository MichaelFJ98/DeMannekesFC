import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const teamMembers = [
  {
    name: "Michael Fernandez-Juarez",
    role: "Founder @ DuoDev",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "./assets/images/Michel.png",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/in/",
  },
  {
    name: "Bryan Langhendries",
    role: "Founder @ DuoDev",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "./assets/images/Bryan.png",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/in/",
  },
];

export default function About() {
  return (
    <div
      id="about"
      className="bg-gray-900 text-white flex flex-col p-6 h-full items-center"
    >
      <h1 className="text-4xl font-bold tracking-tight md:text-6xl pb-6 text-center">
        Our Team
      </h1>

      <div className="flex flex-wrap justify-around">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg m-4 p-6 w-80 flex flex-col space-y-4 shadow-xl cursor-pointer"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover mb-4 self-center"
            />
            <div className="text-center">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-400 text-sm">{member.role}</p>
            </div>
            <div>
              <p className="text-gray-400">{member.about}</p>
            </div>
            <div className="mt-auto flex justify-end space-x-4">
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-blue-400 hover:text-blue-300 text-3xl transition-colors" />
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="text-blue-400 hover:text-blue-300 text-3xl transition-colors" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
