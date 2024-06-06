import React from "react";
import { useSelector } from "react-redux";

const ThemeProvider = ({ children }) => {
  const { darkMode } = useSelector((state) => state.theme);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white text-gray-700 dark:text-gray-200 dark:bg-[rgb(16,23,42)]  min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default ThemeProvider;
