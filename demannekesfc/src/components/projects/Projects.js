import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "./ProjectCard";

import "./Projects.css";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    nextArrow: (
      <div>
        <div className="next-slick-arrow">
          <FiChevronRight />
        </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow">
          <FiChevronLeft />
        </div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: false,
          variableWidth: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: false,
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="projects" className="bg-blue-50 px-10">
      <h1 className="text-4xl font-black tracking-tight md:text-5xl pb-6 text-center text-blue-950">
        PROJECTS
      </h1>
      <Slider {...settings}>
        <ProjectCard
          image="./assets/images/template1.jpg"
          alt=""
          link={process.env.REACT_APP_PROJECT_LINK_1}
        />
        <ProjectCard
          image="./assets/images/template1.jpg"
          alt=""
          link={process.env.REACT_APP_PROJECT_LINK_2}
        />
        <ProjectCard
          image="./assets/images/template1.jpg"
          alt=""
          link={process.env.REACT_APP_PROJECT_LINK_3}
        />
      </Slider>
    </div>
  );
}
