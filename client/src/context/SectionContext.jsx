import { createContext, useContext, useState } from "react";

const SectionContext = createContext();

export function SectionProvider({ children }) {
  const [active, setActive] = useState("Home");
  const [isManualScroll, setIsManualScroll] = useState(false);
  
  return (
    <SectionContext.Provider value={{ 
      active, 
      setActive,  
      isManualScroll,
      setIsManualScroll 
    }}>
      {children}
    </SectionContext.Provider>
  );
}

export const useSection = () => useContext(SectionContext);