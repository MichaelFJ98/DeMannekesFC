import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import Calendly from "../Calendly.js";


function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMeetingPopupOpen, setMeetingPopupOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const createLinkAttributes = (to) => {
    let className =
      "block pb-4  px-2 md:pb-0 md:inline-block mt-2 md:mt-0 cursor-pointer font-semibold text-base md:ml-4 md:mr-4 hover:text-blue-500 transition-colors";

    if (to === "contact") {
      className =
        "block pb-4 md:pb-0 md:inline-block mt-2 md:mt-0 cursor-pointer font-medium text-base md:ml-4 md:mr-4 transition-colors";
    }
    return {
      to,
      smooth: true,
      duration: 500,
      offset: -63,
      className,
    };
  };

  return (
    <nav className="fixed top-0 z-10 w-full bg-c3 text-l1 shadow-xl rounded-b-[25px]">
      <div className="w-10/12 mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="font-semibold text-lg">Insiter</span>
          </div>
          <div className="hidden md:flex md:items-center">
            <div className="flex items-center">
              <ScrollLink {...createLinkAttributes("home")}>Home</ScrollLink>

              <ScrollLink {...createLinkAttributes("packages")}>Packages</ScrollLink>

              <ScrollLink {...createLinkAttributes("projects")}>
                Hosting
              </ScrollLink>

              <ScrollLink {...createLinkAttributes("contact")} onClick={() => setMeetingPopupOpen(true)}>
                <div className="bg-blue-500  px-4 py-2 rounded-xl font-semibold hover:bg-blue-600 transition-all shadow-lg duration-300 ease-in-out hover:scale-110 cursor-pointerborder-2 border-transparent">
                  Contact
                </div>
             
              </ScrollLink>
              <Calendly
              setPopupOpen={setMeetingPopupOpen}
              isPopupOpen={isMeetingPopupOpen}
            />
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="block text-white hover:text-temp-secondary focus:outline-none"
            >
              {menuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:hidden flex-col justify-center items-center pb-4 mt-2 md:mt-0 md:space-x-4 text-center`}
        >
          <ScrollLink
            {...createLinkAttributes("home")}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </ScrollLink>

          <ScrollLink
            {...createLinkAttributes("about")}
            onClick={() => setMenuOpen(false)}
          >
            About
          </ScrollLink>

          <ScrollLink
            {...createLinkAttributes("projects")}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </ScrollLink>

          <ScrollLink
            {...createLinkAttributes("services")}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </ScrollLink>

          <ScrollLink
            {...createLinkAttributes("contact")}
            onClick={() => setMeetingPopupOpen(true)}
          >
            <div className="bg-dark-primary hover:text-white dark:hover:text-dark-text dark:bg-dark-primary dark:text-dark-text hover:border-white dark:hover:bg-transparent hover:bg-transparent px-4 py-2 rounded-full cursor-pointer transition border-2 border-transparent">
              Contact
            </div>
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
