import React from "react";

export default function Button({ text, fontSize, onClick, disabled }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div>
      <button
        className={`bg-blue-500 text-white ${fontSize} transition-all shadow-lg duration-300 ease-in-out hover:scale-110 hover:text-blue-500 px-4 border-2 border-blue-500 hover:bg-transparent rounded min-h-[40px]`}
        onClick={handleClick}
        disabled={disabled}
      >
        {text}
      </button>
    </div>
  );
}
