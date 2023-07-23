import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "./ProjectCard";

import "./Projects.css";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { FiGithub, FiExternalLink, FiStar } from "react-icons/fi";
import { AiOutlineMail, AiFillHeart } from "react-icons/ai";

export default function Projects() {
  const project1Icons = [FiGithub, FiExternalLink, FiStar];
  const project2Icons = [FiGithub, FiStar, AiOutlineMail, AiFillHeart];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: (
      <div>
        <div className="next-slick-arrow">
          <FiChevronRight />
        </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow"> <FiChevronLeft /> </div>
      </div>
    ),
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
    <div id="projects" className="bg-blue-200 space-y-6 p-12">
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
          icons={project1Icons}
        />
        <ProjectCard
          title="Template 2"
          image="./assets/images/template1.jpg"
          alt=""
          href="#"
          about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas maecenas pharetra convallis posuere morbi leo urna."
          icons={project2Icons}
        />
        <ProjectCard
          title="Template 3"
          image="./assets/images/template1.jpg"
          alt=""
          href="#"
          about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas maecenas pharetra convallis posuere morbi leo urna."
          icons={project1Icons}
        />
      </Slider>
    </div>
  );
}
