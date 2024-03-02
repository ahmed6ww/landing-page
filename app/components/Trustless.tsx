"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import Image from "next/image";

export default function Trustless() {
  const featuredWebinars = [
    {
      title: "User Regestration",
      description: "Kick start your journey. Create an Account with us.",
      isFeatured: true,
    },
    {
      title: "Account Verification",
      description:
        "Verify your account, ensure safety, and unloack limitless opportunities",
      slug: "the-art-of-songwriting",
      isFeatured: true,
    },
    {
      title: "Security Setup ",
      description: "Enhance your safety by enabling two-factor authentication.",
      slug: "mastering-your-instrument",
      isFeatured: true,
    },
    {
      title: "Wallet Creation",
      description:
        "Create your Wallet, your Gateway to the world of Cryptocurrency",
      slug: "music-production-essentials",
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: "Deposit Fund",
      description:
        "Fuel your Wallet, deposit funds and start your crypto journey.",
      slug: "live-performance-techniques",
      isFeatured: true,
    },
    {
      title: "Explore Markets",
      description: "Discover new horizons, explore the vibrant crypto market.",
      slug: "digital-music-marketing",
      isFeatured: true,
    },
    {
      title: "Choose Cryptocurrency",
      description: "Be Selective choose yourpreferred Cryptocurrency.",
      slug: "digital-music-marketing",
      isFeatured: true,
    },
    {
      title: "Trade Execution",
      description: "Dive into action, execute your first trade.",
      slug: "digital-music-marketing",
      isFeatured: true,
    },
    {
      title: "Order Confirmation",
      description:
        "Confidence in every transaction, recieve immediate order confirmation.",
      slug: "digital-music-marketing",
      isFeatured: true,
    },
  ];
  return (
    <div className="max-w-4xl mx-auto h-full flex flex-col items-center ">
      {/* Text */}
      <div className="flex flex-col md:flex-row items-center  text-[33px] md:text-[65px]  font-bold md:gap-5 gap-0 md:min-w-[949px] text-center justify-center md:mt-32 mt-28 ">
        <h1 className="text-[2rem] lg:text-[3rem] text-secondary">TRUSTLESS </h1>
        <h1 className="text-[1rem] lg:text-[2rem]">AND </h1>
        <h2 className="text-[2rem] lg:text-[3rem] text-[#f89b1f] ">
          TRANSPARENT
        </h2>
      </div>
      {/* Cards       */}
      <div>
        <HoverEffect
          items={featuredWebinars.map((webinar) => ({
            title: webinar.title,
            description: webinar.description,
            link: "/",
          }))}
          className=""
        />
      </div>
      {/* Message */}
      <div className="flex flex-col md:flex-row md:gap-10 gap-5 items-center justify-center">

        <div className=" border-b-2 border-gray-900 backdrop:shadow-xl ">
          <img src="/111.png"alt="1" />
        </div>
        <div className="flex flex-col  gap-5 mb-32 md:mt-32">
          <h1 className=" md:text-[2.5rem] text-[1.7rem] font-medium text-secondary text-start">Your assets, secured</h1>
          <span className="text-start text-secondary text-[0.75rem] md:text-[1.2rem]  max-w-[260px] md:max-w-[750px]">Audited by the world's leading security firm,<strong className='text-[#F89B1F]'> Cyberscope</strong>, we're pleased to say that our score of<strong className='text-[#F89B1F]'> 9.3/10</strong>, makes us one of the safest projects coming to the market this year.</span>
        </div>
      </div>
    </div>
  );
}