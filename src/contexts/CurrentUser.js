import React, { createContext, useContext, useState } from "react";

const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export const useCurrentUser = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  return { currentUser, setCurrentUser };
};
