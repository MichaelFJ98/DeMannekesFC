import React from "react";
import Fade from "react-reveal/Fade";
import { FaHeadset, FaClipboardCheck, FaRegStar, FaPlayCircle } from "react-icons/fa";
import SellingPoint from "./SellingPoint.js";

export default function SellingPoints() {
    return (
      <div
        id="SellingPoints"
        className="bg-l1 flex justify-center"
      >
        <Fade duration={1500}>
            <div className="flex flex-col w-10/12 ">
                <div className="border-t border-slate-400 "/>
                <div className="flex flex-row justify-evenly">
                    <SellingPoint icon={FaRegStar} title="100% quality and service" size={22}/>
                    <SellingPoint icon={FaHeadset} title="24/7 hosting and support" size={22}/>
                    <SellingPoint icon={FaClipboardCheck} title="Tailored web solutions" size={22}/>
                    <SellingPoint icon={FaPlayCircle} title="Personalized videos" size={22}/>
                </div>
                
            </div>
        </Fade>
      </div>
    );
  }