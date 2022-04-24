import { useState, createContext, useContext } from "react";
import "./styles.css";

const ThemeContext = createContext(null);

export function Eksempel2b() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Section />
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

function Section() {
  return (
    <section>
      <Card />
    </section>
  );
}

function Card() {
  return (
    <div>
      <Text />
    </div>
  );
}

function Text() {
  const theme = useContext(ThemeContext);
  const className = `theme-${theme}`;

  return <p className={className}>Noe tekst</p>;
}
