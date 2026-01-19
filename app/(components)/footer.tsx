"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export const Footer = () => {
  return (
    // <motion.nav
    //  TODO: motion
    <div className="bottom-50 xl:left-40 left-5 xl:right-40 right-5 bg-purple">
      <div className="flex flex-row bottom-50 mx-10">
      {/* // <div className="flex flex-row place-content-between"> */}
        {/** TODO: mobile nav resizing*/}
        {/** desktop nav */}
        <div className="text-xl/15 font-bold mr-auto">
          <div> Follow us </div>
          <div className="flex items-center justify-between space-x-6 xl:space-x-6">
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
        <div className="pt-2">
          <img 
            src="images/logos/logo-white-transparent-no-text.png"
            alt="CSERevue logo no-text"
            className = "h-20 w-auto"
          />
          <div className="ml-auto text-xs/8">© CSE Revue 2026</div>
        </div>
      </div>
    </div>
    
    // </motion.nav>
  )
}