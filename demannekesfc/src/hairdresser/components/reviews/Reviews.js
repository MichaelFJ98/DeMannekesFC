import React from "react";
import Review from "../Review";
import Divider from "../Divider";

const reviewsData = [
  {
    displayName: "Michel Johnson",
    comment:
      "Fantastic experience! The stylists are incredibly skilled and friendly. I got the best haircut of my life here.",
    starRating: 5,
    createTime: "2023-10-02T15:01:23Z",
  },
  {
    displayName: "Bryan Jhon",
    comment:
      "The barbers are top-notch professionals. The atmosphere is welcoming and the service is outstanding.",
    starRating: 4,
    createTime: "2022-10-02T09:01:23.045123456Z",
  },
  {
    displayName: "Bryan Jhon",
    comment:
      "The barbers are top-notch professionals. The atmosphere is welcoming and the service is outstanding.",
    starRating: 4,
    createTime: "2022-10-02T15:01:23.045123456Z",
  },
  
];

// When fetching reviews check these conditionals:
// isAnonymous must be false
// Maybe sort on highest rating and take top 3, also maybe add link for more reviews
// https://developers.google.com/my-business/reference/rest/v4/accounts.locations.reviews#StarRating

function Reviews() {
  return (
    <div id="services" className="pt-24 flex justify-center flex-col items-center">
      <h1 className="text-3xl font-extrabold mb-2">Reviews</h1>
      <Divider />
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviewsData.map((review, index) => (
          <Review
            key={index}
            displayName={review.displayName}
            comment={review.comment}
            rating={review.starRating}
            createTime={review.createTime}
          />
        ))}
      </div>
    </div>
  );
}

export default Reviews;
