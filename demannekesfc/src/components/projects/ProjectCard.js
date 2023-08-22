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
        width="500px"
        height="500px"
        className="rounded-lg aspect-video object-fill object-center shadow-md transition-transform duration-300 hover:scale-95"
      />
    </div>
  );
}
