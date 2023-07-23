import Service from "./Service.js";

import { FaNodeJs, FaJava, FaPython } from "react-icons/fa";

export default function Services() {
  return (
    <div>
      <h1 className="text-center font-bold text-2xl py-4">SERVICES</h1>

      <div className="bg-white flex flex-wrap justify-around">
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
  );
}
