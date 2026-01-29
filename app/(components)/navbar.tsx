"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import React, {useState, useEffect} from 'react';
import { MenuButton } from "./menu-button";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";


export const Navbar = () => {
  const [scroll, setScroll] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Detect if screen is mobile-sized (< 768px)
  useEffect(() => {
      const checkScreenWidth = () => {
          setIsMobile(window.innerWidth < 768);
      };

      checkScreenWidth(); // Run on mount
      window.addEventListener("resize", checkScreenWidth);
      return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[]);

  return (
    <div className={`sticky top-0 z-10 shadow-lg bg-purple backdrop-blur-md ${scroll == 0 ? "opacity-100" : "opacity-80"} transition-all`}>
      {/* // <motion.nav
      //   className={`z-50 fixed top-0 w-full min-h-[60px] text-white transition-all duration-300`} 
      //   // ${isMobile ? (window.pageYOffset === 0 ? "bg-transparent" : "bg-[#011a38]") : scrolled ? "bg-[#011a38]" : "bg-transparent"}`}
      //   // animate={{ y: isMobile || visible ? 0 : "-100%" }} // Only hide on scroll for desktop
      //   transition={{ type: "tween", duration: 0.15, ease: "easeInOut" }}
      // > */}
      {/* //  TODO: motion */}
      <div className={`sticky top-0 flex items-center justify-between relative z-10 shadow-lg bg-purple backdrop-blur-md py-2 px-10 xl:px-48 md:px-10 min-h-7 ${scroll == 0 ? "opacity-100" : "opacity-80"} transition-all`}>
        {/** TODO: mobile nav resizing*/}
        {/* Mobile Logo */}
        
        <div className="md:hidden flex items-center z-[100]">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image
                src="/images/logos/logo-white-transparent.c73fcbb6.png"
                alt="CSERevue Logo"
                width={150}
                height={50}
                className="h-17 w-auto"
                priority
            />
          </Link>
        </div>


        {/** desktop nav */}
        <div className="hidden md:flex md:flex-1 md:justify-center items-center space-x-6">
          <div className="flex items-center xl:space-x-10 md: space-x-6 flex-nowrap text-xl text-white font-paragraph">
            <Link href="/" className="hidden md:block">
              <img 
                src="/images/logos/logo-white-transparent.c73fcbb6.png"
                alt="CSERevue logo"
                className = "h-17 w-auto" 
            />
            </Link>
            <Link href="/about-us" className="hover:text-cyan text-center">About Us</Link>
            <Link href="/events" className="hover:text-cyan text-center">Events</Link>
            <Link href= "/teams" className="hover:text-cyan text-center">Teams</Link>
            <Link href="/contact-us" className="hover:text-cyan text-center">Contact Us</Link>
            <Link href="/sponsors" className="hover:text-cyan text-center">Sponsors</Link>
            <Link href="/history" className="hover:text-cyan flex flex-row text-center">History</Link>
          </div>
        </div>

        {/**mobile menu button */}
        <Button 
          className="md:hidden rounded-full bg-purple text-white hover:text-gray-400 text-4xl h-16 w-16 justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="scale-150"/>
        </Button>
      </div>
      
      <AnimatePresence>
        {isOpen && (
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="fixed inset-0 w-full h-screen bg-purple opacity-100 text-white flex flex-col items-center justify-center space-y-8 text-2xl font-rowdies z-50"
            >
              {/* Close Button */}
              <button 
                  className="absolute top-6 right-6"
                  onClick={() => setIsOpen(false)}
              >
                <Menu/>
              </button>

              {/* Navigation Links */}
              <Link href="/about-us" className="py-2 text-white hover:text-cyan" onClick={() => setIsOpen(false)}>About Us</Link>
              <Link href="/events" className="py-2 text-white hover:text-cyan" onClick={() => setIsOpen(false)}>Events</Link>
              <Link href="/teams" className="py-2 text-white hover:text-cyan" onClick={() => setIsOpen(false)}>Teams</Link>
              <Link href="/contact-us" className="py-2 text-white hover:text-cyan" onClick={() => setIsOpen(false)}>Contact Us</Link>
              <Link href="/sponsors" className="py-2 text-white hover:text-cyan" onClick={() => setIsOpen(false)}>Sponsors</Link>
              <Link href="/history" className="hover:text-cyan flex flex-row">
                  History
              </Link>
            </motion.div>
          )}
      </AnimatePresence>
    </div>
    // </motion.nav>
  )
}