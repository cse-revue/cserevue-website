

// import Link from "next/link";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// export const Navbar = () => {
//   return (
//     <motion.nav
//       className={`z-50 fixed top-0 w-full min-h-[60px] text-white transition-all duration-300`} 
//       // ${isMobile ? (window.pageYOffset === 0 ? "bg-transparent" : "bg-[#011a38]") : scrolled ? "bg-[#011a38]" : "bg-transparent"}`}
//       // animate={{ y: isMobile || visible ? 0 : "-100%" }} // Only hide on scroll for desktop
//       transition={{ type: "tween", duration: 0.15, ease: "easeInOut" }}
//     >
//       <div className="hidden md:flex md:flex-1 md:justify-end xl:justify-center items-center space-x-6">
//         <div className="flex items-center space-x-6 xl:space-x-12 flex-nowrap">
//           <Link href="/about-us" className="hover:text-[#2390c6]">About Us</Link>
//         </div>
//       </div>
        
//     </motion.nav>
//   )
// }

// import Image from "next/image";

"use client";

import React from "react";
import { Navbar } from "./(components)/navbar";
import { Footer } from "./(components)/footer";

export default function Home() {
  // const maxVidHeight = 'calc(100vh-50px)'
  return (
    // <div className="w-full bg-[#8A84E2] min-h-screen text-white">
    <div className="[background-image:linear-gradient(to_bottom,_#dddddd00_0%,_#000000_90%),_linear-gradient(to_top,_#7840FF_40%,_#000000_93%)] min-h-screen w-full text-white">
        {/* <video 
          src="/promo.512e2c26.mp4"
          className="autoplay playsinline w-full overflow-y-hidden "
        /> */}
        <Navbar />
        <div>
          <div>some distinctive opening</div>
          <div> 
            some blurby thing + photo
          </div>
          <div>upcoming events</div>
          <div>
            {/** gallery of photos*/}
            gallery
          </div>
          <img 
            src="images/logos/logo-white-transparent-no-text.png"
            alt="CSERevue logo no-text"
            className = "h-400 w-500"
          />
          {/* <div>that bar at the bottom with socials links</div> */}
          <Footer />
      </div>
    </div>
    

  )
}
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }

// boo