import { DarkmodeToggle } from "./components/DarkmodeToggle";
import { WelcomePanel } from "./components/WelcomePanel";
import { DarkModeProvider } from "./contexts/DarkMode";
import { CurrentUserProvider } from "./contexts/CurrentUser";

export function Oppgave4() {
  // Her skal du lage en enkel login-flow ved bruk av context
  // Du skal lage og ta i bruk 2 providers
  // En DarkModeProvider og en CurrentUserProvider
  // Du skal også lage customhooks for å bruke de to contextene
  // Begynn oppgaven ved å lage en DarkModeProvider slik som forrige oppgave i ./contexts/DarkMode.js

  // 14. Wrap "WelcomePanel" og "DarkmodeToggle" med DarkModeProvider og CurrentUserProvider
  // Dette er siste steg i Oppgave4.
  return (
    <>
      <WelcomePanel />
      <DarkmodeToggle />
    </>
  );
}
