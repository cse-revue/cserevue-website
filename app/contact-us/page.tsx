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
        <p className="text-paragraph p-3">{question.question}</p>
      </div>
      <div className="rounded-b mb-2 bg-[#F2F2F2]">
        <p className="text-paragraph p-3">{question.answer}</p>
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
      <div className="items-center justify-center flex bg-black">
        <div className=" gap-8 p-20 grid sm:grid-cols-2 max-w-fit ">
          <div className="flex flex-col justify-center items-center bg-[#F2F2F2] rounded-4xl max-w-fit max-h-fit p-8 border border-[#C1C1C1]">
            <img
              src="/images/logos/instagram-logo-bw.png"
              width={100}
              height={100}
              className="object-center"
            ></img>
            <h1 className="font-rowdies text-2xl text-center mt-6">EMAIL US</h1>
            <p className="font-paragraph text-center">exec@cserevue.org.au</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-[#F2F2F2] rounded-4xl max-w-fit max-h-fit p-8 border border-[#C1C1C1]">
            <img
              src="/images/logos/instagram-logo-bw.png"
              width={100}
              height={100}
              className="object-center"
            ></img>
            <h1 className="font-rowdies text-2xl text-center mt-6">MESSAGE US</h1>
            <p className="font-paragraph text-center">@cserevue on Insta</p>
          </div>
        </div>
      </div>

      {/**FAQ */}
      <div className="px-12 bg-white py-4">
        <h1 className="text-pink font-rowdies text-3xl">FAQs</h1>
        <div>
          {FAQs.map((faq, index) => <FAQQuestion key={index} question={faq}/>)}
        </div>
      </div>
      <br/>
      <Footer />
    </div>
  )
}

const FAQs: FaqInfo[] = [
  {
    question: "how many ribs does a human have?",
    answer: "well, actually, many people think it’s 12. this is false. the real number is i don’t know man what."
  }, {
    question: "how much wood could a woodchuck chuck?",
    answer: "WOOD WOOD WOOD"
  }, {
    question: "what is the capital of new zealand?",
    answer: "idk sydney??"
  }, {
    question: "to be or not to be?",
    answer: "not to be. always not to be."
  }, {
    question: "what colour does piano taste like?",
    answer: "A RAINBOW!!"
  }
]