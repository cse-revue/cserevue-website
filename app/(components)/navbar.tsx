"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import React, {useState, useEffect} from 'react';

export const Navbar = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[]);

  return (
    // <motion.nav
    //   className={`z-50 fixed top-0 w-full min-h-[60px] text-white transition-all duration-300`} 
    //   // ${isMobile ? (window.pageYOffset === 0 ? "bg-transparent" : "bg-[#011a38]") : scrolled ? "bg-[#011a38]" : "bg-transparent"}`}
    //   // animate={{ y: isMobile || visible ? 0 : "-100%" }} // Only hide on scroll for desktop
    //   transition={{ type: "tween", duration: 0.15, ease: "easeInOut" }}
    // >
    //  TODO: motion
    <div className={`sticky top-0 flex items-center justify-between relative z-10 shadow-lg bg-purple backdrop-blur-md py-2 px-10 xl:px-48 md:px-10 min-h-7 ${scroll == 0 ? "opacity-100" : "opacity-80"} transition-all`}>
      {/** TODO: mobile nav resizing*/}
      {/** desktop nav */}
      <div className="hidden md:flex md:flex-1 xl:justify-center items-center space-x-6">
        <div className="flex items-center space-x-6 xl:space-x-12 md: space-x-6 flex-nowrap text-xl font-paragraph">
          <Link href="/" className="hidden md:block">
            <Image 
              src="/images/logos/logo-white-transparent.c73fcbb6.png"
              alt="CSERevue logo"
              width = {150}
              height = {50}
              className = "h-17 w-auto"
              priority 
          />
          </Link>
          <Link href="/about-us" className="hover:text-cyan">About Us</Link>
          <Link href="/events" className="hover:text-cyan">Events</Link>
          <Link href= "/teams" className="hover:text-cyan">Teams</Link>
          <Link href="/contact-us" className="hover:text-cyan">Contact Us</Link>
          <Link href="/sponsors" className="hover:text-cyan">Sponsors</Link>
          <Link href="/history" className="hover:text-cyan flex flex-row">History</Link>
        </div>
      </div>
    </div>
    
    // </motion.nav>
  )
}