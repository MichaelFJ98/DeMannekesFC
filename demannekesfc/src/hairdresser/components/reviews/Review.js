import React from "react";
import { FaStar } from "react-icons/fa";

function Review({ displayName, comment, rating, createTime }) {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <FaStar
      key={index}
      className={index < rating ? "text-temp-accent" : "text-temp-gray"}
    />
  ));

  const formattedDate = new Date(createTime).toLocaleString("nl-BE", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  return (
    <div className="border p-4 rounded-md shadow-md flex flex-col overflow-hidden">
      <div className="mb-4">
        <h2 className="text-lg mb-1 font-semibold">{displayName}</h2>
        <div className="flex space-x-4">
          <div className="flex items-center">{stars}</div>
          <div className="text-temp-gray text-sm">{formattedDate}</div>
        </div>
      </div>
      <p className="mb-4 text-temp-gray overflow-hidden">{comment}</p>
    </div>
  );
}

export default Review;
