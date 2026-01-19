"use client";

import React from "react";
import { Navbar } from ".././(components)/navbar";
import Header from "../(components)/header";
import { Footer } from "../(components)/footer";

interface ShowInfo {
  name: string,
  dirs: string,
  proddies: string,
  logo: string
}

const PrevShow: React.FC<{show: ShowInfo, index: number}> = ({show, index}) => {
  return (
    // <!-- Item #1 -->
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
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
        <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow ${index%2===0? "md:text-left":"md:text-right"} text-left`}>
                <div className="font-bold text-slate-900">{show.name}</div>
            <div className="text-slate-500">Directors: {show.dirs} <br/> Producers: {show.proddies}</div>
        </div>

        
    </div>
  )
}

export default function History() {
  return (
    <div className="w-full min-h-screen text-white
        bg-linear-to-b
        from-black from-20% 
        via-[#381E72] via-[percentage:20%_90%] 
        to-[#000000] to-100%">
      <Navbar />
      <Header
        title="See Our Past Shows"
        image="/images/teams/hospitality.37e9f532.jpg"
      />
      
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
    name: "2025: Scriptbob SquareBrackets",
    dirs: "Zahra Hui, Eden Glass, Ryan Kachow",
    proddies: "Luis Bui, Elektra Belle",
    logo: ""
  }, {
    name: "2024: Mean gURLs",
    dirs: "Lachlan Blair",
    proddies: "Jack Li, Jasmin Arnall",
    logo: ""
  }, {
    name: "2022: Pirates of the Blue Screen: Deadlocked Chest",
    dirs: "Gal Aharon, Rachel Trassari, Steven Yin",
    proddies: "Elisa Ho, Jeremy Lim, Wesly Wong",
    logo: ""
  }, {
    name: "2019: Aladdin: Arraybian bytes[]",
    dirs: "Gal Aharon, Michelle Peng, Spencer Monro",
    proddies: "Monica Dinh, Oliver Shen, Raymond Wan",
    logo: ""
  }, {
    name: "2018: Mycrosoft Shrexcel",
    dirs: "Ryan Klugman, Arunav Neil Sarkar, Jathurson Subachandran",
    proddies: "Andrew Ha, Samantha Chhoeu, Kira Xiang Chen",
    logo: ""
  }, {
    name: "2017: Avatar: The Last Macbook Airbender",
    dirs: "Justin Keevers, Sylvia Harmon-Jones, Kitty Lee",
    proddies: "Dennis Bunadi, Martin Le, Tiarne Lu",
    logo: ""
  }, {
    name: "2016: ST*R WARS: The Source Awakens",
    dirs: "Rebecca Hurd, Sean A Metcalfe, Alexander Lawrence, Maxwell Worsley",
    proddies: "Octavia Soegyono, Lucy Dinh, Adam Chyb",
    logo: ""
  }, {
    name: "2015: The Lego Revue",
    dirs: "Pierre Estephan, Louis Samuels, Lucas Pickup",
    proddies: "Yingran Sun, Michael Yu",
    logo: ""
  }, {
    name: "2014: Game of Codes",
    dirs: "Phillip Vankerkoerle, Luke Tsekouras, Matthew McEwen",
    proddies: "Vincent Tran, Samantha McGrath, Lauren Schramko",
    logo: ""
  }, {
    name: "2013: The Infringers",
    dirs: "Maddison Joyce, Jigar Bhatt",
    proddies: "Stephen Sherratt, Jack Lazarus",
    logo: ""
  }, {
    name: "2012: Codebusters",
    dirs: "Minh Diep, Timothy Wiley",
    proddies: "Kevin Alexander, Marcus Wong, Rebecca Wiley",
    logo: ""
  }, {
    name: "2011: Hack To the Future",
    dirs: "Jake Scott, Matt Todd",
    proddies: "Ruth Mierowsky, Michael Truong, Amanda Watters",
    logo: ""
  }, {
    name: "2010: Pacman: The Dark Byte",
    dirs: "Matthew Strahan, Videesha Saparamadu",
    proddies: "Sean Harris, Chung N Ho, Peter Milston",
    logo: ""
  }, {
    name: "2009: Gossip Geek",
    dirs: "Som Guan, Sammy Ho",
    proddies: "Stuart Robinson, Melissa Hong, Stephanie Sandoval",
    logo: ""
  }, {
    name: "2008: CSE++ //Revue Goes Large",
    dirs: "Rob Sison, Benjamin LambertSmith",
    proddies: "Ben Waterhouse, Emily Siow, Charissa Upcroft",
    logo: ""
  }, {
    name: "2007: Sand Theft Auto: Agrabah City",
    dirs: "Sam Gentle, David Loxton",
    proddies: "Alison Voon, Jane Sivieng, Alex Mednis",
    logo: ""
  }, {
    name: "2006: The teXt Files: Close Encounters of the Nerd Kind",
    dirs: "Michael Tokar, Nick Gibson",
    proddies: "Oleg Sushkov, Piyush Bedi, Anuraag Sridhar",
    logo: ""
  }, {
    name: "2005: Sin CSE",
    dirs: "Matt James Lee, Robin Chow",
    proddies: "Daniel Danilatos, Karamvir Singh, Lily Xia",
    logo: ""
  }, {
    name: "2004: Star Key & Hash",
    dirs: "Joe Au, Craig Foster",
    proddies: "Ardrian Hardjono, Margaret Rozali Victoria Vitaver",
    logo: ""
  }, {
    name: "2003: CSE Revue Reloaded",
    dirs: "Paul Ayre, Kesavan Paripurapavan",
    proddies: "Marc Chee, Savita Varshney, David Abdelmassih",
    logo: ""
  }, {
    name: "2002: Microsoft Minority Revue",
    dirs: "Matthew Herman, Sarah Yip, Avishkar Misra",
    proddies: "Naveed Hussain, Avishkar Misra",
    logo: ""
  }
]