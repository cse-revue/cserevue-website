"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export const Footer = () => {
  return (
    // <motion.nav
    //  TODO: motion
    <div className="bottom-50 xl:left-40 left-5 xl:right-40 right-5 bg-purple text-white">
      <div className="flex flex-row bottom-50 mx-10">
        <div className=" text-xl/10 md:text-xl/15 font-paragraph font-bold mr-auto">
          <div className="xl:pt-2"> Follow us </div>
          <div className="flex items-center justify-between space-x-4 xl:space-x-6">
            <Link href="https://www.instagram.com/cserevue?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="">
              <Image 
                src="/images/logos/instagram-logo-bw.png"
                alt="instagram logo"
                width = {150}
                height = {50}
                className = "h-6 w-auto"
                priority 
              />
            </Link>
            <Link href="https://www.instagram.com/cserevue/" className="">
              <Image 
                src="/images/logos/discord-logo-bw.png"
                alt="discord logo"
                width = {150}
                height = {50}
                className = "h-6 w-auto"
                priority 
              />
            </Link>
            <Link href="https://www.facebook.com/cserevue/" className="">
              <Image 
                src="/images/logos/facebook-logo-bw.png"
                alt="facebook logo"
                width = {150}
                height = {50}
                className = "h-6 w-auto"
                priority 
              />
            </Link>
            <Link href="https://www.youtube.com/c/cserevue" className="">
              <Image 
                src="/images/logos/youtube-logo-bw.png"
                alt="youtube logo"
                width = {150}
                height = {50}
                className = "h-6 w-auto"
                priority 
              />
            </Link>
            <Link href="https://linktr.ee/cserevue" className="">
              <Image 
                src="/images/logos/linktree-logo-bw.png"
                alt="linktree logo"
                width = {150}
                height = {50}
                className = "h-6 w-auto"
                priority 
              />
            </Link>
          </div>
        </div>
        <div className="pt-2">
          <img 
            src="images/logos/logo-white-transparent-no-text.png"
            alt="CSERevue logo no-text"
            className = " h-14 md:h-20 w-auto pt-0.5"
          />
          <div className="ml-auto text-[8px]/4 md:text-xs/8">© CSE Revue 2026</div>
        </div>
      </div>
    </div>
    
    // </motion.nav>
  )
}