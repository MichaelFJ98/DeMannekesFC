import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { FaHome } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { FiMail } from "react-icons/fi";
import { MdOutlineBuild } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";

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
    <div className=" w-screen bg-blue-950">
    <Navbar
      className="fixed top-0 text-black drop-shadow-md bg-blue-50 z-20 md:py-4 w-screen"
    >
      <Navbar.Brand as="button" onClick={scroll.scrollToTop}>
        <img src="assets/images/logo.png" className="w-7 mr-4"></img>
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          Insiter
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <ul className="flex items-center space-x-4">
          <li>
            <ScrollLink {...createLinkAttributes("home")}>
              <h1 className="text-xl">Home</h1>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink {...createLinkAttributes("about")}>
              <h1 className="text-xl ">About</h1>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink {...createLinkAttributes("projects")}>
              <h1 className="text-xl ">Projects</h1>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink {...createLinkAttributes("services")}>
              <h1 className="text-xl ">Services</h1>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink {...createLinkAttributes("contact")}>
              <h1 className="text-2xl text-blue-500 ">Contact</h1>
            </ScrollLink>
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}
