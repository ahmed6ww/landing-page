import React from "react";
import Card from "@/app/components/Card";
import { title } from "process";
import { TypewriterEffectSmoothDemo } from "@/app/components/Heading"


export default function Hero() {

  const cardProps1 = {
    title: "Socials",
    para: "Join our socials to stay updated on the latest project news and developments!",
    button: "Join Now",
    href: "https://linktr.ee/BenefitMine"
  };
  const cardProps2 = {
    title: "Testnet",
    para: "Explore our platform, gain experience, and practice trading risk-free.",
    button: "Start Now",
    href: "https://testnet.benefitmine.io"
  };
  const cardProps3 = {
    title: "Earn From Company Income",
    para: "Participate in our token burning mechanism and receive a share of the Exchange Income.",
    button: "Read Whitepaper",
    href: "https://benefitmine-organization.gitbook.io"
  };

  return (

    <>

    <div className="min-h-screen min-w-screen text-white overflow-x-hidden">
      {/* text */}
      <div>
        {/* First heading */}
        <div className="flex flex-col md:flex-row font-bold md:gap-5 gap-0 md:min-w-[949px] text-center justify-center md:mt-32 mt-28">
          <h1 className="text-[2rem] md:text-[3rem]">The Home of</h1>
          <h2 className="text-[2.8rem] md:text-[3rem] text-[#f89b1f] "> Benefit Mine</h2>
        </div>
        {/* Second Heading */}
        <div className="text-[0.9rem] mt-[-1rem]  flex font-bold text-center justify-center">
          {/* <h1 className="text-[#f89b1f]">Your Business</h1>
          <h2 className=" ">Our Responsibility</h2> */}
          <TypewriterEffectSmoothDemo />
        </div>
        
      </div>

      {/* Cards */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 place-items-center mt-20 "> */}
      <div className="flex flex-col lg:flex-row mt-[4em] mr-5 ml-5 gap-14 justify-around md:gap-0 md:mr-[4rem] md:ml-[4rem]">
        <Card one={cardProps1} />
        <Card one={cardProps2} />
        <Card one={cardProps3} />
      </div>
    </div>
    </>
  );
}
