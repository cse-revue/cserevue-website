"use client";

import React, { useState } from "react";
import { Navbar } from ".././(components)/navbar";
import Header from ".././(components)/header"
import { Footer } from "../(components)/footer";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

interface Member {
  name: string,
  photo: string,
  position: string,
}

const TeamMemberCard: React.FC<{member: Member, index: number}> = ({ member, index }) => {

  const [imageURL, setImageURL] = useState(member.photo);
  return (
    <div className="w-full overflow-hidden items-center flex flex-col">
      <Image
        src={imageURL}
        alt={member.name}
        width={180}
        height={180}
        unoptimized
        onError={() => setImageURL("/images/teams/choreos.5b919d8d.jpg")}
        className="rounded-full object-cover size-70"
      />
      <h2 className={`text-center ${index % 2 === 0 ? 'text-[#5603AD]' : 'text-[#47BFB6]'} font-semibold mt-3`}>{member.name}</h2>
      <p>{member.position}</p>
    </div>
  )
}

const About: React.FC = () => {
  return (
    <div className="w-full min-h-screen text-white
        bg-gradient-to-b
        from-black from-20% 
        via-[#381E72] via-[percentage:20%_90%] 
        to-[#000000] to-100%">
      <Navbar />
      <Header
        title="ABOUT US"
        image="/images/teams/cast.b91cf1d8.jpg"
      />
      
      {/**description */}
      <div className="flex w-full bg-white text-black justify-center">
        <p className="text-black max-w-150 text-center my-20 mx-10">
          <span className="text-[#E83151] text-3xl">CSE Revue </span>
          is a group of people and we do theatre and i cannot fluff for this long so lorem ipsum yeahhhhhh potatoes tomatoes egg and soup let us go then you and i.
I think this blurb is meant to be longer than the other blurb so uh in the room the women come and go talking of michaelangelo do i dare disturb the universe do i dare to eat a peach i shall wear the bottoms of my trousers rolled
        </p>
      </div>

      {/**past shows */}
      <div className="bg-black justify-center flex">
        <div className="text-white pt-15 pb-8">
          <p className="text-3xl font-bold text-center pb-3">
            PAST SHOWS
          </p>
          {/** both past shows */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-15 xl:px-20 px-10 py-8">
            {/**2025 show */}
            <div className="w-full overflow-hidden"> 
              <img
                src="/images/teams/cast.b91cf1d8.jpg"
              />
              <p className="text-center text-md py-4">
                2025: ScriptBoB SquareBrackets
              </p>
            </div>
            {/**2024 show */}
            <div className="w-full overflow-hidden">
              <img
                src="/images/teams/cast.b91cf1d8.jpg"
              />
              <p className="text-center text-md py-4">
                2024: Mean GURLs
              </p>
            </div>
          </div>
          <Link href="/history" className="xl:px-20 px-10 text-[#F49D37] hover:underline"> view full history →</Link>
        </div>
      </div>

      {/** meet the team */}
      <div className="bg-white justify-center flex">
        <div className="text-black pb-15 pt-20">
          <p className="text-3xl font-bold text-center pb-5 text-[#E83151]">
            MEET THE EXECS
          </p>
      
          <div className="bg-white grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-10 gap-x-30 px-20 py-8">
            {execTeam.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index}/>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

const execTeam: Member[] = [
  {
    name: "Jade Williams",
    photo: "/images/teams/choreos.5b919d8d.jpg",
    position: "Director"
  }, {
    name: "Brett Viado",
    photo: "/images/teams/choreos.5b919d8d.jpg",
    position: "Director"
  }, {
    name: "Chelcy Meneses", 
    photo: "/images/teams/choreos.5b919d8d.jpg",
    position: "Director"
  }, {
    name: "Elaine Huang",
    photo: "/images/teams/choreos.5b919d8d.jpg",
    position: "Producer & President"
  }, {
    name: "Jolan Guo",
    photo: "/images/teams/choreos.5b919d8d.jpg",
    position: "Producer"
  }, {
    name: "Jasmine Ho",
    photo: "/images/teams/choreos.5b919d8d.jpg",
    position: "Producer",
  }, {
    name: "Sarah Romanous",
    photo: "/images/teams/choreos.5b919d8d.jpg",
    position: "Secretary"
  }, {
    name: "Arte Collins",
    photo: "/images/teams/choreos.5b919d8d.jpg",
    position: "Arc Delegate & Welfare Officer"
  }, {
    name: "Samuel Vaynman",
    photo: "/images/teams/choreos.5b919d8d.jpg",
    position: "Treasurer"
  }
]

export default About;


// import Image from "next/image";

// export default function Home() {
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
