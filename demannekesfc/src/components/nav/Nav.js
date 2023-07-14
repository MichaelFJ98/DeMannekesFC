import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { FaHome } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsBriefcaseFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { FiMail } from "react-icons/fi";

export default function Nav() {
  const createLinkAttributes = (to) => ({
    to,
    smooth: true,
    duration: 500,
    offset: -70,
    className:
      "cursor-pointer hover:border-b-2 hover:border-white transition duration-300",
  });

  return (
    <nav className="fixed left-0 bottom-1/2 md:bottom-full md:top-0 z-50 shadow-lg md:w-full">
      <div className="bg-primaryBlue hidden md:flex justify-around items-center p-4 text-white">
        <div className="cursor-pointer text-4xl" onClick={scroll.scrollToTop}>
          <h1>DuoDev</h1>
        </div>

        <ul className="flex space-x-8">
          <li>
            <ScrollLink {...createLinkAttributes("home")}>Home</ScrollLink>
          </li>
          <li>
            <ScrollLink {...createLinkAttributes("about")}>About</ScrollLink>
          </li>
          <li>
            <ScrollLink {...createLinkAttributes("projects")}>
              Portfolio
            </ScrollLink>
          </li>
          <li>
            <ScrollLink {...createLinkAttributes("skills")}>Skills</ScrollLink>
          </li>
          <li>
            <ScrollLink {...createLinkAttributes("contact")}>
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>

      <div className="flex md:hidden">
        <ul className="text-white">
          <li>
            <ScrollLink
              to="home"
              smooth="true"
              className="flex items-center justify-between"
            >
              <FaHome className="text-3xl"/>
              <p>Home</p>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth="true"
              className="flex items-center justify-between"
            >
              <AiOutlineInfoCircle className="text-3xl" />
              <p>About</p>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              smooth="true"
              className="flex items-center justify-between"
            >
              <BsBriefcaseFill className="text-3xl" />
              <p>Portfolio</p>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="skills"
              smooth="true"
              className="flex items-center justify-between"
            >
              <GiSkills className="text-3xl" />
              <p>Skills</p>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth="true"
              className="flex items-center justify-between"
            >
              <FiMail className="text-3xl" />
              <p>Contact</p>
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
