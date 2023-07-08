import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Nav() {
  const [showLinks, setShowLinks] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef(null);

  const toggleLinks = () => {
    if (isMobile) {
      setShowLinks(!showLinks);
    }
  };

  const closeLinks = (e) => {
    if (isMobile && showLinks && !menuRef.current.contains(e.target)) {
      setShowLinks(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const checkIsMobile = useCallback(() => {
    const isMobileDevice = window.innerWidth <= 768;
    setIsMobile(isMobileDevice);
  }, []);

  useEffect(() => {
    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, [checkIsMobile]);

  const createLinkAttributes = (to) => ({
    to,
    smooth: true,
    duration: 500,
    className:
      "cursor-pointer text-white hover:border-b-2 hover:border-white transition duration-300",
    onClick: isMobile ? closeLinks : undefined,
  });

  return (
    <nav className="bg-primaryBlue fixed top-0 w-full z-50">
      <div className="md:flex items-center justify-around mx-auto p-4">
        <div className="flex justify-between items-center">
          <div
            className="cursor-pointer"
            onClick={scrollToTop}
            role="button"
            tabIndex="0"
          >
            <img src="assets/images/Dev.png" alt="Logo" />
          </div>

          <div
            className="md:hidden cursor-pointer hover:text-blue pr-4 text-white text-2xl"
            onClick={toggleLinks}
          >
            <GiHamburgerMenu />
          </div>
        </div>

        <div
          className={`${
            showLinks && isMobile ? "block" : "hidden"
          } md:flex md:items-center md:justify-between md:p-0 transition-all duration-300`}
          ref={menuRef}
        >
          <ul className="font-medium flex flex-col gap-4 pt-4 md:p-4 text-center md:flex-row md:space-x-8">
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
              <ScrollLink {...createLinkAttributes("skills")}>
                Skills
              </ScrollLink>
            </li>
            <li>
              <ScrollLink {...createLinkAttributes("contact")}>
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
