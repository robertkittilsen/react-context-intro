import { useState, createContext, useContext } from "react";
import "./styles.css";

const ThemeContext = createContext(null);

export function Eksempel1() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Text />
        <label>
          <input
            type="checkbox"
            onChange={(e) => {
              setTheme(e.target.checked ? "dark" : "light");
            }}
          />
          <span>Use dark mode</span>
        </label>
      </div>
    </ThemeContext.Provider>
  );
}

function Text() {
  const theme = useContext(ThemeContext);
  const className = `theme-${theme}`;

  return <p className={className}>Noe tekst</p>;
}
