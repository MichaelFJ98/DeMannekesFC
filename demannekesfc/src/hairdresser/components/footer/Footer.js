import React from "react";

function Footer() {
  const handleInsiterClick = () => {
    window.open("https://www.insiter.be", "_blank");
  };

  return (
    <footer role="contentinfo" className="border-t mx-4 border-temp-gray mt-24">
      <div className="flex items-center justify-between py-6 font-semibold">
        <h1>Hair Majesty</h1>
        <p className="text-temp-gray font-normal">
          Made by{" "}
          <span
            onClick={handleInsiterClick}
            className="text-temp-text md:hover:text-temp-accent transition-colors cursor-pointer"
          >
            Insiter
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
