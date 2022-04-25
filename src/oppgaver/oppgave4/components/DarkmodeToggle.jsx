import React from "react";
import { useDarkMode } from "../contexts/DarkMode";

export const DarkmodeToggle = () => {
  // 12. Erstatt linjene under med "darkMode" og "toggle" fra useDarkMode hooken
  const darkMode = null;
  const toggle = () => null;
  return (
    <div className="dark-mode-toggle">
      <label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => {
            toggle();
          }}
        />
        Use dark mode
      </label>
    </div>
  );
};
