import React, { createContext, useContext, useState } from "react";

// 2. Lag CurrentUserContext med default verdi null

export const CurrentUserProvider = ({ children }) => {
  // 3. Lag en state for currentUser med en defaultverdi null

  // 4. Wrap "children" med CurrentUserContext provider med value: currentUser og setCurrentUser
  return children;
};

export const useCurrentUser = () => {
  // 5. Hent context fra CurrentUserContext
  // 6. Sjekk at context er definert, hvis ikke kast en error
  // 7. Returner "currentUser" og "setCurrentUser" fra context
  return null;
};

// Gå videre til komponenten "WelcomePanel" i ./components/WelcomePanel.js
