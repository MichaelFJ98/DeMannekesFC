import React from "react";
import Service from "./Service.js";

import { FaNodeJs, FaJava, FaPython } from "react-icons/fa";

export default function Services() {
  return (
    <div id="services" className="bg-blue-50 p-6 text-white flex flex-col items-center py-10">
      <h1 className="text-4xl font-black tracking-tight md:text-5xl pb-6 text-center text-blue-950">
        SERVICES
      </h1>

      <div className="flex flex-wrap w-7/12">
        {/* First Row */}
        <div className="flex justify-around w-full flex-wrap md:gap-x-32">
          <Service
            icon={FaPython}
            title="Social Conversations"
            info="We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand."
          />
          <Service
            icon={FaJava}
            title="Analyze Performance"
            info="Don't get your heart broken by people we love, even that we give them all we have. Then we lose family over time. As we live, our hearts turn colder."
          />
          <Service
            icon={FaNodeJs}
            title="Measure Conversions"
            info="What else could rust the heart more over time? Blackgold. The time is now for it to be okay to be great. or being a bright color. For standing out."
          />
        </div>

        {/* Second Row */}
        <div className="flex justify-around w-full flex-wrap md:gap-x-32">
          <Service
            icon={FaPython}
            title="Fully Integrated"
            info="We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand."
          />
          <Service
            icon={FaJava}
            title="Payments Functionality"
            info="Don't get your heart broken by people we love, even that we give them all we have. Then we lose family over time. As we live, our hearts turn colder."
          />
          <Service
            icon={FaNodeJs}
            title="Improved Platform"
            info="What else could rust the heart more over time? Blackgold. The time is now for it to be okay to be great. or being a bright color. For standing out."
          />
        </div>
      </div>
    </div>
  );
}
