"use client";

import React from "react";
import { Navbar } from ".././(components)/navbar";
import Header from "../(components)/header";
import { Footer } from "../(components)/footer";

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
      this is history
      <div>potentially like a timeline kinda thing?</div>
      <Footer />
    </div>
  )
}