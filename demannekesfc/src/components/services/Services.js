import "./Services.css";

import { FaPaintbrush } from "react-icons/fa6";
import {BsGraphUpArrow} from "react-icons/bs";

export default function Services() {
  return (
    <div id="Skills" className="bg-blue-950 p-12">
      <h1 className="text-2xl font-bold tracking-tight text-blue-50 sm:text-6xl text-center pb-6">Our Skillset</h1>
      
      <div id="skillBox" className="flex flex-row justify-around">
        <div id="Frontend" className="bg-blue-50 w-96 h-96 min-h-max rounded-lg text-stone-950 p-4 drop-shadow-lg ">
          <h1 className="text-2xl font-bold tracking-tight text-stone-950 sm:text-4xl  text-center">Frontend</h1>
          <ul className="text-center">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>Boostrap</li>
          </ul>
        </div>

        <div id="Back-end" className="bg-blue-50 w-96 h-96 min-h-max rounded-lg text-stone-950 p-4 drop-shadow-lg ">
          <h1 className="text-2xl font-bold tracking-tight text-stone-950 sm:text-4xl  text-center">Back-end</h1>
          <ul className="text-center">
            <li>.NET</li>
            <li>NodeJS</li>
            <li>Java</li>
            <li>Python</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>FireBase</li>
          </ul>
        </div>

        <div id="Other" className="bg-blue-50 w-96 h-96 min-h-max rounded-lg text-stone-950 p-4 drop-shadow-lg ">
          <h1 className="text-2xl font-bold tracking-tight text-stone-950 sm:text-4xl  text-center">Other</h1>
          <ul className="text-center">
            <li>Git</li>
            <li>Rest API</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
