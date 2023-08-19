import React from "react";

function ImageFade({
  imageSrc,
  fadeTop = false,
  fadeRight = false,
  fadeBottom = false,
  fadeLeft = false,
}) {
  const fadeDirectionClasses = [];

  if (fadeBottom) {
    fadeDirectionClasses.push(
      "bg-gradient-to-b from-transparent to-temp-background"
    );
  }
  if (fadeLeft) {
    fadeDirectionClasses.push(
      "bg-gradient-to-l from-transparent to-temp-background"
    );
  }
  if (fadeTop) {
    fadeDirectionClasses.push(
      "bg-gradient-to-t from-transparent to-temp-background"
    );
  }
  if (fadeRight) {
    fadeDirectionClasses.push(
      "bg-gradient-to-r from-transparent to-temp-background"
    );
  }

  const combinedFadeClasses = fadeDirectionClasses.join(" ");

  return (
    <div className="relative">
      <div className={`absolute inset-0 ${combinedFadeClasses}`} />
      <img
        className={`rounded-lg ${fadeLeft ? "ml-1/2" : ""}`}
        src={imageSrc}
        alt="Image"
      />
    </div>
  );
}

export default ImageFade;
