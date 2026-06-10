"use client";
import { createContext, useState, useEffect } from "react";
import {useRouter, useSearchParams} from 'next/navigation';

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
  const searchParams = useSearchParams();

  // Check for scroll intent on mount and when params change
  useEffect(() => {
    const scrollToServices = searchParams.get('scrollToServices');
    if (scrollToServices === 'true' && refHolder?.current) {
      setTimeout(() => {
        window.scrollTo({
          top: refHolder?.current?.offsetTop - offSet,
          behavior: "smooth",
        });
        // Clean up the URL param
        Router.replace('/');
      }, 100);
    }
  }, [searchParams, refHolder]);

  const scrollToSection = () => {
    console.log("Services scroll triggered")
    if (!refHolder || !refHolder.current) {
      // Navigate to homepage with scroll intent param
      Router.push('/?scrollToServices=true');
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