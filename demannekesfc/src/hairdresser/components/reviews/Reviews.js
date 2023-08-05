import React from "react";
import { FaStar } from "react-icons/fa";

const reviewsData = [
  {
    name: "Alice Johnson",
    review:
      "Fantastic experience! The stylists are incredibly skilled and friendly. I got the best haircut of my life here.",
    rating: 5,
  },
  {
    name: "Bob Smith",
    review:
      "The barbers are top-notch professionals. The atmosphere is welcoming and the service is outstanding.",
    rating: 4,
  },
];

function Reviews() {
  return (
    <div id="reviews" className="bg-temp-background text-temp-text">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-center mb-8">
          Customer Reviews
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviewsData.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="flex items-start mb-4">
                <div className="flex items-center mr-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      className={`h-5 w-5 ${
                        i < review.rating
                          ? "text-temp-primary"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-lg font-semibold">{review.name}</p>
              </div>
              <p className="text-sm mb-4">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
