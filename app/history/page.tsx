"use client";

import React, { useState } from "react";
import { Navbar } from ".././(components)/navbar";
import Header from "../(components)/header";
import { Footer } from "../(components)/footer";
import Link from "next/link";
import { Shadows_Into_Light_Two } from "next/font/google";

interface ShowInfo {
  name: string,
  dirs: string,
  proddies: string,
  logo: string,
  vidLink: string
}

const PrevShow: React.FC<{show: ShowInfo, index: number}> = ({show, index}) => {
  const [imageSrc, setImageSrc] = useState(show.logo);
  if (imageSrc === "") {setImageSrc("/images/teams/choreos.5b919d8d.jpg")};
  return (
    // <!-- Item #1 -->
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active font-rowdies">
        {/* <div className={`hidden md:block w-[calc(50%-2.5rem)] ${index%2===0? "text-right":"text-left"} md:group-odd:text-left font-medium text-indigo-500`}>
          08/06/2023
        </div> */}
        {/* <!-- Icon --> */}
        <div className="flex items-center justify-center w-3 h-1 rounded-full bg-black md:order-1 md:mx-8.5 mx-3.5">
            {/* <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
            </svg> */}
        </div>
        {/* <!-- Card --> */}
        <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-100 p-4 rounded border border-slate-200 shadow ${index%2===0? "md:text-left":"md:text-right"} text-left overflow-hidden`}>
          <div className={`flex md:flex-row flex-col gap-6 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
            <div className="flex-1 flex">
              <img
                src={imageSrc}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col flex-1">
              <Link
                href={show.vidLink}
                className={`font-bold ${index%2 === 0 ? "text-cyan": "text-purple"} text-md font-normal underline hover:italic`}
              >
                {show.name}
              </Link>
              {/* <div className={`font-bold ${index%2 === 0 ? "text-cyan": "text-purple"} text-md font-normal underline`}>{show.name}</div> */}
              <div className="text-sm font-paragraph mt-2">
                <span className="font-extrabold">Directors: </span>
                {show.dirs} <br/> 
                <span className="font-extrabold">Producers: </span>
                {show.proddies}
              </div>
            </div>
            
          </div>
          
        </div>

        
    </div>
  )
}

export default function History() {
  return (
    <div className="w-full min-h-screen text-black font-rowdies">
      <Navbar />
      <Header
        title="See Our Past Shows"
        image="/images/teams/hospitality.37e9f532.jpg"
      />
      <br/>
      <div className="text-lg font-paragraph text-center bg-black text-white p-5">
        Curious about our previous shows?
        <br/>
        Find the full playlist {"\xa0"}
        <span className="text-pink font-bold hover:underline">
          <Link
            href="https://www.youtube.com/playlist?list=PLTwUb6NYssa2rpZs0uf8vD8fIOHscDtE_"
          >here</Link>  
          
        </span>! 
      </div>
      <div className="bg-white p-8">
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-black">
          {pastShows.map((show, index) => (
            <PrevShow key={index} show={show} index={index}/>
          ))}
        </div>
      </div>
      <Footer />
    </div>

    
  )
}

const pastShows: ShowInfo[] = [
  {
    name: "2026: ???",
    dirs: "Brett Viado, Chelcy Meneses, Jade Williams",
    proddies: "Jolan Guo, Jasmine Ho, Elaine Huang",
    logo: "/images/logos/logo-black-transparent-no-text.png",
    vidLink:"/events"
  },{
    name: "2025: Scriptbob SquareBrackets",
    dirs: "Zahra Hui, Eden Glass, Ryan Kachow",
    proddies: "Luis Bui, Elektra Belle",
    logo: "/images/prev-shows/2025 Scriptbob squarebrackets cropped.png",
    vidLink:"https://www.youtube.com/watch?v=AY9smZUH8Ac"
  }, {
    name: "2024: Mean gURLs",
    dirs: "Lachlan Blair",
    proddies: "Jack Li, Jasmin Arnall",
    logo: "/images/prev-shows/2024 Mean gurls.png",
    vidLink:""
  }, {
    name: "2022: Pirates of the Blue Screen: Deadlocked Chest",
    dirs: "Gal Aharon, Rachel Trassari, Steven Yin",
    proddies: "Elisa Ho, Jeremy Lim, Wesly Wong",
    logo: "/images/prev-shows/2022 Pirates of the Blue Screen.jpg",
    vidLink: "https://www.youtube.com/watch?v=UiCSy07o8t4&list=PLTwUb6NYssa2rpZs0uf8vD8fIOHscDtE_&index=2"
  }, {
    name: "2019: Aladdin: Arraybian bytes[]",
    dirs: "Gal Aharon, Michelle Peng, Spencer Monro",
    proddies: "Monica Dinh, Oliver Shen, Raymond Wan",
    logo: "/images/prev-shows/2019 Aladdin.png",
    vidLink: "https://www.youtube.com/watch?v=1MDyD9NgI6s&list=PLTwUb6NYssa2rpZs0uf8vD8fIOHscDtE_&index=2"
  }, {
    name: "2018: Mycrosoft Shrexcel",
    dirs: "Ryan Klugman, Arunav Neil Sarkar, Jathurson Subachandran",
    proddies: "Andrew Ha, Samantha Chhoeu, Kira Xiang Chen",
    logo: "/images/prev-shows/2018 Shrexcel.jpg",
    vidLink:"https://www.youtube.com/watch?v=vw9B8vbakQs&list=PLTwUb6NYssa2rpZs0uf8vD8fIOHscDtE_&index=3"
  }, {
    name: "2017: Avatar: The Last Macbook Airbender",
    dirs: "Justin Keevers, Sylvia Harmon-Jones, Kitty Lee",
    proddies: "Dennis Bunadi, Martin Le, Tiarne Lu",
    logo: "/images/prev-shows/2017 avatar.jpg",
    vidLink: "https://www.youtube.com/watch?v=ylMLtLpxRYk&list=PLTwUb6NYssa2rpZs0uf8vD8fIOHscDtE_&index=4"
  }, {
    name: "2016: ST*R WARS: The Source Awakens",
    dirs: "Rebecca Hurd, Sean A Metcalfe, Alexander Lawrence, Maxwell Worsley",
    proddies: "Octavia Soegyono, Lucy Dinh, Adam Chyb",
    logo: "/images/prev-shows/2016 Star Wars.jpg",
    vidLink: "https://www.youtube.com/watch?v=oWmIT5xo2AI&list=PLTwUb6NYssa2rpZs0uf8vD8fIOHscDtE_&index=5"
  }, {
    name: "2015: The Lego Revue",
    dirs: "Pierre Estephan, Louis Samuels, Lucas Pickup",
    proddies: "Yingran Sun, Michael Yu",
    logo: "/images/prev-shows/2015 Lego Revue.jpg",
    vidLink: "https://www.youtube.com/watch?v=Awv4roKYnbM&list=PLTwUb6NYssa2rpZs0uf8vD8fIOHscDtE_&index=6"
  }, {
    name: "2014: Game of Codes",
    dirs: "Phillip Vankerkoerle, Luke Tsekouras, Matthew McEwen",
    proddies: "Vincent Tran, Samantha McGrath, Lauren Schramko",
    logo: "/images/prev-shows/2014 Game of Codes.jpg",
    vidLink: "https://www.youtube.com/watch?v=AMjqqM_akj8&list=PLTwUb6NYssa2rpZs0uf8vD8fIOHscDtE_&index=7"
  }, {
    name: "2013: The Infringers",
    dirs: "Maddison Joyce, Jigar Bhatt",
    proddies: "Stephen Sherratt, Jack Lazarus",
    logo: "/images/prev-shows/2013 Infringers.png",
    vidLink: "https://www.youtube.com/watch?v=g3XNt7nzZiE"
  }, {
    name: "2012: Codebusters",
    dirs: "Minh Diep, Timothy Wiley",
    proddies: "Kevin Alexander, Marcus Wong, Rebecca Wiley",
    logo: "/images/prev-shows/2012 codebusters.jpg",
    vidLink: "https://www.youtube.com/watch?v=kXMEM3VG13I&list=PLTwUb6NYssa2rpZs0uf8vD8fIOHscDtE_&index=9"
  }, {
    name: "2011: Hack To the Future",
    dirs: "Jake Scott, Matt Todd",
    proddies: "Ruth Mierowsky, Michael Truong, Amanda Watters",
    logo: "/images/prev-shows/2011 hack to the future.png",
    vidLink: "https://www.youtube.com/watch?v=rUysu00pwS4&list=PLTwUb6NYssa2rpZs0uf8vD8fIOHscDtE_&index=10"
  }, {
    name: "2010: Pacman: The Dark Byte",
    dirs: "Matthew Strahan, Videesha Saparamadu",
    proddies: "Sean Harris, Chung N Ho, Peter Milston",
    logo: "/images/prev-shows/2010 pacman.jpg",
    vidLink: "https://www.youtube.com/watch?v=7wD1rUoATng&list=PLTwUb6NYssa2rpZs0uf8vD8fIOHscDtE_&index=11"
  }, {
    name: "2009: Gossip Geek",
    dirs: "Som Guan, Sammy Ho",
    proddies: "Stuart Robinson, Melissa Hong, Stephanie Sandoval",
    logo: "/images/prev-shows/2009 Gossip Geek.jpg",
    vidLink: "https://www.youtube.com/watch?v=US0kyFtB-DU&list=PLTwUb6NYssa2rpZs0uf8vD8fIOHscDtE_&index=12"
  }, {
    name: "2008: CSE++ //Revue Goes Large",
    dirs: "Rob Sison, Benjamin LambertSmith",
    proddies: "Ben Waterhouse, Emily Siow, Charissa Upcroft",
    logo: "/images/prev-shows/2008 CSE++.jpg",
    vidLink: "https://www.youtube.com/watch?v=3jNkcUvsjLE&list=PLTwUb6NYssa2rpZs0uf8vD8fIOHscDtE_&index=13"
  }, {
    name: "2007: Sand Theft Auto: Agrabah City",
    dirs: "Sam Gentle, David Loxton",
    proddies: "Alison Voon, Jane Sivieng, Alex Mednis",
    logo: "/images/prev-shows/2007 Sand Theft Auto.jpg",
    vidLink: "https://www.youtube.com/watch?v=xcDluRIwPDo&list=PLTwUb6NYssa2rpZs0uf8vD8fIOHscDtE_&index=14"
  }, {
    name: "2006: The teXt Files: Close Encounters of the Nerd Kind",
    dirs: "Michael Tokar, Nick Gibson",
    proddies: "Oleg Sushkov, Piyush Bedi, Anuraag Sridhar",
    logo: "/images/prev-shows/2006 Text Files.jpg",
    vidLink: "https://www.youtube.com/watch?v=1C4KzVOkr6o&list=PLTwUb6NYssa2rpZs0uf8vD8fIOHscDtE_&index=15"
  }, {
    name: "2005: Sin CSE",
    dirs: "Matt James Lee, Robin Chow",
    proddies: "Daniel Danilatos, Karamvir Singh, Lily Xia",
    logo: "/images/prev-shows/2005 sin cse.jpg",
    vidLink: "https://www.youtube.com/watch?v=3L6X3zrrvkw&list=PLTwUb6NYssa2rpZs0uf8vD8fIOHscDtE_&index=17"
  }, {
    name: "2004: Star Key & Hash",
    dirs: "Joe Au, Craig Foster",
    proddies: "Ardrian Hardjono, Margaret Rozali Victoria Vitaver",
    logo: "/images/prev-shows/2004 star key & hash.jpg",
    vidLink: "https://www.youtube.com/watch?v=VSn_zbm6yPM&list=PLTwUb6NYssa2rpZs0uf8vD8fIOHscDtE_&index=19"
  }, {
    name: "2003: CSE Revue Reloaded",
    dirs: "Paul Ayre, Kesavan Paripurapavan",
    proddies: "Marc Chee, Savita Varshney, David Abdelmassih",
    logo: "/images/prev-shows/2003 revue reloaded.jpg",
    vidLink: "https://www.youtube.com/watch?v=Ohrwe7LZ078&list=PLTwUb6NYssa2rpZs0uf8vD8fIOHscDtE_&index=20"
  }, {
    name: "2002: Microsoft Minority Revue",
    dirs: "Matthew Herman, Sarah Yip, Avishkar Misra",
    proddies: "Naveed Hussain, Avishkar Misra",
    logo: "/images/prev-shows/2002 minority revue.jpg",
    vidLink: "https://www.youtube.com/watch?v=cAOMbaFeihI&list=PLTwUb6NYssa2rpZs0uf8vD8fIOHscDtE_&index=22"
  }
]