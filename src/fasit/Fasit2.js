import React, { useState, createContext, useContext } from "react";

const ThemeContext = createContext(null);

export function Fasit2() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Text />
    </ThemeContext.Provider>
  );
}

function Text() {
  const theme = useContext(ThemeContext);
  return <div className={`text theme theme--${theme}`}>{theme}</div>;
}
