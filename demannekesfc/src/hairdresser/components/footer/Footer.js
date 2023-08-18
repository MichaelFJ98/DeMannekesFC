import React from "react";

function Footer() {
  const handleInsiterClick = () => {
    window.open("https://www.insiter.be", "_blank");
  };

  return (
    <footer className="border-t border-temp-gray mt-24">
      <div className="flex items-center justify-between py-6 font-semibold">
        <h1>Hair Majesty</h1>
        <p className="text-temp-gray font-normal">
          Made by{" "}
          <span
            onClick={handleInsiterClick}
            className="text-temp-text hover:text-temp-accent cursor-pointer"
          >
            Insiter
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
