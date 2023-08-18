import React from "react";
import { AiOutlineScissor } from "react-icons/ai";

function Divider() {
  return (
    <div className="flex items-center">
      <div className="border-b-2 border-temp-accent w-16 mb-4 mr-2"></div>
      <AiOutlineScissor className="text-temp-accent text-2xl mb-4" />
      <div className="border-b-2 border-temp-accent mb-4 w-16 ml-2"></div>
    </div>
  );
}

export default Divider;
