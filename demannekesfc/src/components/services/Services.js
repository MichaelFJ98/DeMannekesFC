import React from "react";
import Service from "./Service.js";

import { FaLaptopCode, FaClipboardCheck, FaVideo } from "react-icons/fa";

export default function Services() {
  return (
    <div
      id="services"
      className="bg-secondary p-6 text-primary dark:bg-dark-secondary dark:text-white flex flex-col items-center py-10"
    >
      <h1 className="text-4xl font-black tracking-tight md:text-5xl pb-6 text-center text-primary dark:text-dark-primary">
        WHY US ?
      </h1>

      <div className="flex flex-wrap w-7/12">
        {/* First Row */}
        <div className="flex justify-around w-full flex-wrap md:gap-x-32">
          <Service
            icon={FaLaptopCode}
            title="Tailored Web Solutions"
            info="Our experts conduct thorough research about your business to create a bespoke website that maximizes your online presence. Whether you need online appointment booking, e-commerce functionality, or a stunning portfolio, we've got you covered."
          />
          <Service
            icon={FaClipboardCheck}
            title="Premium Communication"
            info="We understand the value of effective communication. Throughout the entire process, we keep you informed, listen to your feedback, and ensure that your vision is translated into a premium product that truly represents your brand."
          />
          <Service
            icon={FaVideo}
            title="Personalized Video Guides"
            info="As part of our premium package, we provide personalized video guides to walk you through website maintenance and content updates. You'll have the confidence to manage your website effortlessly and maintain a polished online presence."
          />
        </div>
      </div>
    </div>
  );
}
