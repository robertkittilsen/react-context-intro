import React from "react";

export function Oppgave2() {
  // I denne oppgaven skal du lage en tema-bytter som bytter mellom svart og hvitt tema ved å trykke på en button.
  // 1. Opprett en context. Kall den ThemeContext og sett default-verdi til null.
  // 2. Opprett en "theme" state og sett default til "light"
  // 3. Lag en metode toggleTheme som setter theme til "dark" hvis theme er "light" og "light" ellers.

  return null;
  // 4. Sett opp en context provider som tar imot "theme" som value.
  // Inni provideren skal det være en div: <div className={`full-size theme-bg--${theme}`}></div>
  // Inni denne div'en skal ha to ting:
  // - 1. lage en button som kjører toggleTheme-metoden ved onClick
  // - 2. <Text/>-komponenten
}

function Text() {
  // 5. Konsumer contexten her.
  // Returner det som står under:
  // return <p className={`text theme-text--${theme}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
}
