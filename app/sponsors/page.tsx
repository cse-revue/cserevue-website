"use client";

import React from "react";
import { Navbar } from ".././(components)/navbar";
import Header from "../(components)/header";
import { Footer } from "../(components)/footer";

export default function Sponsors() {
  return (
    <div className="w-full min-h-screen text-black">
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