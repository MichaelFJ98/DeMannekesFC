import React from "react";
import Divider from "../Divider";

function Pricing() {
  return (
    <section
      id="services"
      role="region"
      aria-label="Pricing Information"
      className="pt-24 flex flex-col items-center"
    >
      <h1 className="text-4xl font-extrabold mb-2 text-slate-800">Pricing</h1>
      <Divider />

      <div className="grid gap-4 w-4/6">
        <div className="flex">
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-slate-800">Haircut</h2>
              <p className="font-bold pl-4 text-slate-800">€25</p>
            </div>
            <p className="mb-2 text-temp-gray">Haircut + washing</p>
          </div>
        </div>

        <div className="flex">
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-slate-800">Beard trim</h2>
              <p className="font-bold pl-4 text-slate-800">€15</p>
            </div>
            <p className="mb-2 text-temp-gray">Beard trim + washing</p>
          </div>
        </div>

        <div className="flex">
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-slate-800">Haircut + Beard trim</h2>
              <p className="font-bold pl-4 text-slate-800">€35</p>
            </div>
            <p className="mb-2 text-temp-gray">
              Haircut + beard trim + washing
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-slate-800">Junior (under 12 years)</h2>
              <p className="font-bold pl-4 text-slate-800">€15</p>
            </div>
            <p className="mb-2 text-temp-gray">Haircut + washing</p>
          </div>
        </div>

        <div className="flex">
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-slate-800">Coloring</h2>
              <p className="font-bold pl-4 text-slate-800">€25</p>
            </div>
            <p className="mb-2 text-temp-gray">Hair or beard coloring</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
