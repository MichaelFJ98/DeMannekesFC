import React from "react";

export default function Button({ text, fontSize  }) {
  return (
    <div className="">
      <button class={`bg-blue-500 text-white ${fontSize} transition-colors shadow-lg duration-300 ease-in-out hover:text-blue-500 px-4 border-2 border-blue-500 hover:bg-transparent rounded h-10`}>
        {text}
      </button>
    </div>
  );
}
