import React from "react";
import Divider from "../Divider";

function Gallery() {
  const handleInstagramClick = () => {
    window.open("https://instagram.com/insiter.be/", "_blank");
  };
  return (
    <div id="gallery" className="pt-24 mx-4 flex flex-col items-center">
      <h1 className="text-3xl font-extrabold mb-2">Gallery</h1>
      <Divider/>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <img
            src="assets/images/hairdresser/herobg.webp"
            alt="Gallery Image"
            className="w-full h-auto rounded-xl"
          />
        </div>
        <div>
          <img
            src="assets/images/hairdresser/herobg.webp"
            alt="Gallery Image"
            className="w-full h-auto rounded-xl"
          />
        </div>
        <div>
          <img
            src="assets/images/hairdresser/herobg.webp"
            alt="Gallery Image"
            className="w-full h-auto rounded-xl"
          />
        </div>
        <div>
          <img
            src="assets/images/hairdresser/herobg.webp"
            alt="Gallery Image"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
      <div className="self-end mt-2">
        <p onClick={handleInstagramClick} className="text-temp-text transition-all hover:underline cursor-pointer">
          See more photos &rarr;
        </p>
      </div>
    </div>
  );
}

export default Gallery;
