import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export function ToggleProvider({ children }) {
  const [isOn, setIsOn] = useState(false);

  return (
    <AppContext.Provider value={{ isOn, setIsOn }}>
      {children}
    </AppContext.Provider>
  );
}

export function useToggleMode() {
  return useContext(AppContext);
}