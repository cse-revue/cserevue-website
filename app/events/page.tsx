"use client";

import React, {useState, useEffect} from "react";
import { Navbar } from ".././(components)/navbar";
import Header from "../(components)/header";
import { Footer } from "../(components)/footer";
import Link from "next/link";

interface EventDetails {
  day: string,
  month: string,
  time: string
  room: string
  eventName: string,
  desc: string,
  link?: string
}

const showDate = new Date(2026, 9, 23);

const CountdownTile: React.FC<{digit: string}> = ({digit}) => {
  return (
    <div className="w-[200px] md:w-[230px] relative overflow-hidden bg-red-300">
      <div className="h-[90px] sm:h-[120px] md:h-[163px] bg-[#46C0B7]"/>

      <div className="h-[90px] sm:h-[120px] md:h-[163px] bg-[#3AA299]"/>
      <div className="absolute flex items-center inset-0 text-center font-bold text-8xl sm:text-9xl  justify-center">
        {digit}
      </div>
      
    </div>
  )
}

const EventRows: React.FC<{event: EventDetails, index: number, maxEvents: number}> = ({event, index, maxEvents}) => {
  const link: string = event.link? event.link : "https://www.facebook.com/cserevue/";
  
  return (
    <div className={`border-t border-black ${index === maxEvents - 1 ? "border-b":""}`}>
      <div className="mt-2 mb-2 flex flex-col md:flex-row gap-4">
        <div className={`flex flex-row md:flex-col md:basis-2/10 ${index % 2 === 0? "bg-[#46C0B7]" : "bg-[#1B512D]"} text-center justify-center`}>
          <p className=" text-white font-bold font-lg my-2 md:my-0">
            {event.day}
          </p>
          <p className=" text-white font-bold font-lg my-2 md:my-0">
            {event.month}
          </p>
        </div>
        <div className="basis-3/4 text-black">
          <Link href={link} className="font-bold text-xl hover:underline">{event.eventName}</Link>
          <p className="">{event.desc}</p>
        </div>
        <div className={`flex flex-col md:basis-3/10 basis-1/5 text-[#5603AD] justify-center`}>
          <p className="">
            <span className="font-bold">time: </span> {event.time}
          </p>
          <p className="">
            <span className="font-bold">room: </span> {event.room}
          </p>
        </div>
      </div>
    </div>
  )
}


const Events: React.FC = () => {

  const currentDate = new Date();
  const diff = Math.abs(currentDate.getTime() - showDate.getTime());
  const diffDays = Math.ceil(diff / (1000 * 3600 * 24));

  const diffString = diffDays.toString();
  const digits: string[] = diffString.split('');

  return (
    <div className="w-full min-h-screen text-white
        bg-linear-to-b
        from-black from-20% 
        via-[#381E72] via-[percentage:20%_90%] 
        to-[#000000] to-100%">
      <Navbar />
      <Header
        title="Upcoming Events"
        image="/images/teams/scripts.c446ae2c.jpg"
      />

      {/**countdown to show */}
      <div className="bg-black items-center py-20 px-10 md:px-20 xl:px-60">
        <div className=" text-center">
          <div className="gap-4 flex flex-row justify-center">
            {digits.map((digit) => (
              <CountdownTile key={digit} digit={digit}/>
            ))}
          </div>
        </div>
        <div className="text-5xl sm:text-7xl font-bold mt-10 text-center">
            DAYS UNTIL 2026 SHOW! 
        </div> 
      </div>

      {/** upcoming events */}
      <div className="bg-white p-6">
        <h1 className="text-[#E83151] font-bold text-3xl text-center mt-6">UPCOMING EVENTS</h1>
        <div className="md:px-20 px-10 mt-6">
          {events.map((event, index) => (
            <EventRows key={index} event={event} index={index} maxEvents={events.length}/>
          ))}
        </div>
        <Link
          href="https://www.instagram.com/cserevue?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          className=" hover:underline md:px-20 px-10 text-xl text-[#F49D37] font-bold"
        >Keep up to date on Discord! → REPLACE WITH DISCORD LINK</Link>
      </div>
      <Footer />
    </div>
  )
}

const events: EventDetails[] = [
  {
    day: "01",
    month: "JAN",
    time: "4pm",
    room: "your bedroom",
    eventName: "BOARD GAMES",
    desc: "do you hear the people sing singing of songs of angry men. it is the voices of a people who will not be slaves again. if the beating of the heart echoes..."
  }, {
    day: "10",
    month: "JAN",
    time: "4pm",
    room: "ikea",
    eventName: "SCRIPTS",
    desc: "carry on my wayward son, there’ll be peace when you are done, lay your weary head to rest, dont you cry no more. "
  }, {
    day: "15",
    month: "JAN",
    time: "4pm",
    room: "walmart",
    eventName: "KARAOKE",
    desc: "tomorrow and tomorrow and tomorrow creeps in this petty pace from day to day to the last syllable of recorded time. and all our yesterdays have lighted..."
  }, {
    day: "19",
    month: "JAN",
    time: "4pm",
    room: "business building bathroom",
    eventName: "JUGGLING",
    desc: "fools the road to dusty death. out, out brief candle. life’s but a walking shadow, a poor fool that struts and frets his hour upon the stage and then is heard no more."
  }, {
    day: "25",
    month: "JAN",
    time: "4pm",
    room: "hell's kitchen",
    eventName: "POTATO MASHING",
    desc: " it is the sound of an idiot, full of sound ?? and fury, signifying nothing. to be or not to be. that is the question. i guess. my daughter and my ducats."
  }
]
export default Events