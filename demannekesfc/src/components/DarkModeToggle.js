import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDarkModeEnabled =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(isDarkModeEnabled);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleMediaQueryChange = (e) => {
      setIsDarkMode(e.matches);
    };
    mediaQuery.addListener(handleMediaQueryChange);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleDarkModeToggle = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={handleDarkModeToggle}
      className="w-10 h-6 flex items-center justify-between rounded-full p-1 bg-white dark:bg-gray-700 focus:outline-none"
    >
      <span
        className={`w-4 h-4 rounded-full transition-transform transform ${
          isDarkMode ? "translate-x-4 bg-white" : "bg-black"
        }`}
      />
    </button>
  );
};

export default DarkModeToggle;
