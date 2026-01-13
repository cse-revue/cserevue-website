"use client";

import React from "react";
import { Navbar } from ".././(components)/navbar";
import Header from "../(components)/header";
import { Footer } from "../(components)/footer";

export default function Sponsors() {
  return (
    <div className="w-full min-h-screen text-white
        bg-linear-to-b
        from-black from-20% 
        via-[#381E72] via-[percentage:20%_90%] 
        to-[#000000] to-100%">
      <Navbar />
      <Header
        title="Woah Sponsors"
        image="/images/teams/webmin.fd05e87d.jpg"
      />
      this is sponsors
      <Footer />
    </div>
  )
}