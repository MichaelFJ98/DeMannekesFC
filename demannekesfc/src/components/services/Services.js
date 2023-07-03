import { GoCommandPalette } from "react-icons/go";
import { FaLaptopCode } from "react-icons/fa";
import { FaTools } from "react-icons/fa";

import { TfiHtml5 } from "react-icons/tfi";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";

export default function Services() {
  return (
    <div id="skills" className="bg-blue-950 flex flex-row h-screen">
      <div className="h-full w-1/3 flex flex-col text-white border-r-2">
        <div className="w-full h-1/4 flex flex-col justify-center items-center">
          <FaLaptopCode className="text-7xl" />
          <p>Front End</p>
        </div>
        <div className="w-full h-1/4 flex flex-col justify-center items-center">
          <GoCommandPalette className="text-7xl" />
          <p>Back End</p>
        </div>
        <div className="w-full h-1/4 flex flex-col justify-center items-center">
          <FaTools className="text-7xl" />
          <p>Tools</p>
        </div>
      </div>
      <div className="text-white h-full w-1/2 flex flex-row flex-wrap justify-auto content-start p-4">
        <div className="w-40 h-40 border flex flex-col justify-center items-center m-2">
          <TfiHtml5 className="text-7xl" />
          <p>HTML</p>
        </div>
        <div className="w-40 h-40 border flex flex-col justify-center items-center m-2">
          <FaCss3Alt className="text-7xl" />
          <p>CSS</p>
        </div>
        <div className="w-40 h-40 border flex flex-col justify-center items-center m-2">
          <IoLogoJavascript className="text-7xl" />
          <p>Javascript</p>
        </div>
        <div className="w-40 h-40 border flex flex-col justify-center items-center m-2">
          <FaReact className="text-7xl" />
          <p>React</p>
        </div>
        <div className="w-40 h-40 border flex flex-col justify-center items-center m-2">
          <SiTailwindcss className="text-7xl" />
          <p>Tailwind</p>
        </div>
        <div className="w-40 h-40 border flex flex-col justify-center items-center m-2">
          <FaBootstrap className="text-7xl" />
          <p>Bootstrap</p>
        </div>
      </div>
    </div>
  );
}
