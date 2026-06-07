'use client'
import React from 'react'
import { useContext } from 'react'
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import FooterContext from '@/contextProvider/FooterContext'

const FooterLinks = () => {

  console.log({FooterContext})
  const { setMoveTrigger, scrollToSection } = useContext(FooterContext)



  return (
        <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/" className="text-gray-400 hover:text-green-500 transition">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-400 hover:text-green-500 transition">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio" className="text-gray-400 hover:text-green-500 transition">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <button 
                      onClick={() => {
                      console.log("clicked Services");
                      setMoveTrigger(true);
                      scrollToSection();
                      }} 
                      className="cursor-pointer text-gray-400 hover:text-green-500 transition">
                      Services
                    </button>
                  </li>
        </ul>
  )
}

export default FooterLinks