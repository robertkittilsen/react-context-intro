import { useCurrentUser } from "../contexts/CurrentUser";
import { Panel } from "./Panel";
import { LoginForm } from "./LoginForm";
import { Greeting } from "./Greeting";

export const WelcomePanel = ({ children }) => {
  // 8. Hent currentUser fra useCurrentUser hooken
  const currentUser = null;
  return (
    <Panel title="Welcome">
      {currentUser !== null ? <Greeting /> : <LoginForm />}
      {children}
    </Panel>
  );
};

// Gå videre inn i "Panel"
// Så "Greeting"
// Så "LoginForm"
// Så "DarkmodeToggle"
// Og til slutt "Button"
