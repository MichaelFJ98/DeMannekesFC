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
    <nav className="fixed top-0 z-10 w-full bg-temp-primary text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="font-semibold text-lg">Hair Majesty</span>
          </div>
          <div className="hidden md:flex md:items-center">
            <div className="flex">
              <ScrollLink {...createLinkAttributes("hero")}>Home</ScrollLink>
              <ScrollLink {...createLinkAttributes("pricing")}>
                Pricing
              </ScrollLink>
              <ScrollLink {...createLinkAttributes("team")}>Team</ScrollLink>
              <ScrollLink {...createLinkAttributes("location")}>
                Location
              </ScrollLink>
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
            menuOpen ? "block" : "hidden"
          } md:hidden mt-2 md:mt-0 md:space-x-4 text-center`}
        >
          <ScrollLink
            {...createLinkAttributes("hero")}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </ScrollLink>
          <ScrollLink
            {...createLinkAttributes("pricing")}
            onClick={() => setMenuOpen(false)}
          >
            Pricing
          </ScrollLink>
          <ScrollLink
            {...createLinkAttributes("team")}
            onClick={() => setMenuOpen(false)}
          >
            Team
          </ScrollLink>
          <ScrollLink
            {...createLinkAttributes("location")}
            onClick={() => setMenuOpen(false)}
          >
            Location
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
