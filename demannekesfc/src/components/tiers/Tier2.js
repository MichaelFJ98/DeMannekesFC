import React from "react";
import Fade from "react-reveal/Fade";
import { FaCheck } from "react-icons/fa";

const features = [
    "All features from Tier 1",
    "Fully automated reservation system",
    "Social media integration",
    "Google reviews integration",
  ];

export default function Tier2() {
    return (
        <div className="bg-c3 h-full xl:h-[45rem]" id="packages">
            <div className="bg-c2 w-screen h-full flex lg:justify-center p-4 lg-p-0 rounded-2xl">
                <div className="flex flex-col md:flex-row lg:w-10/12 h-full justify-around items-center md:space-x-20 p-4">
                    
                    <div className="w-full lg:w-[38rem] flex flex-col space-y-8">
                        <Fade top distance="20px" duration={1500}>
                            <h1 className="text-4xl font-semibold lg:font-bold text-l1 tracking-wide lg:text-left">Tier 2 Package</h1>
                        </Fade>
                        <Fade top distance="20px" duration={1500} delay={300}>
                            <p className="text-l2 leading-7 lg:text-left">Experience the perfect blend of automation and connectivity! Dive into effortless booking systems, expanded social media presence, and boosted credibility through visible reviews. Opt for Tier 2 and set your business on the path to digital excellence from the start.</p>
                            <ul className="list-none space-y-2">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-center space-x-2 text-white">
                                        <FaCheck className="text-primary" />
                                        <p>{feature}</p>
                                    </li>
                                ))}
                            </ul>
                        </Fade>
                        <Fade top distance="20px" duration={1500} delay={600}>
                            <button onClick={() => window.location.href='http://www.insiter.be/barber'} className="bg-primary hover:bg-blue-600 hover:scale-110 transition-all shadow-lg duration-300 p-4 rounded-2xl text-l1 font-semibold lg:mx-0">View example website</button>
                        </Fade>
                        <img src="./assets/images/hairdresser/herobg.webp" alt="barberimg" className="block md:hidden w-full rounded-md object-cover pb-4" />
                    </div>
                    <img src="./assets/images/hairdresser/herobg.webp" alt="barberimg" className="hidden md:block xl:block w-full lg:w-[30rem] xl:w-[40rem] rounded-md object-cover" />
                    
                </div>
            </div>
        </div>
    );
}
