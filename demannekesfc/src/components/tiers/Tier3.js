import React from "react";
import Fade from "react-reveal/Fade";
import ProjectCard from "../projects/ProjectCard";

export default function Tier3() {
    return(
    <div className="bg-c2 h-[45rem]">
        <Fade top distance="20px" duration={1500}>
            <div className="bg-c3 w-screen  h-full flex justify-center">
                <div className="flex flex-row  w-10/12 h-full items-center space-x-20">
                    <ProjectCard image="./assets/images/hairdresser/herobg.webp" alt="barberimg" link="/barber"/>
                    <div className="w-[38rem]  flex-col space-y-6">
                        <h1 className="text-4xl font-bold text-l1 tracking-wide">Tier 3 package</h1>
                        <p className="text-l2 leading-7">Introducing our premier package, featuring a foundational website seamlessly integrated with an advanced reservation system. Elevate your experience with the assurance of securing the perfect products tailored just for you. Discover the ultimate solution for a streamlined and efficient online presence.</p>
                        <button className="bg-primary hover:bg-blue-600  hover:scale-110 ransition-all shadow-lg duration-300 p-4 rounded-2xl text-l1 font-semibold">View example website</button>
                    </div>
                </div>
                
            </div>
        </Fade>
    </div>
    );
  }