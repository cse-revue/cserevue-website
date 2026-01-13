"use client";

import React from "react";
import { Navbar } from ".././(components)/navbar";
import Header from "../(components)/header";

export default function Events() {
  return (
    <div className="w-full min-h-screen text-white
        bg-linear-to-b
        from-black from-20% 
        via-[#381E72] via-[percentage:20%_90%] 
        to-[#000000] to-100%">
      <Navbar />
      <Header
        title="Upcoming Events"
        image="/images/teams/vocals.d6a5c5d0.jpg"
      />
      this is events
    </div>
  )
}