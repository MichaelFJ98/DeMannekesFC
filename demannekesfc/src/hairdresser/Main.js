import React from "react";

import Nav from "./components/nav/Nav.js";
import Hero from "./components/hero/Hero.js";
import About from "./components/about/About.js";
import Pricing from "./components/pricing/Pricing.js";
import Reviews from "./components/reviews/Reviews.js";
import Team from "./components/team/Team.js";
import Gallery from "./components/gallery/Gallery.js";
import Location from "./components/location/Location.js";
import Footer from "./components/footer/Footer.js";

function Main() {
  return (
    <div className="text-temp-text bg-temp-background">
      <div className="text-temp-text bg-temp-background px-16 max-w-screen-xl mx-auto">
        <Nav />
        <Hero />
        <About />
        <Team />
        <Pricing />
        {/* <Reviews /> */}
        <Gallery />
        <Location />
        <Footer />
      </div>
    </div>
  );
}

export default Main;
