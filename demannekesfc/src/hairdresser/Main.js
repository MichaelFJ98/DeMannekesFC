import React from "react";

import Nav from "./components/nav/Nav.js";
import Hero from "./components/hero/Hero.js";
import Pricing from "./components/pricing/Pricing.js";
import Reviews from "./components/reviews/Reviews.js";
import Team from "./components/team/Team.js";
import Location from "./components/location/Location.js";
import Footer from "./components/footer/Footer.js";

function Main() {
  return (
    <div>
      <Nav />
      <Hero />
      <Pricing />
      <Reviews />
      <Team />
      <Location />
      <Footer />
    </div>
  );
}

export default Main;
