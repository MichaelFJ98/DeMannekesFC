import React from "react";

function Pricing() {
  const packages = [
    {
      name: "LIFESTYLE",
      surname: "PLUS",
      price: "997,95",
      benefits: [
        "Fitness",
        "Sauna",
        "7/7 toegang",
        "Multiclub Lifestyle",
        "Groepslessen met lesgever",
      ],
    },
    {
      name: "LIFESTYLE",
      surname: "GOLD",
      price: "1399,95",
      benefits: [
        "Fitness",
        "Sauna",
        "7/7 toegang",
        "Multiclub Lifestyle",
        "Groepslessen met lesgever",
      ],
    },
    {
      name: "LIFESTYLE",
      surname: "VIP",
      price: "2499,95",
      benefits: [
        "Fitness",
        "Sauna",
        "7/7 toegang",
        "Multiclub Lifestyle",
        "Groepslessen met lesgever",
      ],
    },
  ];

  const bestOptionStyle =
    "bg-green-500 text-white px-4 py-1 rounded-full absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-1/2";

  return (
    <div className="flex mx-8 space-x-4 justify-center items-center h-screen">
      {packages.map((pkg, index) => (
        <div
          key={index}
          className={`flex-grow border border-gray-300 shadow-md text-center ${
            index === 1 ? "-translate-y-8 relative" : ""
          }`}
        >
          {index === 1 && <div className={bestOptionStyle}>Best Option</div>}
          <div className="py-6">
            <h2
              className={`text-2xl ${
                index === 0
                  ? "text-blue-950"
                  : index === 1
                  ? "text-yellow-600"
                  : "text-fuchsia-900"
              }`}
            >
              {pkg.name}
            </h2>
            <h2
              className={`text-2xl font-bold ${
                index === 0
                  ? "text-blue-950"
                  : index === 1
                  ? "text-yellow-600"
                  : "text-fuchsia-900"
              }`}
            >
              {pkg.surname}
            </h2>
            <p>4 weken plan</p>
            <p>1 jaar</p>
          </div>
          <p
            className={`font-bold text-3xl py-8 ${
              index === 0
                ? "bg-blue-950 text-white"
                : index === 1
                ? "bg-yellow-600 text-white"
                : "bg-fuchsia-900 text-white"
            }`}
          >
            €{pkg.price}
          </p>
          {pkg.benefits.map((benefit, idx) => (
            <p key={idx} className="px-10 py-2 text-left">
              {benefit}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Pricing;
