import React from "react";
import Fade from "react-reveal/Fade";
import { FaHeadset, FaClipboardCheck, FaRegStar, FaPlayCircle } from "react-icons/fa";
import SellingPoint from "./SellingPoint.js";

export default function SellingPoints() {
    return (
      <div
        id="SellingPoints"
        className="bg-l1 flex justify-center py-8"
      >
        <Fade duration={1500}>
            <div className="w-full max-w-6xl px-4"> 
                <div className="border-t border-slate-400"/>
                <div className="flex flex-wrap justify-around text-center mt-8">
                  <SellingPoint icon={FaRegStar} title="100% quality and service" size={22} className="mb-4 w-full md:w-1/2 lg:w-1/4"/>
                  <SellingPoint icon={FaHeadset} title="24/7 hosting and support" size={22} className="mb-4 w-full md:w-1/2 lg:w-1/4"/>
                  <SellingPoint icon={FaClipboardCheck} title="Tailored web solutions" size={22} className="mb-4 w-full md:w-1/2 lg:w-1/4"/>
                  <SellingPoint icon={FaPlayCircle} title="Personalized videos" size={22} className="mb-4 w-full md:w-1/2 lg:w-1/4"/>
                </div>
            </div>
        </Fade>
      </div>
    );
}
