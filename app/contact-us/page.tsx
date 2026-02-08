"use client";

import React from "react";
import { Navbar } from "../(components)/navbar";
import Header from "../(components)/header";
import { Footer } from "../(components)/footer";

interface FaqInfo{
  question: string,
  answer: string
}

const FAQQuestion: React.FC<{question: FaqInfo}> = ({question}) => {
  return(
    <div className="py-0.5">
      <div className="bg-cyan rounded-t mt-2">
        <p className="font-paragraph p-3 text-white">{question.question}</p>
      </div>
      <div className="rounded-b mb-2 bg-[#F2F2F2]">
        <p className="font-paragraph p-3">{question.answer}</p>
      </div>
    </div>
    
  )
}

export default function ContactUs() {
  return (
    <div className="w-full min-h-screen text-black">
      <Navbar />
      <Header
        title="Contact Us"
        image="/images/teams/cast.b91cf1d8.jpg"
      />
      <br/>
      <div className="items-center justify-center flex">
        <div className=" gap-10 md:gap-25 p-15 grid sm:grid-cols-2 max-w-fit">
          <div className="flex flex-col justify-center items-center bg-[#F2F2F2] rounded-4xl w-full p-8 md:px-14">
            <img
              src="/images/other-resources/email.png"
              width={120}
              height={120}
              className="object-center opacity-50 md:w-50"
            ></img>
            <h1 className="font-rowdies text-2xl md:text-3xl text-center mt-1">EMAIL US</h1>
            <p className="font-paragraph text-center md:text-lg mb-6">exec@cserevue.org.au</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-[#F2F2F2] rounded-4xl w-full p-8">
            <img
              src="/images/other-resources/sms.png"
              width={120}
              height={120}
              className="object-center opacity-50 p-3 md:p-6 md:w-50"
            ></img>
            <h1 className="font-rowdies text-2xl md:text-3xl text-center mt-1">MESSAGE US</h1>
            <p className="font-paragraph text-center md:text-lg mb-6">@cserevue on Insta</p>
          </div>
        </div>
      </div>

      {/**FAQ */}
      <div className="px-12 bg-white py-2 pb-9">
        <h1 className="text-pink font-rowdies text-3xl">FAQs</h1>
        <div>
          {FAQs.map((faq, index) => <FAQQuestion key={index} question={faq}/>)}
        </div>
        <div className="py-0.5">
          <div className="bg-cyan rounded-t mt-2">
            <p className="font-paragraph p-3 text-white">How do I sign up?</p>
          </div>
          <div className="rounded-b mb-2 bg-[#F2F2F2]">
            <p className="font-paragraph p-3">Join the discord <a href="https://discord.gg/AvQjqjmmQR" className="underline hover:text-pink">here</a> for news, updates, sign-ups and everything else CSE Revue related!</p>
          </div>
        </div>
      </div>
      <br/>
      <Footer />
    </div>
  )
}

const FAQs: FaqInfo[] = [
  {
    question: "When does the show run?",
    answer: "Show week is 23-30 October, with our three production nights being 7-9pm on the 28th, 29th and 30th (Wednesday-Friday)."
  }, {
    question: "What's the time commitment for joining revue?",
    answer: "That totally depends! Cast and tech involvement is incredibly intensive in the weeks leading up to the show, and band rehearses fairly frequently as well. Some teams, such as front of house and hospitality, should be available for most show nights. For most of the other teams, like events and marketing, your involvement can be totally up to you depending on your own commitments. \nIf you don't want to commit to a port but still want to be part of CSE Revue, our weekly events are open to everyone! Come along, meet new people and have some fun. And most importantly, COME SEE OUR SHOW!"
  }, {
    question: "I have no experience, can I still be involved?",
    answer: "Yes!!! Other than band, which does require a modicum of vocal or instrumental ability, every single port is open to anyone and everyone! If you can't sing or dance, or have never operated lights in your life, never fear, for we will teach you everything you need to know."
  }, {
    question: "Does everyone get in to cast, or do I have to audition?",
    answer: "There is an audition process, but everyone who signs up and auditions will have a role in the production."
  }
]
// const FAQs: FaqInfo[] = [
//   {
//     question: "how many ribs does a human have?",
//     answer: "well, actually, many people think it’s 12. this is false. the real number is i don’t know man what."
//   }, {
//     question: "how much wood could a woodchuck chuck?",
//     answer: "WOOD WOOD WOOD"
//   }, {
//     question: "what is the capital of new zealand?",
//     answer: "idk sydney??"
//   }, {
//     question: "to be or not to be?",
//     answer: "not to be. always not to be."
//   }, {
//     question: "what colour does piano taste like?",
//     answer: "A RAINBOW!!"
//   }
// ]

// potential questions: 
// what is the commitment
// when does show run (times, how many shows)
// i have no experience, can i still join?
// i have no time, can i still join?
// how do i sign up???
// does everyone get in, or do i have to audition for certain parts?