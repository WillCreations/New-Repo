'use client'
import React from 'react'
import ServicesComp from '@/app/components/ServicesComp';
import Services from "@/app/static/Services";
import { useRef, useEffect, useContext } from 'react'
import FooterContext from '@/contextProvider/FooterContext';

const ServiceRef = () => {

    const { Scroller, refHolder, setRefHolder, moveTrigger,setMoveTrigger } = useContext(FooterContext)

    const serviceRef = useRef(null)

    useEffect(() => {
        const SetRef = () => {
            if (serviceRef.current) {
                setRefHolder(serviceRef);
            }
        };

        SetRef();
    }, [serviceRef]);

    useEffect(() => {
        Scroller()
        return () => {
            setMoveTrigger(false)
        }
    }, [])

  return (
    <div ref={serviceRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {Services.map((unit, index) => {
        return (
            <ServicesComp key={index} unit={unit}/>
        );
        })}
    </div>
  )
}

export default ServiceRef