import React from "react";

function Footer() {
  const handleInsiterClick = () => {
    window.open("https://www.insiter.be", "_blank");
  };

  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      aria-label="Footer"
      className="border-t mx-4 border-temp-gray mt-24"
    >
      <div className="flex items-center justify-between py-6 font-semibold">
        <span className="text-slate-800">Oak Street 3, Prague</span>
        <div className="text-center text-slate-800 py-3">
        <p>
          &copy; {currentYear} Hair Majesty
        </p>
      </div>
        <p className="text-temp-gray font-normal">
          Made by{" "}
          <span
            onClick={handleInsiterClick}
            className="md:hover:text-temp-accent transition-colors cursor-pointer text-slate-800 font-bold"
          >
            Insiter
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
