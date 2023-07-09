import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="projects" className="bg-blue-50 space-y-6 p-12">
      <h1 className="text-2xl font-bold tracking-tight text-stone-950 sm:text-6xl pb-6 text-center">
        Our Projects
      </h1>

      <Slider {...settings}>
        <ProjectCard
          title="Template 1"
          image="./assets/images/template1.jpg"
          alt=""
          href="#"
          about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas maecenas pharetra convallis posuere morbi leo urna."
        />
        <ProjectCard
          title="Template 2"
          image="./assets/images/template1.jpg"
          alt=""
          href="#"
          about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas maecenas pharetra convallis posuere morbi leo urna."
        />
        <ProjectCard
          title="Template 3"
          image="./assets/images/template1.jpg"
          alt=""
          href="#"
          about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas maecenas pharetra convallis posuere morbi leo urna."
        />
      </Slider>
    </div>
  );
}
