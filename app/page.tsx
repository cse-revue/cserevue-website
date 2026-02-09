

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

import React, { useEffect, useState } from "react";
import { Navbar } from "./(components)/navbar";
import { Footer } from "./(components)/footer";
import { motion } from "framer-motion";
import { EventDetails } from "./events/page";
import Link from "next/link";
import CarouselOptions from "./(components)/photo-carousel";
import { EventsData } from "./events/event-details";
// import Component from "$components/Component.svelte";
// import Translate from "$components/Translate.svelte";

const EventGrid: React.FC<{event: EventDetails, index: number, maxEvents: number}> = ({event, index, maxEvents}) => {
  const link: string = event.link? event.link : "https://www.facebook.com/cserevue/";
  const [isMobile, setIsMobile] = useState(false);

  // Detect if screen is mobile-sized (< 768px)
  useEffect(() => {
      const checkScreenWidth = () => {
          setIsMobile(window.innerWidth < 768);
      };

      checkScreenWidth(); // Run on mount
      window.addEventListener("resize", checkScreenWidth);
      return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);
  
  return (
    <div className={`border-t border-black ${index >= maxEvents - 2 ? "border-b":""} ${index % 2 === 0 ? "border-r":""}`}>
      <div className={`mt-4 mb-4 flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "mr-4":"ml-4"}`}>
        <div className={`flex flex-row md:flex-col md:basis-2/13 ${index >= 2 ? "bg-cyan" : "bg-forest"} text-center justify-center py-5 -mb-4 md:mb-0`}>
          <p className="text-white font-rowdies text-xl">{event.day}</p>
          <p className="block md:hidden">{"\xa0"}</p>
          <p className="text-white font-rowdies text-xl">{event.month}</p>
        </div>
        <div className={`flex flex-col basis-3/4 text-black md:justify-center text-lg`}>
          <Link href={link} prefetch={false} className="font-rowdies text-xl hover:underline pb-1">{event.eventName}</Link>
          <p className="font-paragraph">
            <span className="font-bold">time: </span> {event.time}
          </p>
          <p className=" font-paragraph">
            <span className="font-bold">location: </span> {event.room}
          </p>
        </div>
      </div>    
    </div>
  )
}

export default function Home() {
  // const maxVidHeight = 'calc(100vh-50px)'
  return (
    // <div className="w-full bg-[#8A84E2] min-h-screen text-white">
    <div className="min-h-screen w-full text-black scroll-smooth">
        {/* <video 
          src="/promo.512e2c26.mp4"
          className="autoplay playsinline w-full overflow-y-hidden "
        /> */}

    <div className="relative overflow-hidden w-full h-70 flex items-center">
      <motion.div className="" initial={{ opacity: 0, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        {/**optional image background */}
          <img
            src="/images/teams/scripts-cropped.jpg"
            alt="CSE Revue banner"
            className="object-center object-cover opacity-50 w-full h-full absolute inset-0"
          />

        {/**text overlay */}
        <div className='absolute inset-0 flex flex-col items-center justify-center p-4 text-center'>
          {/* <h1 className="text-5xl font-bold font-rowdies text-white mb-4 drop-shadow-md">
            CSE REVUE
          </h1> */}
        </div>
      </motion.div>  
    </div>
      <Navbar />
      <div>
        {/* what is cse revue */}
        <div className="bg-white p-6 pb-6 relative w-full">
          <h1 className="text-pink font-rowdies text-3xl text-center mt-6 pt-4">WHAT IS CSE REVUE?</h1>
          <div className="relative px:2 xl:mx-60 my-8 flex">
            <img 
              src="/images/photossss/IMG_0126.jpg"
              alt=""
              className="absolute right-4 object-cover size-60 lg:h-60 w-3/5 aspect-fixed"
            ></img>
            <div className="mr-auto bottom-0">
              <img
                src="/images/logos/logo-black-transparent-no-text.png"
                alt="logo"
                className="relative w-2/10 lg:w-1/10 left-5"
              ></img>
              <div className="relative left-5 bg-white w-2/3 text-[12px] lg:text-lg font-paragraph py-3 pr-3">
                <p>
                  Despite our name, we're open to students of all faculties! We welcome students of all skill levels to try their hand at theatre, whether that means standing on stage for the first time or ensuring the show goes on backstage, or even promoting us as part of our other teams.
                </p>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim </p> */}
              </div>
            </div>
          </div>
        </div>
        {/* stats etc */}
        <div className="bg-cyan p-5 md:px-30 grid sm:grid-cols-1 lg:grid-cols-3 space-y-3 text-white text-center items-center place-items-center mb-13">
          <div className="basis-4xs text-sm md:text-2xl font-rowdies">bringing shows to life since 2002</div>
          <div className="basis-xs text-sm md:text-2xl font-rowdies mb-4">500+ members</div>
          <div className="bg-white flex flex-row items-center p-3 md:p-5 w-50 md:w-85 md:text-3xl lg:ml-auto">
            <Link prefetch={false} href="/about-us" className="text-cyan font-rowdies hover:underline lg:ml-5 w-2/3">{`READ MORE`}</Link>
            <img src="/images/other-resources/arrow.png" className="size-8 md:size-8 mx-3"></img>
          </div>
        </div>
        {/* upcoming events */}
        <div className="text-center mb-20">
          <h1 className="text-pink font-rowdies text-3xl text-center mt-6 pt-4">UPCOMING EVENTS</h1>
          <div className="md:px-20 px-10 mt-6 pb-4 grid grid-cols-2 text-left">
            {EventsData.slice(0,4).map((event, index) => (
              <EventGrid key={index} event={event} index={index} maxEvents={4}/>
            ))}
          </div>
          <Link prefetch={false} href="/events#comingup" scroll={true} className="text-orange text-xl font-rowdies hover:underline">view all events →</Link>
        </div>

        {/** gallery of photos*/}
        <div className="bg-black">
          <CarouselOptions/>
        </div>
      <Footer />
      </div>
    </div>
    

  )
}

// const gallery: string[] = [
//   "/images/teams/band.012ea31f.jpg",
//   "/images/teams/cast.b91cf1d8.jpg",
//   "/images/teams/choreos.5b919d8d.jpg",
//   "/images/teams/costumes.f6241d2b.jpg",
//   "/images/teams/foh.c419396c.jpg",
//   "/images/teams/fundraising.772ec2cf.jpg",
//   "/images/teams/hospitality.37e9f532.jpg",
//   "/images/teams/promos.8c968f75.jpg"
// ]


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