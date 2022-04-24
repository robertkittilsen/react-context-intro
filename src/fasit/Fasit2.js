import React, { useState, createContext, useContext } from "react";

const ThemeContext = createContext(null);

export function Fasit2() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`full-size theme--${theme}`}>
        <button onClick={toggleTheme}>Toggle theme</button>
        <Text />
      </div>
    </ThemeContext.Provider>
  );
}

function Text() {
  const theme = useContext(ThemeContext);
  return (
    <p className={`text theme--${theme}`}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  );
}
