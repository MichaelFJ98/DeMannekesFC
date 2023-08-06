import React from "react";

export default function ProjectCard({ image, alt, link }) {
  const handleClick = () => {
    if (link) window.location.href = link;
  };

  return (
    <div className="m-2">
      <img
        src={image}
        alt={alt}
        onClick={handleClick}
        className="rounded-lg object-cover object-center shadow-md transition-transform duration-300 hover:scale-95 w-full h-72 md:h-96"
      />
    </div>
  );
}
