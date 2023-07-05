// Skill Icons
import { GoCommandPalette } from "react-icons/go";
import { FaLaptopCode } from "react-icons/fa";
import { FaTools } from "react-icons/fa";

// Front End Icons
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";

// Back End Icons
import { SiDotnet, SiExpress, SiMongodb, SiFirebase } from "react-icons/si";
import { FaNodeJs, FaJava, FaPython } from "react-icons/fa";


// Tools Icons
import { FaGit } from "react-icons/fa";
import { TbApi } from "react-icons/tb";


import { useState } from "react";

const frontIcons = {
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: IoLogoJavascript,
  React: FaReact,
  TailwindCSS: SiTailwindcss,
  Bootstrap: FaBootstrap,
};

const backIcons = {
  DotNet: SiDotnet,
  Express: SiExpress,
  MongoDB: SiMongodb,
  Firebase: SiFirebase,
  NodeJS: FaNodeJs,
  Java: FaJava,
  Python: FaPython,
};

const toolIcons = {
  Git: FaGit,
  RESTAPI: TbApi,
};

export default function Services() {
  const [selectedSkill, setSelectedSkill] = useState("front");

  return (
    // Main container
    <div id="skills" className="bg-blue-950 flex flex-col items-center">
      {/* Title */}
      <div className="text-white text-3xl md:text-6xl w-full text-center py-4">
        <h1>SKILLS</h1>
      </div>
      {/* Skill list */}
      <div className="flex flex-col md:flex-row text-white justify-around w-full pb-4 ">
        <div
          onClick={() => setSelectedSkill("front")}
          className={`flex flex-col justify-center items-center cursor-pointer ${
            selectedSkill === "front" ? "border-2 rounded p-2" : ""
          }`}
        >
          <FaLaptopCode className="text-6xl md:text-9xl" />
          <p>Front End</p>
        </div>
        <div
          onClick={() => setSelectedSkill("back")}
          className={`flex flex-col justify-center items-center cursor-pointer ${
            selectedSkill === "back" ? "border-2 rounded p-2" : ""
          }`}
        >
          <GoCommandPalette className="text-6xl md:text-9xl" />
          <p>Back End</p>
        </div>
        <div
          onClick={() => setSelectedSkill("tools")}
          className={`flex flex-col justify-center items-center cursor-pointer ${
            selectedSkill === "tools" ? "border-2 rounded p-2" : ""
          }`}
        >
          <FaTools className="text-6xl md:text-9xl" />
          <p>Tools</p>
        </div>
      </div>
      {/* Border */}
      <div className="border-2 w-full"></div>
      {/* SubSkills */}
      <ShowSkills selectedSkill={selectedSkill} />
    </div>
  );
}

function ShowSkills(props) {
  const { selectedSkill } = props;

  // Access the icon dictionary based on the selected skill
  const icons = {
    front: frontIcons,
    back: backIcons,
    tools: toolIcons,
  }[selectedSkill];

  if (!icons) {
    return null;
  }

  return (
    <div className="flex flex-row flex-wrap justify-around items-center text-white w-full py-4">
      {Object.keys(icons).map((name) => {
        const Icon = icons[name];
        return (
          <div key={name} className="flex flex-col items-center">
            {Icon && <Icon className="text-5xl mb-2" />}
            <p className="hidden sm:block">{name}</p>
          </div>
        );
      })}
    </div>
  );
}
