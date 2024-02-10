import React from "react";
import Review from "./Review";
import Divider from "../Divider";

const reviewsData = [
  {
    displayName: "Kyle LaPage",
    comment:
      "Troy is the man! Been going to him for awhile and he never disappoints. He is knowledgeable about hair and different haircuts. Very skilled with his clipper work.",
    starRating: 5,
    createTime: "2023-10-02T15:01:23Z",
  },
  {
    displayName: "Ross Cook",
    comment:
      "I was looking for the right barber for a long time, and I'm happy to say I've definitely found the right man in David! He pays great attention to detail and takes his time to get the right cut. Would recommend!",
    starRating: 4,
    createTime: "2022-10-02T09:01:23.045123456Z",
  },
  {
    displayName: "Eric Benson",
    comment:
      "Great cuts, appts are easy online . Troy is my go to barber, perfect results every time.",
    starRating: 5,
    createTime: "2022-10-02T15:01:23.045123456Z",
  },
];

// When fetching reviews check these conditionals:
// isAnonymous must be false
// Maybe sort on highest rating and take top 3, also maybe add link for more reviews
// https://developers.google.com/my-business/reference/rest/v4/accounts.locations.reviews#StarRating

function Reviews() {
  return (
    <section
      className="pt-24 mx-4 flex justify-center flex-col items-center"
      role="region"
      aria-label="Client Reviews"
    >
      <h1 className="text-4xl font-extrabold mb-2 text-slate-800">Reviews</h1>
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
    </section>
  );
}

export default Reviews;
