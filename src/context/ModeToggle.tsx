import { createContext, ReactNode, useContext, useState } from "react";

interface AppContextType {
  isOn: boolean;
  setIsOn: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextType | null>(null);

export function ToggleProvider({ children }:{children:ReactNode}) {
  const [isOn, setIsOn] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ isOn, setIsOn }}>
      {children}
    </AppContext.Provider>
  );
}

export function useToggleMode() {
  const context = useContext(AppContext);
  
  if (!context) {
    throw new Error("useToggleMode must be used within a ToggleProvider");
  }
  
  return context;
}