import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const teamMembers = [
  {
    name: "Michael Fernandez-Juarez",
    role: "Founder @ Insiter",
    about:
      "Hey there! I'm Michael, a passionate developer and entrepreneur. I love envisioning innovative solutions that take businesses to new heights in the digital realm. With a keen eye for detail and a deep understanding of your needs, I'll craft a tailored website that leaves a lasting impact.",
    image: "./assets/images/Michel.png",
    github: "https://github.com/MichaelFJ98",
    linkedin: "https://www.linkedin.com/in/michael-fernandez-juarez/",
  },
  {
    name: "Bryan Langhendries",
    role: "Founder @ Insiter",
    about:
      "Hello, I'm Bryan! As a developer with a passion for problem-solving and creativity, I'm committed to crafting exceptional digital experiences. I strongly believe in the power of collaboration, turning your ideas into reality.",
    image: "./assets/images/Bryan.png",
    github: "https://github.com/bryanlanghendries",
    linkedin: "https://www.linkedin.com/in/bryan-langhendries/",
  },
];

export default function About() {
  return (
    <div
      id="about"
      className="bg-secondary text-primary dark:bg-dark-secondary dark:text-dark-text flex flex-col p-6 h-full items-center pb-20"
    >
      <h1 className="text-4xl font-black tracking-tight md:text-6xl pb-12 text-center">
        Our Team
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-7/12 py-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-secondary dark:hover:scale-110 transition-all rounded-lg p-6 flex flex-col shadow-md shadow-primary dark:shadow-dark-primary"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-28 h-28 rounded-full object-cover mb-4 self-center p-1 bg-primary dark:bg-dark-primary"
            />
            <div className="text-center flex flex-col flex-grow">
              <h1 className="text-xl font-bold text-text dark:text-dark-text">
                {member.name}
              </h1>
              <p className="text-gray-700 text-sm text-text dark:text-dark-text">
                {member.role}
              </p>
              <p className="p-4 hidden md:block text-text dark:text-dark-text">
                {member.about}
              </p>

              <div className="mt-auto flex justify-center space-x-4 pt-4">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-primary dark:text-dark-primary hover:text-primary dark:hover:text-primary text-3xl transition-colors" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="text-primary dark:text-dark-primary hover:text-primary dark:hover:text-primary text-3xl transition-colors" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
