"use client";
import { createContext, useState } from "react";
import {useRouter} from 'next/navigation';

const FooterContext = createContext({
    currentYear: new Date().getFullYear(),
    setCurrentYear: (year: number) => {},
    refHolder: null,
    setRefHolder: (ref: any) => {},
    scrollToSection: () => {},
});

export const FooterContextProvider = ({ children }) => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [refHolder, setRefHolder] = useState(null);
  const [moveTrigger, setMoveTrigger] = useState(false);
  const offSet = 115;
  const Router = useRouter();


  console.log({refHolder})

   

   const scrollToSection = () => {
    console.log("clicked contexted hit")
    if (!refHolder || !refHolder.current) {
      Router.push('/');
    } else {
        window.scrollTo({
          top: refHolder?.current?.offsetTop - offSet,
          behavior: "smooth",
        });
    }
  };

  const Scroller = () => {
    console.log("Scroller activated")
            if(moveTrigger){
              console.log({moveTrigger})
            window.scrollTo({
            top: refHolder?.current?.offsetTop - offSet,
            behavior: "smooth",
            });
        }
    }

  const context = {
    currentYear,
    setCurrentYear,
    refHolder,
    setRefHolder,
    moveTrigger, 
    setMoveTrigger,
    scrollToSection,
    Scroller
  }

  return (
    <FooterContext.Provider value={context}>
      {children}
    </FooterContext.Provider>
  );
};



export default FooterContext