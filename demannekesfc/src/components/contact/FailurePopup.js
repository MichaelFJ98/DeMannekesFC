import React, { useEffect } from "react";

const FailurePopup = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 bg-error dark:bg-dark-error text-white px-4 py-2 rounded-lg text-xl font-semibold">
      <p>Sorry, something went wrong. Please try again later.</p>
    </div>
  );
};

export default FailurePopup;
