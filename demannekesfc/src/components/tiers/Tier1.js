import React from "react";
import Fade from "react-reveal/Fade";

export default function Tier1() {
    return (
        <div className="bg-l1 h-full xl:h-[45rem]" id="packages">
            <Fade top distance="20px" duration={1500}>
                <div className="bg-c3 rounded-t-[40px] w-screen h-full flex justify-center">
                    <div className="flex flex-col lg:flex-row w-10/12 h-full items-center lg:space-x-20 p-4">
                        {/* Hide the image on medium and small screens, show on large and extra-large screens */}
                        <img src="./assets/images/hairdresser/herobg.webp" alt="barberimg" className="hidden md:hidden lg:block xl:block w-full lg:w-[30rem] xl:w-[40rem] rounded-md object-cover" />
                        <div className="w-full lg:w-[38rem] flex flex-col space-y-6">
                            <h1 className="text-4xl font-bold text-l1 tracking-wide text-center lg:text-left">Tier 1 package</h1>
                            <p className="text-l2 leading-7 text-center lg:text-left">Introducing our premier package, featuring a foundational website seamlessly integrated with an advanced reservation system. Elevate your experience with the assurance of securing the perfect products tailored just for you. Discover the ultimate solution for a streamlined and efficient online presence.</p>
                            <button className="bg-primary hover:bg-blue-600 hover:scale-110 transition-all shadow-lg duration-300 p-4 rounded-2xl text-l1 font-semibold mx-auto lg:mx-0">View example website</button>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
}
