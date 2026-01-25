"use client";

import React from "react";
import { Navbar } from ".././(components)/navbar";
import Header from ".././(components)/header"
import { Footer } from "../(components)/footer";

interface teamInfo {
  teamName: string,
  image: string,
  desc: string,
  longdesc?: string
}

const Teams = () => {
  return (
    <div className="w-full min-h-screen text-black">
      <Navbar />
      <Header
        title="Discover Our Teams"
        image="/images/teams/tech.63e0c237.jpg"
      />
      this is teams
      <div>use like teams.map to create team cards that can expand</div>
      <Footer />
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