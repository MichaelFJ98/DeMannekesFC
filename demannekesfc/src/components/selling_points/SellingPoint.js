import React from "react";

export default function SellingPoint({icon: Icon, title, size}) {
    return (
      <div
        id="SellingPoint"
        className="flex flex-row space-x-2 py-10 items-center"
      >
        <Icon className="text-green-600" size={size}/>

        <p className="text-green-600 font-medium text-base">{title}</p>
      </div>
    );
  }