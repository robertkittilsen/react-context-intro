import { DarkmodeToggle } from "../components/login/DarkmodeToggle";
import { WelcomePanel } from "../components/login/WelcomePanel";
import { DarkModeProvider } from "../contexts/DarkMode";
import { CurrentUserProvider } from "../contexts/CurrentUser";

export function Fasit4() {
  return (
    <DarkModeProvider>
      <CurrentUserProvider>
        <WelcomePanel />
        <DarkmodeToggle />
      </CurrentUserProvider>
    </DarkModeProvider>
  );
}
