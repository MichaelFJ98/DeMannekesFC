import { GoCommandPalette } from "react-icons/go";
import { FaLaptopCode } from "react-icons/fa";
import { FaTools } from "react-icons/fa";

import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { useState } from "react";

const frontIcons = {
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  Javascript: IoLogoJavascript,
  React: FaReact,
  Tailwind: SiTailwindcss,
  Bootstrap: FaBootstrap,
};

const backIcons = {
};

const toolIcons = {
};

export default function Services() {
  const [selectedSkill, setSelectedSkill] = useState("front");

  return (
    // Main container
    <div id="skills" className="bg-blue-950 flex flex-col items-center">
      {/* Title */}
      <div className="text-white text-6xl w-full text-center py-4">
        <h1>SKILLS</h1>
      </div>
      {/* Skill list */}
      <div className="flex flex-row text-white justify-around w-full pb-4 ">
        <div onClick={() => setSelectedSkill("front")} className="flex flex-col justify-center items-center cursor-pointer">
          <FaLaptopCode className="text-9xl" />
          <p>Front End</p>
        </div>
        <div onClick={() => setSelectedSkill("back")} className="flex flex-col justify-center items-center cursor-pointer">
          <GoCommandPalette className="text-9xl" />
          <p>Back End</p>
        </div>
        <div onClick={() => setSelectedSkill("tools")} className="flex flex-col justify-center items-center cursor-pointer">
          <FaTools className="text-9xl" />
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
    <div className="flex flex-row justify-around items-center text-white">
      {Object.keys(icons).map((name) => {
        const Icon = icons[name];
        return (
          <div key={name} className="flex flex-col justify-evenly items-center">
            {Icon && <Icon className="text-5xl" />}
            <p>{name}</p>
          </div>
        );
      })}
    </div>
  );
}
