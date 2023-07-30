import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const teamMembers = [
  {
    name: "Michael Fernandez-Juarez",
    role: "Founder @ Insiter",
    about:
      "Hey there! I'm Michael, a passionate developer and entrepreneur. I love envisioning innovative solutions that take businesses to new heights in the digital realm. With a keen eye for detail and a deep understanding of your needs, I'll craft a tailored website that leaves a lasting impact.",
    image: "./assets/images/Michel.png",
    github: process.env.REACT_APP_MICHAEL_GITHUB,
    linkedin: process.env.REACT_APP_MICHAEL_LINKEDIN,
  },
  {
    name: "Bryan Langhendries",
    role: "Founder @ Insiter",
    about:
      "Hello, I'm Bryan! As a developer with a passion for problem-solving and creativity, I'm committed to crafting exceptional digital experiences. I strongly believe in the power of collaboration, turning your ideas into reality.",
    image: "./assets/images/Bryan.png",
    github: process.env.REACT_APP_BRYAN_GITHUB,
    linkedin: process.env.REACT_APP_BRYAN_LINKEDIN,
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-7/12 py-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-blue-50 hover:scale-110 transition-all rounded-lg p-6 flex flex-col shadow-md shadow-blue-200"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-28 h-28 rounded-full object-cover mb-4 self-center p-1 bg-blue-300"
            />
            <div className="text-center flex flex-col flex-grow">
              <h1 className="text-xl font-bold">{member.name}</h1>
              <p className="text-gray-700 text-sm">{member.role}</p>
              <p className="p-4 hidden md:block">{member.about}</p>

              <div className="mt-auto flex justify-center space-x-4">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
          </div>
        ))}
      </div>
    </div>
  );
}
