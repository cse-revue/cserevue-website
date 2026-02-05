"use client";

import React from "react";
import { Navbar } from ".././(components)/navbar";
import Header from ".././(components)/header"
import { Footer } from "../(components)/footer";

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
      <div className="relative overflow-hidden w-full h-50 items-center group">
        <img
          src={team.image}
          className="object-cover opacity-100 group-hover:opacity-50"
        >
        </img>
        {/**optional stuff for teams */}
        {/**trying to make the hover work GOTTA SEPARATE THE HIDDEN FOR THE TWO TEXTS IDKKKKK */}
        {team.hover == true ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center group">
            <h1 className="text-5xl text-white font-rowdies group-hover:hidden">{team.teamName}</h1>
            <p className="text-md font-paragraph text-white hidden group-hover:block">{team.desc}</p>
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
        image="/images/teams/tech.63e0c237.jpg"
      />
      {/** teams tiles */}
      <div className="bg-white grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 p-16">
        {teams.map((team, index) => (
          <TeamCard key={index} team={team}/>
        ))}
      </div>
      {/** discord sign up link */}
      <div className="bg-pink text-white hover:bg-black p-8 group">
        {/* <div className="p-8"> */}
        <h1 className="font-rowdies text-center text-2xl">INTERESTED IN SIGNING UP? </h1>
        <p className="font-paragraph text-center text-lg mt-4 group-hover:text-pink">JOIN OUR DISCORD NOW! - NEED THE LINK</p>
        {/* </div> */}
      </div>
      
      this is teams
      <div>use like teams.map to create team cards that can expand</div>
      <Footer />
    </div>

  )
  // want to be able to have a more-> for each to give a more detailed description
}

const teams: TeamTileInfo[] = [
  {
    teamName: "Cast", 
    image: "/images/teams/choreos.5b919d8d.jpg",
    desc: "kjh",
    hover: true
  }, {
    teamName: "Tech",
    image: "/images/teams/choreos.5b919d8d.jpg",
    desc: "sdf",
    hover: true
  }, {
    image: "/images/teams/choreos.5b919d8d.jpg",
    hover: false
  }, {
    image: "/images/teams/choreos.5b919d8d.jpg",
    hover: false
  },
  {
    teamName: "Band",
    image: "/images/teams/choreos.5b919d8d.jpg",
    desc: "asdf",
    hover: true
  }, {
    teamName: "Scripts",
    image: "/images/teams/choreos.5b919d8d.jpg",
    desc: "sdf",
    hover: true
  }, {
    teamName: "Design",
    image: "/images/teams/choreos.5b919d8d.jpg",
    desc: "vfds",
    hover: true
  }, {
    image: "/images/teams/choreos.5b919d8d.jpg",
    hover: false
  }, {
    image: "/images/teams/choreos.5b919d8d.jpg",
    hover: false
  }, {
    teamName: "Marketing",
    image: "/images/teams/choreos.5b919d8d.jpg",
    desc: "sdf",
    hover: true
  }, {
    teamName: "Events",
    image: "/images/teams/choreos.5b919d8d.jpg",
    desc: "4567",
    hover: true
  }, {
    image: "/images/teams/choreos.5b919d8d.jpg",
    hover: false
  }, {
    image: "/images/teams/choreos.5b919d8d.jpg",
    hover: false
  }, {
    image: "/images/teams/choreos.5b919d8d.jpg",
    hover: false
  }, {
    teamName: "Front of House",
    image: "/images/teams/choreos.5b919d8d.jpg",
    desc: "78",
    hover: true
  }, {
    image: "/images/teams/choreos.5b919d8d.jpg",
    hover: false
  }, {
    teamName: "Videos & Photography",
    image: "/images/teams/choreos.5b919d8d.jpg",
    desc: "89",
    hover: true
  }, {
    teamName: "Hospitality",
    image: "/images/teams/choreos.5b919d8d.jpg",
    desc: "245",
    hover: true
  }
]

export default Teams