import React from "react";
import Divider from "../Divider";
import GallerySlider from "../GallerySlider";

function Gallery() {
  const handleInstagramClick = () => {
    window.open("https://instagram.com/insiter.be/", "_blank");
  };
  return (
    <div
      role="region"
      aria-label="Barber Gallery"
      id="gallery"
      className="pt-24 mx-4 flex flex-col items-center"
    >
      <h1 className="text-4xl font-extrabold mb-2 text-slate-800">Gallery</h1>
      <Divider />

      <GallerySlider />
      <div className="self-end mt-2">
        <p
          onClick={handleInstagramClick}
          className="text-slate-800 transition-all hover:underline cursor-pointer"
        >
          See more photos &rarr;
        </p>
      </div>
    </div>
  );
}

export default Gallery;
