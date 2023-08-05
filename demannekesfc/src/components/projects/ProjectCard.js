import React from "react";

export default function ProjectCard({ image, alt, link }) {
  const handleClick = () => {
    if (link) window.open(link, "_blank");
  };

  return (
    <div className="m-2">
      <img
        src={image}
        alt={alt}
        onClick={handleClick}
        className="rounded-lg cursor-pointer shadow-md transition-transform duration-300 hover:scale-95 w-full h-96"
      />
    </div>
  );
}
