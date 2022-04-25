import { useState, createContext, useContext } from "react";

const ThemeContext = createContext(null);

export function Eksempel2b() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`full-size theme--${theme}`}>
        <Section />
        <label>
          <input
            type="checkbox"
            onChange={(e) => {
              setTheme(e.target.checked ? "dark" : "light");
            }}
          />
          <span className={`theme--${theme}`}>Use dark mode</span>
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

  return <p className={`theme-${theme}`}>Noe tekst</p>;
}
