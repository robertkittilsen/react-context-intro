import React, { createContext, useContext, useState, useEffect } from "react";

const DarkModeContext = createContext(null);

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    console.log(darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider
      value={{ darkMode, toggle: () => setDarkMode(!darkMode) }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const { darkMode, toggle } = useContext(DarkModeContext);
  return { darkMode, toggle };
};
