import "./Services.css";

import { FaPaintbrush } from "react-icons/fa6";
import {BsGraphUpArrow} from "react-icons/bs";

export default function Services() {
  return (
    <div className="services">
      <div id="text">
        <h1>Services</h1>
      </div>
      <div id="list">
        <div>
          <FaPaintbrush className="logo"/>
          <h5>Web Design</h5>
          <p>lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div>
            <BsGraphUpArrow className="logo"/>
          <h5>Advertising</h5>
          <p>lorem ipsum dolor sit amet consectetur</p>
        </div>
      </div>
    </div>
  );
}
