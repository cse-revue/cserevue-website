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
        title="Sponsors"
        image="/images/photossss/IMG_3689.JPG"
      />
      <div className="flex flex-col sm:flex-row justify-center items-center gap-10 p-6">
          <img
            src ="/images/logos/cse-school.235d63c3.png"
            width={240}
            /> 
          <img
            src="/images/logos/Arc-Clubs-Logo-Black-Transparent.e0e16cf7.png"
            width={240}
          />
      </div>
      <div className="bg-black text-white p-5">
        <p className="text-center font-paragraph text-lg">Interested in partnering with us? Email us at {"\x20"}
          <span className="text-pink">
            exec@cserevue.org.au
          </span>
        </p>
      </div>
      <Footer />
    </div>
  )
}