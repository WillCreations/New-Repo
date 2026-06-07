"use client";
import { createContext, useState } from "react";
import {useRouter} from 'next/navigation';

export const FooterContext = createContext({
    currentYear: new Date().getFullYear(),
    setCurrentYear: (year: number) => {},
    refHolder: null,
    setRefHolder: (ref: any) => {},
    scrollToSection: () => {},
});

export const FooterContextProvider = ({ children }) => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [refHolder, setRefHolder] = useState(null);
  const offSet = 115;
  const Router = useRouter();

   const scrollToSection = () => {

    if (!refHolder || !refHolder.current) {
      Router.push('/' + refHolder.current.id);
      return;
    } else {
        
        window.scrollTo({
          top: refHolder.current.offsetTop - offSet,
          behavior: "smooth",
        });
    }
  };

  const context = {
    currentYear,
    setCurrentYear,
    refHolder,
    setRefHolder,
    scrollToSection 
  }

  return (
    <FooterContext.Provider value={context}>
      {children}
    </FooterContext.Provider>
  );
};