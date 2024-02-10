import React from "react";
import Divider from "../Divider";

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

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <div>
          <img
            src="assets/images/hairdresser/herobg.webp"
            alt="Gallery Image"
            className="w-full h-auto rounded-xl"
            width="300"
            height="200"
            loading="lazy"
          />
        </div>
        <div>
          <img
            src="assets/images/hairdresser/herobg.webp"
            alt="Gallery Image"
            className="w-full h-auto rounded-xl"
            width="300"
            height="200"
            loading="lazy"
          />
        </div>
        <div>
          <img
            src="assets/images/hairdresser/herobg.webp"
            alt="Gallery Image"
            className="w-full h-auto rounded-xl"
            width="300"
            height="200"
            loading="lazy"
          />
        </div>
      </div>
      <div className="self-end mt-2">
        <p
          onClick={handleInstagramClick}
          className="text-temp-text transition-all hover:underline cursor-pointer"
        >
          See more photos &rarr;
        </p>
      </div>
    </div>
  );
}

export default Gallery;
