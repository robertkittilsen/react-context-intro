import React, { useState, createContext, useContext } from "react";

const ThemeContext = createContext(null);

export function Oppgave2() {
  // 1. Opprett en theme state og sett default til "light"
  // 2. Lag en metode toggleTheme som setter theme til "dark" hvis theme er "light" og "light" ellers.

  return null;
  // 3. Sett opp en context provider som tar imot theme som value. children av provideren skal være
  // en button som kjører toggleTheme metoden ved onClick og <Text/>-komponenten
}

function Text() {
  // 4. Konsumer contexten her.
  // Returner det som står under:
  // return <div className={`text theme theme--${theme}`}>{theme}</div>;
}
