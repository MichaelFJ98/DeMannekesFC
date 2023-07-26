import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { FaHome } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsBriefcaseFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { FiMail } from "react-icons/fi";

import { Navbar } from "flowbite-react";

export default function Nav() {
  const createLinkAttributes = (to) => ({
    to,
    smooth: true,
    duration: 500,
    offset: -58,
    className:
      "cursor-pointer flex items-center space-x-2 hover:border-b-2 hover:border-blue-500 transition duration-300",
  });

  return (
    <div className="flex justify-center items-center w-full bg-blue-950">
    <Navbar
      fluid
      rounded
      className="fixed top-0 text-grey-500 drop-shadow-xl bg-blue-50 z-50 md:py-4 w-7/12"
    >
      <Navbar.Brand as="button" onClick={scroll.scrollToTop}>
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          DuoDev
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <ul className="flex items-center space-x-4">
          <li>
            <ScrollLink {...createLinkAttributes("home")}>
              <FaHome className="text-xl" />
              <span>Home</span>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink {...createLinkAttributes("about")}>
              <AiOutlineInfoCircle className="text-xl" />
              <span>About</span>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink {...createLinkAttributes("projects")}>
              <BsBriefcaseFill className="text-xl" />
              <span>Projects</span>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink {...createLinkAttributes("services")}>
              <GiSkills className="text-xl" />
              <span>Services</span>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink {...createLinkAttributes("contact")}>
              <FiMail className="text-xl" />
              <span>Contact</span>
            </ScrollLink>
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}
