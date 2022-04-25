import React from "react";
import { useDarkMode } from "../contexts/DarkMode";

export const Button = ({ disabled, onClick, children }) => {
  // 13. Erstatt linjen under med darkMode fra useDarkMode hooken
  const darkMode = null;
  const theme = darkMode ? "dark" : "light";
  const className = "button-" + theme;
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
