"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  return (
    // <motion.nav
    //   className={`z-50 fixed top-0 w-full min-h-[60px] text-white transition-all duration-300`} 
    //   // ${isMobile ? (window.pageYOffset === 0 ? "bg-transparent" : "bg-[#011a38]") : scrolled ? "bg-[#011a38]" : "bg-transparent"}`}
    //   // animate={{ y: isMobile || visible ? 0 : "-100%" }} // Only hide on scroll for desktop
    //   transition={{ type: "tween", duration: 0.15, ease: "easeInOut" }}
    // >
    //  TODO: motion
    <div className="sticky top-0 flex items-center justify-between relative z-10 shadow-lg rounded-md bg-black/50 backdrop-blur-md py-3 px-10 xl:px-48 md:px-10 min-h-7">
      {/** TODO: mobile nav resizing*/}
      {/** desktop nav */}
      <div className="hidden md:flex md:flex-1 md:justify-end xl:justify-center items-center space-x-6">
        <div className="flex items-center space-x-6 xl:space-x-12 flex-nowrap text-xl">
          <Link href="/" className="hidden xl:block">
            <Image 
              src="/images/logos/logo-white-transparent.c73fcbb6.png"
              alt="CSERevue logo"
              width = {150}
              height = {50}
              className = "h-17 w-auto"
              priority 
          />
          </Link>
          <Link href="/about-us" className="hover:text-[#47bfb6]">About Us</Link>
          <Link href="/events" className="hover:text-[#47bfb6]">Events</Link>
          <Link href= "/teams" className="hover:text-[#47bfb6]">Teams</Link>
          <Link href="/contact-us" className="hover:text-[#47bfb6]">Contact Us</Link>
          <Link href="/sponsors" className="hover:text-[#47bfb6]">Sponsors</Link>
          <Link href="/history" className="hover:text-[#47bfb6] flex flex-row">History</Link>
        </div>
      </div>
    </div>
    
    // </motion.nav>
  )
}