"use client";

import React from "react";
import { Navbar } from ".././(components)/navbar";

interface teamInfo {
  teamName: string,
  image: string,
  desc: string,
  longdesc?: string
}

const Teams = () => {
  return (
    <div className="w-full bg-[#8A84E2] min-h-screen text-white">
      <Navbar />
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