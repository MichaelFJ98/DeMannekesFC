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
        className={`bg-primary text-l1 ${fontSize} transition-all shadow-lg duration-300 
        ease-in-out hover:scale-110 hover:bg-blue-600
        dark:bg-dark-primary dark:text-dark-text p-4  rounded-2xl
        min-h-[40px]`}
        onClick={handleClick}
        disabled={disabled}
      >
        {text}
      </button>
    </div>
  );
}
