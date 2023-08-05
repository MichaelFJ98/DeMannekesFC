import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Nav() {
  const createLinkAttributes = (to) => {
    let className =
      "cursor-pointer font-medium text-base hover:text-temp-secondary transition-colors";

    return {
      to,
      smooth: true,
      duration: 500,
      offset: -70,
      className,
    };
  };

  return (
    <nav className="fixed top-0 z-10 w-full bg-temp-primary text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="font-semibold text-lg">Hairdresser Website</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex space-x-4">
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
        </div>
      </div>
    </nav>
  );
}

export default Nav;
