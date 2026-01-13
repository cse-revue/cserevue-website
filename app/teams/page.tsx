"use client";

import React from "react";
import { Navbar } from ".././(components)/navbar";
import Header from ".././(components)/header"

interface teamInfo {
  teamName: string,
  image: string,
  desc: string,
  longdesc?: string
}

const Teams = () => {
  return (
    <div className="w-full min-h-screen text-white
        bg-linear-to-b
        from-black from-20% 
        via-[#381E72] via-[percentage:20%_90%] 
        to-[#000000] to-100%">
      <Navbar />
      <Header
        title="Discover Our Teams"
        image="/images/teams/tech.63e0c237.jpg"
      />
      this is teams
      <div>use like teams.map to create team cards that can expand</div>
    </div>

  )
  // want to be able to have a more-> for each to give a more detailed description
}

const teams: teamInfo[] = [
  {
    teamName: "Cast",
    image: "",
    desc: ""
  }, {
    teamName: "Tech",
    image: "",
    desc: ""
  }, {
    teamName: "Band",
    image: "",
    desc: ""
  }, {
    teamName: "Scripts",
    image: "",
    desc: ""
  }, {
    teamName: "Design",
    image: "",
    desc: ""
  }, {
    teamName: "Marketing",
    image: "",
    desc: ""
  }, {
    teamName: "Socials",
    image: "",
    desc: ""
  }, {
    teamName: "Front of House",
    image: "",
    desc: ""
  }, {
    teamName: "Hospitality",
    image: "",
    desc: ""
  }
]

export default Teams