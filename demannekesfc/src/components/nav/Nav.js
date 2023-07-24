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
      "cursor-pointer hover:border-b-2 hover:border-blue-500 transition duration-300",
  });

  return (
    <Navbar
      fluid
      rounded
      className="fixed top-0 w-full bg-white border-gray-200 dark:bg-gray-900 z-50 md:py-4"
    >
      <Navbar.Brand as="button" onClick={scroll.scrollToTop}>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          DuoDev
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <ul className="flex items-center space-x-4">
          <li>
            <ScrollLink {...createLinkAttributes("home")}>Home</ScrollLink>
          </li>
          <li>
            <ScrollLink {...createLinkAttributes("about")}>About</ScrollLink>
          </li>
          <li>
            <ScrollLink {...createLinkAttributes("projects")}>
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink {...createLinkAttributes("services")}>Services</ScrollLink>
          </li>
          <li>
            <ScrollLink {...createLinkAttributes("contact")}>
              Contact
            </ScrollLink>
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
}
