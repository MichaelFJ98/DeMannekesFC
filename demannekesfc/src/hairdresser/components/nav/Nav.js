import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const createLinkAttributes = (to) => {
    let className =
      "block pb-4 md:pb-0 md:inline-block mt-2 md:mt-0 cursor-pointer font-medium text-base md:ml-4 md:mr-4 hover:text-temp-secondary transition-colors";

    return {
      to,
      smooth: true,
      duration: 500,
      offset: -63,
      className,
    };
  };

  return (
    <nav
      className={`fixed top-0 left-0 z-10 w-full text-white shadow-md transition ${
        menuOpen ? "bg-black" : "bg-black"
      } md:duration-300`}
    >
      <div className="px-16 max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between h-16">
          <h2 className="font-semibold text-xl">Hair Majesty</h2>
          <div className="hidden md:block">
            <div className="flex items-center transition">
              <ScrollLink
                {...createLinkAttributes("about")}
                onClick={() => setMenuOpen(false)}
              >
                About
              </ScrollLink>
              <ScrollLink
                {...createLinkAttributes("team")}
                onClick={() => setMenuOpen(false)}
              >
                Team
              </ScrollLink>
              <ScrollLink
                {...createLinkAttributes("services")}
                onClick={() => setMenuOpen(false)}
              >
                Services
              </ScrollLink>
              <ScrollLink
                {...createLinkAttributes("gallery")}
                onClick={() => setMenuOpen(false)}
              >
                Gallery
              </ScrollLink>
              <ScrollLink
                {...createLinkAttributes("contact")}
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </ScrollLink>
              <button className="py-1 px-8 border transition hover:bg-temp-accent">
                Call us
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="block text-white hover:text-temp-secondary focus:outline-none transition"
              style={{ transform: `rotate(${menuOpen ? "90deg" : "0"})` }}
            >
              <FiMenu className={`h-6 w-6 ${menuOpen ? "hidden" : "block"}`} />
              <FiX className={`h-6 w-6 ${menuOpen ? "block" : "hidden"}`} />
            </button>
          </div>
        </div>
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:hidden mt-2 md:mt-0 md:space-x-4 text-center transition-opacity`}
        >
          <ScrollLink
            {...createLinkAttributes("about")}
            onClick={() => setMenuOpen(false)}
          >
            About
          </ScrollLink>
          <ScrollLink
            {...createLinkAttributes("team")}
            onClick={() => setMenuOpen(false)}
          >
            Team
          </ScrollLink>
          <ScrollLink
            {...createLinkAttributes("services")}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </ScrollLink>
          <ScrollLink
            {...createLinkAttributes("gallery")}
            onClick={() => setMenuOpen(false)}
          >
            Gallery
          </ScrollLink>
          <ScrollLink
            {...createLinkAttributes("contact")}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </ScrollLink>
          <button className="py-1 mb-4 px-6 border transition">
            Call us
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
