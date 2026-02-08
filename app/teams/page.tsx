"use client";

import React from "react";
import { Navbar } from ".././(components)/navbar";
import Header from ".././(components)/header"
import { Footer } from "../(components)/footer";
import { bandDesc, castDesc, designDesc, eventsDesc, fohDesc, hospoDesc, markDesc, scriptsDesc, techDesc, videosDesc } from "./descriptions";
import { mark } from "framer-motion/client";

interface TeamTileInfo {
  teamName?: string,
  image: string,
  desc?: string,
  longdesc?: string,
  hover: boolean
}

const TeamCard: React.FC<{team: TeamTileInfo}> = ({team}) => {
  return (
    <div className="flex flex-col">
      <div className="relative overflow-hidden w-full h-60 items-center group">
        {team.hover == true ? (
          <img
            src={team.image}
            className="object-cover h-full w-full opacity-90 group-hover:opacity-80 group-hover:brightness-50"
          >
          </img>
        ): (
          <img
            src={team.image}
            className="object-cover opacity-100"
          >
          </img>
        )}
        
        {/**optional stuff for teams */}
        {/**trying to make the hover work GOTTA SEPARATE THE HIDDEN FOR THE TWO TEXTS IDKKKKK */}
        {team.hover == true ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center group">
            <h1 className="text-5xl text-white font-rowdies group-hover:hidden underline">{team.teamName}</h1>
            <p className="text-xs lg:text-sm m-5 font-paragraph text-white hidden group-hover:block">{team.desc}</p>
          </div>
          // <div>

          // </div>
        ):(
          <div></div>
        )}
        {/* {team.hover == true ? (
          <div className="absolute inset-0 flex items-center justify-center text-center hover:opacity-100">
            <p className="text-md font-paragraph text-white hidden">{team.desc}</p>
          </div>
        ):(
          <div></div>
        )} */}
        {/* {team.hover == true ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center ">
            <h1 className="text-5xl text-white font-rowdies">{team.teamName}</h1>
          </div>
        ): (
          <div></div>
        )} */}

      </div>
      {/* {team.hover == true ? (
        <div className="text-center">
          {team.desc}
        </div>
      ): (
        <div></div>
      )} */}
    </div>
    
  )
}

const Teams = () => {
  return (
    <div className="w-full min-h-screen text-black">
      <Navbar />
      <Header
        title="Discover Our Teams"
        image="/images/photossss/IMG_3178.JPG"
      />
      {/** teams tiles */}
      <div className="bg-white grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 p-16">
        {teams.map((team, index) => (
          <TeamCard key={index} team={team}/>
        ))}
      </div>
      {/** discord sign up link */}
      <a href="https://discord.gg/AvQjqjmmQR" className="block">
        <div className="bg-pink text-white hover:bg-black p-14 group mb-10">
          {/* <div className="p-8"> */}
          <h1 className="font-rowdies text-center text-4xl">INTERESTED IN SIGNING UP? </h1>
          <p className="font-paragraph text-center text-xl mt-4 group-hover:text-pink">JOIN OUR DISCORD NOW!</p>
          {/* </div> */}
        </div>
      </a>
      <Footer />
    </div>

  )
  // want to be able to have a more-> for each to give a more detailed description
}

const teams: TeamTileInfo[] = [
  {
    teamName: "Cast", 
    image: "/images/photossss/IMG_2008.JPG",
    desc: castDesc,
    hover: true
  }, {
    teamName: "Tech",
    image: "/images/photossss/landscape show cropped.jpg",
    desc: techDesc,
    hover: true
  }, {
    image: "/images/teams/vos.a79b38d0.jpg",
    hover: false
  }, {
    image: "/images/photossss/IMG_0990.JPG",
    hover: false
  },
  {
    teamName: "Band",
    image: "/images/teams/band.012ea31f.jpg",
    desc: bandDesc,
    hover: true
  }, {
    teamName: "Scripts",
    image: "/images/teams/scripts.c446ae2c.jpg",
    desc: scriptsDesc,
    hover: true
  }, {
    teamName: "Design",
    image: "/images/photossss/2024-25 exec.JPEG",
    desc: designDesc,
    hover: true
  }, {
    image: "/images/photossss/IMG_2616.JPG",
    hover: false
  }, {
    image: "/images/photossss/IMG_3070.JPG",
    hover: false
  }, {
    teamName: "Marketing",
    image: "/images/photossss/IMG_1114.JPG",
    desc: markDesc,
    hover: true
  }, {
    teamName: "Events",
    image: "/images/teams/socials.84d936cd.jpg",
    desc: eventsDesc,
    hover: true
  }, {
    image: "/images/teams/choreos.5b919d8d.jpg",
    hover: false
  }, {
    image: "/images/photossss/IMG_3675.JPG",
    hover: false
  }, {
    image: "/images/photossss/IMG_2134.JPG",
    hover: false
  }, {
    teamName: "Front of House",
    image: "/images/teams/foh.c419396c.jpg",
    desc: fohDesc,
    hover: true
  }, {
    image: "/images/photossss/IMG_3449.JPG",
    hover: false
  }, {
    teamName: "Videos & Photography",
    image: "/images/teams/videos.105e88bb.png",
    desc: videosDesc,
    hover: true
  }, {
    teamName: "Hospitality",
    image: "/images/teams/fundraising.772ec2cf.jpg",
    desc: hospoDesc,
    hover: true
  }
]

export default Teams

