import { useState } from "react";
import "./styles.css";

export function Eksempel2a() {
  const [theme, setTheme] = useState("light");

  return (
    <div>
      <Section theme={theme} />
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
  );
}

function Section({ theme }) {
  return (
    <section>
      <Card theme={theme} />
    </section>
  );
}

function Card({ theme }) {
  return (
    <div>
      <Text theme={theme} />
    </div>
  );
}

function Text({ theme }) {
  const className = `theme-${theme}`;

  return <p className={className}>Noe tekst</p>;
}
