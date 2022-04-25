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

// Gå videre inn i Panel.jsx
// Så Greeting.jsx
// Så LoginForm.jsx
// Så DarkmodeToggle.jsx
// Så Button.jsx
// Og til slutt steg 14. i Oppgave4.js
