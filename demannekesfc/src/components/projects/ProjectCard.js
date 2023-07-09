import React from "react";

export default function ProjectCard({ title, about, image, alt, href }) {
  return (
    <div className="drop-shadow-lg px-3 rounded-t-lg">
      <div className="h-auto w-full">
        <img src={image} alt={alt} className="object-contain h-full w-full" />
      </div>
      <div className="bg-blue-950 p-4">
        <h3 className="text-blue-300">{title}</h3>
        <p className="text-sm font-sans font-medium leading-6 text-gray-50">
          {about}
        </p>
        <a
          href={href}
          className="text-base font-semibold text-gray-50 underline hover:text-blue-300 hover:no-underline"
        >
          See more <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
