"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export const Footer = () => {
  return (
    // <motion.nav
    //   className={`z-50 fixed top-0 w-full min-h-[60px] text-white transition-all duration-300`} 
    //   // ${isMobile ? (window.pageYOffset === 0 ? "bg-transparent" : "bg-[#011a38]") : scrolled ? "bg-[#011a38]" : "bg-transparent"}`}
    //   // animate={{ y: isMobile || visible ? 0 : "-100%" }} // Only hide on scroll for desktop
    //   transition={{ type: "tween", duration: 0.15, ease: "easeInOut" }}
    // >
    //  TODO: motion
    <div className="flex items-center justify-between px-10 py-6 xl:px-48 md:px-10 min-h-7 text-xl">
    {/* <div className="flex justify-start"> */}
      {/** TODO: mobile nav resizing*/}
      {/** desktop nav */}
      <div> Follow us </div>
      <div className="mr-auto">
        <div className="flex items-center space-x-6 xl:space-x-10 flex-nowrap">
          <Link href="/" className="hidden xl:block">
            <Image 
              src="/images/logos/discord-logo-bw.png"
              alt="discord logo"
              width = {150}
              height = {50}
              className = "h-6 w-auto"
              priority 
            />
          </Link>
          <Link href="https://www.instagram.com/cserevue?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hidden xl:block">
            <Image 
              src="/images/logos/instagram-logo-bw.png"
              alt="instagram logo"
              width = {150}
              height = {50}
              className = "h-6 w-auto"
              priority 
            />
          </Link>
          <Link href="https://www.facebook.com/cserevue/" className="hidden xl:block">
            <Image 
              src="/images/logos/facebook-logo-bw.png"
              alt="facebook logo"
              width = {150}
              height = {50}
              className = "h-6 w-auto"
              priority 
            />
          </Link>
          <Link href="https://www.youtube.com/c/cserevue" className="hidden xl:block">
            <Image 
              src="/images/logos/youtube-logo-bw.png"
              alt="youtube logo"
              width = {150}
              height = {50}
              className = "h-6 w-auto"
              priority 
            />
          </Link>
          <Link href="https://linktr.ee/cserevue" className="hidden xl:block">
            <Image 
              src="/images/logos/instagram-logo-bw.png"
              alt="linktree logo"
              width = {150}
              height = {50}
              className = "h-6 w-auto"
              priority 
            />
          </Link>
        </div>
      </div>
      <img 
        src="images/logos/logo-white-transparent-no-text.png"
        alt="CSERevue logo no-text"
        className = "h-10 w-auto ml-auto w-{150} h-{50}"
      />
    </div>
    
    // </motion.nav>
  )
}