import React from "react";
import Card from "./Card";
import { title } from "process";

export default function Hero() {
  const cardProps1 = {
    title: "Socials",
    para: "Join our socials to stay updated on the latest project news and developments!",
    button: "Join Now",
  };
  const cardProps2 = {
    title: "Testnet",
    para: "Explore our platform, gain experience, and practice trading risk-free.",
    button: "Start Now",
  };
  const cardProps3 = {
    title: "Earn From Company Income",
    para: "Participate in our token burning mechanism and receive a share of the Exchange Income.",
    button: "Read Whitepaper",
  };
  return (
    <div className="min-h-screen min-w-screen text-white ">
      {/* text */}
      <div>
        {/* First heading */}
        <div className="text-[33px] md:text-[75px] flex flex-col md:flex-row font-bold md:gap-5 gap-0 md:min-w-[949px] text-center justify-center md:mt-32 mt-28">
          <h1 className="text-[25px] md:text-[75px]">The Home of</h1>
          <h2 className="text-[#f89b1f] "> Benefit Mine</h2>
        </div>
        {/* Second Heading */}
        <div className="text-[13px] md:text-[32px] flex font-bold gap-1 md:gap-2 md:min-w-[949px] text-center justify-center">
          <h1 className=" ">Your Business</h1>
          <h2 className="text-[#f89b1f]">Our Responsibility</h2>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 place-items-center mt-20 ">
        <Card  one={cardProps1} />
        <Card one={cardProps2} />
        <Card one={cardProps3} />
      </div>
    </div>
  );
}
