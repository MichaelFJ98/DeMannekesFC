import React from "react";
import Divider from "../Divider";

function Gallery() {
  return (
    <div id="gallery" className="pt-24 flex flex-col items-center">
      <h1 className="text-3xl font-semibold mb-4">Gallery</h1>
      <Divider className="mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <img
            src="assets/images/hairdresser/herobg.webp"
            alt="Gallery Image"
            className="w-full h-auto"
          />
        </div>
        <div>
          <img
            src="assets/images/hairdresser/herobg.webp"
            alt="Gallery Image"
            className="w-full h-auto"
          />
        </div>
        <div>
          <img
            src="assets/images/hairdresser/herobg.webp"
            alt="Gallery Image"
            className="w-full h-auto"
          />
        </div>
        <div>
          <img
            src="assets/images/hairdresser/herobg.webp"
            alt="Gallery Image"
            className="w-full h-auto"
          />
        </div>
      </div>
      <p className="self-end mt-2">
        <a href="#" className="text-temp-text hover:underline">
          See more photos &rarr;
        </a>
      </p>
    </div>
  );
}

export default Gallery;
