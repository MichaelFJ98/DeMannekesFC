import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Navbar } from "flowbite-react";

import DarkModeToggle from "../DarkModeToggle.js";
import Button from "../Button.js";

export default function Nav() {
  const createLinkAttributes = (to) => {
    let className =
      "cursor-pointer flex items-center space-x-2 hover:border-b-2 md:hover:border-primary dark:text-white md:dark:hover:border-white";

    if (to === "contact") {
      className = "";
    }

    return {
      to,
      smooth: true,
      duration: 500,
      offset: -58,
      className,
    };
  };

  return (
    <div className="w-screen bg-primary">
      <Navbar className="fixed top-0 text-text drop-shadow-md bg-secondary z-20 md:py-4 w-screen dark:bg-dark-background">
        <Navbar.Brand as="button" onClick={scroll.scrollToTop}>
          <img src="assets/images/logo.png" className="w-7 mr-4"></img>
          <span className="dark:text-white self-center whitespace-nowrap text-xl font-semibold">
            Insiter
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <ul className="flex items-center space-x-6">
            <li>
              <ScrollLink {...createLinkAttributes("home")}>
                <h1 className="text-xl font-semibold">Home</h1>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink {...createLinkAttributes("about")}>
                <h1 className="text-xl font-semibold">About</h1>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink {...createLinkAttributes("projects")}>
                <h1 className="text-xl font-semibold">Projects</h1>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink {...createLinkAttributes("services")}>
                <h1 className="text-xl font-semibold">Services</h1>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink {...createLinkAttributes("contact")}>
                <Button
                  className="text-2xl text-primary font-semibold"
                  fontSize={"font-bold"}
                  text={"Contact"}
                />
              </ScrollLink>
            </li>
            <li>
              <DarkModeToggle />
            </li>
          </ul>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
