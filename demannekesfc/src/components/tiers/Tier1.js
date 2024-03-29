import React from "react";
import Fade from "react-reveal/Fade";
import { FaCheck } from "react-icons/fa";

const features = [
    "Base website",
    "SSL certificate",
    "SEO optimization",
    "1<sup>st</sup> month free hosting",
  ];

export default function Tier1() {
    return (
        <div className="bg-l1 h-full xl:h-[45rem]" id="tier1">
            <div className="bg-c3 rounded-t-[40px] w-screen h-full flex lg:justify-center p-4 lg-p-0">
                <div className="flex flex-col md:flex-row lg:w-10/12 h-full items-center justify-around md:space-x-20 p-4">
                    <img src="./assets/images/hairdresser/herobg.webp" alt="barberimg" className="hidden md:block w-full lg:w-[30rem] xl:w-[45rem] rounded-md object-cover" />
                    <div className="w-full lg:w-[38rem] flex flex-col space-y-8">
                        <Fade top distance="20px" duration={1500}>
                            <h1 className="text-4xl font-semibold lg:font-bold text-l1 tracking-wide lg:text-left">Starter Package</h1>
                        </Fade>
                        <Fade top distance="20px" duration={1500} delay={300}>
                            <p className="text-l2 leading-7 lg:text-left">Introducing our premier package, featuring a foundational website seamlessly integrated with an advanced reservation system. Elevate your experience with the assurance of securing the perfect products tailored just for you. Discover the ultimate solution for a streamlined and efficient online presence.</p>
                            <ul className="list-none space-y-2">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-center space-x-2 text-white">
                                        <FaCheck className="text-primary" />
                                        <p dangerouslySetInnerHTML={{ __html: feature }}></p>
                                    </li>
                                ))}
                            </ul>
                        </Fade>
                        <Fade top distance="20px" duration={1500} delay={600}>
                            <button className="bg-primary hover:bg-blue-600 hover:scale-110 transition-all shadow-lg duration-300 p-4 rounded-2xl text-l1 font-semibold lg:mx-0">View example website</button>
                        </Fade>
                        <img src="./assets/images/hairdresser/herobg.webp" alt="barberimg" className="block md:hidden w-full rounded-md object-cover pb-4" />
                    </div>
                </div>
            </div>
        </div>
    );
}