import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const teamMembers = [
  {
    name: "Michael Fernandez-Juarez",
    role: "Founder @ Insiter",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "./assets/images/Michel.png",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/in/",
  },
  {
    name: "Bryan Langhendries",
    role: "Founder @ Insiter",
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
      className="bg-blue-50 text-blue-950 flex flex-col p-6 h-full items-center pb-20"
    >
      <h1 className="text-4xl font-black tracking-tight md:text-6xl pb-12 text-center">
        Our Team
      </h1>

      <div className="flex flex-wrap justify-around w-7/12 py-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-blue-50 hover:scale-110 transition-all rounded-lg m-4 p-6 w-80 flex flex-col space-y-4 shadow-md shadow-blue-200 cursor-pointer"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-28 h-28 rounded-full object-cover mb-4 self-center p-1 bg-blue-300"
            />
            <div className="text-center">
              <h1 className="text-xl font-bold">{member.name}</h1>
              <p className="text-gray-700 text-sm">{member.role}</p>
            </div>
            <div className="mt-auto flex justify-center space-x-4">
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-blue-500 hover:text-blue-300 text-3xl transition-colors" />
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="text-blue-500 hover:text-blue-300 text-3xl transition-colors" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
