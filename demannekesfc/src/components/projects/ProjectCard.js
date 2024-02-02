import React from "react";

export default function ProjectCard({ image, alt, link }) {
  const handleClick = () => {
    if (link) window.location.href = link;
  };

  return (
    <>
      <img
        src={image}
        alt={alt}
        onClick={handleClick}
     
        className=" rounded-lg shadow-md transition-transform duration-300 hover:scale-95 w-[40rem]"
      />
    </>
  );
}
