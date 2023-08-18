import React from "react";
import Divider from "../Divider";

function Pricing() {
  return (
    <div id="services" className="pt-24 flex flex-col items-center">
      <h1 className="text-3xl font-semibold mb-4">Pricing</h1>
      <Divider className="mb-8" />

      <div className="grid gap-4 w-2/6">
        <div className="flex">
          <div className="flex-1">
            <h2 className="text-xl font-semibold">Haircut</h2>
            <p className="mb-2 text-temp-gray">Haircut + washing</p>
          </div>
          <p className="font-bold">€25</p>
        </div>
        <div className="flex">
          <div className="flex-1">
            <h2 className="text-xl font-semibold">Beard trim</h2>
            <p className="mb-2 text-temp-gray">Beard trim + washing</p>
          </div>
          <p className="font-bold">€15</p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
