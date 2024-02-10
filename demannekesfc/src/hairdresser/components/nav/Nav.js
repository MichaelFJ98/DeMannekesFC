import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  const createLinkAttributes = (to) => {
    let className =
      "block pb-4 md:pb-0 md:inline-block pt-2 md:pt-0 cursor-pointer font-medium text-base md:ml-4 md:mr-4 md:hover:text-temp-accent transition-colors";

    if (to === "contact")
      className =
        "py-1 px-6 md:mr-16 lg:mr-4 ml-2 inline-block border transition-colors duration-300 ease-in-out font-semibold bg-temp-accent rounded-md md:hover:bg-transparent md:hover:text-white cursor-pointer";

    return {
      to,
      smooth: true,
      duration: 500,
      offset: -64,
      className,
    };
  };

  return (
    <nav
      role="navigation"
      aria-label="Main Navigation"
      className={"fixed top-0 left-0 z-10 w-full bg-slate-800 text-white"}
    >
      <div className="flex max-w-screen-xl mx-auto items-center justify-between h-20">
        <h2
          className="font-semibold text-xl cursor-pointer ml-4 md:ml-16 lg:ml-4"
          onClick={scrollToTop}
        >
          Hair Majesty
        </h2>
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
          </div>
        </div>
        <div className="md:hidden mr-4">
          <button
            onClick={toggleMenu}
            className="block text-white transition"
            aria-label="Toggle Navigation Menu"
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
        } md:hidden md:space-x-4 pb-8 text-center bg-temp-background`}
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
      </div>
    </nav>
  );
}

export default Nav;
